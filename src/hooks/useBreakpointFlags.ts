import { useMediaQuery } from "./useMediaQuery";

export const useBreakpointFlags = () => {
    const isLg = useMediaQuery('(min-width: 1024px)');
    const is2xl = useMediaQuery('(min-width: 1536px)');

    const flag = is2xl ? 2 : isLg ? 1 : 0;

    return { flag, isLg, is2xl };
};
