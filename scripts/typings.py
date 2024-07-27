from typing import Optional, TypedDict


class VideoInfo(TypedDict):
    """
    Represents information about a video.

    Attributes:
        videoId (str): The ID of the video.
        title (str): The title of the video.
        publishedTime (str): The published time of the video.
        videoUrl (str): The URL of the video.
        property_name_and_location (str): The name and location of the property.
        property_name (str): The name of the property.
        location (str): The location of the property.
        transcript (Optional[str]): The transcript of the video.
        summary (Optional[str]): The summary of the video.
        video_number (int): The number of the video.
    """
    videoId: str
    title: str
    publishedTime: str
    videoUrl: str
    property_name_and_location: str
    property_name: str
    location: str
    transcript: Optional[str] = None
    summary: Optional[str] = None
    video_number: int
