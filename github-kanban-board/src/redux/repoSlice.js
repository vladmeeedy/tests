// redux/repoSlice.js
import { createSlice } from '@reduxjs/toolkit';
import { fetchRepoIssuesAPI } from '../api';

export const repoSlice = createSlice({
  name: 'repo',
  initialState: {
    issues: [],
  },
  reducers: {
    setIssues: (state, action) => {
      state.issues = action.payload;
    },
  },
});

export const { setIssues } = repoSlice.actions;

export const fetchRepoIssues = (repoUrl) => async (dispatch) => {
  try {
    const issues = await fetchRepoIssuesAPI(repoUrl);
    dispatch(setIssues(issues));
    localStorage.setItem('issues', JSON.stringify(issues));
  } catch (error) {
    console.error('Error fetching issues:', error);
  }
};

export const moveIssue = (issueId, newColumn) => (dispatch, getState) => {
  const { issues } = getState().repo;
  const updatedIssues = issues.map((issue) => {
    if (issue.id === issueId) {
      return { ...issue, state: newColumn };
    }
    return issue;
  });
  dispatch(setIssues(updatedIssues));
  localStorage.setItem('issues', JSON.stringify(updatedIssues));
};

export const selectIssues = (state) => state.repo.issues;

export default repoSlice.reducer;
