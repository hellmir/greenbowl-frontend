import authOptions from "@/constants/authOptions";
import { getServerSession } from "next-auth";

const customFetchServer = async (url: string, options: RequestInit = {}) => {
  const token = await getServerSession(authOptions);
  console.log(token);
  const headers = {
    Authorization: token?.accessToken ? `Bearer ${token.accessToken}` : "",
    "Content-Type": "application/json",
    ...options.headers,
  };

  console.log(url, { ...options, headers });

  const response = await fetch(url, { ...options, headers });

  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }

  return response.json();
};

export default customFetchServer;
