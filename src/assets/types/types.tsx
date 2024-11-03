export interface Task {
    id: number;
    text: string;
    completed: boolean;
  }
  
  export type Filter = 'all' | 'active' | 'completed';