import { VIDEOS } from "@/Video";
import VideoCard from "./VideoCard";
const VideoGrid=()=>{
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
             {VIDEOS.map(video => <div className="p-2"> <VideoCard video={video} /> </div>)}
        </div>
    );
}

export default VideoGrid;