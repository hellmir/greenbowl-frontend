import { getSession } from "next-auth/react";

const customFetchClient = async (url: string, options: RequestInit = {}) => {
  const token = await getSession();
  console.log(token);
  const headers = {
    Authorization: token?.accessToken ? `Bearer ${token.accessToken}` : "",
    "Content-Type": "application/json",
    ...options.headers,
  };

  const response = await fetch(url, { ...options, headers });

  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }

  try {
    return response.json();
  } catch {
    return;
  }
};

export default customFetchClient;
