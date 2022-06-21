import { createRef, useEffect } from 'react';

type VideoPLayerProps = {
  posterImg: string,
  videoLink: string
  shouldFilmPreviewStarts: boolean
}

function VideoPLayer(props: VideoPLayerProps): JSX.Element {
  const { posterImg, videoLink, shouldFilmPreviewStarts } = props;
  const videoRef = createRef<HTMLVideoElement>();
  const VIDEO_PREVIEW_START_DELAY = 1000;

  useEffect(() => {
    let previewTimeout: NodeJS.Timeout;

    if (shouldFilmPreviewStarts) {
      previewTimeout = setTimeout(() => videoRef.current?.play(), VIDEO_PREVIEW_START_DELAY);
      return;
    }

    videoRef.current?.load();

    return () => clearTimeout(previewTimeout);

  }, [shouldFilmPreviewStarts, videoRef]);

  return (
    <video
      width="280"
      height="175"
      ref={videoRef}
      poster={posterImg}
      preload="none"
      loop
      playsInline
      muted
    >
      <source src={videoLink} type="video/mp4" />

      <p>Sorry, your browser doesn&apos;t support embedded videos.</p>
    </video>
  );
}

export default VideoPLayer;
