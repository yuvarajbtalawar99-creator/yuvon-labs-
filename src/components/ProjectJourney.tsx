import { motion } from 'framer-motion';
import {
    MessageSquare,
    UserCheck,
    Cpu,
    Rocket,
    Star,
    ChevronRight,
    ChevronDown,
    ClipboardCheck,
    Network,
    Package,
    Smile
} from 'lucide-react';

const steps = [
    {
        title: "Client Request",
        description: "You share your idea and requirements",
        icon: MessageSquare,
        color: "from-cyan-400 to-blue-600",
        glow: "rgba(34, 211, 238, 0.5)"
    },
    {
        title: "Project Manager Assigned",
        description: "A dedicated PM takes full ownership",
        icon: UserCheck,
        color: "from-purple-500 to-pink-500",
        glow: "rgba(168, 85, 247, 0.5)"
    },
    {
        title: "Built by VYON LABS",
        description: "Our engineers design, build, and test",
        noBackground: true,
        icon: () => (
            <div className="flex items-end gap-[1px] transform scale-[0.6] md:scale-75 lg:scale-95">
                {/* V Logo Mark */}
                <svg
                    viewBox="0 0 100 100"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-[2.5rem] w-auto mb-1"
                >
                    <path d="M0 0L40 100L55 100L15 0H0Z" fill="#22d3ee" />
                    <path d="M100 0L60 100L45 100L85 0H100Z" fill="#3b82f6" />
                </svg>

                {/* YO */}
                <span className="text-[2.5rem] font-bold leading-[1] tracking-tight font-['Outfit'] text-cyan-400">
                    YO
                </span>

                {/* N + LABS */}
                <div className="flex flex-col items-start leading-[1] translate-y-[-2px]">
                    <span className="text-[2.5rem] font-bold tracking-tight font-['Outfit'] text-cyan-400">
                        N
                    </span>

                    <span className="mt-[1px] text-[0.45rem] font-medium tracking-[0.35em] text-white/90">
                        LABS
                    </span>
                </div>
            </div>
        ),
        color: "from-cyan-400 to-blue-600",
        glow: "rgba(34, 211, 238, 0.5)"
    },
    {
        title: "Product Delivered",
        description: "Production-ready software delivered",
        icon: Rocket,
        color: "from-orange-500 to-yellow-400",
        glow: "rgba(249, 115, 22, 0.5)"
    },
    {
        title: "Customer Success",
        description: "You launch with confidence",
        icon: Star,
        color: "from-amber-400 to-white",
        glow: "rgba(251, 191, 36, 0.5)"
    }
];

