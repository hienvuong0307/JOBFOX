import { useCookie } from "#app";

/**
 * @param {string} accessToken 
 * @param {string} refreshToken 
 * @param {Object} userInfo 
 */
export function setAuthCookies(accessToken, refreshToken, userInfo) {
  const accessTokenCookie = useCookie("accessToken", { maxAge: 3 * 24 * 60 * 60 });
  accessTokenCookie.value = accessToken;

  const refreshTokenCookie = useCookie("refreshToken", { maxAge: 7 * 24 * 60 * 60 });
  refreshTokenCookie.value = refreshToken;

  if (process.client) {
    localStorage.setItem("userInfo", JSON.stringify(userInfo));
  }
}