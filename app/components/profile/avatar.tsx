import ProfilePic from "./profile-pic.svg";

interface AvatarProps {
  imageUrl: string;
  className: string;
  width: number | string;
  height: number | string;
}

const Avatar = ({ width, height, imageUrl, ...props }: AvatarProps) => {
  return (
    <img
      width={width}
      height={height}
      src={imageUrl || ProfilePic}
      alt="User Avatar"
      style={{ borderRadius: "50%", cursor: "pointer" }}
      {...props}
    />
  );
};

export default Avatar;
