import { ArrowDown } from "lucide-react"
import VoltageButton from "./VoltageButton"

export const HeroSection=()=>{
    return(
        <section 
            id="Hero"
            className="relative min-h-screen flex flex-col items-center justify-center px-4"
        >
            <div className="container max-w-4xl mx-auto text-center">
                <div className="space-y-6">
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                        <span className="opacity-0 animate-fade-in-delay-1">Hi, I'm </span>
                        <span className="opacity-0 animate-fade-in-delay-2 text-primary">Bhanu </span>
                        <span className="opacity-0 animate-fade-in-delay-3 ">Ahlawat </span>
                    </h1>

                    <p className="text-lg  md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-4">
                    I'm a passionate B.Tech student with a strong foundation in software development and web technologies. 
                    Skilled in C++, Python, HTML, CSS, and JavaScript, I specialize in building modern, responsive, and interactive web interfaces.
                    </p>

                    <div className="pt-4 animate-[fadeIn_1s_ease-out_2s_forwards] opacity-0">
                        <a href="#project">
                            <VoltageButton/>
                        </a>
                    </div>
                </div>
            </div>

            <div className="absolute bottom-8 transform flex flex-col items-center justify-center animate-bounce">
                <span className="text-xl text-muted-foreground mb-2">Scroll</span>
                <a href="#about"><ArrowDown className="w-5 h-5 text-primary"/></a>
            </div>

        </section>
    )
}