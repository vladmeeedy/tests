// redux/types.ts

export interface Issue {
    id: string;
    title: string;
    state: 'open' | 'closed';
    assignee?: string;
  }
  
  // Other type definitions can be added as needed.
  