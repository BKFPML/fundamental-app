#!/bin/sh
export NODE_OPTIONS="--max-old-space-size=4096"

# Start the ADB server
adb start-server

adb connect host.docker.internal:5555

# Ensure the emulator is running
adb devices
# Wait for the emulator to start
sleep 10

# Start the Metro bundler
npm start
