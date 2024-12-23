import Image from "next/image";
import { Button } from "@nextui-org/button";
import Link from "next/link";

import SignVoice from "../public/images/signvoice - device.gif";

import { title } from "@/components/primitives";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center py-8 md:py-10 gap-10">
      <div className="flex md:flex-row flex-col gap-5" id="introduction">
        <Image alt="SignVoice Device" src={SignVoice} />
        <div className="flex flex-col gap-5">
          <span className={title()}>
            SignVoice: Bridging Silence with Speech, Empowering Communication
            for Everyone.
          </span>
          <div className="flex flex-row gap-4">
            <Link href="/presentation">
              <Button className="text-white" color="success">
                Get Started
              </Button>
            </Link>
            <Link href="/docs/Proposal_SignVoice.pdf">
              <Button>Learn</Button>
            </Link>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center gap-5" id="howitworks">
        <h2 className="text-3xl">How It Works</h2>
        <div className="grid grid-cols-3 gap-5" id="how-its-work">
          <div className="p-5 border-2 border-white rounded-xl text-center">
            Glove detects gestures using sensors.
          </div>
          <div className="p-5 border-2 border-white rounded-xl text-center">
            Data sent wirelessly to the wristband.
          </div>
          <div className="p-5 border-2 border-white rounded-xl text-center">
            Wristband translates gestures into speech in real-time.
          </div>
        </div>
      </div>
    </section>
  );
}
