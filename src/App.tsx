import Hero from "./sections/Hero"
import Projects from "./sections/Projects"
import Experience from "./sections/Experience"
import Stack from "./sections/Stack"
import Contact from "./sections/Contact"
import CustomCursor from "./components/CustomCursor"
import Nav from "./components/Nav"

function App() {
  return (
    <div className="min-h-screen bg-bg text-text font-body">
      <CustomCursor />
      <Nav />
      <Hero />
      <Projects />
      <Experience />
      <Stack />
      <Contact />
    </div>
  )
}

export default App