import { ApplyChalkEffect } from "@/components/ChalkEffect";
import React, { useCallback, useEffect, useState } from "react";

export default function GoTop({
  xref: ref,
}: {
  xref: React.RefObject<HTMLDivElement>;
}) {
  const [showGoTop, setShowGoTop] = useState(false);
  useEffect(() => {
    const handleScroll = (event: Event) => {
      if (event.target) {
        const element = event.target as HTMLDivElement;
        if (element.scrollTop > 100) {
          setShowGoTop(true);
        } else {
          setShowGoTop(false);
        }
      }
    };

    if (ref.current) {
      const element = ref.current;
      element.addEventListener("scroll", handleScroll);
      return () => {
        element.removeEventListener("scroll", handleScroll);
      };
    }
  }, [ref]);

  const moveToTop = useCallback(() => {
    if (ref.current) {
      ref.current.scrollTop = 0;
    }
    setShowGoTop(false);
  }, []);

  return showGoTop ? (
    <ApplyChalkEffect
      className={
        "fixed bottom-20 right-16 block z-20 h-14 w-14 text-white hover:cursor-pointer hover:text-red-100"
      }
    >
      <div title={"Go to Top"} onClick={moveToTop}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="h-[100%] w-[100%]"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m15 11.25-3-3m0 0-3 3m3-3v7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          />
        </svg>
      </div>
    </ApplyChalkEffect>
  ) : (
    <></>
  );
}
