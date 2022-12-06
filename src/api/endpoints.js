const base = "http://localhost:4001";

export const localAuth = async (body) => {
  const response = await fetch(`${base}/login`, {
    method: "POST",
    mode: "cors",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  return response;
};

export const register = async (body) => {
  const response = await fetch(`${base}/register`, {
    method: "POST",
    mode: "cors",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  return response;
};

export const logout = async () => {
  const response = await fetch(`${base}/logout`, {
    method: "GET",
    mode: "cors",
    credentials: "include",
  });
  return response;
};
