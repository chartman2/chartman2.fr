FROM node:lts-alpine

RUN npm install -g pnpm@9.0.6

WORKDIR /app

RUN apk --no-cache add git \
    && rm -rf /var/cache/apk/*

COPY . .

RUN chown -Rf node:node /app

USER node

RUN pnpm config set store-dir /home/node/.local/share/pnpm/store/v3 --global \
    && pnpm install

ENV PATH ./node_modules/.bin/:$PATH
