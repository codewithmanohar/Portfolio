'use client'

import React, { useState } from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Button } from './ui/button'
import Image from 'next/image'
import { TbWorld } from "react-icons/tb"
import { FaGithub } from "react-icons/fa6"
import { projects } from '@/app/data'
import { ChevronDown } from 'lucide-react'

const Projects = () => {
    const [visibleCount, setVisibleCount] = useState(4)

    return (
        <section className='flex flex-col items-center justify-center text-center min-h-[80%] px-4 pb-20'>
            <h1 className='title'>Projects</h1>

            {/* Cards */}
            <div className="grid w-full sm:w-[65%] grid-cols-1 sm:grid-cols-2 gap-5">
                {projects.slice(0, visibleCount).map((project, idx) => (
                    <Card
                        key={idx}
                        className="flex items-start flex-col h-full min-h-[350px] px-1 bg-background"
                    >
                        <CardHeader>
                            <Image
                                className="p-2"
                                width={project?.w || 50}
                                height={project?.h || 50}
                                alt="logo"
                                src={project.icon}
                            />
                            <CardTitle className="text-nowrap">{project.title}</CardTitle>
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

                        <CardFooter className="mt-auto flex gap-2">
                            <Button size="smbt1" asChild>
                                <a href={project.website} target="_blank">
                                    <TbWorld className="size-4" /> Website
                                </a>
                            </Button>
                            <Button size="smbt1" asChild>
                                <a href={project.code} target="_blank">
                                    <FaGithub /> Source
                                </a>
                            </Button>
                        </CardFooter>
                    </Card>
                ))}
            </div>

            {/* Load More Button */}
            {visibleCount < projects.length && (
                <Button
                    className="mt-8"
                    variant="secondary"
                    size="smbt1"
                    onClick={() => setVisibleCount(projects.length)}
                >
                    Load More
                    <ChevronDown />
                </Button>
            )}
        </section>
    )
}

export default Projects
