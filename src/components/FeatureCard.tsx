import { motion } from 'framer-motion';
import { Network, Database, Layers, ArrowUp } from 'lucide-react';

const FeatureCard = () => {
    return (
        <div className="relative w-full max-w-[600px] aspect-[1.8/1] mx-auto">
            {/* Main Glass Card */}
            <div className="absolute inset-0 rounded-[2rem] overflow-hidden border border-white/10 bg-black/40 backdrop-blur-xl shadow-2xl">
                {/* Glow Effects */}
                <div className="absolute top-0 left-1/4 w-1/2 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-50 blur-[2px]" />
                <div className="absolute bottom-0 right-1/4 w-1/2 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-50 blur-[2px]" />

                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />

                {/* Content Container */}
                <div className="relative h-full flex flex-col p-8 md:p-10 justify-between z-10">

                    {/* Header */}
                    <div>
                        <div className="flex items-center gap-2 mb-1">
                            <span className="text-2xl md:text-3xl font-bold tracking-wider font-['Outfit'] text-cyan-400">VYON</span>
                            <span className="text-2xl md:text-3xl font-light tracking-widest font-['Outfit'] text-white/90">LABS</span>
                        </div>
                        <div className="text-sm md:text-base text-gray-400 tracking-wide">Engineering Excellence</div>
                    </div>

                    {/* Central Area - Clean/Empty or Subtle Glow */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <div className="w-full h-full bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent opacity-30" />
                    </div>

                    {/* Footer Stats */}
                    <div className="flex justify-between items-end relative z-20 gap-2 md:gap-4">
                        {/* Stat 1 */}
                        <div className="text-center group min-w-[60px]">
                            <div className="text-xl md:text-2xl font-bold text-white mb-1">10</div>
                            <div className="text-[10px] md:text-xs text-gray-400">Projects Deliverd</div>
                        </div>

                        {/* Stat 2 */}
                        <div className="text-center group flex flex-col items-center min-w-[60px]">
                            <Network className="w-5 h-5 md:w-6 md:h-6 text-gray-400 mb-2 group-hover:text-cyan-400 transition-colors" />
                            <div className="text-[10px] md:text-xs text-gray-400">Reliable Systems</div>
                        </div>

                        {/* Stat 3 */}
                        <div className="text-center group flex flex-col items-center min-w-[60px]">
                            <Database className="w-5 h-5 md:w-6 md:h-6 text-gray-400 mb-2 group-hover:text-cyan-400 transition-colors" />
                            <div className="text-[10px] md:text-xs text-gray-400">Scalable SaaS</div>
                        </div>

                        {/* Stat 4 */}
                        <div className="text-center group min-w-[60px]">
                            <div className="text-xl md:text-2xl font-bold text-white mb-1">10</div>
                            <div className="text-[10px] md:text-xs text-gray-400">Deployed</div>
                        </div>

                        {/* Growth Indicator - Separate Column */}
                        <div className="flex flex-col items-center min-w-[80px] pb-1">
                            <div className="flex items-center gap-1 mb-1">
                                <span className="text-2xl md:text-3xl font-bold text-white"></span>
                                <motion.div
                                    animate={{ y: [0, -4, 0], opacity: [0.5, 1, 0.5] }}
                                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                                >
                                    <ArrowUp className="w-4 h-4 md:w-5 md:h-5 text-cyan-400" />
                                </motion.div>
                            </div>
                            <div className="text-center">
                                <div className="text-base md:text-lg font-bold text-white leading-none">99.9%</div>
                                <div className="text-[9px] md:text-[10px] text-gray-400 whitespace-nowrap mt-1">Trusted Technology</div>
                            </div>

                            {/* Sparkle decoration */}
                            <motion.div
                                className="absolute -top-4 right-4 w-1 h-1 bg-cyan-400 rounded-full blur-[1px]"
                                animate={{ opacity: [0, 1, 0], scale: [0, 1.5, 0] }}
                                transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Background Glows for the card */}
            <div className="absolute -inset-1 bg-cyan-500/20 rounded-[2.1rem] blur-xl -z-10" />
        </div>
    );
};

export default FeatureCard;
