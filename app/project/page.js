import Footer from "@/components/Footer"
import Header from "@/components/Header"
import Projects from "@/components/Projects"

export default function Page() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8 relative">
      <section>
        <Header />
      </section>

      <section className="mt-10">
        <Projects />
      </section>

      <section>
        <Footer />
      </section>

    </div>
  )
}
