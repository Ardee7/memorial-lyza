import YouTube, { YouTubeProps } from "react-youtube";

export const YoutubeVideo = ({
  videoId,
  autoPlay = 1,
}: {
  videoId: string;
  autoPlay?: number;
}) => {
  const onVideoReady: YouTubeProps["onReady"] = (event) => {
    event.target.pauseVideo();
  };

  const opts: YouTubeProps["opts"] = {
    height: "520",
    width: "100%",
    playerVars: {
      autoplay: autoPlay,
    },
  };

  return <YouTube videoId={videoId} opts={opts} onReady={onVideoReady} />;
};
