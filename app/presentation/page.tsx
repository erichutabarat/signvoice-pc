/* eslint-disable prettier/prettier */
import { title } from "@/components/primitives";
import { VideoPresentation } from "@/components/video-presentation";

export default function PresentationPage() {
  return (
    <div className="flex justify-center flex-col items-center gap-10">
      <center><h1 className={title()}>Presentation</h1></center>
      <VideoPresentation/>
    </div>
  );
}
