import React from 'react'
import { Button } from './ui/button';
import { skills } from '@/app/data';
export const Skills = () => {

    

  return (
    <section className="py-10 flex flex-col items-center  ">
      <h2 className="title">Skills</h2>
      <div className="flex flex-wrap justify-start sm:justify-center gap-3 max-w-xl ">
        {skills.map((skill, index) => (
          <Button key={index} variant="outline" size="sm">
            {skill.icon}
            {skill.name}
          </Button>
        ))}
      </div>
    </section>
  )
}
