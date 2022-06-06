type VideoPLayerProps = {
  poster: string,
  videoLink: string
}

function VideoPLayer(props: VideoPLayerProps): JSX.Element {
  const { poster, videoLink } = props;

  return (
    <video className="small-film-card__image" width="280" height="175" poster={poster} preload="none" loop playsInline muted>

      <source src={videoLink} type="video/mp4"/>

      <p>Sorry, your browser doesn&apos;t support embedded videos.</p>
    </video>
  );
}

export default VideoPLayer;
