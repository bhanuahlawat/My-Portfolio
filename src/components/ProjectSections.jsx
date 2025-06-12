import { ExternalLink, Github } from "lucide-react"

const projects =[
    {
        id:1,
        title:"Danveer",
        description: "A clean and responsive platform that enables users to donate books easily.Built with HTML, CSS, JavaScript, it promotes knowledge sharing and supports education through effortless book contributions.",
        image:"/projects/project1.png",
        tags: ["Html","Css","JavaScript"],
        demoUrl: "https://bhanuahlawat.github.io/Danveer/",
        githubUrl:"https://github.com/bhanuahlawat/Danveer",
    },

    {
        id:2,
        title:"Netflix Page",
        description: "A sleek and responsive Netflix-inspired webpage built with HTML, CSS, JavaScript, and React. It features a modern UI with movie thumbnails, hover effects, and responsive layout — mimicking the look and feel of the original platform.",
        image:"/projects/project2.png",
        tags: ["Html","TailwindCss","JavaScript","React"],
        demoUrl: "https://netflix-page-lake.vercel.app/",
        githubUrl:"https://github.com/bhanuahlawat/Netflix-new",
    },

    {
        id:3,
        title:"Stone Paper Scissor",
        description: "A fun and interactive browser-based game built with HTML, CSS, and JavaScript. Users can play against the computer with real-time results, smooth animations, and clean UI for an engaging experience.",
        image:"/projects/project3.png",
        tags: ["Html","Css","JavaScript"],
        demoUrl: "http://bhanuahlawat.github.io/Stone-Paper-Scissor/",
        githubUrl:"https://github.com/bhanuahlawat/Stone-Paper-Scissor",
    }
]

export const ProjectSection=()=>{
    return(
        <section id="project" className="px-5 py-20 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    Featured<span className="text-primary"> Projects</span>
                </h2>
                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Here are some of my recent projects. Each project was carefully
                    crafted with attention to detail, performance, and user experience.
                </p>
            
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {
                        projects.map((project,key)=>(
                            <div 
                            key={key}
                            className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">
                                <div className="h-48 overflow-hidden">
                                    <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                                </div>

                                <div className="p-6">
                                    <div className="flex flex-wrap gap-3 mb-4"> 
                                        {project.tags.map((tag)=>(
                                            <span className="px-2 py-1 text-xs border font-medium rounded-full bg-secondary text-secondary-foreground">
                                                {tag}
                                            </span>
                                        ))}

                                    </div>
                                </div>

                                <h3 className="text-xl font-semibold mb-2 ">{project.title}</h3>
                                <p className="flex gap-2 mb-10">{project.description}</p>

                                <div className="flex justify-between items-center">
                                    <div className="flex space-x-3">
                                        <a href={project.demoUrl} 
                                        target="_blank"
                                        className="text-foreground/80 hover:text-primary transition-colors duration-300">
        
                                            <ExternalLink size={20}/>
                                        </a>
                                        <a href={project.githubUrl} className=" text-foreground/80 hover:text-primary transition-colors duration-300">
                                            <Github size={20}/>
                                        </a>
                                    </div>
                                </div>

                            </div>
                        ))}
                </div>
                <div className="text-center mt-12">
                    <a
                    className="cosmic-button w-fit flex items-center mx-auto gap-2"
                    target="_blank"
                    href="https://github.com/bhanuahlawat"
                    >
                        Check My Github
                    </a>
                </div>
            </div>
        </section>
    )
}