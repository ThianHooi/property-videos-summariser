from youtube_transcript_api import YouTubeTranscriptApi
from youtube_transcript_api.formatters import TextFormatter
from db import connect_db


def to_text(transcript: list[dict]) -> str:
    """Convert the transcript to text."""
    formatter = TextFormatter()
    return formatter.format_transcript(transcript)


def get_transcript(video_id: str) -> list[dict]:
    """Get the transcript of the video."""
    try:
        print(f"Getting transcript for video {video_id}")
        return YouTubeTranscriptApi.get_transcript(video_id, languages=['en'])
    except Exception as e:
        print(f"Error getting transcript for video {video_id}: {str(e)}")
        return {}


def get_transcripts():
    """Get and save the transcripts of the videos without a transcript."""
    print("Getting transcripts")
    conn = connect_db()
    c = conn.cursor()

    c.execute('SELECT videoId FROM videos WHERE transcript IS NULL')
    video_ids = c.fetchall()

    print(f"Found {len(video_ids)} videos without a transcript")

    for video_id_tuple in video_ids:
        video_id = video_id_tuple[0]
        transcript = to_text(get_transcript(video_id))
        if transcript:
            c.execute(
                'UPDATE videos SET transcript = ? WHERE videoId = ?', (transcript, video_id))

    conn.commit()
    conn.close()
