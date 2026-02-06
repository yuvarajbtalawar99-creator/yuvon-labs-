import ProjectsSection from "@/components/ProjectsSection";
import { motion } from "framer-motion";

const Projects = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="min-h-screen bg-background"
        >
            <div className="pt-24">
                <ProjectsSection />
            </div>
        </motion.div>
    );
};

export default Projects;
