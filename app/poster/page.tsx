/* eslint-disable prettier/prettier */
import Image from "next/image";

import poster1 from "../../public/images/poster1.webp";
import poster2 from "../../public/images/poster2.webp";

import { title } from "@/components/primitives";




export default function PosterPage() {
  return (
    <div className="flex justify-center flex-col">
      <center><h1 className={title()}>Poster</h1></center>
      <div className="w-full flex md:flex-row flex-col justify-center gap-10" id="poster-list">
        <Image alt="poster 1" height={250} src={poster1} width={300}/>
        <Image alt="poster 2" height={250} src={poster2} width={440}/>
      </div>
    </div>
  );
}
