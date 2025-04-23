import { Suspense } from "react";
import { Link, useActionData, useNavigation, Await } from "react-router";

import NoData from "~/assets/no-data.svg";
import Avatar from "~/components/profile/avatar";
import Divider from "~/components/shared/divider";
import { ProfileListItemLoader } from "~/components/shared/loader";

type ProfileData = {
  id: string;
  name: string;
  place: string;
  image_url: string;
};

type ProfileItemProps = {
  id: string;
  name: string;
  place: string;
  imageUrl: string;
};

const Result = () => {
  const data = useActionData();
  const { state } = useNavigation();
  const isLoadingState = state === "submitting" || state === "loading";
  const noDataFound = data && data.length === 0 && state.includes("idle");

  return (
    <>
      {isLoadingState && (
        <>
          <ProfileListItemLoader key={1} />
          <ProfileListItemLoader key={2} />
        </>
      )}

      {data && data.length > 0 && !isLoadingState
        ? data.map((profile: ProfileData) => (
            <>
              <h3 className="text-sm font-semibold mt-8 mb-6 px-4">
                All Results
              </h3>
              {/* <Divider /> */}
              <ProfileItem
                key={profile.id}
                id={profile.id}
                name={profile.name}
                place={profile.place}
                imageUrl={profile.image_url}
              />
            </>
          ))
        : null}

      {/* No data found */}
      {noDataFound && (
        <>
          <h3 className="text-sm font-semibold text-center mt-20">
            No profiles found
          </h3>
          <img
            width={160}
            src={NoData}
            alt="No Data"
            className="mx-auto mt-8 mb-4"
          />
        </>
      )}
    </>
  );
};

const ProfileItem = (props: ProfileItemProps) => {
  return (
    <div className="container p-4 flex">
      <Link to={`/profile/${props.id}`}>
        <div className="w-16 pr-4">
          <Avatar
            height={46}
            width={46}
            className="x"
            imageUrl={props.imageUrl}
          />
        </div>
      </Link>
      <Link to={`/profile/${props.id}`}>
        <div>
          <p className="text-sm font-bold">{props?.name}</p>
          <p className="text-sm font-normal">{props.place}</p>
        </div>
      </Link>
    </div>
  );
};

{
  /* <Suspense fallback={<div>Loading...</div>}>
  <Await resolve={data}>
    {(value) => <h3>Non critical value: {JSON.stringify(value)}</h3>}
  </Await>
</Suspense> */
}

export default Result;
