import axios from "axios";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";

import Divider from "../Divider";
import Footer from "../Footer";
import Loader from "../loader";
import Avatar from "./Avatar";
import ProfileItem from "./ProfileItem";

const retrieveProfile = async ({ queryKey }) => {
  const [_, profileId] = queryKey;
  const response = await axios.get(
    `http://127.0.0.1:4000/profile/${profileId}`
  );
  return response.data;
};

function Profile() {
  const { id } = useParams();

  const { data, error, isLoading } = useQuery(
    ["profileData", id],
    retrieveProfile
  );

  console.log(data);

  if (isLoading) {
    return null;
  }

  return (
    <>
      <div className="py-8">
        <Avatar
          width={128}
          height={128}
          className="mx-auto"
          imageUrl={data.image_url}
        />
        <div className="pt-8 flex justify-center items-center">
          <div>
            <h2 className="text-3xl flex justify-center items-center">
              {data.name}
            </h2>
            <p className="mt-4 text-sm font-black text-center">{data.place}</p>
          </div>
        </div>
      </div>

      {/* <Loader isProfile /> */}

      <p className="pl-4 text-lg font-semibold">PARTNER</p>
      <ProfileItem />
      <Divider />
      <p className="pl-4 pt-4 text-lg font-semibold">CHILDREN</p>
      <ProfileItem />
      <Loader isProfileItem />
      <ProfileItem />
      <Divider />
      <p className="pl-4 pt-4 text-lg font-semibold">PARENTS</p>
      <ProfileItem />
      <Footer />
    </>
  );
}

export default Profile;

export { Avatar };
