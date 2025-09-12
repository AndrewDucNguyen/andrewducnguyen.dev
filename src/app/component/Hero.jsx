const Hero = () => {
    return (
        <section className="min-h-screen flex items-center pt-32 pb-20">
            <div className="w-full max-w-[1400px] mx-auto px-4 md:px-8">
                <div className="max-w-4xl">
                    <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight mb-8 tracking-tight">
                        Yo, I&apos;m Andrew. <br />
                        <span className="text-black">Software Engineer</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-600 max-w-2xl leading-relaxed">
                        I craft thoughtful and impactful digital experiences through design and code - combining clean aesthetics with intuitive, user-centered interfaces.
                    </p>
                    <div className="mt-12">
                        <a
                            href="#projects"
                            className="group inline-flex items-center px-6 py-3 font-medium bg-black text-white rounded hover:bg-gray-800 transition-all duration-300"
                        >
                            View My Work
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

export default Hero;