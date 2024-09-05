FROM rust:1.79.0-bookworm

WORKDIR /usr/app/raspirus
COPY . .

ENV DEBIAN_FRONTEND=noninteractive

RUN apt-get clean && apt-get update && apt-get upgrade -y
RUN apt-get update && apt-get install -y libwebkit2gtk-4.1-dev \
                                           build-essential \
                                           curl \
                                           wget \
                                           file \
                                           libxdo-dev \
                                           libssl-dev \
                                           libayatana-appindicator3-dev \
                                           librsvg2-dev \
                                           pnpm

# Create the out directoryS
RUN mkdir dist
RUN pnpm install -g npm@latest
RUN pnpm install
RUN pnpm run tauri build
