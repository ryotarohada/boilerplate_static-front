export namespace Contexts {
  export type Theme = 'light' | 'dark' | 'prefer'
}

// アプリケーションのテーマを設定
// ここでのテーマとはユーザーの操作結果を伴わない初期状態のことを指す
export const AppTheme: Contexts.Theme = 'dark'
