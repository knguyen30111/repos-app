import axiosInstance from './api';
import transformResponse from '../helpers/transformResponse';
import { Repository } from '../typings/services/response';
import { ReadmeFile } from '../typings/services/response/githubRespons';

const collection = (userName: string) => `/users/${userName}/repos`;
const readme = (userName: string, repoName: string) => `/repos/${userName}/${repoName}/readme`;

// https://raw.githubusercontent.com/{owner}/{repo}/{branch}/README.md

export async function getRepositories(userName: string) {
  const url = collection(userName);
  const res = await transformResponse<Repository[]>(axiosInstance.get(url));

  return res;
}

export async function getReadMeFile(userName: string, repoName: string) {
  const url = readme(userName, repoName);
  const res = await transformResponse<ReadmeFile>(axiosInstance.get(url));

  return res;
}
