import Loader from "../loader";
import Divider from "../Divider";
import ProfileItem from "../profile/ProfileItem";

function ProfileResult({ profiles, isLoading }) {
  return (
    <>
      <h3 className="text-sm font-black mt-8 mb-6 px-4">ALL RESULTS</h3>
      {isLoading ? (
        <>
          <Loader key={1} isProfileItem />
          <Loader key={2} isProfileItem />
          <Loader key={3} isProfileItem />
        </>
      ) : (
        profiles?.map(({ id, name, place, image_url }) => (
          <>
            <ProfileItem
              id={id}
              name={name}
              place={place}
              imageUrl={image_url}
              key={`${id}-${name}`}
            />
            <Divider key={id} />
          </>
        ))
      )}
    </>
  );
}

export default ProfileResult;
