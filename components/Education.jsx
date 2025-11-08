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
                    <CardContent className="flex items-center w-full gap-6 sm:gap-5 p-0">

                        {/* Prevent image from shrinking */}
                        <div className="w-10 h-10 relative rounded-full overflow-hidden flex-shrink-0">
                            <Image
                                src={imgs.sandip_university}
                                alt="logo"
                                fill
                                className="object-cover"
                            />
                        </div>

                        <div className="flex flex-col sm:flex-row sm:justify-between w-full">

                            <div>
                                <h3 className="font-semibold text-sm sm:text-md">Bachelor of Computer Science & Engineering</h3>
                                <p className="text-sm sm:text-md">Sandip University, Sijoul</p>
                            </div>

                            <p className="text-sm text-muted-foreground mt-1 sm:mt-0 sm:text-right">
                                2022-26
                            </p>

                        </div>

                    </CardContent>

                </Card>
            </div>
        </section>
    )
}
