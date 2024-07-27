# Property Videos Summarizer

This project scrapes the videos from `iherng` YouTube channel and summarizes the videos using the `Google Gemini` LLM model.

## Stack

- Python + Sqlite
- React + Remix
- Tailwind

## How to run python scripts to scrape the videos and summarize them

1. Install the dependencies

```bash
pip install -r requirements.txt
```

2. Run the script

```bash
python scripts/main.py
```

## How to export videos from sqlite to json

1. Run the script

```bash
python scripts/export_to_json.py
```

## How to run the web app

1. Install the dependencies

```bash
bun install
```

2. Run the app

```bash
bun run dev
```

## TODO

- [ ] Add videos published date
- [x] Add property location URL or show in map
- [ ] Improve LLM response by improving on the prompt
