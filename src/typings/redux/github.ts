import { Repository } from '../services/response';

export enum GithubTypes {
  SET_REPOS = 'SET_REPOS',
  SET_USER_NAME = 'SET_USER_NAME',
}

export type GithubState = {
  repos: Repository[];
  userName: string;
};

type SetRepos = {
  type: GithubTypes.SET_REPOS;
  repos: Repository[];
};

type SetUserName = {
  type: GithubTypes.SET_USER_NAME;
  userName: string;
};

export type GithubActions = SetRepos | SetUserName;
