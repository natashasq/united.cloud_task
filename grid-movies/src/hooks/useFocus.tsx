import { useEffect, useRef } from "react";

const useFocus = (isActive: boolean) => {
  const itemRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isActive && itemRef && itemRef.current) {
      itemRef.current.focus();
      itemRef.current.scrollIntoView({ block: "center" });
    }
  }, [isActive]);

  return itemRef;
};

export default useFocus;
