import { gql } from 'graphql-request';
import useSWR from 'swr';
import { css } from '@emotion/react';
import { BackGroundBox } from '../../components/parts/Box/BackGroundBox';
import { useQuery } from '@/lib/fetcher';
import { DEFAULT_FRONTEND_ORIGIN } from '@/lib/env';
import { DevGraphQLQuery } from '@/types';

type Props = {
  fetchType: 'swr' | 'graphql';
  endpoint: string;
};

const errorTextStyle = css`
  color: red;
  font-weight: bold;
`;

const successTextStyle = css`
  color: green;
  font-weight: bold;
`;

const ApiCall: React.FC<{ endpoint: string }> = ({ endpoint }) => {
  const { data, error } = useSWR<{ message: string }>(`${DEFAULT_FRONTEND_ORIGIN}/api/${endpoint}`);

  // 通信失敗時のコンポーネント
  if (error)
    return (
      <>
        <h2>
          【fetch state : <span css={errorTextStyle}>Error</span>】
        </h2>
        <p>Error😢</p>
      </>
    );

  //  通信中のコンポーネント
  if (!data)
    return (
      <>
        <h2>【fetch state : Loading】</h2>
        <p>Loading...</p>
      </>
    );

  return (
    <>
      <h2>
        【fetch state : <span css={successTextStyle}>success</span>】
      </h2>
      <p>{JSON.stringify(data)}</p>
    </>
  );
};

const GraphQlApiCall: React.FC = () => {
  const query = gql`
    query {
      facility {
        id
      }
    }
  `;
  const { data, error } = useQuery<DevGraphQLQuery>(query);

  // 通信失敗時のコンポーネント
  if (error)
    return (
      <>
        <h2>
          【fetch state : <span css={errorTextStyle}>Error</span>】
        </h2>
        <p>Error😢</p>
      </>
    );

  //  通信中のコンポーネント
  if (!data)
    return (
      <>
        <h2>【fetch state : Loading】</h2>
        <p>Loading...</p>
      </>
    );

  return (
    <>
      <h2>
        【fetch state : <span css={successTextStyle}>success</span>】
      </h2>
      <p>{JSON.stringify(data)}</p>
      {/* data.facility.map((item) => <p key={item.id}>ID : {item.id}</p>) */}
    </>
  );
};

export const ApiCallView: React.FC<Props> = ({ fetchType, endpoint }) => (
  <BackGroundBox>{fetchType === 'swr' ? <ApiCall endpoint={endpoint} /> : <GraphQlApiCall />}</BackGroundBox>
);
