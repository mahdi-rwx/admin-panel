export interface IAdmin {
  fullname: string;
  username: string;
  email: string;
  accessLevel: number;
  active: boolean;
}
export interface IState {
  user: IAdmin | null;
  loading: boolean;
  error: string | null;
}

interface signinPendinggAction {
  
}