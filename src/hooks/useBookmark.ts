import { useState, useEffect } from "react";

const useBookmark = (initialState: boolean, callback: () => void) => {
  const [isBookmarked, setIsBookmarked] = useState(initialState);

  useEffect(() => {
    window.addEventListener("beforeunload", callback);
    return () => {
      callback();
      window.removeEventListener("beforeunload", callback);
    };
  }, [callback]);

  return {
    isBookmarked,
    toggleBookmark: () => setIsBookmarked((prev) => !prev),
  };
};

export default useBookmark;
