import ProfilePic from "../assets/profile-pic.svg";

const Avatar = ({ width, height, ...rest }) => {
  return <img width={width} height={height} src={ProfilePic} {...rest} />;
};

export default Avatar;
