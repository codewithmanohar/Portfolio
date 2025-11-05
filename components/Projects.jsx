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

const Projects = () => {
     const projects = [
        {
            title: "Enrich Salon Management",
            description:
                "Enrich Hair Salon is a salon booking system with online payments and an admin dashboard for managing services and bookings.",
            techStack: ["HTML", "CSS", "JavaScript"],
            website: "https://enrich-salon-demo.netlify.app",
            code: "https://github.com/example/enrich-salon",
        },
        {
            title: "LeafMart – Plant Selling Website",
            description:
                "LeafMart is an e-commerce platform for buying indoor and outdoor plants, featuring a clean UI, product filters, and secure checkout.",
            techStack: ["Next.js", "Tailwind CSS", "MongoDB"],
            website: "https://leafmart-demo.vercel.app",
            code: "https://github.com/example/leafmart",
        },
        {
            title: "AI Quiz App",
            description:
                "An AI-powered quiz app that generates questions based on topic and difficulty, with a timer and result summary page.",
            techStack: ["React", "OpenAI API", "Context API"],
            website: "https://ai-quiz-demo.vercel.app",
            code: "https://github.com/example/ai-quiz-app",
        },
        {
            title: "Civix – Citizen Engagement Dashboard",
            description:
                "Civix is a full-stack web platform that connects citizens and government, enabling issue tracking and feedback submission.",
            techStack: ["React", "Node.js", "MongoDB"],
            website: "https://civix-demo.vercel.app",
            code: "https://github.com/example/civix",
        },
    ];

    return (
        <section className='flex flex-col items-center justify-center text-center min-h-[80%] px-4 py-20'>
            <h1>Work / Projects</h1>
            
        
            <div className='flex gap-5 w-full sm:w-2/3 flex-wrap justify-center text-start ' >
                {

                    projects.map((project , idx) => (
                        <Card key={idx} className="sm:w-md max-w-sm my-5 px-2 ">
                            <CardHeader>
                                <CardTitle>{project.title}</CardTitle>
                            </CardHeader>
                            <CardDescription className="text-wrap">{project.description}</CardDescription>
                            <CardContent className="flex gap-2 flex-wrap">
                                {project.techStack.map((tech , idx) => (
                                    <Button key={idx} variant="outline" size="sm">{tech}</Button>
                                ))}
                            </CardContent>
                            <CardFooter className="flex gap-2" >
                                <Button size="sm" variant="default" asChild>
                                    <Link href={project.website}>Website</Link>
                                </Button>
                                <Button size="sm" variant="default" asChild>
                                    <Link href={project.code}>Code</Link>
                                </Button>
                            </CardFooter>
                        </Card>
                    ))
                }
                {/* <Card className="w-40 my-10">
                    <CardHeader>
                        <CardTitle>Enrich Salon Management</CardTitle>
                        <CardDescription>
                            Enrich Hair Salon is a salon booking system with online payments and an admin dashboard for managing services and bookings.</CardDescription>

                    </CardHeader>
                    <CardContent>
                        <Button variant="outline" size="sm">HTML</Button>
                        <Button variant="outline" size="sm">HTML</Button>
                    </CardContent>
                    <CardFooter className="flex gap-5">
                        <Button variant="secondary">Website</Button>
                        <Button variant="secondary">Code</Button>
                    </CardFooter>
                </Card> */}
            </div>

        </section>
    )
}

export default Projects