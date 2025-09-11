import TheBubbleHouseRentals from '@/assets/TheBubbleHouseRentals.png'
import InsuranceShoppe from '@/assets/InsuranceShoppe.png'
import Ivbc from '@/assets/Ivbc.png'
import Image from 'next/image';

const Projects = () => {
    const projects = [
        {
            id: 1,
            title: "The Bubble House Rentals",
            description: "An elegant and playful design for The Bubble House Rentals, balancing fun and excitement with a professional, polished presentation.",
            image: TheBubbleHouseRentals,
            tags: ["Vite", "React.js", "Tailwind CSS", "Lucide React", "React Hook Form", "Zod", "React Toastify", "Express", "Resend"]
        },
        {
            id: 2,
            title: "Insurance Shoppe",
            description: "A clean and trustworthy design for Insurance Shoppe, built to be easy to navigate and provide a clear, stress-free user experience.",
            image: InsuranceShoppe,
            tags: ["Next.js", "Tailwind CSS", "Lucide React", "React Hook Form", "Zod", "React Toastify", "React Email", "Resend"]
        },
        {
            id: 3,
            title: "Immanuel Vietnamese Baptist Church",
            description: "A clean, simple, and modern design for Immanuel Vietnamese Baptist Church that honors Vietnamese culture while creating an inviting and accessible online presence.",
            image: Ivbc,
            tags: ["Figma", "Next.js", "Tailwind CSS"]
        }
    ];

    return (
        <section id="projects" className="py-24 bg-gray-50">
            <div className="w-full max-w-[1400px] mx-auto px-4 md:px-8">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-8 md:mb-12">Some of My Work</h2>
                <p className="text-gray-700 mb-10 text-lg leading-relaxed max-w-3xl">
                    I stay pretty active when it comes to extra-curricular projects. Whether that means
                    contributing to an open source project, working on a passion project, or building a
                    website/web app for a freelance client.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {projects.map((project) => (
                        <div key={project.id} className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                            <div className="h-[240px] overflow-hidden pointer-events-none">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105 pointer-events-none"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-medium mb-3">{project.title}</h3>
                                <p className="text-gray-600 mb-5">{project.description}</p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag, index) => (
                                        <span
                                            key={index}
                                            className="inline-block text-sm py-1 px-3 bg-gray-100 rounded-full mr-2 mb-2"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;