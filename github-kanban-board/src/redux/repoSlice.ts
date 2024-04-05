import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk } from './store';
import { Issue } from './types';

interface RepoState {
  issues: Issue[];
}

const initialState: RepoState = {
  issues: [],
};

const repoSlice = createSlice({
  name: 'repo',
  initialState,
  reducers: {
    setRepoIssues: (state, action: PayloadAction<Issue[]>) => {
      state.issues = action.payload;
    },
  },
});

export const { setRepoIssues } = repoSlice.actions;

export const fetchRepoIssues = (repoUrl: string): AppThunk => async (dispatch) => {
  try {
    // Extract owner and repo name from the repoUrl
    const urlParts = repoUrl.split('/');
    const owner = urlParts[urlParts.length - 2];
    const repo = urlParts[urlParts.length - 1];

    // Call GitHub API to fetch issues
    const response = await fetch(`https://api.github.com/repos/${owner}/${repo}/issues`);
    if (!response.ok) {
      throw new Error('Failed to fetch issues');
    }
    const issues: Issue[] = await response.json();

    dispatch(setRepoIssues(issues));
  } catch (error) {
    console.error('Error fetching issues:', error);
  }
};

export default repoSlice.reducer;
