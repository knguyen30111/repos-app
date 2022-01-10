import { GithubActions, GithubState, GithubTypes } from '../../typings/redux/github';

export const initialState: GithubState = {
  repos: [],
  userName: '',
};

export default (state = initialState, action: GithubActions): GithubState => {
  switch (action.type) {
    case GithubTypes.SET_REPOS:
      return { ...state, repos: action.repos };
    case GithubTypes.SET_USER_NAME:
      return { ...state, userName: action.userName };
    default:
      return state;
  }
};
