import { getSession } from "next-auth/react";

const customFetchClient = async (url: string, options: RequestInit = {}) => {
  const token = await getSession();

  const headers = {
    Authorization: token?.accessToken ? `${token.accessToken}` : "",
    userId: token?.userId ? `${token.userId}` : "",
    "Content-Type": "application/json",
    ...options.headers,
  };

  const response = await fetch(url, { ...options, headers });

  if (!response.ok) {
    console.error("response not ok");
    throw new Error(`HTTP error! Status: ${response.status}`);
  }
  try {
    return await response.json();
  } catch {
    return;
  }
};

export default customFetchClient;
