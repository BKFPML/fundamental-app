FROM cimg/android:2024.10.1-node

WORKDIR /app
COPY package*.json ./

# Print the current user for verification
RUN whoami

# Switch to root user to create node user and group
USER root

# Create node user and group if they do not exist
RUN groupadd -g 1000 node && useradd -u 1000 -g node -m node

# Set the correct ownership and permissions
RUN chown -R node:node /app && chmod -R 755 /app

# Run npm install as node user with unsafe-perm flag
RUN npm install --unsafe-perm

# Install required dependencies for Android SDK
RUN apt-get update && apt-get install -y wget unzip

# Download and install Android SDK
RUN mkdir -p /root/Android/sdk
RUN wget -q https://dl.google.com/android/repository/commandlinetools-linux-7583922_latest.zip -O android-sdk.zip
RUN unzip android-sdk.zip -d /root/Android/sdk/cmdline-tools
RUN mv /root/Android/sdk/cmdline-tools/cmdline-tools /root/Android/sdk/cmdline-tools/latest
RUN rm android-sdk.zip

# Install platform tools and SDKs
# RUN /root/Android/sdk/cmdline-tools/latest/bin/sdkmanager --licenses --no_interaction
# RUN /root/Android/sdk/cmdline-tools/latest/bin/sdkmanager "platform-tools" "platforms;android-30"

ENV ANDROID_HOME=/home/circleci/android-sdk

RUN $ANDROID_HOME/cmdline-tools/latest/bin/sdkmanager --update

RUN echo "ANDROID_HOME is: $ANDROID_HOME"
RUN ls -l $ANDROID_HOME/cmdline-tools/latest/bin/


# Accept Android SDK licenses
RUN yes | $ANDROID_HOME/cmdline-tools/latest/bin/sdkmanager --licenses || true

# Install required Android SDK packages
RUN $ANDROID_HOME/cmdline-tools/latest/bin/sdkmanager "platform-tools" "platforms;android-30"


COPY . .

EXPOSE 8081

CMD ["sudo", "npm", "start"]