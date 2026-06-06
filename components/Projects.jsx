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
import { ChevronDown, ChevronLeft, ChevronRight, Eye } from 'lucide-react'
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"


// ProjectVideo component — replaces ProjectScreenshots
function ProjectVideo({ videoId, title }) {
    if (!videoId) return null

    // Convert Drive file ID to embeddable preview URL
    const embedUrl = `https://drive.google.com/file/d/${videoId}/preview`

    return (
        <Dialog>
            <DialogTrigger asChild>
                <button
                    aria-label="Watch project demo"
                    className="absolute top-3 right-3 z-10 text-muted-foreground hover:text-foreground transition"
                >
                    <Eye size={20} strokeWidth={1.25} />
                </button>
            </DialogTrigger>

            <DialogContent className="sm:max-w-[720px] p-4">
                <DialogHeader>
                    <DialogTitle>{title} — Demo</DialogTitle>
                </DialogHeader>

                <div className="relative w-full aspect-video rounded-md overflow-hidden bg-black">
                    <iframe
                        src={embedUrl}
                        title={`${title} demo video`}
                        allow="autoplay"
                        allowFullScreen={false}
                        style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '115%',   // clips Drive's bottom toolbar
                            border: 'none',
                        }}
                    />
                    {/* Overlay blocks everything except center (play/pause zone) */}
                    <div className="absolute inset-0 z-10"
                        style={{
                            background: 'transparent',
                            // Leave a 60px tall invisible "hole" in the center for play/pause
                            clipPath: 'polygon(0 0, 100% 0, 100% 40%, 60% 40%, 60% 60%, 40% 60%, 40% 40%, 0 40%, 0 100%, 100% 100%, 100% 40%)'
                        }}
                    />
                </div>
            </DialogContent>
        </Dialog>
    )
}

// ── Projects ─────────────────────────────────────────────────────────────────
const Projects = () => {
    const [visibleCount, setVisibleCount] = useState(4)

    return (
        <section className='flex flex-col items-center justify-center text-center min-h-[80%] px-4 pb-20'>
            <h1 className='title'>Projects</h1>

            <div className="grid w-full sm:w-[65%] grid-cols-1 sm:grid-cols-2 gap-5">
                {projects.slice(0, visibleCount).map((project, idx) => (
                    <Card
                        key={idx}
                        className="relative flex items-start flex-col h-full min-h-[350px] px-1 bg-background"
                    //  ↑ relative is required for the eye button positioning
                    >
                        {project.video && (
                            <ProjectVideo
                                videoId={project.video}
                                title={project.title}
                            />
                        )}

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
                            {project.techStack.map((tech, i) => (
                                <Button key={i} variant="skills" size="smbt">
                                    {tech}
                                </Button>
                            ))}
                        </CardContent>

                        <CardFooter className="mt-auto flex gap-2">
                            <Button size="smbt1" asChild>
                                <a href={project.website} target="_blank" rel="noreferrer">
                                    <TbWorld className="size-4" /> Website
                                </a>
                            </Button>
                            <Button size="smbt1" asChild>
                                <a href={project.code} target="_blank" rel="noreferrer">
                                    <FaGithub /> Source
                                </a>
                            </Button>
                        </CardFooter>
                    </Card>
                ))}
            </div>

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