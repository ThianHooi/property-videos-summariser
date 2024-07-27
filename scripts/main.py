from db import setup_db
from get_videos import refresh_videos
from get_transcript import get_transcripts
from get_summary import summarize_videos


def main():
    """Main function"""
    setup_db()
    refresh_videos()
    get_transcripts()
    summarize_videos()


if __name__ == "__main__":
    main()
