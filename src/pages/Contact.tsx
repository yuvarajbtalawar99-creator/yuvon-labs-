import ContactSection from "@/components/ContactSection";
import { motion } from "framer-motion";

const Contact = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="min-h-screen bg-background"
        >
            <div className="pt-24">
                <ContactSection />
            </div>
        </motion.div>
    );
};

export default Contact;
