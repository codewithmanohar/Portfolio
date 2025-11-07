import React from 'react'
import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Button } from './ui/button'
import Link from 'next/link';
import Image from 'next/image';
import { imgs } from '@/app/data';
import { ExternalLink, Github } from 'lucide-react';
import { TbWorld } from "react-icons/tb";
import { FaGithub } from "react-icons/fa6";
import { projects } from '@/app/data';

const Projects = () => {

    return (
        <section className='flex flex-col items-center justify-center text-center min-h-[80%] px-4 pb-20'>
            <h1 className='title '>Projects</h1>
            
        
            <div className='flex gap-5 w-full sm:w-2/3 flex-wrap justify-center text-start ' >
                {

                    projects.map((project , idx) => (
                        <Card key={idx} className="sm:w-[48%] max-w-sm my-5 px-5 bg-background  ">
                            <CardHeader className="flex flex-col ">
                                <Image 
                                    className='p-2 '
                                    width={50}
                                    height={50}
                                    alt='logo' 
                                    src={project.icon} 
                                />
                                <CardTitle className="px-0">{project.title}</CardTitle>
                            </CardHeader>
                            <CardDescription className="text-wrap text-start ml-6 ">{project.description}</CardDescription>
                            <CardContent className="flex gap-2 flex-wrap">
                                {project.techStack.map((tech , idx) => (
                                    <Button key={idx} variant="skills" size="smbt">{tech}</Button>
                                ))}
                            </CardContent>
                            <CardFooter className="flex gap-2" >
                                <Button size="smbt1" variant="default" asChild>

                                    <a href={project.website} target='_blank'><TbWorld className='size-4'/> Website</a>
                                </Button>
                                <Button size="smbt1" variant="default" asChild>
                                    <a href={project.code} target='_blank'><FaGithub /> Source</a>
                                </Button>
                            </CardFooter>
                        </Card>
                    ))
                }
                
            </div>

        </section>
    )
}

export default Projects