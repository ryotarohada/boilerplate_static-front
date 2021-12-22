import request from 'graphql-request';
import useSWR from 'swr';
import { API_ENDPOINT } from './env';

/**
 * useSWRとgraphql-requestをラップしたカスタムフック
 */
export const useQuery = <T extends unknown = any>(query: string) =>
  useSWR<T>(query, (_query: string) => request(`${API_ENDPOINT}/query`, _query));
