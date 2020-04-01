import { useEffect } from "react";

export const useClickOutside = (
  ref: React.MutableRefObject<HTMLDivElement>,
  handler: (evt: MouseEvent | TouchEvent) => void
) => {
  useEffect(() => {
    const listener = (evt: MouseEvent | TouchEvent) => {
      if (!ref.current || ref.current.contains(evt.target as Node)) return;

      handler(evt);
    };

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [handler, ref]);
};
