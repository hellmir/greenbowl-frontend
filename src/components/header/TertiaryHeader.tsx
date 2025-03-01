"use client";

import BackIcon from "@/components/icons/backIcon";

interface Props {
  handleEditClose: () => void;
}

const TertiaryHeader = ({ handleEditClose }: Props) => {
  return (
    <header className="fixed">
      <div className=" relative flex items-center justify-center h-[3.375rem] w-screen max-w-[37.5rem] px-4 bg-foundation-tertiary">
        <div className="h-6 w-6 flex justify-center items-center absolute left-0">
          <BackIcon stroke="content-tertiary" onClick={handleEditClose} />
        </div>
        <p className="heading-m h-24 flex items-center">수정하기</p>
      </div>
    </header>
  );
};

export default TertiaryHeader;
