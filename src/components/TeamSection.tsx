import { motion } from 'framer-motion';
import { useRef } from 'react';

const teamMembers = [
    {
        name: 'Yuvaraj',
        role: 'Operations Lead & Developer',
        image: '/team/Yuvaraj.jpeg',
    },
    {
        name: 'Sourabh',
        role: 'Marketing Head & Business Analyst',
        image: '/team/Sourabh.jpeg',
    },
    {
        name: 'Aditi',
        role: 'Project Manager & Social Media Manager',
        image: '/team/Aditi.jpeg',
    },
    {
        name: 'Arihant',
        role: 'Developer',
        image: '/team/Arihant.jpeg',
    }
];

const TeamSection = () => {
    const sectionRef = useRef<HTMLElement>(null);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const cards = document.getElementsByClassName('glass-card-glow');
        for (const card of cards) {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            (card as HTMLElement).style.setProperty('--mouse-x', `${x}px`);
            (card as HTMLElement).style.setProperty('--mouse-y', `${y}px`);
        }
    };

    return (
        <section id="team" ref={sectionRef} className="section-padding relative overflow-hidden">
            {/* Background details */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -z-10" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-bold mb-4 font-['Outfit']"
                    >
                        Our <span className="gradient-text">Team</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-muted-foreground max-w-2xl mx-auto"
                    >
                        We are a group of innovative, experienced, and proficient teams.
                        You will love to collaborate with us.
                    </motion.p>
                    <div className="w-20 h-1 bg-primary/30 mx-auto mt-6 rounded-full" />
                </div>

                <div
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto"
                    onMouseMove={handleMouseMove}
                >
                    {teamMembers.map((member, index) => (
                        <motion.div
                            key={member.name}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                            className={`glass-card-glow group p-6 flex flex-col items-center text-center ${member.name === 'Yuvaraj' ? 'border-primary/40 ring-1 ring-primary/20 scale-105 z-10' : ''}`}
                        >
                            <div className="relative mb-6">
                                <div className="w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden border-2 border-primary/20 group-hover:border-primary/50 transition-colors duration-300">
                                    {member.image ? (
                                        <img
                                            src={member.image}
                                            alt={member.name}
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                        />
                                    ) : (
                                        <div className="w-full h-full bg-muted flex items-center justify-center">
                                            <p className="text-[10px] text-muted-foreground">No Image</p>
                                        </div>
                                    )}
                                </div>
                                <div className="absolute -inset-1 rounded-full bg-primary/20 blur opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
                            </div>

                            <div className="relative z-10 w-full">
                                <h3 className="text-lg font-bold mb-1 font-['Outfit'] group-hover:text-primary transition-colors leading-tight">
                                    {member.name}
                                </h3>
                                <p className="text-[10px] text-muted-foreground uppercase tracking-widest font-medium leading-tight">
                                    {member.role}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TeamSection;
