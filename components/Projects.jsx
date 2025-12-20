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
import { TbWorld } from "react-icons/tb";
import { FaGithub } from "react-icons/fa6";
import { projects } from '@/app/data';

const Projects = () => {

    return (
        <section className='flex flex-col items-center justify-center text-center min-h-[80%] px-4 pb-20'>
            <h1 className='title '>Projects</h1>


           <div className="grid w-full sm:w-9/12 grid-cols-1 sm:grid-cols-2 gap-5">
                {projects.map((project, idx) => (
                    <Card
                        key={idx}
                        className="flex flex-col h-full min-h-[350px] px-5 bg-background"
                    >
                        <CardHeader className="flex flex-col">
                            <Image
                                className="p-2"
                                width={project?.w || 50}
                                height={project?.h || 50}
                                alt="logo"
                                src={project.icon}
                            />
                            <CardTitle className="tracking-tight">
                                {project.title}
                            </CardTitle>
                        </CardHeader>

                        <CardDescription className="text-start px-6">
                            {project.description}
                        </CardDescription>

                        <CardContent className="flex flex-wrap gap-1">
                            {project.techStack.map((tech, idx) => (
                                <Button key={idx} variant="skills" size="smbt">
                                    {tech}
                                </Button>
                            ))}
                        </CardContent>

                        {/* Push footer to bottom */}
                        <CardFooter className="mt-auto flex gap-2">
                            <Button size="smbt1" variant="default" asChild>
                                <a href={project.website} target="_blank">
                                    <TbWorld className="size-4" /> Website
                                </a>
                            </Button>
                            <Button size="smbt1" variant="default" asChild>
                                <a href={project.code} target="_blank">
                                    <FaGithub /> Source
                                </a>
                            </Button>
                        </CardFooter>
                    </Card>
                ))}


            </div>

        </section>
    )
}

export default Projects