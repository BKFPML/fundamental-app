# # Use the official Node.js image as the base image
# FROM node:latest

# # Install necessary dependencies for Android SDK
# RUN apt-get update && apt-get install -y \
#     openjdk-17-jdk \
#     wget \
#     unzip \
#     && rm -rf /var/lib/apt/lists/*

# # Set environment variables for Android SDK
# ENV ANDROID_SDK_ROOT=/usr/local/android-sdk
# ENV PATH=${PATH}:${ANDROID_SDK_ROOT}/cmdline-tools/latest/bin:${ANDROID_SDK_ROOT}/platform-tools

# # Download and install the latest Android SDK
# RUN mkdir -p ${ANDROID_SDK_ROOT}/cmdline-tools/latest
# RUN cd ${ANDROID_SDK_ROOT}/cmdline-tools/latest && \
#     wget https://dl.google.com/android/repository/commandlinetools-linux-7583922_latest.zip -O commandlinetools.zip
# RUN cd ${ANDROID_SDK_ROOT}/cmdline-tools/latest && \
#     unzip commandlinetools.zip
# RUN cd ${ANDROID_SDK_ROOT}/cmdline-tools/latest && \
#     rm commandlinetools.zip
# RUN cd ${ANDROID_SDK_ROOT}/cmdline-tools/latest && \
#     mv cmdline-tools/* . && \
#     rmdir cmdline-tools

# # Ensure sdkmanager is executable
# RUN chmod +x ${ANDROID_SDK_ROOT}/cmdline-tools/latest/bin/sdkmanager

# # Accept SDK licenses and install necessary packages
# RUN yes | ${ANDROID_SDK_ROOT}/cmdline-tools/latest/bin/sdkmanager --licenses
# RUN ${ANDROID_SDK_ROOT}/cmdline-tools/latest/bin/sdkmanager "platform-tools" "platforms;android-30"

# # Create app directory
# WORKDIR /usr/src/app

# # Copy package.json and package-lock.json
# COPY package*.json ./

# # Install Node.js dependencies
# RUN npm install

# # Copy the rest of the application code
# COPY . .

# # Expose necessary ports (if any)
# EXPOSE 8081

# # Define the entry point
# CMD ["npm", "start"]

# Use the official Node.js image as the base image
FROM node:latest

# Install necessary dependencies for Android SDK
RUN apt-get update && apt-get install -y \
    openjdk-17-jdk \
    wget \
    unzip \
    && rm -rf /var/lib/apt/lists/*

# Set environment variables for Android SDK
ENV ANDROID_SDK_ROOT=/usr/local/android-sdk
ENV PATH=${PATH}:${ANDROID_SDK_ROOT}/cmdline-tools/latest/bin:${ANDROID_SDK_ROOT}/platform-tools

# Download and install the latest Android SDK
RUN mkdir -p ${ANDROID_SDK_ROOT}/cmdline-tools/latest
RUN cd ${ANDROID_SDK_ROOT}/cmdline-tools/latest && \
    wget https://dl.google.com/android/repository/commandlinetools-linux-7583922_latest.zip -O commandlinetools.zip
RUN cd ${ANDROID_SDK_ROOT}/cmdline-tools/latest && \
    unzip commandlinetools.zip
RUN cd ${ANDROID_SDK_ROOT}/cmdline-tools/latest && \
    rm commandlinetools.zip
RUN cd ${ANDROID_SDK_ROOT}/cmdline-tools/latest && \
    mv cmdline-tools/* . && \
    rmdir cmdline-tools

# Ensure sdkmanager is executable
RUN chmod +x ${ANDROID_SDK_ROOT}/cmdline-tools/latest/bin/sdkmanager

# Accept SDK licenses and install necessary packages
RUN yes | ${ANDROID_SDK_ROOT}/cmdline-tools/latest/bin/sdkmanager --licenses
RUN ${ANDROID_SDK_ROOT}/cmdline-tools/latest/bin/sdkmanager "platform-tools" "platforms;android-30"

# Install ADB
RUN ${ANDROID_SDK_ROOT}/cmdline-tools/latest/bin/sdkmanager "platform-tools"

# Expose ADB port
EXPOSE 5037

# Copy the rest of the application code
COPY . .

# Copy the start script
COPY start.sh /usr/src/app/start.sh

# Ensure the start script is executable
RUN chmod +x /usr/src/app/start.sh

RUN npm install

# Expose necessary ports (if any)
EXPOSE 8081

# Use the start script as the entry point
CMD ["/usr/src/app/start.sh"]