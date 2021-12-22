import { SITE_NAME } from '@/lib/env';
import { Header } from '../parts/Header/Header';

/** ページテンプレート */
export const Template: React.FC = ({ children }): JSX.Element => (
  <div data-app-root>
    <Header siteTitle={SITE_NAME} />
    {children}
  </div>
);
