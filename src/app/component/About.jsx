import Image from 'next/image';
import me from '@/assets/me.jpg'

const About = () => {
    return (
        <section id="about" className="py-24 bg-gray-50">
            <div className="w-full max-w-[1400px] mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <div className="bg-white shadow-lg h-[400px] md:h-[500px] w-full rounded-lg overflow-hidden">
                        <Image
                            src={me}
                            alt="Andrew Duc Nguyen"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-8 md:mb-12">About Me</h2>
                        <p className="text-gray-700 mb-5 leading-relaxed">
                            I’m Andrew, a designer and developer with over 4 years of experience building digital products that are both impactful and intuitive. My approach blends clean aesthetics with thoughtful interactions, focusing on creating user-centered experiences that communicate clearly and function seamlessly.
                        </p>
                        <p className="text-gray-700 mb-5 leading-relaxed">
                            Beyond engineering, my life is deeply shaped by my faith. I’m a Christian involved in ministry, and I seek to reflect those values of service, integrity, and purpose in both my personal and professional work.
                        </p>
                        <p className="text-gray-700 mb-5 leading-relaxed">
                            When I’m not coding or serving in ministry, you’ll probably find me on the volleyball court, reading, or enjoying a good cup of coffee with my wife and our dogs.
                        </p>

                        <div className="mt-10">
                            <a
                                href="#contact"
                                className="group inline-flex items-center px-6 py-3 font-medium bg-black text-white rounded hover:bg-gray-800 transition-all duration-300"
                            >
                                Get in Touch
                                <svg className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;