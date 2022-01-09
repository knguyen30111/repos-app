import axiosInstance from './api';
import transformResponse from '../helpers/transformResponse';
import { Repository } from '../typings/services/response';

const collection = (userName: string) => `/users/${userName}/repos`;

export async function getRepositories(userName: string) {
  const url = collection(userName);
  const res = await transformResponse<{
    data: Repository[];
  }>(axiosInstance.get(url));
  return res.data;
}
