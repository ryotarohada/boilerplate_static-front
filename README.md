# FA 自動連絡機能 フロントエンド

## 概要
FASTALERTの自動連絡機能のフロントエンド

## 監視
- sentry（21/12/21時点、未導入）
  - https://sentry.io/organizations/jxpress/issues/?project=1285461

## 関連するサービス
同リポジトリのGraphQLサーバーを立ち上げ、データを取得します。
ルートディレクトリに移動し、以下コマンドでdockerコンテナを起動してください。

```fish
docker compose up -d scm-core
```

エンドポイント：`http://localhost:6060/query`

## インフラ
Vercel（予定）

## 実行時に必要なソフトウェア等
- [node@v14.17.1](https://nodejs.org/ja/download/)
- [yarn@v1.22.5](https://yarnpkg.com/)

パッケージ管理マネージャーは任意のもので構いませんが、設定ファイル統一の観点から以下パッケージを推奨します。

[volta](https://volta.sh/)

## 開発環境構築方法

### フロント側
#### 1. editorconfigが適用されるか確認する
コーディングルールの統一化、コードの整形のために`editorconfig`、`ESLint`、`Prettier`を採用しています。

VSCodeを使用している場合は、以下の拡張機能を導入してeditorconfigの設定を適用してください。

[EditorConfig for VSCode](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)

#### 2. 開発サーバー立ち上げ

```fish
npm install or yarn install
npm run dev or yarn dev
```
`http://localhost:3000/`にて開発サーバーが起動します。

#### 3. GraphQLサーバーの立ち上げ
mainディレクトリに移動し、以下のdockerコマンドを実行。

```fish
docker compose up -d scm-core
```

`http://localhost:6060/query`をエンドポイントとしてGraphQLサーバーが起動します。

#### 4. Storybookサーバーの立ち上げ

```fish
npm run storybook
or
yarn storybook
```

### 本番ビルド、サーバーの立ち上げ
以下コマンドで静的アセットを出力します。また、本番モードでアプリケーションを起動できます。

```fish
npm run build
or
yarn build

npm run start
or
yarn start
```

### Tests
JestとReact-Testing-Libraryでテストを行います。テストファイルを作成の上で以下コマンドを実行。

```fish
npm run test
or
yarn test
```

snapshotテストを行なった場合は、実行されたtestファイルと同階層に`__snapshots__`ディレクトリが生成されます。

### storiesファイルとtestファイルについて
運用ルールとして対象のコンポーネントファイルと同階層に配置します。
ファイルへのアクセスを迅速に行いたいためです。

#### 例
```fish
Box/
  ├ BoxComponent.stories.tsx
  ├ BoxComponent.test.tsx
  ├ BoxComponent.tsx
  :
```

### コンポーネントの分類について
当アプリケーションのコンポーネントは以下の構造に分かれています。

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

`domains`以下にドメインごとのディレクトリを作成します。

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

7. `test`
JestとReact-Testing-Libraryでテストを行う

https://jestjs.io/ja/docs/cli

https://testing-library.com/docs/react-testing-library/intro/

8. `storybook`
storybookサーバーを起動

https://storybook.js.org/docs/react/api/cli-options#start-storybook

9. `build-storybook`
storybookを静的サイトとして出力

https://storybook.js.org/docs/react/api/cli-options#build-storybook

### 環境変数について
next.config.js のenvオブジェクトに環境変数を記述します。
また、`src/lib/env.ts`に環境変数をインポートして切り分けています。

[Next.jsにおけるenvのベストプラクティス](https://zenn.dev/jj/articles/next-js-env-best-practice)
