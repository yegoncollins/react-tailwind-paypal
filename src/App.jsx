import Hero from "./components/Hero"
import Image from "./components/Image"
import Navbar from "./components/Navbar"
import Navicons from "./components/Navicons"
import Pagecount from "./components/Pagecount"
import Rightfooter from "./components/Rightfooter"
import Socials from "./components/Socials"

import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

function App() {
  const initialOptions = {
    clientId: "AUUK0hJaC7D_EEvF-6haRualdPnTQChKKzWS4HP9fdcsxwS5qmNtIjpKigD-DNIq9zG7gID89gNXEEV_",
    currency: "USD",
    intent: "capture",
};
  return (
    <PayPalScriptProvider options={initialOptions}>
    <div className="w-screen h-screen bg-slate-100 font-alata flex">
      <div className="h-full flex-1 pl-40 pr-24 pb-8 flex flex-col justify-between">
        <Navbar/>
        <Hero/>
        <PayPalButtons/>
      </div>
      <div className="h-full flex-1 bg-[#b2f0f5] pr-40 pl-24 flex flex-col justify-between relative">
      <Navicons/>
      <Image/>
      <Pagecount/>
      <Rightfooter/>
      </div>
      
    </div>
    </PayPalScriptProvider>
  );
}

export default App
