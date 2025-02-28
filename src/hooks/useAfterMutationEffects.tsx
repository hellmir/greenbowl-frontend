"use client";

import { useAlertStore } from "@/store/alertStore";
import { useRouter } from "next/navigation";
import { useCallback } from "react";

const useAfterMutationEffects = (
  message: string,
  callback: () => void = () => {}
) => {
  const router = useRouter();
  const play = useAlertStore((state) => state.play);

  const afterMutationAction = useCallback(() => {
    callback();
    router.refresh();
    play(message);
  }, [callback, router, play, message]);

  return afterMutationAction;
};

export default useAfterMutationEffects;
