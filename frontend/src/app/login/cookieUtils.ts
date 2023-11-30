// cookieUtils.ts
import Cookies from 'js-cookie';

interface Tokens {
  Access_Token: string;
  Refresh_Token: string;
}

const TOKEN_COOKIE_NAME = 'InCollege';

export const setTokensInCookies = ({ Access_Token, Refresh_Token }: Tokens): void => {
  Cookies.set(TOKEN_COOKIE_NAME, JSON.stringify({ Access_Token, Refresh_Token }), { expires: 7 });
};

export const getTokensFromCookies = (): Tokens | undefined => {
  const tokens = Cookies.get(TOKEN_COOKIE_NAME) as Tokens | undefined;
  return tokens;
};

export const removeTokensFromCookies = (): void => {
  Cookies.remove(TOKEN_COOKIE_NAME);
};
