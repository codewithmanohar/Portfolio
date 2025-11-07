import React from 'react'
import { Card } from './ui/card'
import { Label } from './ui/label'
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'
import { Button } from './ui/button'

export const Contact = () => {
  return (
    <section id='contact' className='flex flex-col items-center justify-center text-center px-4 py-20'>
        <h2 className='title'>Contact Me 😊</h2>
        <div className='w-full max-w-2xl space-y-6 py-10'>
            <div className='flex flex-col gap-3 items-start'>
                <Label htmlfor="email">Email</Label>
                <Input className="border-black border-[1px] "  id="email" />
            </div>
            <div className='flex flex-col gap-3 items-start'>
                <Label htmlfor="email">Message</Label>
                <Textarea className="border-black border-[1px] " />
            </div>
            <Button className="w-full">Submit</Button>
        </div>
    </section>
  )
}
