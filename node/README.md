# baumkuchen/node

## 動作確認

```
cd /node
docker-compose up -d

(別ターミナルで)
curl http://localhost:8000 | jq
```

## docker-compose

api

- `docker-compose exec api /bin/bash`
- `yarn run prisma migrate dev --name init` /api/prisma/migrationsにマイグレーションファイル作成、実行、データ投入

db
- `docker-compose exec db /bin/bash` dbにログインする
- `mysql -u root -p` mysqlにログインする