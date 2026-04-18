# ---------------------------------------------------
# ビルド環境（Reactアプリのコンパイル用）
# ---------------------------------------------------
FROM node:lts-alpine AS builder

WORKDIR /app

# 依存関係をインストール
COPY package*.json ./
RUN npm ci

# ソースコードをコピーしてビルドを実行
COPY . .
RUN npm run build


# ---------------------------------------------------
# 本番環境（GCP用）
# ---------------------------------------------------
FROM node:lts-alpine

WORKDIR /app

# NODE_ENVをproductionに設定
ENV NODE_ENV=production

# ビルド済みファイル（dist）だけをコピー
COPY --from=builder /app/dist ./dist

# サーバー起動用のファイルとパッケージ情報をコピー
COPY server.js ./
COPY package*.json ./

# 本番実行に必要なパッケージのみをインストール
RUN npm ci --omit=dev

# ポートを指定
EXPOSE 8080

# サーバを起動
CMD ["node", "server.js"]