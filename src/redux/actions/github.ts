import { ThunkAction } from 'redux-thunk';
import { handleAPIErrors } from '../../helpers';
import { getRepositories } from '../../services/github';
import { GithubActions, GithubState, GithubTypes } from '../../typings/redux/github';
import { Repository } from '../../typings/services/response';

export const setRepositories = (repos: Repository[]): GithubActions => ({
  type: GithubTypes.SET_REPOS,
  repos,
});

type GithubThunkResult<ReturnType = void> = ThunkAction<
  ReturnType,
  GithubState,
  unknown,
  GithubActions
>;

export const fetchRepositories = (userName: string): GithubThunkResult<Promise<void>> => {
  return async (dispatch) => {
    try {
      const data = await getRepositories(userName);
      dispatch(setRepositories(data));
    } catch (e) {
      handleAPIErrors(e);
    }
  };
};
