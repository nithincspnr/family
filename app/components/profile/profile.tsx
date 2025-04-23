import { useState } from "react";
import { Link, useLoaderData, useNavigate, useNavigation } from "react-router";

import Avatar from "./avatar";
import back from "~/assets/back.svg";
import {
  ProfileImageLoader,
  ProfileListItemLoader,
} from "~/components/shared/loader";
import Footer from "~/components/shared/footer";

export function Profile() {
  const data = useLoaderData();
  const navigate = useNavigate();
  const { state } = useNavigation();
  const [openModal, setOpenModal] = useState(false);

  const isLoadingState = state === "submitting" || state === "loading";
  const showParent = data.parent_one_id || data.parent_two_id;

  return (
    <>
      <div className="flex px-4 py-8">
        <img
          src={back}
          onClick={() => navigate(-1)}
          className="mr-24 cursor-pointer h-5 w-5"
        />
      </div>

      {/* Profile Image and Info */}
      {isLoadingState ? (
        <ProfileImageLoader />
      ) : (
        <div>
          <Avatar
            width={128}
            height={128}
            className="mx-auto "
            imageUrl={data.image_url}
            onClick={() => data.image_url && setOpenModal(!openModal)}
          />
          <div className="pt-8 flex justify-center items-center">
            <div>
              <h2 className="text-3xl flex justify-center items-center font-bold">
                {data.name}
              </h2>
              <p className="mt-2 text-sm text-center">{data.place}</p>
              <p className="mt-2 text-sm text-center">{"+912255"}</p>
            </div>
          </div>
        </div>
      )}

      {isLoadingState ? (
        <ProfileListItemLoader />
      ) : (
        <>
          {/* Partner */}
          {data.partner_id && (
            <>
              <p className="pl-4 pt-4 text-lg italic text-gray-400">PARTNER</p>
              <div className="container p-4 flex">
                <Link to={`/profile/${data?.partner_id}`}>
                  <div className="w-16 pr-4">
                    <Avatar
                      height={46}
                      width={46}
                      className="x"
                      imageUrl={data?.image_url}
                    />
                  </div>
                </Link>
                <div>
                  <Link to={`/profile/${data?.partner_id}`}>
                    <p className="text-sm font-bold">{data?.partner_name}</p>
                  </Link>
                  <p className="text-sm font-normal">{data?.partner_place}</p>
                </div>
              </div>
            </>
          )}

          {/* Children */}
          {data.children && data.children.length > 0 && (
            <>
              <p className="pl-4 pt-4 text-lg italic text-gray-400">CHILDREN</p>
              {data.children.map(
                (child: {
                  id: string;
                  name: string;
                  place: string;
                  image_url: string;
                }) => (
                  <div className="container p-4 flex" key={child.id}>
                    <Link to={`/profile/${child.id}`}>
                      <div className="w-16 pr-4">
                        <Avatar
                          height={46}
                          width={46}
                          className="x"
                          imageUrl={child.image_url}
                        />
                      </div>
                    </Link>
                    <div>
                      <Link to={`/profile/${child.id}`}>
                        <p className="text-sm font-bold">{child?.name}</p>
                      </Link>
                      <p className="text-sm font-normal">{child?.place}</p>
                    </div>
                  </div>
                )
              )}
            </>
          )}

          {/* Parents */}
          {showParent && (
            <>
              <p className="pl-4 pt-4 text-lg italic text-gray-400">PARENTS</p>
              {/* Parent One */}
              {data.parent_one_id && (
                <div className="container p-4 flex">
                  <Link to={`/profile/${data?.parent_one_id}`}>
                    <div className="w-16 pr-4">
                      <Avatar
                        height={46}
                        width={46}
                        className="x"
                        imageUrl={data?.parent_one_image_url}
                      />
                    </div>
                  </Link>
                  <div>
                    <Link to={`/profile/${data?.parent_one_id}`}>
                      <p className="text-sm font-bold">
                        {data?.parent_one_name}
                      </p>
                    </Link>
                    <p className="text-sm font-normal">
                      {data?.parent_one_place}
                    </p>
                  </div>
                </div>
              )}
              {/* Parent Two */}
              {data.parent_two_id && (
                <div className="container p-4 flex">
                  <Link to={`/profile/${data?.parent_two_id}`}>
                    <div className="w-16 pr-4">
                      <Avatar
                        height={46}
                        width={46}
                        className="x"
                        imageUrl={data?.parent_two_image_url}
                      />
                    </div>
                  </Link>
                  <div>
                    <Link to={`/profile/${data?.parent_two_id}`}>
                      <p className="text-sm font-bold">
                        {data?.parent_two_name}
                      </p>
                    </Link>
                    <p className="text-sm font-normal">
                      {data?.parent_two_place}
                    </p>
                  </div>
                </div>
              )}
            </>
          )}
        </>
      )}

      {/* Modal for the Profile image */}
      {openModal && (
        <div
          onClick={() => setOpenModal(!openModal)}
          className="fixed z-10 left-0 top-0 w-full h-full overflow-auto backdrop-blur-sm"
        >
          <div
            style={{ position: "absolute" }}
            className="position-static top-[25%] left-[50%] translate-x-[-50%] translate-y-[-50%] cursor-pointer bg-white p-2"
          >
            <img
              className=""
              src={data.image_url}
              width={200}
              height={200}
              // onClick={this.handleShowDialog}
              alt="no image"
            />
          </div>
        </div>
      )}
      <Footer />
    </>
  );
}
