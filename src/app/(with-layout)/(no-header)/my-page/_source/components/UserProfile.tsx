import Profile from "@/components/svg/Profile";
import { getServerSession } from "next-auth";
import Image from "next/image";

const UserProfile = async () => {
  const session = await getServerSession();

  return (
    <div className="h-16 py-3 flex items-center bg-foundation-secondary px-4">
      {session?.user?.image ? (
        <Image
          src={session.user.image}
          alt="유저 이미지"
          width={40}
          height={40}
          className=" rounded-full overflow-hidden"
        />
      ) : (
        <Profile />
      )}
      <div className="ml-3 text-content-tertiary label-s">
        {session?.user?.email}
      </div>
    </div>
  );
};

export default UserProfile;
