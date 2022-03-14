# [Choice] Node.js version: 16, 14, 12
ARG VARIANT=16
FROM mcr.microsoft.com/vscode/devcontainers/javascript-node:0-${VARIANT}

RUN su node -c "umask 0002 && npm install -g pnpm vite http-server @vue/cli@next @vue/cli-service-global@next"
WORKDIR /app

EXPOSE 8080
EXPOSE 5000

# [Optional] Uncomment this section to install additional OS packages.
# RUN apt-get update && export DEBIAN_FRONTEND=noninteractive \
#     && apt-get -y install --no-install-recommends <your-package-list-here>
