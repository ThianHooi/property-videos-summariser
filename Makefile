update_videos:
	@echo "Updating videos..."
	@python3 scripts/main.py

export_videos:
	@echo "Exporting videos..."
	@python3 scripts/export_to_json.py


app_dev:
	@echo "Starting development server..."
	@bun run dev