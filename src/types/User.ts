export type User = {
  name: string;
  email: string;
};

export type UserState = {
  user: User | null;
  isAuthenticated: boolean;
};
