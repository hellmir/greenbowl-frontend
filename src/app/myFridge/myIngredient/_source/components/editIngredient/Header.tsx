"use client";

import BackIcon from "@/components/icons/backIcon";

interface Props {
  handleEditClose: () => void;
}

const Header = ({ handleEditClose }: Props) => {
  return (
    <div className="h-[54px] flex items-center justify-center relative">
      <div className="h-24 w-24 flex justify-center items-center absolute left-0">
        <BackIcon stroke="content-tertiary" onClick={handleEditClose} />
      </div>

      <p className="heading-m h-24 flex items-center">수정하기</p>
    </div>
  );
};

export default Header;
