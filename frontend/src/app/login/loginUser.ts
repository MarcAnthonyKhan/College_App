type userData = {
  username: string;
  password: string;
};

type LoginResponse = {
  Access_Token: string;
  Refresh_Token: string;
};

export const LoginUser = async ({ username, password }: userData) => {
  const response = await fetch('http://127.0.0.1:5000/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username: username,
      password: password,
    }),
  });
  const body = (await response.json()) as unknown;
  assertLogin(body);
  return body;
};

export function assertLogin(loginData: any): asserts loginData is LoginResponse {
  if (!('Access_Token' in loginData)) {
    throw new Error("loginData doesn't contain access token");
  }
  if (!('Refresh_Token' in loginData)) {
    throw new Error("loginData doesn't contain refresh token");
  }
  if (typeof loginData.Access_Token !== 'string') {
    throw new Error('Token is of invalid format');
  }
  if (typeof loginData.Refresh_Token !== 'string') {
    throw new Error('Token is of invalid format');
  }
}
