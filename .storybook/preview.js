import React, { Suspense } from 'react';
import { RouterContext } from 'next/dist/shared/lib/router-context';

export const decorators = [
  (Story) => (
    <Suspense fallback="loading...">
      <Story />
    </Suspense>
  ),
];

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  nextRouter: {
    Provider: RouterContext.Provider,
  },
};
