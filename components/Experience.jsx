import React from 'react'
import { Card, CardContent } from './ui/card';
import Image from 'next/image';
import { experiences } from '@/app/data';
import { ViewCertificate } from './ViewCertificate';
export const Experience = () => {



    return (
        <section className='flex flex-col items-center'>
            <h1 className='title'>Experience</h1>

            <div className="w-full max-w-2xl space-y-6">

                {
                    experiences.map((exp, idx) => (
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
                            <CardContent className="flex relative items-start sm:justify-between w-full flex-col sm:flex-row gap-0 sm:gap-4 p-0  sm:text-lg text-sm">
                                 <div className=' absolute  sm:top-8 top-9  right-0'>
                                        <ViewCertificate certificate={exp.link} />
                                    </div>

                                <div>
                                    <h3 className="font-semibold">{exp.title}</h3>
                                    <p className="text-sm text-muted-foreground text-nowrap">{exp.company}</p>
                                </div>
                                <div className='flex flex-col items-end '>

                                    <p className="text-[12px] sm:text-sm  text-muted-foreground">{exp.duration}</p>
                                   
                                </div>
                            </CardContent>
                        </Card>
                    ))
                }
            </div>


        </section>
    )
}
