"use client";

import { useCategoryIngredientsStore } from "@/store/categoryIngredientsStore";
import { useEffect } from "react";

const SideEffect = () => {
  const reset = useCategoryIngredientsStore((state) => state.reset);
  
  useEffect(() => {
    return () => reset();
  }, [reset]);
  return <></>;
};

export default SideEffect;
