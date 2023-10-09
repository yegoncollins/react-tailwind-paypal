const Rightfooter = () => {
    return ( 
        <div className="flex justify-between">
            <div className="pl-16 pb-8">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
            <path d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
            </svg>
            </div>
            <button className="absolute bottom-0 right-0 py-8 px-16 bg-[#146971] font-semibold text-2xl">Add to cart +</button>
      </div>  
     );
}
 
export default Rightfooter;