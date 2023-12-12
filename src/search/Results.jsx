import ProfileItem from "../profile/ProfileItem";
import Divider from "../Divider";

function Results() {
  return (
    <div>
      <h3 className="text-sm font-black mt-8 mb-6 px-4">ALL RESULTS</h3>
      <ProfileItem />
      <Divider />
      <ProfileItem />
      <Divider />
      <ProfileItem />
      <Divider />
    </div>
  );
}

export default Results;
