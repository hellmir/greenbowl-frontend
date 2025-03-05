import authOptions from "@/constants/authOptions";
import { getServerSession } from "next-auth";

const customFetchServer = async (url: string, options: RequestInit = {}) => {
  const token = await getServerSession(authOptions);

  const headers = {
    Authorization: token?.accessToken ? `${token.accessToken}` : "",
    "Content-Type": "application/json",
    ...options.headers,
  };



  const response = await fetch(url, { ...options, headers });

  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }

  return response.json();
};

export default customFetchServer;
