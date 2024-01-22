/**
 * Renders an avatar component with a profile picture.
 * @param {string} url - The URL of the profile picture.
 * @param {string} widthSize - The width size of the avatar. Defaults to "40px".
 * @param {string} heightSize - The height size of the avatar. Defaults to "40px".
 * @returns {JSX.Element} - The rendered avatar component.
 */
function Avatar({
  url,
  widthSize = "40px",
  heightSize = "40px",
}: {
  url: string;
  widthSize?: string;
  heightSize?: string;
}): JSX.Element {
  return (
    <div style={{ width: widthSize, height: heightSize }}>
      <img
        src={url}
        alt="profile picture"
        style={{
          width: "100%",
          height: "auto",
          borderRadius: "50%",
          cursor: "pointer",
        }}
      />
    </div>
  );
}

export default Avatar;
