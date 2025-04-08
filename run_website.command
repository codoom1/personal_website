#!/bin/bash

# Change to the directory where this script is located
cd "$(dirname "$0")"

# Define the port to use
PORT=8000

echo "Starting personal website server on http://localhost:$PORT"
echo "Press Ctrl+C to stop the server"
echo ""

# Check if Python 3 is available
if command -v python3 &>/dev/null; then
    python3 -m http.server $PORT
# Check if Python 2 is available
elif command -v python &>/dev/null; then
    python -m SimpleHTTPServer $PORT
# If no Python, show error
else
    echo "Error: Python is not installed."
    echo "Please install Python or run the server manually."
    read -p "Press Enter to exit..."
    exit 1
fi 