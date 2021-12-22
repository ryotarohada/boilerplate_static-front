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

#### 2. Storybookサーバーの立ち上げ

```fish
npm run storybook
or
yarn storybook
```

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

### Tests
JestとReact-Testing-Libraryでテストを行う。テストファイルを作成の上で以下コマンドを実行。

```fish
npm run test
or
yarn test
```

snapshotテストを行なった場合は、実行されたtestファイルと同階層に`__snapshots__`ディレクトリが生成される。

### storiesファイルとtestファイルについて
運用ルールとして対象のコンポーネントファイルと同階層に配置する。

#### 例
```fish
Box/
  ├ BoxComponent.stories.tsx
  ├ BoxComponent.test.tsx
  ├ BoxComponent.tsx
  :
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
next.config.js のenvオブジェクトに環境変数を記述。
`src/lib/env.ts`に環境変数をインポートして切り分けている。

[Next.jsにおけるenvのベストプラクティス](https://zenn.dev/jj/articles/next-js-env-best-practice)
