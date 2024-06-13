import { Video } from "@/Video";
import { useRouter } from "next/router"
import { Line } from "./Line";

// import { Line } from "./Line"

const VideoCard = ({video}: {video: Video}) => {
    const router = useRouter();
    return <div className="cursor-pointer" onClick={() => {
        router.push("/video/1");
    }}>
        <div className="rounded-xl overflow-hidden">
            <div>
                <img src={video.thumbnail} />
                <Line progress={10} />
            </div>
        </div>
        <div className={"text-white-800 text-2xl font-medium"}>
            {video.title}
        </div>
        <div className={"text-gray-400 text-xl font-normal		"}>
            {video.description}
        </div>
        <div className="flex">
            <div className={"text-gray-400 text-xl font-normal	pr-2	"}>
                {video.viewCount} 
            </div>
            <div className={"text-gray-400 text-xl font-normal		"}>
            • {video.timestamp}
            </div>
        </div>
    </div>
}

export default VideoCard;