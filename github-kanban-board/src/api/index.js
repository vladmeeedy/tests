// api/index.js
// Assuming fetchIssuesFromAPI is a function that fetches issues from Github API
// You should implement this function according to Github API documentation
const fetchRepoIssuesAPI = async (repoUrl) => {
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
    const issues = await response.json();

    return await issues
  } catch (error) {
    console.error('Error fetching issues:', error);
  }
  };
  
  export { fetchRepoIssuesAPI };
  