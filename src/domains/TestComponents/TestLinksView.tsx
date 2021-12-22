import Link from 'next/link';
import { myAppUrls } from '@/lib/url';
import { BackGroundBox } from '@/components/parts/Box/BackGroundBox';

/**
 * ページ一覧表示用のテストコンポーネント
 */
export const LinksView: React.FC = () => (
  <BackGroundBox>
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <h2>【リンク】</h2>
      <ul>
        {myAppUrls.map((data) => (
          <li style={{ listStyleType: 'none' }} key={data.title}>
            <Link href={data.link} passHref>
              <a href="replace" style={{ color: 'blue', textDecoration: 'underline' }}>
                {data.title}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  </BackGroundBox>
);