const ProjectJourney = () => {
    return (
        <section id="journey" className="section-padding relative overflow-hidden bg-background/50">
            {/* Background elements */}
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] -z-10 animate-pulse" />
            <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-violet-500/10 rounded-full blur-[120px] -z-10 animate-pulse" style={{ animationDelay: '2s' }} />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-24">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-3 block">Process</span>
                        <h2 className="text-4xl md:text-6xl font-bold mb-6 font-['Outfit'] tracking-tight">
                            From <span className="gradient-text">Idea</span> to <span className="gradient-text">Impact</span>
                        </h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
                            We take full ownership of your project—from the first discussion to final delivery.
                        </p>
                    </motion.div>
                </div>

                <div className="relative">
                    {/* Connecting Line - Desktop */}
                    <div className="hidden lg:block absolute top-[70px] left-[10%] right-[10%] h-[2px] -z-0">
                        <div className="absolute inset-0 bg-white/5" />
                        <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-orange-500 shadow-[0_0_15px_rgba(59,130,246,0.3)]"
                            initial={{ scaleX: 0, originX: 0 }}
                            whileInView={{ scaleX: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.5, ease: "easeInOut", delay: 0.5 }}
                        />
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-4 relative">
                        {steps.map((step, index) => (
                            <div key={index} className="relative group">
                                {/* Connector for Mobile */}
                                {index < steps.length - 1 && (
                                    <div className="lg:hidden absolute -bottom-10 left-1/2 -translate-x-1/2 z-0">
                                        <motion.div
                                            animate={{ y: [0, 5, 0] }}
                                            transition={{ duration: 2, repeat: Infinity }}
                                        >
                                            <ChevronDown className="w-6 h-6 text-primary/30" />
                                        </motion.div>
                                    </div>
                                )}

                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.2 }}
                                    className="flex flex-col items-center"
                                >
                                    {/* Icon Container - Redesigned for 3D/Neon look */}
                                    <motion.div
                                        whileHover={{ scale: 1.15, rotate: 2 }}
                                        className="relative w-28 h-28 lg:w-36 lg:h-36 mb-8 z-10 perspective-1000"
                                    >
                                        {/* Main Glass Card */}
                                        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent backdrop-blur-2xl rounded-3xl border border-white/20 shadow-2xl transition-all duration-500 group-hover:border-white/40" />

                                        {/* Colored Glow Layer */}
                                        <div
                                            className={`absolute inset-4 rounded-full blur-2xl opacity-20 group-hover:opacity-50 transition-opacity duration-500 bg-gradient-to-br ${step.color}`}
                                        />

                                        {/* Icon Wrapper for 3D effect */}
                                        <div className="absolute inset-0 flex items-center justify-center translate-z-10">
                                            <div className={`relative ${step.noBackground ? '' : `p-5 rounded-2xl bg-gradient-to-br ${step.color} shadow-[0_10px_30px_-10px_rgba(0,0,0,0.5)]`} transform transition-transform duration-500 group-hover:-translate-y-2 flex items-center justify-center w-full h-full`}>
                                                <step.icon className="w-8 h-8 lg:w-11 lg:h-11 text-white filter drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]" />

                                                {/* Overlay highlight for 3D feel */}
                                                {!step.noBackground && <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent opacity-50 rounded-2xl" />}
                                            </div>
                                        </div>

                                        {/* Subtle Outer Neon Ring */}
                                        <div className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 border border-white/10 blur-[1px]" />
                                    </motion.div>

                                    {/* Content */}
                                    <div className="text-center px-4 max-w-[180px]">
                                        <h3 className="text-base font-bold mb-2 font-['Outfit'] tracking-[0.05em] text-white/90 group-hover:text-primary transition-all duration-300">
                                            {step.title}
                                        </h3>
                                        <p className="text-[13px] text-muted-foreground/80 leading-relaxed font-medium tracking-tight group-hover:text-muted-foreground transition-colors duration-300">
                                            {step.description}
                                        </p>
                                    </div>

                                    {/* Chevron for Desktop (Between steps) */}
                                    {index < steps.length - 1 && (
                                        <div className="hidden lg:block absolute top-[55px] -right-4 translate-x-1/2 z-20">
                                            <motion.div
                                                animate={{ x: [0, 5, 0] }}
                                                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                                                className="w-10 h-10 rounded-full bg-background/80 backdrop-blur-md border border-white/10 flex items-center justify-center shadow-lg"
                                            >
                                                <ChevronRight className="w-5 h-5 text-primary/50" />
                                            </motion.div>
                                        </div>
                                    )}
                                </motion.div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Call to Action */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1.2 }}
                    className="mt-28 text-center"
                >
                    <motion.a
                        href="#contact"
                        className="glow-button px-12 py-5 text-xl font-bold tracking-tight inline-block hover:scale-105 transition-transform cursor-pointer"
                    >
                        Start Your Project with VYON LABS
                    </motion.a>
                    <p className="mt-6 text-muted-foreground font-medium">
                        Ready to turn your idea into reality? <span className="text-primary cursor-pointer hover:underline">Let's talk.</span>
                    </p>
                </motion.div>
            </div>

            <style dangerouslySetInnerHTML={{
                __html: `
                .perspective-1000 {
                    perspective: 1000px;
                }
                .translate-z-10 {
                    transform: translateZ(20px);
                }
            `}} />
        </section>
    );
};

export default ProjectJourney;
