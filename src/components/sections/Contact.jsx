import { RevealOnScreen } from "../RevealOnscreen";
import emailjs from 'emailjs-com';
import { useState } from "react";

export const Contact = () => {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    })


    const handlesubmit = (e) => {

        const SERVICE_ID = "service_jjz4b3n";
        const TEMPLATE_ID = "template_w52z9sk";
        const PUPLIC_KEY = "ZzUacwCE6jKrdb9h7";

        e.preventDefault();

        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUPLIC_KEY)
            .then((res) => {
                alert("Message Sent Successfully");
                setFormData({name:"",email:"",message:""})
            })
            .catch(
                alert("Failed to send the message, please try again"));

    }

    return (
        <section id="contact" className="min-h-screen flex items-center justify-center py-20">
            <RevealOnScreen>
                <div className="px-4 w-150 mx-auto">
                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">Get In Touch</h2>
                    <form action="" className="space-y-6" onSubmit={handlesubmit}>
                        <div className="relative">
                            <input type="text" name="name" onChange={(e) => setFormData({ ...formData, name: e.target.value })}  value={formData.name} id="name" required className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition 
                            focus:outline-none focus:bg-blue-500/5 " placeholder="Name...." />
                        </div>
                        <div className="relative">
                            <input type="email" name="email" id="email" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition 
                            focus:outline-none focus:bg-blue-500/5 " placeholder="example@gmail.com" />
                        </div>
                        <div className="relative">
                            <textarea name="message" id="message" value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} rows={5} required className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition 
                            focus:outline-none focus:bg-blue-500/5 " placeholder="Your Message...." />
                        </div>
                        <button type="submit" className="w-full bg-blue-500 text-white py-3 px-6 rounded font-medium transition rlaive overflow-hidden hover:translate-y-0.5 hover-shadow-[0_0_15px_rgba(59,130,246,0.4">
                            Send Message
                        </button>
                    </form>
                </div>
            </RevealOnScreen>
        </section>
    )
}