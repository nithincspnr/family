import ProfilePic from "@assets/profile-pic.svg";

const Avatar = ({ width, height, imageUrl, ...rest }) => {
  return (
    <img
      width={width}
      height={height}
      src={imageUrl || ProfilePic}
      style={{ borderRadius: "50%", cursor: "pointer" }}
      {...rest}
    />
  );
};

export default Avatar;
