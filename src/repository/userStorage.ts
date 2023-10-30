import Cookies from 'js-cookie';

const USER_TOKENS = 'USER_TOKENS';
const REFRESH_TOKEN_COOKIE = 'REFRESH_TOKEN';

type UserTokens = {
  accessToken: string;
  refreshToken: string;
};

export const userStorage = {
  get() {
    const accessToken = localStorage.getItem(USER_TOKENS);
    const refreshToken = Cookies.get(REFRESH_TOKEN_COOKIE);

    if (!accessToken || !refreshToken) return null;

    const parsedAccessToken = JSON.parse(accessToken);
    const parsedRefreshToken = JSON.parse(refreshToken);

    const parsedUser: UserTokens = {
      accessToken: parsedAccessToken,
      refreshToken: parsedRefreshToken,
    };

    return parsedUser;
  },
  set(user: UserTokens) {
    const isProduction = process.env.REACT_APP_ENV === 'production';
    const stringifyAccessToken = JSON.stringify(user.accessToken);
    const stringifyRefreshToken = JSON.stringify(user.refreshToken);

    localStorage.setItem(USER_TOKENS, stringifyAccessToken);
    localStorage.setItem(REFRESH_TOKEN_COOKIE, stringifyRefreshToken);
    Cookies.set(REFRESH_TOKEN_COOKIE, stringifyRefreshToken, {
      secure: isProduction,
      sameSite: 'lax',
      expires: 7,
      domain: isProduction ? process.env.REACT_APP_API_URL : undefined,
    });
  },
  remove() {
    localStorage.removeItem(USER_TOKENS);
    localStorage.removeItem(REFRESH_TOKEN_COOKIE);
    Cookies.remove(REFRESH_TOKEN_COOKIE);
  },
};
