import { href } from "react-router-dom"
import { cn } from "../lib/utils"
import { useEffect, useState } from "react"
import Switch from "./Switch"
import { Menu, X } from "lucide-react"


const navItems=[
    {name:"Home",href:"#hero"},
    {name:"About",href:"#about"},
    {name:"Skills",href:"#skills"},
    {name:"Projects",href:"#project"},
    {name:"Contacts",href:"#contacts"},
]

export const Navbar=()=>{

    const [isScrolled,setIsScrolled]=useState(false);
    const [isMenuOpen,setIsMenuOpen]=useState(false);

    useEffect(()=>{
        const handleScroll=()=>{
            setIsScrolled(window.screenY>10);
        }

        window.addEventListener("scroll",handleScroll);
        return()=> window.removeEventListener("scroll",handleScroll);
    },[]);



    return(
        <nav className={cn("fixed bg-background w-full z-10 transition-all duration-300", isScrolled? "py-3 bg-background/80 backdrop-blur-md shadow-xs": "py-5")}>

            <div className="container flex items-center justify-between">
                <a className="sm:text-xl font-bold text-primary flex items-center" href="#hero">
                    <span className=" z-10">
                        <span className="text-glow text-foreground">Bhanu Ahlawat  </span>
                        Portfolio
                    </span>
                </a>

                {/* Desktop View */}
                <div className="hidden md:flex space-x-15 pr-15">
                    {navItems.map((item,key)=>(
                        <a key={key} href={item.href} className="text-foreground/80 hover:text-primary transition-colors duration-300 ">
                            {item.name}  
                        </a>
                    ))}
                </div>

                {/* Mobile View */}

                <button
                  onClick={() => setIsMenuOpen((prev) => !prev)}
                  className="md:hidden fixed flex-1/4 right-25 text-foreground z-50"
                //   aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
                >
                  {isMenuOpen ? <X size={24} /> : <Menu size={24} />}{" "}
                </button>

                <div
                  className={cn(
                    "fixed inset-0 z-40 flex flex-col items-center justify-center",
                    " backdrop-blur-sm transition-all duration-300 md:hidden",
                    {
                      "opacity-100 pointer-events-auto": isMenuOpen,
                      "opacity-0 pointer-events-none": !isMenuOpen,
                    }
                  )}
                >
                    <div className="flex flex-col space-y-2 text-xl">
                        {navItems.map((item,key)=>(
                            <a key={key} href={item.href} className="text-foreground/80 hover:text-primary transition-colors duration-300 "
                                onClick={()=>setIsMenuOpen(false)}
                            
                            >
                                {item.name}  
                                
                            </a>
                        ))}
                    </div>
                </div>

            </div>
        </nav>
    )
}