
import { Mail, Phone } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="py-24">
            <div className="w-full max-w-[1400px] mx-auto px-4 md:px-8">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-8 md:mb-12 text-center">Get In Touch</h2>
                    <p className="text-lg text-gray-600 mb-12 text-center max-w-xl mx-auto">
                        Interested in working together? Feel free to reach out for collaborations or just a friendly hello.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left mb-14">
                        <div className="flex items-center bg-gray-50 p-6 rounded-lg">
                            <div className="bg-black p-4 rounded-full mr-5">
                                <Mail size={24} className="text-white" />
                            </div>
                            <div>
                                <p className="text-sm text-gray-500 mb-1">Email</p>
                                <a href="mailto:anguyen0615@gmail.com" className="text-lg font-medium hover:text-gray-600 transition-colors">
                                    anguyen0615@gmail.com
                                </a>
                            </div>
                        </div>

                        <div className="flex items-center bg-gray-50 p-6 rounded-lg">
                            <div className="bg-black p-4 rounded-full mr-5">
                                <Phone size={24} className="text-white" />
                            </div>
                            <div>
                                <p className="text-sm text-gray-500 mb-1">Phone</p>
                                <a href="tel:+13163124946" className="text-lg font-medium hover:text-gray-600 transition-colors">
                                    +1 (316) 312-4946
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="text-center">
                        <a
                            href="mailto:anguyen0615@gmail.com"
                            className="group inline-flex items-center px-8 py-4 font-medium bg-black text-white rounded hover:bg-gray-800 transition-all duration-300"
                        >
                            Say Hello
                            <svg className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;