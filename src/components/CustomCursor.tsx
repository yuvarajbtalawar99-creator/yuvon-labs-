import { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

const CustomCursor = () => {
    const [isHovered, setIsHovered] = useState(false);
    const [isPointer, setIsPointer] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    const springConfig = { damping: 25, stiffness: 200 };
    const springX = useSpring(cursorX, springConfig);
    const springY = useSpring(cursorY, springConfig);

    useEffect(() => {
        const moveCursor = (e: MouseEvent) => {
            cursorX.set(e.clientX);
            cursorY.set(e.clientY);
            if (!isVisible) setIsVisible(true);
        };

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            const isClickable =
                target.closest('button') ||
                target.closest('a') ||
                window.getComputedStyle(target).cursor === 'pointer';

            setIsPointer(!!isClickable);
        };

        window.addEventListener('mousemove', moveCursor);
        window.addEventListener('mouseover', handleMouseOver);

        // Hide default on mount
        document.body.style.cursor = 'none';

        return () => {
            window.removeEventListener('mousemove', moveCursor);
            window.removeEventListener('mouseover', handleMouseOver);
            document.body.style.cursor = 'auto';
        };
    }, [isVisible]);

    if (!isVisible) return null;

    return (
        <div className="fixed inset-0 pointer-events-none z-[9999] hidden md:block">
            {/* Main Dot */}
            <motion.div
                className="fixed w-1.5 h-1.5 bg-primary rounded-full"
                style={{
                    left: cursorX,
                    top: cursorY,
                    translateX: '-50%',
                    translateY: '-50%',
                }}
            />

            {/* Trailing Circle */}
            <motion.div
                className="fixed rounded-full border border-primary/30"
                style={{
                    left: springX,
                    top: springY,
                    translateX: '-50%',
                    translateY: '-50%',
                    width: isPointer ? 60 : 35,
                    height: isPointer ? 60 : 35,
                    backgroundColor: isPointer ? 'rgba(34, 211, 238, 0.1)' : 'transparent',
                }}
                transition={{
                    width: { type: 'spring', damping: 20, stiffness: 200 },
                    height: { type: 'spring', damping: 20, stiffness: 200 },
                    backgroundColor: { duration: 0.3 }
                }}
            >
                {/* Active Pulse when on clickable */}
                {isPointer && (
                    <motion.div
                        className="absolute inset-0 rounded-full border border-primary/50"
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: [1, 1.3, 1], opacity: [0, 0.5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                    />
                )}
            </motion.div>

            {/* Center Glow */}
            <motion.div
                className="fixed w-20 h-20 bg-primary/10 blur-xl rounded-full"
                style={{
                    left: springX,
                    top: springY,
                    translateX: '-50%',
                    translateY: '-50%',
                }}
            />
        </div>
    );
};

export default CustomCursor;
