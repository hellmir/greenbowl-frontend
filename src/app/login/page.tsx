"use client";

const CLIENT_ID = "e682a741abf9996362b72a870168feb0";
const REDIRECT_URI = "http://localhost:3000/api/auth/kakao-callback";

const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`;

const handleLogin = () => {
  window.location.href = KAKAO_AUTH_URL;
};
const page = () => {
  return (
    <div className="mt-[80px]">
      <button onClick={handleLogin}>클릭</button>
    </div>
  );
};

export default page;
