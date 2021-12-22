import React from 'react';

export namespace SEO {
  export type Change = {
    title: string;
    description: string;
  };
}

/**
 * アプリケーションの基本設定の型
 */
export namespace Contexts {}

/**
 * フロント表示確認用のcontexts
 */
export namespace DevContexts {
  export type PageData = {
    title: string;
    description: string;
    link: string;
  };
}

export type DevGraphQLQuery = {
  facility: {
    id: string;
  }[];
};
