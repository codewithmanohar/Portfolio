"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Code2, MonitorSmartphone, BookOpen, Gamepad2, Terminal, Cpu, Zap } from "lucide-react";

export default function ProfilePage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="max-w-6xl mx-auto px-6 sm:px-8 relative min-h-screen">
      <Header />

      <main className="pt-32 pb-16 sm:pt-40 sm:pb-24 max-w-3xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-16"
        >
          {/* Page Header */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
              About Me
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I am a curious developer who learns fast, adapts quickly, and builds with purpose. Here is a little more about who I am beyond the code.
            </p>
          </motion.div>

          {/* My Story */}
          <motion.section variants={itemVariants} className="space-y-4">
            <h2 className="text-2xl font-semibold flex items-center gap-2">
              <Terminal className="w-6 h-6 text-primary" />
              My Story
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                My journey into software development started with a simple curiosity about how the web works. That curiosity quickly turned into a passion for building interactive, user-friendly applications that solve real problems.
              </p>
              <p>
                I gravitated towards the MERN stack and Next.js because I love the seamless ecosystem of JavaScript. I thrive in environments where I can learn new tools on the fly and immediately apply them to production-ready projects. I believe that good code is not just about logic—it's about empathy for the end user and for the developers who will read it next.
              </p>
            </div>
          </motion.section>

          {/* What I'm Doing Now */}
          <motion.section variants={itemVariants} className="space-y-6">
            <h2 className="text-2xl font-semibold flex items-center gap-2">
              <Zap className="w-6 h-6 text-primary" />
              What I'm Doing Now
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl bg-zinc-100/50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 space-y-3">
                <Code2 className="w-6 h-6 text-blue-500" />
                <h3 className="font-medium">Building</h3>
                <p className="text-sm text-muted-foreground">
                  Deep diving into advanced Next.js patterns, Server Components, and full-stack performance optimization.
                </p>
              </div>
              <div className="p-5 rounded-2xl bg-zinc-100/50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 space-y-3">
                <BookOpen className="w-6 h-6 text-emerald-500" />
                <h3 className="font-medium">Learning</h3>
                <p className="text-sm text-muted-foreground">
                  Currently expanding my knowledge in system design, scalable architecture, and TypeScript best practices.
                </p>
              </div>
            </div>
          </motion.section>


          {/* Life Outside Code */}
          <motion.section variants={itemVariants} className="space-y-4">
            <h2 className="text-2xl font-semibold flex items-center gap-2">
              <Gamepad2 className="w-6 h-6 text-primary" />
              Life Outside Code
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                When I'm not writing code or debugging, you can usually find me stepping away from the screen to recharge. Whether it's playing games, exploring new technologies just for fun, or continuously learning, I always try to keep a healthy balance between life and the keyboard.
              </p>
              <p>
                I'm also a huge movie buff! I love watching Marvel movies like the Avengers, Thor, and Spider-Man. I'm especially drawn to adventurous and sci-fi films like Interstellar, as well as anything related to space exploration, mysteries, and the vastness of galaxies.
              </p>
            </div>
          </motion.section>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}
