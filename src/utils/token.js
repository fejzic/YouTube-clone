import jwtDecode from 'jwt-decode';
import { DateTime } from 'luxon';

const TOKEN = 'accessToken';

export const getAccessToken = () => {
  return localStorage.getItem(TOKEN);
};

export const setAccessToken = (token) => {
  localStorage.setItem(TOKEN, token);
};

export const removeAccessToken = () => {
  localStorage.removeItem(TOKEN);
};

export const isTokenValid = () => {
  const accessToken = getAccessToken();
  return !!accessToken;
  // if (accessToken) {
  //   try {
  //     const decodedToken = jwtDecode(accessToken);
  //     return DateTime.now().toMillis() < decodedToken.exp;
  //   } catch (err) {
  //     return false;
  //   }
  // } else {
  //   return false;
  // }
};