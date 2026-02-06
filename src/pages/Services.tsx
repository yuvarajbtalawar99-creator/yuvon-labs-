import ServicesSection from "@/components/ServicesSection";
import { motion } from "framer-motion";

const Services = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="min-h-screen bg-background"
        >
            <div className="pt-24">
                <ServicesSection />
            </div>
        </motion.div>
    );
};

export default Services;
