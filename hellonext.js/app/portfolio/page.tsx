
import Image from "next/image"
export default function portfolio(){
    return(
        <div className="flex">
            <div className="p-5 m-10">
                <h2 className="text-[30px] text-[aliceblue] capitalize font-[serif]">our journey with cashing</h2>
                <p className="text-[aliceblue]">Frontend performance can be hard to get right. Even in highly optimized apps, the most common 
                    culprit by far is client-server waterfalls. When introducing Next.js App,
                     we knew we wanted to solve this issue. To do that, we needed to 
                    move client-server REST fetches to the server using React Server Components 
                    in a single roundtrip. This meant the server had to sometimes be dynamic,
                    sacrificing the great initial loading performance of Jamstack. We built
                    partial prerendering to solve this tradeoff and have the best of both worlds.

                </p>
            </div>
            <div className="p-6 m-3">
            <Image
            src="/next.logo.png" 
            alt="image" 
            width={1800}
            height={800}
             priority 
            />
        
            
            </div>
        </div>
    )
}