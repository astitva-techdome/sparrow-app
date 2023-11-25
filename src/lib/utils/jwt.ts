import constants from "$lib/utils/constants";

const jwtDecode = (jwt: string) => {
  return JSON.parse(window.atob(jwt.split(".")[1]));
};

const setAuthJwt = (key: string, token: string) => {
  localStorage.setItem(key, token);
  document.cookie = `${key}=${token}`;
};

const clearAuthJwt = (): void => {
  localStorage.removeItem(constants.AUTH_TOKEN);
  localStorage.removeItem(constants.REF_TOKEN);
};

export { jwtDecode, setAuthJwt, clearAuthJwt };
