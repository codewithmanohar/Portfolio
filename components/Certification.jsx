import React from 'react'
import { Card, CardContent } from './ui/card';
import Image from 'next/image';
import { certification, imgs } from '@/app/data';
import { experiences } from '@/app/data';
export const Certification = () => {



    return (
        <section className='flex flex-col items-center'>
            <h1 className='title'>Certification</h1>

            <div className="w-full max-w-2xl space-y-6">

            {
                certification.map((exp, idx) => (
                    <Card
                        key={idx}
                        className="flex flex-row items-center justify-start w-full p-4 hover:bg-muted transition rounded-xl">
                            <div className="w-10 h-10 relative rounded-full overflow-hidden flex-shrink-0">
                                <Image
                                    src={exp.logo}
                                    alt={exp.company}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        <CardContent className="flex items-start sm:justify-between w-full flex-col sm:flex-row gap-0 sm:gap-4 p-0  sm:text-lg text-sm">
                            

                            <div>
                                <h3 className="font-semibold">{exp.title}</h3>
                                <p className="text-sm text-muted-foreground text-nowrap">{exp.company}</p>
                            </div>
                            <p className="text-[12px] sm:text-sm  text-muted-foreground">{exp.duration}</p>
                        </CardContent>
                    </Card>
                ))
            }
            </div>


        </section>
    )
}
