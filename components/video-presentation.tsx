/* eslint-disable prettier/prettier */
export function VideoPresentation() {
  return (
    // eslint-disable-next-line jsx-a11y/media-has-caption
    <video controls height="49" preload="none" width="570">
      <source src="/videos/presentation.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
}
