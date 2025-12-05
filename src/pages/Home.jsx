import { AboutSection } from "../components/AboutSection"
import { ContactSection } from "../components/ContactSection"
import { Footer } from "../components/Footer"
import { HeroSection } from "../components/HeroSection"
import { Navbar } from "../components/Navbar"
import { ProjectSection } from "../components/ProjectSections"
import { SkillSection } from "../components/SkillSection"
import { StarBackground } from "../components/StarBackground"
import Switch from "../components/Switch"
// import { ThemeToggle } from "../components/ThemeToggle"

export const Home=()=>{
    return(
        <>
        <div id="hero" className="min-h-screen bg-background text-foreground overflow-x-hidden">
        {/* .............................................................Theme toggle...............................................................*/}

        {/* <ThemeToggle/> */}

        <Switch/>

        {/* ...........................................................BackGround Effect............................................................ */}


        <StarBackground/>

        {/*................................................................Navbar.................................................................... */}


        <Navbar/>

        {/* .............................................................Main Content................................................................ */}

        <main>
            <HeroSection/>
            <AboutSection/>
            <SkillSection/>
            <ProjectSection/>
            <ContactSection/>
        </main>


        {/* ...............................................................Footer.................................................................... */}

        <Footer/>

        </div>

        </>
    )

}