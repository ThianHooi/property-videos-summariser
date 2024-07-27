import sqlite3
from sqlite3 import Error


def create_connection(db_file):
    """Create a database connection to a SQLite database specified by db_file"""
    conn = None
    try:
        conn = sqlite3.connect(db_file)
        print(f"SQLite version: {sqlite3.version}")
    except Error as e:
        print(e)
    finally:
        if conn:
            conn.close()


def create_table():
    """Create videos table"""
    conn = sqlite3.connect('videos.db')
    c = conn.cursor()
    c.execute('''
    CREATE TABLE IF NOT EXISTS videos (
        videoId TEXT PRIMARY KEY, 
        title TEXT, 
        publishedTime TEXT, 
        videoUrl TEXT, 
        property_name_and_location TEXT, 
        property_name TEXT, 
        location TEXT, 
        transcript TEXT, 
        summary TEXT,
        video_number INTEGER
    )
    ''')
    conn.commit()
    conn.close()


def connect_db():
    """Connect to the database"""
    conn = sqlite3.connect('videos.db')
    return conn


def setup_db():
    """Set up the database"""
    create_connection('videos.db')
    create_table()
