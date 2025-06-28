import { useMediaQuery } from "./useMediaQuery";

export const useBreakpointFlags = () => {
    // Main breakpoints
    const is2xl = useMediaQuery('(min-width: 1536px)');
    const isXl = useMediaQuery('(min-width: 1280px) and (max-width: 1535.999px)');
    const isLg = useMediaQuery('(min-width: 1024px) and (max-width: 1279.999px)');
    const isMd = useMediaQuery('(min-width: 768px) and (max-width: 1023.999px)');
    const isSm = useMediaQuery('(min-width: 641px) and (max-width: 767.999px)');

    // Mobile device categories
    const isLargeMobile = useMediaQuery('(min-width: 415px) and (max-width: 640px)'); // iPhone 14 Pro Max, Galaxy S20 Ultra
    const isMediumMobile = useMediaQuery('(min-width: 376px) and (max-width: 414px)'); // iPhone 12 Pro, iPhone XR
    const isSmallMobile = useMediaQuery('(min-width: 321px) and (max-width: 375px)'); // Galaxy S8+, iPhone SE
    const isXsMobile = useMediaQuery('(max-width: 320px)'); // Pixel 7 và nhỏ hơn

    // Helper flags
    const isDesktop = useMediaQuery('(min-width: 1024px)');
    const isTablet = useMediaQuery('(min-width: 641px) and (max-width: 1023px)');
    const isMobile = useMediaQuery('(max-width: 640px)');

    const flag = is2xl ? 1
        : isXl ? 2
            : isLg ? 3
                : isMd ? 4
                    : isSm ? 5
                        : isLargeMobile ? 6
                            : isMediumMobile ? 7
                                : isSmallMobile ? 8
                                    : isXsMobile ? 9
                                        : 0;

    return {
        flag,

        // Main breakpoints
        is2xl,
        isXl,
        isLg,
        isMd,
        isSm,

        // Mobile categories
        isLargeMobile,
        isMediumMobile,
        isSmallMobile,
        isXsMobile,

        // Helper flags
        isDesktop,
        isTablet,
        isMobile
    };
};
