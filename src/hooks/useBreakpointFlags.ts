import { useMediaQuery } from "./useMediaQuery";

export const useBreakpointFlags = () => {
    const is2xl = useMediaQuery('(min-width: 1536px)');
    const isXl = useMediaQuery('(min-width: 1280px) and (max-width: 1535.999px)');
    const isLg = useMediaQuery('(min-width: 1024px)');
    const isMd = useMediaQuery('(max-width: 1023.999px)');
    const isSm = useMediaQuery('(max-width: 640px)');

    const flag = is2xl ? 2 : isXl ? 1 : isLg ? 3 : isMd ? 4 : isSm ? 5 : 0;

    return { flag, isLg, isXl, is2xl, isMd, isSm };
};
