"use client"
import { Card } from './ui/card'
import { Label } from './ui/label'
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'
import { Button } from './ui/button'
import { useState } from 'react'

export const Contact = () => {

  const [form , setForm ] = useState({
    email: "",
    message: ""
  }); 

   const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    if (res.ok) {
      alert("Message Sent Successfully!");
      setForm({ email: "", message: "" });
    } else {
      alert("Error sending message!");
    }
  };

  return (
    <section id='contact' className='flex flex-col items-center justify-center text-center px-4 py-20'>
        <h2 className='title'>Contact Me </h2>
        <form onSubmit={handleSubmit} className='w-full max-w-2xl space-y-6 py-10 '>
            <div className='flex flex-col gap-0.5 items-start'>
                <Label className="text-md " htmlFor="email">Email</Label>
                <Input 
                  required
                  type="email"
                  placeholder='your email address'
                  onChange={(e) => setForm({...form, email: e.target.value})}
                  value={form.email}
                  className="border-black border-[1px] rounded-sm "  
                  id="email" />
            </div>
            <div className='flex flex-col gap-0.5 items-start'>
                <Label className="text-md" htmlFor="message">Message</Label>
                <Textarea 
                  required
                  placeholder='your message'
                  onChange={(e) => setForm({...form, message: e.target.value})}
                  value={form.message}
                  className="border-black border-[1px] rounded-sm "  
                  id="message" />
            </div>
            <Button className="w-full">Send message</Button>
        </form>
    </section>
  )
}
