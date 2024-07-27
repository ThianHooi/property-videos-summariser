import json

from db import connect_db
from typings import VideoInfo


def write_to_json(videos: list[VideoInfo], filename: str):
    """Write videos to json file."""
    for video in videos:
        if video['summary'] is not None and isinstance(video['summary'], str):
            try:
                video['summary'] = json.loads(json.loads(video['summary']))
            except json.JSONDecodeError:
                print(f"Failed to decode summary for video {video['videoId']}")

    with open(filename, 'w', encoding='utf-8') as f:
        f.write(json.dumps(videos, indent=4))


def get_all_videos() -> list[VideoInfo]:
    """Get all videos from the database."""
    conn = connect_db()
    c = conn.cursor()
    c.execute(
        'SELECT videoId, title, videoUrl, property_name, location, summary, video_number FROM videos ORDER BY video_number DESC')
    rows = c.fetchall()

    columns = ['videoId', 'title', 'videoUrl',
               'property_name', 'location', 'summary', 'video_number']
    videos = [dict(zip(columns, row)) for row in rows]

    return videos


def main():
    """Export all videos to json."""
    videos = get_all_videos()
    print(f"Exporting {len(videos)} videos to json")
    write_to_json(videos, 'videos.json')


if __name__ == '__main__':
    main()
