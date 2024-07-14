import { CheckCircle2 } from "lucide-react";
import { pricingOptions } from "../constants";

const Pricing = () => {
  return (
   <div className="mt-20">
    <h2 className="tracking-widest my-8 text-center text-3xl sm:text-5xl lg:6xl">Pricing</h2>
    <div className="flex flex-wrap ">
      {pricingOptions.map((pricingOption, index)=>(
        <div key={index} className="w-full sm:w-1/2 lg:w-1/3 p-2">
          <div className="border border-neutral-700 p-10 rounded-xl">
            <h2  className="mb-8 text-4xl">
              {pricingOption.title} 
              {pricingOption.title === "Pro" && (
                <span className="bg-gradient-to-r from-orange-500 to-orange-700 text-transparent bg-clip-text text-sm">(Most Popular)</span>
              )}
              </h2>

            <div className="text-2xl">{pricingOption.price}{""} 
                             <span className="text-neutral-700 text-sm tracking-tight"> /Month
            </span></div>

           {pricingOption.features.map((feature,index)=>(
            <div key={index} className="flex items-center mt-8">
            <span>{<CheckCircle2/>}  {""} 
            </span>
            <div className="text-neutral-600  ml-2">{feature}</div>
           </div>
          ))}
           
          <div className=" inline-flex justify-center items-center text-center w-full h-12
          text-neutral-600 tracking-tight cursor-pointer 
          hover:bg-orange-900 border-border-orange-900 rounded-lg transition-duration-200 mt-20 p-5" > <a href="#">Subscribe</a></div>
          </div>
        </div>
      ))}
    </div>
   </div>
  );
};
export default Pricing;

          
           

         






