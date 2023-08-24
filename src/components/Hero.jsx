const Hero = () => {
    return ( 
        <div className="flex flex-col gap-8 items-start w-[80%]">
          <h1 className="text-6xl font-bold">Wood Generic Sofa</h1>
          <p className="text-[#999999]">Lorem ipsum dolor sit amet, consectetur
             adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
             Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
             deserunt mollit anim id est laborum.
          </p>
          <strong className="text-2xl font-semibold">$350.00</strong>
          <button className="bg-[#b2f0f5] px-8 py-2">Buy now</button>
        </div>
     );
}
 
export default Hero;