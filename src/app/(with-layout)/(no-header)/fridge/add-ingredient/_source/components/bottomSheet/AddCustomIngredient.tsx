"use client";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import PlusIcon from "@/components/icons/PlusIcon";

import { useState } from "react";

import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

import Contents from "./Contents";

const AddCustomIngredient = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Sheet
      onOpenChange={(e) => {
        setIsOpen(e);
      }}
      open={isOpen}
    >
      <SheetTrigger>
        <PlusIcon stroke="content-tertiary" />
      </SheetTrigger>
      <SheetContent
        side={"bottom"}
        className=" max-w-[37.5rem] mx-auto w-screen rounded-t-[20px] pt-3 px-4 pb-0"
        aria-describedby={undefined}
      >
        <VisuallyHidden>
          <SheetDescription />
        </VisuallyHidden>
        <SheetHeader>
          <SheetTitle className="label-s text-content-secondary w-full flex items-center justify-center mb-2">
            재료 등록하기
          </SheetTitle>

          <Contents handleClose={() => setIsOpen(false)} />
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default AddCustomIngredient;
