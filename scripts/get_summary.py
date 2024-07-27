import os
import time
import simplejson as json
import google.generativeai as genai
from google.generativeai.types import generation_types

from dotenv import load_dotenv
from db import connect_db
from typings import VideoInfo

load_dotenv()


GOOGLE_API_KEY = os.getenv('GOOGLE_GEMINI_API_KEY')


genai.configure(api_key=GOOGLE_API_KEY)

model = genai.GenerativeModel(
    'gemini-1.5-pro', generation_config={"response_mime_type": "application/json"})


def summarize(video: VideoInfo) -> generation_types.GenerateContentResponse:
    """Summarize the video."""
    transcript = video['transcript']

    if not transcript:
        return None

    try:
        summary = f"Here is a video transcript from a video introducing a real estate property. " \
                  f"I would like you to summarize the transcript. It should have 3 sections: " \
                  f"1. Brief introduction of the real estate (name, location, building type, price per unit (RM) and etc) " \
                  f"2. Pros of the real estate project " \
                  f"3. Cons of the real estate project " \
                  f"4. Summary (Did the video states whether this project is a good investment?) " \
                  f"The Pros and Cons can be listed in point form" \
                  f"Return in JSON format in following structure: " \
                  f"{{\"introduction\":{{\"name\":\"\",\"location\":\"\",\"extra\":[\"\"]}},\"pros\":\"\",\"cons\":\"\",\"summary\":\"\"}} " \
                  f"Here is the transcript: " \
                  f"{transcript}"

        return model.generate_content(summary)
    except Exception as e:
        print(f"An error occurred: {e}")
        return None


def summarize_videos():
    """Summarize the videos."""
    print("Summarizing videos")
    conn = connect_db()
    c = conn.cursor()

    c.execute(
        'SELECT videoId, transcript FROM videos WHERE summary IS NULL AND transcript IS NOT NULL')
    videos = c.fetchall()

    print(f"Found {len(videos)} videos without a summary")

    start_time = time.time()

    for video in videos:
        video_id, transcript = video
        print(f'Summarizing video {video_id}')
        summary = summarize({'videoId': video_id, 'transcript': transcript})
        if summary:
            c.execute(
                'UPDATE videos SET summary = ? WHERE videoId = ?', (json.dumps(summary.text), video_id))
        time.sleep(10)

    conn.commit()
    conn.close()

    end_time = time.time()
    print(f"Summarizing the videos took {end_time - start_time} seconds.")
