import { usePathname } from "next/navigation";
import { urlPaths } from "@/constans/constants";

export const handlerClassName = (styles: any) => {
  return () => {
    const path: any = usePathname();

    if (![urlPaths.contacts, urlPaths.home, urlPaths.post].includes(path)) {
      return styles.filter;
    } else {
      return styles.default;
    }
  };
};
