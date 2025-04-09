import { Fragment } from "react";
import { Loader, Divider } from "../shared";
import ProfileItem from "../profile/ProfileItem";

const ProfileResult = ({ profiles, isLoading }) => {
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
          <Fragment key={`${id}-${name}`}>
            <ProfileItem
              id={id}
              name={name}
              place={place}
              imageUrl={image_url}
            />
            <Divider key={id} />
          </Fragment>
        ))
      )}
    </>
  );
};

export default ProfileResult;
