export function shouldLogoutUser() {
  const loginTime = localStorage.getItem('loginTime');
  if (!Number(loginTime)) {
    return false;
  }

  const currentTime = new Date().getTime();
  const logoutTime = Number(loginTime) + (22 * 60 * 60 * 1000);

  return currentTime >= logoutTime;
}