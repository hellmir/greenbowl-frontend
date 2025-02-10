"use client";

import BackIcon from "@/components/icons/backIcon";

interface Props {
  handleEditClose: () => void;
}

const TertiaryHeader = ({ handleEditClose }: Props) => {
  return (
    <header className="fixed">
      <div className=" relative flex items-center justify-center h-[54px] w-screen max-w-[599px] px-16 bg-foundation-tertiary">
        <div className="h-24 w-24 flex justify-center items-center absolute left-0">
          <BackIcon stroke="content-tertiary" onClick={handleEditClose} />
        </div>
        <p className="text-heading-m h-24 flex items-center">수정하기</p>
      </div>
    </header>
  );
};

export default TertiaryHeader;
