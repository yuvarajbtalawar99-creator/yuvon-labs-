import { motion } from 'framer-motion';
import { ArrowLeft, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const TermsOfService = () => {
    return (
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
            <Navbar />

            <main className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
                <Link
                    to="/"
                    className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-12 group"
                >
                    <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                    Back to Home
                </Link>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="glass-card p-8 md:p-12 relative overflow-hidden"
                >
                    {/* Background Highlight */}
                    <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/10 rounded-full blur-[80px]" />

                    <div className="relative z-10">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="p-3 rounded-xl bg-primary/10 text-primary">
                                <FileText size={32} />
                            </div>
                            <div>
                                <h1 className="text-3xl md:text-4xl font-bold font-['Outfit']">Terms of Service</h1>
                                <p className="text-muted-foreground">Effective Date: 2026</p>
                            </div>
                        </div>

                        <div className="prose prose-invert max-w-none space-y-8 text-muted-foreground leading-relaxed">
                            <section>
                                <p className="text-lg">
                                    These Terms of Service govern your access to and use of the website, products, platforms, software, APIs, and services provided by VYON LABS.
                                    By accessing or using our services, you agree to be bound by these Terms.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-xl font-bold text-foreground mb-4 font-['Outfit']">1. ACCEPTANCE OF TERMS</h2>
                                <p className="mb-4">By accessing our website or using any services offered by Vyon Labs, you confirm that you:</p>
                                <ul className="space-y-2 list-disc list-inside ml-4">
                                    <li>Have read and understood these Terms</li>
                                    <li>Agree to comply with them</li>
                                    <li>Have the legal authority to enter into this agreement</li>
                                </ul>
                                <p className="mt-4 text-sm text-destructive font-medium italic">If you do not agree, you must not use our services.</p>
                            </section>

                            <section>
                                <h2 className="text-xl font-bold text-foreground mb-4 font-['Outfit']">2. SERVICES OVERVIEW</h2>
                                <p className="mb-4">Vyon Labs provides technology solutions including, but not limited to:</p>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {[
                                        "AI-powered software and systems",
                                        "SaaS products and platforms",
                                        "Cloud and infrastructure services",
                                        "Custom software development",
                                        "APIs, dashboards, and integrations"
                                    ].map((service) => (
                                        <div key={service} className="p-3 rounded-xl bg-white/5 border border-white/5 flex items-center gap-2">
                                            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                                            <span className="text-sm">{service}</span>
                                        </div>
                                    ))}
                                </div>
                                <p className="mt-4 text-sm opacity-80">Service details may be updated, modified, or discontinued at our discretion.</p>
                            </section>

                            <section>
                                <h2 className="text-xl font-bold text-foreground mb-4 font-['Outfit']">4. ACCEPTABLE USE POLICY</h2>
                                <p className="mb-4 text-foreground font-medium">You agree not to:</p>
                                <div className="space-y-2 border-l-2 border-primary/30 pl-6">
                                    <p>• Use services for illegal or unauthorized purposes</p>
                                    <p>• Attempt to gain unauthorized access to systems or data</p>
                                    <p>• Interfere with or disrupt service infrastructure</p>
                                    <p>• Upload malicious code, malware, or harmful content</p>
                                    <p>• Reverse engineer or misuse our software or APIs</p>
                                </div>
                            </section>


                            <section>
                                <h2 className="text-xl font-bold text-foreground mb-4 font-['Outfit']">5. CUSTOMER CONTENT & DATA</h2>
                                <p>You retain ownership of your data. By using our services, you grant Vyon Labs a limited, non-exclusive license to process your data solely for providing and improving the services.</p>
                            </section>

                            <section>
                                <h2 className="text-xl font-bold text-foreground mb-4 font-['Outfit']">6. DISCLAIMERS & LIABILITY</h2>
                                <div className="space-y-4">
                                    <div>
                                        <h3 className="font-bold text-foreground mb-2">A. Disclaimer of Warranties</h3>
                                        <p>Services are provided “AS IS”. We do not guarantee uninterrupted, error-free service or specific results.</p>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-foreground mb-2">B. Limitation of Liability</h3>
                                        <p>To the maximum extent permitted by law, Vyon Labs shall not be liable for indirect or consequential damages. Total liability shall not exceed the amount paid in the preceding 12 months.</p>
                                    </div>
                                </div>
                            </section>

                            <section className="bg-white/5 p-6 rounded-2xl border border-white/10">
                                <h2 className="text-xl font-bold text-foreground mb-4 font-['Outfit'] uppercase tracking-wider">GOVERNING LAW</h2>
                                <p>These Terms shall be governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of courts located in India.</p>
                            </section>

                            <section className="border-t border-white/10 pt-8 mt-12">
                                <h2 className="text-xl font-bold text-foreground mb-4 font-['Outfit']">CONTACT INFORMATION</h2>
                                <div className="bg-primary/5 rounded-2xl p-6 border border-primary/20 space-y-3">
                                    <p className="font-bold text-primary">VYON LABS</p>
                                    <p className="flex items-center gap-2">
                                        <span className="text-muted-foreground">Email:</span>
                                        <a
                                            href="https://mail.google.com/mail/?view=cm&fs=1&to=vyonlabsofficial@gmail.com"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-foreground hover:text-primary transition-colors"
                                        >
                                            vyonlabsofficial@gmail.com
                                        </a>
                                    </p>
                                    <p className="flex items-center gap-2">
                                        <span className="text-muted-foreground">Website:</span>
                                        <a href="https://www.vyonlabs.com" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors">www.vyonlabs.com</a>
                                    </p>
                                </div>
                            </section>
                        </div>
                    </div>
                </motion.div>
            </main>

            <Footer />
        </div>
    );
};

export default TermsOfService;
