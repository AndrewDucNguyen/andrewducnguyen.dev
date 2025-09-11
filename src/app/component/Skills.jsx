const Skills = () => {
    const skills = [
        "JavaScript ES6+", "React", "Redux", "Vue", "Next.js",
        "TypeScript", "Tailwind CSS", "HTML/CSS", "Git",
        "Node.js", "Express", "UI/UX Design", "Figma", "RESTful API",
        "Responsive Design", "CSS Modules", "CI/CD", "AWS", "Python", "Java", "Springboot"
    ];

    return (
        <section id="skills" className="py-24">
            <div className="w-full max-w-[1400px] mx-auto px-4 md:px-8">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-8 md:mb-12">My Skills</h2>

                <div className="mb-8">
                    <p className="text-gray-700 mb-10 text-lg leading-relaxed max-w-3xl">
                        From the beginning days of when I first got into software development up until now,
                        I&apos;ve learned and gained a solid understanding of web development standards, the importance
                        of reusability/scalability in large enterprise applications, and how user experience means everything.
                    </p>
                </div>

                <div className="flex flex-wrap">
                    {skills.map((skill, index) => (
                        <span key={index} className="inline-block text-sm py-1 px-3 bg-gray-100 rounded-full mr-2 mb-2">
                            {skill}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;