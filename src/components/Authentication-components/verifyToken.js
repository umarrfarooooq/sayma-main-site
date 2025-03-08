import jwt_decode from "jwt-decode";

export const VerifyTokenFrontend = () => {
  const authToken = localStorage.getItem("authToken");

  if (!authToken) {
    return false;
  }

  try {
    const decodedToken = jwt_decode(authToken);
    const now = Date.now() / 1000; 
    if (decodedToken.exp < now) {
      return false;
    }

    return true;
  } catch (error) {
    return false;
  }
};
