import axios from "axios";
import { useState } from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";

import Avatar from "./Avatar";
import Header from "./Header";
import ProfileItem from "./ProfileItem";
import { Divider, Footer } from "@shared";
import LoadingProfile from "./LoadingProfile";
import "./style.css";

const retrieveProfile = async ({ queryKey }) => {
  const [_, profileId] = queryKey;
  const response = await axios.get(
    `http://127.0.0.1:4000/profile/${profileId}`
  );
  return response.data;
};

const Profile = () => {
  const { id } = useParams();
  const [showImage, setShowImage] = useState(false);
  const { data, isLoading } = useQuery(["profileData", id], retrieveProfile);

  if (isLoading) {
    return <LoadingProfile />;
  }

  const onImageClick = () => {
    if (!data.image_url) {
      return;
    }
    setShowImage(true);
  };

  let partner = null;
  if (data.partner_id) {
    partner = (
      <>
        <p className="pl-4 pt-4 text-lg font-semibold">PARTNER</p>
        <ProfileItem
          id={data.partner_id}
          name={data.partner_name}
          place={data.partner_place}
          imageUrl={data.partner_image_url}
        />
        <Divider />
      </>
    );
  }

  let children = null;
  if (data.children?.length > 0) {
    children = (
      <>
        <p className="pl-4 pt-4 text-lg font-semibold">CHILDREN</p>
        {data.children.map((child) => (
          <ProfileItem
            key={child.id}
            id={child.id}
            name={child.name}
            place={child.place}
            imageUrl={child.image_url}
          />
        ))}
        <Divider />
      </>
    );
  }

  let parents = null;
  if (data.parent_1_id || data.parent_2_id) {
    parents = (
      <>
        <p className="pl-4 pt-4 text-lg font-semibold">PARENTS</p>
        {data.parent_1_id ? (
          <ProfileItem
            id={data.parent_1_id}
            name={data.parent1_name}
            place={data.parent1_place}
            imageUrl={data.parent1_image_url}
          />
        ) : null}
        {data.parent_2_id ? (
          <ProfileItem
            id={data.parent_2_id}
            name={data.parent2_name}
            place={data.parent2_place}
            imageUrl={data.parent2_image_url}
          />
        ) : null}
      </>
    );
  }

  return (
    <>
      <Header />
      {/* Profile content */}
      <div className="py-8">
        <Avatar
          width={128}
          height={128}
          className="mx-auto"
          onClick={onImageClick}
          imageUrl={data.image_url}
        />
        <div className="pt-8 flex justify-center items-center">
          <div>
            <h2 className="text-3xl flex justify-center items-center">
              {data.name}
            </h2>
            <p className="mt-2 text-sm font-black text-center">{data.place}</p>
            <p className="mt-2 text-sm font-black text-center">
              {data.contact_number}
            </p>
          </div>
        </div>
      </div>
      {partner}
      {children}
      {parents}
      <Footer />

      {/* Image modal */}
      {showImage ? (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={() => setShowImage(false)}>
              &times;
            </span>
            <img className="modal-image" src={data.image_url} />
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Profile;

export { Avatar };
