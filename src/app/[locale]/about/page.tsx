"use client"
import { useRef, useEffect, useState } from 'react';

const ScrollToAlignment = () => {
    const targetRef = useRef<HTMLDivElement>(null);
    const [isAligned, setIsAligned] = useState<boolean>(false);

    // Card properties
    const CARD_TOP = 383; // top position in px
    const CARD_HEIGHT = 260; // height in px
    const CARD_BOTTOM = CARD_TOP + CARD_HEIGHT; // 643px

    const scrollToAlignment = () => {
        if (targetRef.current) {
            // Get target element's position relative to document
            const targetRect = targetRef.current.getBoundingClientRect();
            const targetTopFromDocument = targetRect.top + window.scrollY;

            // Calculate required scroll position
            // We want: targetTopFromDocument - scrollY = CARD_BOTTOM
            // So: scrollY = targetTopFromDocument - CARD_BOTTOM
            const requiredScrollY = targetTopFromDocument - CARD_BOTTOM;

            // Smooth scroll to calculated position
            window.scrollTo({
                top: Math.max(0, requiredScrollY), // Ensure non-negative
                behavior: 'smooth'
            });
        }
    };

    // Check if card bottom aligns with target top
    useEffect(() => {
        const checkAlignment = () => {
            if (targetRef.current) {
                const targetRect = targetRef.current.getBoundingClientRect();
                console.log('targetRect', targetRect)
                const targetTopFromViewport = targetRect.top;
                console.log('targetTopFromViewport', targetTopFromViewport)
                // Check if card bottom (643px) aligns with target top
                const alignmentThreshold = 10; // 10px tolerance
                const isCurrentlyAligned = Math.abs(targetTopFromViewport - CARD_BOTTOM) < alignmentThreshold;
                console.log('isCurrentlyAligned', isCurrentlyAligned)
                setIsAligned(isCurrentlyAligned);
            }
        };

        checkAlignment();
        window.addEventListener('scroll', checkAlignment);
        return () => window.removeEventListener('scroll', checkAlignment);
    }, [CARD_BOTTOM]);

    return (
        <div className="relative">
            {/* Fixed Card */}
            <div
                className="fixed top-[383px] right-4 w-64 h-[260px] bg-blue-500 text-white p-4 rounded-lg shadow-lg z-10"
                style={{
                    border: isAligned ? '3px solid #10B981' : '1px solid #3B82F6'
                }}
            >
                <h3>Fixed Card</h3>
                <p>Top: 383px</p>
                <p>Height: 260px</p>
                <p>Bottom: 643px</p>
                <p>Status: {isAligned ? '✅ Aligned' : '❌ Not Aligned'}</p>

                <button
                    onClick={scrollToAlignment}
                    className="mt-4 px-4 py-2 bg-white text-blue-500 rounded hover:bg-gray-100"
                >
                    Scroll to Align
                </button>
            </div>

            {/* Content to create scroll */}
            <div className="h-[500px] bg-gray-100 p-4">
                <h2>Content Above Target</h2>
                <p>Scroll down to see the target element...</p>
            </div>

            {/* Target Element at 1260px */}
            <div
                ref={targetRef}
                className={`w-full p-6 border-4 transition-all duration-300 ${isAligned
                    ? 'border-green-500 bg-green-50'
                    : 'border-red-500 bg-red-50'
                    }`}
                style={{ marginTop: '760px' }} // To position at ~1260px from top
            >
                <h3>Target Element</h3>
                <p>This element should align with the bottom of the fixed card</p>
                <p>Position: ~1260px from document top</p>
                <p>Alignment Status: {isAligned ? '✅ Aligned' : '❌ Not Aligned'}</p>
            </div>

            {/* More content below */}
            <div className="h-[1000px] bg-gray-200 p-4">
                <h2>Content Below Target</h2>
                <p>More content to enable scrolling...</p>
            </div>
        </div>
    );
};


export default ScrollToAlignment
