import Loader from "../loader";
import Divider from "../Divider";
import ProfileItem from "../profile/ProfileItem";

function ProfileResult({ profiles }) {
  console.log(profiles);
  return (
    <div>
      <h3 className="text-sm font-black mt-8 mb-6 px-4">ALL RESULTS</h3>
      {profiles.map(({ id, name, place, image_url }) => (
        <ProfileItem
          key={id}
          id={id}
          name={name}
          place={place}
          imageUrl={image_url}
        />
      ))}
      {/* <ProfileItem />
      <Divider />
      <ProfileItem />
      <Divider />
      <ProfileItem />
      <Divider /> */}
      {/* <Loader isProfileItem /> */}
    </div>
  );
}

export default ProfileResult;
