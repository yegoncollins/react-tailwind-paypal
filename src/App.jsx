import Hero from "./components/Hero"
import Image from "./components/Image"
import Navbar from "./components/Navbar"
import Navicons from "./components/Navicons"
import Pagecount from "./components/Pagecount"
import Socials from "./components/Socials"

function App() {

  return (
    <div className="w-screen h-screen bg-slate-100 font-alata flex">
      <div className="h-full flex-1 pl-40 pr-24 pb-8 flex flex-col justify-between">
        <Navbar/>
        <Hero/>
       <Socials/>
      </div>
      <div className="h-full flex-1 bg-[#b2f0f5] pr-40 pl-24 flex flex-col justify-between relative">
      <Navicons/>
      <Image/>
      <Pagecount/>
      <div>bottom</div>
      </div>
      
    </div>
  )
}

export default App
