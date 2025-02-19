"use client";

import { useRef } from "react";
import { createIngredient } from "../../actions/ingredient";
import { Button } from "@/components/ui/button";

const Create = () => {
  const ref = useRef<HTMLInputElement>(null);

  return (
    <div>
      <input ref={ref}></input>
      <Button onClick={() => createIngredient({ name: ref.current?.value })}>
        create
      </Button>
    </div>
  );
};

export default Create;
