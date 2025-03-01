"use client";

import BackIcon from "@/components/icons/backIcon";

interface Props {
  handleClose: () => void;
}

const Header = ({ handleClose }: Props) => {
  return (
    <div className="h-[3.375rem] flex items-center sticky top-0 justify-center bg-foundation-tertiary ">
      <div className="flex justify-center items-center absolute left-0 pl-4">
        <BackIcon stroke="content-tertiary" onClick={handleClose} />
      </div>

      <p className="heading-m h-24 flex items-center">수정하기</p>
    </div>
  );
};

export default Header;
