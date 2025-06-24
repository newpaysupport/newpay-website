import { useMediaQuery } from "./useMediaQuery";

export const useBreakpointFlags = () => {
    const isLg = useMediaQuery('(min-width: 1024px)');
    const is2xl = useMediaQuery('(min-width: 1536px)');
    const isMd = useMediaQuery('(max-width: 1023.999px)');
    const isSm = useMediaQuery('(max-width: 640px)');

    const flag = is2xl ? 2 : isLg ? 1 : isMd ? 3 : isSm ? 4 : 0;

    return { flag, isLg, is2xl, isMd, isSm };
};
