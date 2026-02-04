import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const Preloader = () => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    return 100;
                }
                return prev + 1;
            });
        }, 20);

        return () => clearInterval(interval);
    }, []);

    return (
        <motion.div
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#020408]"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.1, filter: 'blur(10px)' }}
            transition={{ duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] }}
        >
            <div className="relative flex flex-col items-center">
                {/* Logo Mark - PULSING & GLOWING */}
                <div className="relative mb-12">
                    <motion.div
                        className="absolute inset-0 bg-primary/20 blur-2xl rounded-full"
                        animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    />
                    <svg
                        viewBox="0 0 100 100"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-24 w-24 relative z-10"
                    >
                        <motion.path
                            d="M0 0L40 100L55 100L15 0H0Z"
                            fill="#22d3ee"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ duration: 1.5, ease: "easeInOut" }}
                        />
                        <motion.path
                            d="M100 0L60 100L45 100L85 0H100Z"
                            fill="#3b82f6"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ duration: 1.5, ease: "easeInOut", delay: 0.2 }}
                        />
                    </svg>
                </div>

                {/* Loading Text & Status */}
                <div className="text-center space-y-4">
                    <div className="flex flex-col items-center">
                        <motion.span
                            className="text-[2.5rem] font-bold tracking-tight font-['Outfit'] text-white"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                        >
                            VYON<span className="text-primary">LABS</span>
                        </motion.span>
                        <div className="flex items-center gap-2 mt-2">
                            <motion.div
                                className="w-1.5 h-1.5 rounded-full bg-primary"
                                animate={{ opacity: [0, 1, 0] }}
                                transition={{ duration: 1, repeat: Infinity }}
                            />
                            <span className="text-[10px] uppercase tracking-[0.4em] text-primary/60 font-medium">
                                Initializing Neural Core
                            </span>
                        </div>
                    </div>

                    {/* Progress Bar Container */}
                    <div className="w-64 h-[1px] bg-white/10 relative overflow-hidden mt-8">
                        <motion.div
                            className="absolute inset-y-0 left-0 bg-gradient-to-r from-transparent via-primary to-transparent"
                            style={{ width: `${progress}%` }}
                        />
                        {/* Scanning Effect */}
                        <motion.div
                            className="absolute inset-y-0 w-20 bg-primary/40 blur-sm"
                            animate={{ left: ['-20%', '120%'] }}
                            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                        />
                    </div>

                    <div className="flex justify-between w-64 text-[9px] uppercase tracking-widest text-white/30 font-mono">
                        <span>SYSTEM_READY</span>
                        <span>{progress}%</span>
                    </div>
                </div>
            </div>

            {/* Background Atmosphere */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px]" />
            </div>
        </motion.div>
    );
};

export default Preloader;
