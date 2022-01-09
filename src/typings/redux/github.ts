import { Repository } from '../services/response';

export enum GithubTypes {
  SET_REPOS = 'SET_REPOS',
}

export type GithubState = {
  repos: Repository[];
};

type SetRepos = {
  type: GithubTypes.SET_REPOS;
  repos: Repository[];
};

export type GithubActions = SetRepos;
