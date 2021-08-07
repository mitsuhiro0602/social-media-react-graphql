## bcryptとjsonwebtokeのインストール
yarn add bcryptjs jsonwebtoken

## サブスクリプションのインストール
yarn add graphql-subscriptions  

const { PubSub } = require('graphql-subscriptions');

## apolloserverのインストールす
yarn add @apollo/client  
yarn add graphql graphql-tag

## routerのインストール
yarn add react-router-dom

## semantic-ui-cssのインストール
yarn add semantic-ui-css semantic-ui-react

## momentをインストールする
yarn add moment

## apollo-link-contextをインストールする
yarn add apollo-link-context

## docker 操作
- 全コンテナ停止: docker stop $(docker ps -q)
- 全コンテナ削除: docker rm $(docker ps -q -a)
- 全イメージ削除: docker rmi $(docker images -q)

## docker imagesの作成
docker build -t "react-app" ./client/    

docker build -t "api-server" ./server/
## herokuのアップロード方法

heroku login  
  
heroku container:login



heroku create social-app-docker-server

## timeoutの設定
tools.heroku.support/limits/boot_timeout

## 環境変数の追加をする

## herokuをビルドしてpushする
heroku container:push web -a social-app-docker-server
## 複数のimageファイルがある場合は名前を変更してpushする

heroku container:push client server --recursive

## コンテナをリリースする
heroku container:release web -a social-app-docker-server
heroku container:release client server