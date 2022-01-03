# Boilerplate_Next

## 概要
Next.jsのテンプレート

## 開発環境構築方法

#### 1. 開発サーバー立ち上げ

```fish
npm install or yarn install
npm run dev or yarn dev
```
`http://localhost:3000/`にて開発サーバー起動。

### 本番ビルド、サーバーの立ち上げ
以下コマンドで静的アセットを出力。また、本番モードでアプリケーション起動。

```fish
npm run build
or
yarn build

npm run start
or
yarn start
```

### コンポーネントの分類について
当アプリケーションのコンポーネントは以下の構造に分かれる。

```fish
src/
  ├ components/
  │  ├ parts/
  │  └ templates/
  ├ domains/
  │  └ TestComponents/
  ├ pages/
  │  ├ api/
  │  └ _app.tsx
  :
```

`domains`以下にドメインごとのディレクトリを作成。

### npm scripts

1. `dev`
開発サーバー起動

https://nextjs.org/docs/api-reference/cli#development

2. `build`
production用のファイルを出力。

https://nextjs.org/docs/api-reference/cli#build

3. `start`
本番モードでアプリケーションを起動する

https://nextjs.org/docs/api-reference/cli#production

4. `lint`
ESLintチェックを行う

https://nextjs.org/docs/api-reference/cli#lint

5. `prettier`
Prettierでコード整形する

https://prettier.io/docs/en/cli.html

6. `prettier:check`
Prettierで整形されているかコードをチェックする

https://prettier.io/docs/en/cli.html#--check
