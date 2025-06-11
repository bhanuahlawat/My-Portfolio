// import { Contact, Figma, Linkedin, LinkedinIcon, Mail, MapPin, Phone, Send } from "lucide-react";
// import { cn } from "../lib/utils";
// import { toast } from "sonner";
// import { useState } from "react";

// export const ContactSection=()=>{

//     const [isSubmitting, setIsSubmitting] = useState(false);

//     const handleSubmit=(e)=>{
//         e.preventDefault()

//         setIsSubmitting(true);

//         setTimeout(() => {
//             toast.success("Message Sent!", {
//               description: "Thank you for your message. I'll get back to you soon.",
//         });
//         setIsSubmitting(false);
//     }, 1500);

//     }
//     return(
//         <section id="contacts" className="py-24 px-4 relative bg-secondary/30">
//             <div className="container mx-auto max-w-5xl">
//                 <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
//                     Get In<span className="text-primary"> Touch</span>
//                 </h2>

//                 <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
//                     I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Feel free to drop a message!
//                 </p>

//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
//                     <div className="space-y-8">
//                         <h3 className="text-2xl font-semibold mb-6">
//                             Contact Information
//                         </h3>

//                         <div className="space-y-6 justify-center">
//                             <div className="flex items-start space-x-4">
//                                 <div className="p-3 rounded-fullbg-primary/10">
//                                 <Mail className="h-6 w-6 text-primary"/>
//                                 </div>
//                                 <div>
//                                     <h4 className="font-medium">Email</h4>
//                                     <a 
//                                         href="mailto:bhanu1322ahlawat@gmail.com"
//                                         className="text-muted-foreground hover:text-primary transition-colors"                                    
//                                     >
//                                         bhanu1322ahlawat@gmail.com
//                                     </a>
//                                 </div>
//                             </div>


//                             <div className="flex items-start space-x-4">
//                                 <div className="p-3 rounded-fullbg-primary/10">
//                                 <Phone className="h-6 w-6 text-primary"/>
//                                 </div>
//                                 <div>
//                                     <h4 className="font-medium">Phone</h4>
//                                     <a 
//                                         href="tell:7078003071"
//                                         className="text-muted-foreground hover:text-primary transition-colors"                                    
//                                     >
//                                         +917078003071
//                                     </a>
//                                 </div>
//                             </div>


//                             <div className="flex items-start space-x-4">
//                                 <div className="p-3 rounded-fullbg-primary/10">
//                                 <MapPin className="h-6 w-6 text-primary"/>
//                                 </div>
//                                 <div>
//                                     <h4 className="font-medium">Location</h4>
//                                     <a 
//                                         href=""
//                                         className="text-muted-foreground hover:text-primary transition-colors"                                    
//                                     >
//                                         Greater Noida
//                                     </a>
//                                 </div>
//                             </div>
//                         </div>

//                         <div className="pt-8">
//                             <h4 className="font-medium mb-4">Connect With Me</h4>
//                             <div className="flex space-x-4 justify-center">
//                                 <a href="https://www.linkedin.com/in/bhanu-ahlawat-76683923a/" className="hover:text-primary">
//                                     <LinkedinIcon/>
//                                 </a>
         
//                                 {/* <a href="" className="hover:text-primary">
//                                     <LinkedinIcon/>
//                                 </a> */}
//                             </div>
//                         </div>                        
//                     </div>


//                     <div className="bg-card p-8 rounded-lg shadow-xs" onSubmit={handleSubmit}>
//                         <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>

//                         <form className="space-y-6">
//                             <div>
//                                 <label className="block text-sm font-medium mb-3" htmlFor="name">Your Name</label>
//                                 <input 
//                                 type="text" 
//                                 id="name" 
//                                 name="name" 
//                                 required 
//                                 className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
//                                 placeholder="Your Name...."
//                                 />
//                             </div>

//                             <div>
//                                 <label className="block text-sm font-medium mb-3" htmlFor="Email">Your Email</label>
//                                 <input 
//                                 type="text" 
//                                 id="Email" 
//                                 name="Email" 
//                                 required 
//                                 className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
//                                 placeholder="XYZ@gmail.com"
//                                 />
//                             </div>

//                             <div>
//                                 <label className="block text-sm font-medium mb-3" htmlFor="Message">Your Name</label>
//                                 <textarea 
//                                 type="text" 
//                                 id="Message" 
//                                 name="Message" 
//                                 required 
//                                 className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
//                                 placeholder="Type Here..."
//                                 />
//                             </div>
//                             <button 
//                                 type="submit"
//                                 disabled={isSubmitting} 
//                                 className={cn("cosmic-button w-full flex justify-center items-center gap-2")}>
//                                     {isSubmitting?"Sending....":"Send Message"}
//                                     <Send size={16}/> 
//                             </button>
//                         </form>
//                     </div>
//                 </div>
//             </div>

//         </section>
//     )
// }







import { Mail, Phone, MapPin, LinkedinIcon, Send } from "lucide-react";
import { cn } from "../lib/utils";
import { toast } from "sonner";
import { useState } from "react";

export const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.target;
    const name = form.name.value;
    const email = form.Email.value;
    const message = form.Message.value;

    const whatsappMessage = `Name: ${name}%0AEmail: ${email}%0AMessage: ${message}`;
    const whatsappURL = `https://wa.me/917078003071?text=${whatsappMessage}`;

    window.open(whatsappURL, "_blank");

    toast.success("Redirecting to WhatsApp...", {
      description: "Your message will be sent via WhatsApp.",
    });

    setIsSubmitting(false);
  };

  return (
    <section id="contacts" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary">Touch</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Feel free to drop a message!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Side - Contact Info */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Email</h4>
                  <a
                    href="mailto:bhanu1322ahlawat@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    bhanu1322ahlawat@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Phone</h4>
                  <a
                    href="tel:+917078003071"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +91 7078003071
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Location</h4>
                  <span className="text-muted-foreground hover:text-primary transition-colors">
                    Greater Noida
                  </span>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <h4 className="font-medium mb-4">Connect With Me</h4>
              <div className="flex space-x-4 justify-center">
                <a
                  href="https://www.linkedin.com/in/bhanu-ahlawat-76683923a/"
                  className="hover:text-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LinkedinIcon />
                </a>
              </div>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="bg-card p-8 rounded-lg shadow-xs">
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  className="block text-sm font-medium mb-3"
                  htmlFor="name"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                  placeholder="Your Name..."
                />
              </div>

              <div>
                <label
                  className="block text-sm font-medium mb-3"
                  htmlFor="Email"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="Email"
                  name="Email"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                  placeholder="xyz@gmail.com"
                />
              </div>

              <div>
                <label
                  className="block text-sm font-medium mb-3"
                  htmlFor="Message"
                >
                  Your Message
                </label>
                <textarea
                  id="Message"
                  name="Message"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                  placeholder="Type here..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={cn("cosmic-button w-full flex justify-center items-center gap-2")}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
