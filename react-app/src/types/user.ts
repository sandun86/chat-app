export interface LoginFormState {
  username: string;
  password: string;
}

export interface LoginFormProps {
  setToken: (token: string) => void;
}

export interface GetLoginProps {
  username: string;
  password: string;
}

export interface GetApiToken {
  token: string;
}
