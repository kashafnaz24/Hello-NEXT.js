
import Image from "next/image"
import Link from "next/link"
export default function hello (){
    return(
        <div className="flex">
        <div className="p-4">
        /* eslint-disable react/no-unescaped-entities */

        <h1 className="text-neutral-100 text-6xl p-20 pb-2 mr-8 font-[serif]">
            Hello! Next.js
        </h1>
        <p className=" text-xl pl-10 mr-8 text-stone-500">
            NEXT.js is a Framwork of React and React is a library
        </p>
        <Link href="/aboutNEXT">
              <button className="border border-[aliceblue]-[5px] p-4 rounded-2xl m-16 w-44 capitalize text-xl text-stone-500 hover:bg-slate-50 hover:text-black hover:font-bold">
                about NEXT.js
             </button>   
        </Link>

        <Link href="/portfolio">
             <button className="border bg-slate-50 p-4 rounded-2xl w-44 capitalize text-xl font-bold hover:bg-black hover:text-stone-500 hover:border-[aliceblue]-[5px]">
              our portfolio
            </button>
        </Link>
         </div>

        <div className="m-[80px]">
        <Image
        src="/next.logo.png" 
        alt="image" 
        width={300}
        height={200}
        priority 
        />
        
        </div>
        </div>
    )
}