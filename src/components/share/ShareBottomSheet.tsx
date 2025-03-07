import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { ReactNode } from "react";
import KakaoShareBtn from "./KakaoShareBtn";
import Link from "next/link";
import X from "../svg/share/X";
import NaverBlog from "../svg/share/NaverBlog";
import URLCopyBtn from "./URLCopyBtn";

interface Props {
  requestUrl: string;
  title: string;
  children: ReactNode;
}

const ShareBottomSheet = ({ requestUrl, title, children }: Props) => {
  return (
    <Sheet>
      <SheetTrigger>{children}</SheetTrigger>
      <SheetContent
        side={"bottom"}
        className=" max-w-[37.5rem] mx-auto w-screen rounded-t-[20px] pt-3  pb-0"
      >
        <VisuallyHidden>
          <SheetDescription />
        </VisuallyHidden>
        <SheetHeader>
          <SheetTitle className="label-s text-content-secondary w-full flex items-center justify-center mb-2">
            공유하기
          </SheetTitle>
        </SheetHeader>
        <div className="flex px-4 py-6 text-content-secondary label-xs w-full justify-between">
          <KakaoShareBtn requestUrl={requestUrl} />
          <Link
            href={`https://x.com/intent/post?url=${requestUrl}`}
            target="_blank"
            className=" flex flex-col items-center "
          >
            <X />
            <p className="mt-1 ">X</p>
          </Link>
          <Link
            href={`https://share.naver.com/web/shareView.nhn?url=${requestUrl}&title=${title}`}
            target="_blank"
            className=" flex flex-col items-center"
          >
            <NaverBlog />
            <p className="mt-1 ">네이버 블로그</p>
          </Link>
          <URLCopyBtn requestUrl={requestUrl} />
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default ShareBottomSheet;
