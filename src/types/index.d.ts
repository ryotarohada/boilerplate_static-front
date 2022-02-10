export namespace SEO {
  export type Change = {
    title: string
    description: string
  }
}

/**
 * アプリケーションの基本設定の型
 */
export namespace Contexts {
  export type PageData = {
    title: string
    description: string
    link: string
  }
  export type User = {
    id: string
    name: string
    image: string
  }
}
