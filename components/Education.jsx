import React from 'react'
import { Card, CardContent } from './ui/card'
import Image from 'next/image'
import { imgs } from '@/app/data'

export const Education = () => {
    return (
        <section className='py-10 flex flex-col items-center '>
            <h2 className='title'>Education</h2>
            <div className="w-full max-w-2xl space-y-6 ">
                <Card className="flex sm:flex-row flex-col sm:items-center gap-2 justify-between p-4 hover:bg-muted transition rounded-xl">
                    <CardContent className="flex items-center gap-5 p-0">
                        <div className="w-10 h-10 relative rounded-full overflow-hidden ">
                            <Image
                                src={imgs.sandip_university}
                                alt='logo'
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div>
                            <h3 className="font-semibold text-sm sm:text-md">Bechelors of Technology Computer Science & Engineering</h3>
                            <p className="text-sm sm:text-md ">Sandip University, Sijoul</p>
                        </div>
                    </CardContent>
                    <p className="mx-12 sm:mx-0  text-sm text-muted-foreground ">2022-26</p>
                </Card>
            </div>
        </section>
    )
}
