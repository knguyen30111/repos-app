import { GithubActions, GithubState, GithubTypes } from '../../typings/redux/github';

export const initialState: GithubState = {
  repos: [],
};

export default (state = initialState, action: GithubActions): GithubState => {
  switch (action.type) {
    case GithubTypes.SET_REPOS:
      return { ...state, repos: action.repos };
    default:
      return state;
  }
};
