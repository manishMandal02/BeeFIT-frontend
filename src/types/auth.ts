export type Habits = 'RUNNING' | 'WALKING' | 'SWIMMING' | 'GYMMING' | 'READING';

export interface IGoalTracking {
  date: Date;
  measurement?: number;
}

export interface IUser {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  fullName: string;
  profilePic: string;
  age: number;
  weight: number; //kg
  height: number; //cm
  joined: Date;
  Goal: IGoal[];
  Recommendation: IRecommendation;
}

export interface IRecommendation {
  userId: string;
  aiRecommendation: String;
  aiSuggestedOn: Date;
}

export interface IGoal {
  id: string;
  label: string;
  habit: Habits;
  tacking: IGoalTracking[];
  isInfinite: boolean;
  userId: string;
}
