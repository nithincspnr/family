import "./App.css";
import Divider from "./Divider";
import Footer from "./Footer";
import "./index.css";
import Layout from "./Layout";
import { Avatar } from "./profile";
import ProfileItem from "./profile/ProfileItem";

function App() {
  return (
    <Layout>
      <Avatar />
      <Divider />
      <p>Partner</p>
      <ProfileItem />
      <Divider />
      <p>Children</p>
      <ProfileItem />
      <ProfileItem />
      <Divider />
      <p>Parents</p>
      <ProfileItem />
      <Footer />
    </Layout>
  );
}

export default App;
