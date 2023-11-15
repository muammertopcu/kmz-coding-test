export interface LoginMutationVariables {
  username: string;
  password: string;
}

export interface LoginMutationResponse {
  status: boolean | number;
  data: {
    token: string;
    expiration: string;
    refreshToken: string;
    status: string;
  };
}
