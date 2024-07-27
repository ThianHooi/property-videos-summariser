from typing import Generator
import scrapetube

from db import connect_db
from typings import VideoInfo


def get_videos_from_channel():
    """Get videos from the channel 'iherng'."""
    return scrapetube.get_channel(None, None, "iherng")


def get_video_attributes(video: dict) -> VideoInfo:
    """Get the video attributes."""
    title = video['title']['runs'][0]['text']

    # get the property name by splitting the title with either '|' or '-'.
    property_name_and_location = title.split('|')[1].strip(
    ) if '|' in title else title.split('-')[1].strip()

    # get the property name and location by splitting by ','
    if property_name_and_location:
        property_name, *location = property_name_and_location.split(',')
        location = ', '.join(location).strip()
        video_number = title.split('#')[1].split(' ')[0]
    else:
        property_name, location, video_number = None, None, None

    return {
        'videoId': video['videoId'],
        'title': video['title']['runs'][0]['text'],
        'publishedTime': video['publishedTimeText']['simpleText'],
        'videoUrl': f"https://www.youtube.com/watch?v={video['videoId']}",
        'property_name_and_location': property_name_and_location,
        'property_name': property_name,
        'location': location,
        'video_number': video_number
    }


def filter_videos(videos: Generator[dict, None, None]) -> Generator[dict, None, None]:
    """Filter videos with 'Property Review' in the title."""
    return filter(lambda video: 'Property Review #'.lower() in video['title']['runs'][0]['text'].lower(), videos)


def refresh_videos():
    """Refresh the videos"""
    print("Refreshing videos")
    videos = get_videos_from_channel()
    filtered_videos = filter_videos(videos)

    conn = connect_db()
    c = conn.cursor()

    for video in filtered_videos:
        attributes = get_video_attributes(video)
        c.execute('''
        INSERT OR IGNORE INTO videos (videoId, title, publishedTime, videoUrl, property_name_and_location, property_name, location, video_number)
        VALUES (:videoId, :title, :publishedTime, :videoUrl, :property_name_and_location, :property_name, :location, :video_number)
        ''', attributes)

    conn.commit()
    conn.close()
