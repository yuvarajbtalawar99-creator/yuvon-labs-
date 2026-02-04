import { motion } from 'framer-motion';
import { ArrowLeft, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const PrivacyPolicy = () => {
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
                                <Shield size={32} />
                            </div>
                            <div>
                                <h1 className="text-3xl md:text-4xl font-bold font-['Outfit']">Privacy Policy</h1>
                                <p className="text-muted-foreground">Effective Date:2026</p>
                            </div>
                        </div>

                        <div className="prose prose-invert max-w-none space-y-8 text-muted-foreground leading-relaxed">
                            <section>
                                <p className="text-lg">
                                    This Privacy Policy describes how VYON LABS collects, uses, discloses, and protects personal information when you access our website, platforms, products, and services.
                                </p>
                            </section>

                            <section className="bg-white/5 p-6 rounded-2xl border border-white/10">
                                <h2 className="text-xl font-bold text-foreground mb-4 font-['Outfit'] uppercase tracking-wider">VYON LABS’ PRIVACY COMMITMENT</h2>
                                <p className="mb-4">Our mission is to build reliable, secure, and future-ready technology solutions. Trust is central to that mission.</p>
                                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <li className="flex items-center gap-2">
                                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                                        Do not sell or rent personal information
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                                        Use data only to deliver and improve services
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                                        Apply security-first principles
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                                        Act transparently and responsibly
                                    </li>
                                </ul>
                            </section>

                            <section>
                                <h2 className="text-xl font-bold text-foreground mb-4 font-['Outfit']">1. SCOPE OF THIS POLICY</h2>
                                <p className="mb-4">This Policy applies to the collection and processing of personal information related to:</p>
                                <div className="grid gap-4">
                                    <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                                        <h3 className="font-bold text-foreground mb-1">a) Website Visitors</h3>
                                        <p className="text-sm">Users who browse our website, submit forms, or interact with our content.</p>
                                    </div>
                                    <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                                        <h3 className="font-bold text-foreground mb-1">b) Customers</h3>
                                        <p className="text-sm">Individuals or organizations using Vyon Labs’ services, products, or platforms.</p>
                                    </div>
                                    <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                                        <h3 className="font-bold text-foreground mb-1">c) Administrative Users</h3>
                                        <p className="text-sm">Authorized users managing accounts, dashboards, or services.</p>
                                    </div>
                                    <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                                        <h3 className="font-bold text-foreground mb-1">d) End Users</h3>
                                        <p className="text-sm">Users who access customer applications, APIs, or platforms powered by Vyon Labs.</p>
                                    </div>
                                    <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                                        <h3 className="font-bold text-foreground mb-1">e) Business Contacts</h3>
                                        <p className="text-sm">Individuals who communicate with us via email, meetings, demos, or events.</p>
                                    </div>
                                </div>

                            </section>

                            <section>
                                <h2 className="text-xl font-bold text-foreground mb-4 font-['Outfit']">2. INFORMATION WE COLLECT</h2>
                                <div className="space-y-4">
                                    <div>
                                        <h3 className="font-bold text-foreground mb-2">A. Information You Provide</h3>
                                        <p>Name, email address, phone number, organization details, and project/inquiry information.</p>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-foreground mb-2">B. Automatically Collected Information</h3>
                                        <p>IP address, device & browser type, log data, timestamps, and interaction history.</p>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-foreground mb-2">C. Service & Usage Data</h3>
                                        <p>Account configuration details, API metadata, security, and performance logs.</p>
                                    </div>
                                </div>
                            </section>

                            <section>
                                <h2 className="text-xl font-bold text-foreground mb-4 font-['Outfit']">3. HOW WE USE INFORMATION</h2>
                                <p>We process data for legitimate business purposes including: operating services, support, performance improvements, security monitoring, and legal compliance.</p>
                            </section>

                            <section>
                                <h2 className="text-xl font-bold text-foreground mb-4 font-['Outfit']">4. COOKIES & TRACKING</h2>
                                <p>We use cookies to improve functionality, analyze traffic, and enhance experience. You may control cookies via browser settings.</p>
                            </section>

                            <section>
                                <h2 className="text-xl font-bold text-foreground mb-4 font-['Outfit']">5. DATA SHARING</h2>
                                <p>Sharing occurs with trusted providers (hosting, analytics), for legal obligations, or during business transactions. We do not allow third-party marketing use of your data.</p>
                            </section>

                            <section>
                                <h2 className="text-xl font-bold text-foreground mb-4 font-['Outfit']">6. DATA SECURITY & RETENTION</h2>
                                <p className="mb-4">We implement encryption, access controls, and regular audits. Data is retained only for duration necessary for business fulfillment or legal requirements.</p>
                            </section>

                            <section className="border-t border-white/10 pt-8 mt-12">
                                <h2 className="text-xl font-bold text-foreground mb-4 font-['Outfit']">CONTACT INFORMATION</h2>
                                <div className="bg-primary/5 rounded-2xl p-6 border border-primary/20 space-y-3">
                                    <p className="font-bold text-primary">VYON LABS</p>
                                    <p className="flex items-center gap-2">
                                        <span className="text-muted-foreground">Email:</span>
                                        <a
                                            href="https://mail.google.com/mail/?view=cm&fs=1&to=vyonailabs@gmail.com"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-foreground hover:text-primary transition-colors"
                                        >
                                            vyonailabs@gmail.com
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

export default PrivacyPolicy;
