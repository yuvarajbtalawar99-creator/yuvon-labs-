import TeamSection from "@/components/TeamSection";
import { motion } from "framer-motion";

const Team = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="min-h-screen bg-background"
        >
            <div className="pt-24">
                <TeamSection />
            </div>
        </motion.div>
    );
};

export default Team;
