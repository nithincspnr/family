import Loader from "../loader";
import Footer from "../Footer";

function LoadingProfile() {
  return (
    <>
      <Loader isProfile />
      <div className="mt-36">
        <Loader isProfileItem />
      </div>
      <div className="mt-11">
        <Loader isProfileItem />
      </div>
      <Footer />
    </>
  );
}

export default LoadingProfile;
