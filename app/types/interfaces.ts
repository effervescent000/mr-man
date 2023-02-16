export interface ISaveData {
  id: number;
  userId: number;
  active: boolean;
  title: string;
}

export interface IUser {
  id: number;
  username?: string;
  email: string;
}
