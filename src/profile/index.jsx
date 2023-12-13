import Divider from "../Divider";
import Footer from "../Footer";
import Loader from "../loader";
import Avatar from "./Avatar";
import ProfileItem from "./ProfileItem";

function Profile() {
  return (
    <>
      <div className="py-8">
        <Avatar width={128} height={128} className="mx-auto" />
        <div className="pt-8 flex justify-center items-center">
          <div>
            <h2 className="text-3xl flex justify-center items-center">John</h2>
            <p className="mt-4 text-sm font-black">San francisco, CA</p>
          </div>
        </div>
      </div>

      {/* <Loader isProfile /> */}

      {/*  */}
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
