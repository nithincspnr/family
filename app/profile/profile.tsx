import { useRef } from "react";
import { Link, useNavigate } from "react-router";

import Avatar from "./avatar";
import back from "../assets/back.svg";

const Divider = () => <hr />;

const ProfileImageLoader = () => (
  <div className="p-8 max-w-sm w-full mx-auto">
    <div className="animate-pulse flex-col">
      <div className="rounded-full bg-slate-400 h-32 w-32 mx-auto"></div>
    </div>
  </div>
);

const TextLoader = () => (
  <div className="flex-1 py-2 animate-pulse">
    <div className="space-y-3">
      <div className="grid grid-cols-3 gap-4">
        <div className="h-2 bg-slate-400 rounded col-span-1"></div>
      </div>
      <div className="grid grid-cols-3 gap-4">
        <div className="h-2 bg-slate-400 rounded col-span-2"></div>
      </div>
    </div>
  </div>
);

export function Profile() {
  const inputRef = useRef(null);
  const navigate = useNavigate();

  const onSubmit = () => {
    // if (inputRef.current.value) {
    // onSearchSubmit(inputRef.current.value);
    // }
  };
  return (
    <div className="relative">
      <div className="flex px-4 py-8">
        <img
          width={20}
          src={back}
          onClick={() => navigate(-1)}
          className="mr-24 cursor-pointer"
        />
      </div>
      <div className="py-8">
        <Avatar
          width={128}
          height={128}
          className="mx-auto"
          // onClick={onImageClick}
          imageUrl={""}
        />
        <div className="pt-8 flex justify-center items-center">
          <div>
            <h2 className="text-3xl flex justify-center items-center font-bold">
              {"Nithin CS"}
            </h2>
            <p className="mt-2 text-sm text-center">{"Payyanur"}</p>
            <p className="mt-2 text-sm text-center">{"+912255"}</p>
          </div>
        </div>

        <ProfileImageLoader />
        <TextLoader />

        {/* Partner */}
        <p className="pl-4 pt-4 text-lg italic">PARTNER</p>
        <div className="container p-4 flex">
          <Link to={`./profile}`}>
            <div className="w-16 pr-4">
              <Avatar height={46} width={46} className="x" imageUrl={""} />
            </div>
          </Link>
          <div>
            <Link to={`./profile`}>
              <p className="text-sm font-bold">{"Name"}</p>
            </Link>
            <p className="text-sm font-normal">{"Place"}</p>
          </div>
        </div>
        <Divider />
        {/* Children */}
        <p className="pl-4 pt-4 text-lg italic">CHILDREN</p>
        <div className="container p-4 flex">
          <Link to={`./profile}`}>
            <div className="w-16 pr-4">
              <Avatar height={46} width={46} className="x" imageUrl={""} />
            </div>
          </Link>
          <div>
            <Link to={`./profile`}>
              <p className="text-sm font-bold">{"Name"}</p>
            </Link>
            <p className="text-sm font-normal">{"Place"}</p>
          </div>
        </div>
        <div className="container p-4 flex">
          <Link to={`./profile}`}>
            <div className="w-16 pr-4">
              <Avatar height={46} width={46} className="x" imageUrl={""} />
            </div>
          </Link>
          <div>
            <Link to={`./profile`}>
              <p className="text-sm font-bold">{"Name"}</p>
            </Link>
            <p className="text-sm font-normal">{"Place"}</p>
          </div>
        </div>
        <Divider />
        {/* Parents */}
        <p className="pl-4 pt-4 text-lg italic">PARENTS</p>
        <div className="container p-4 flex">
          <Link to={`./profile}`}>
            <div className="w-16 pr-4">
              <Avatar height={46} width={46} className="x" imageUrl={""} />
            </div>
          </Link>
          <div>
            <Link to={`./profile`}>
              <p className="text-sm font-bold">{"Name"}</p>
            </Link>
            <p className="text-sm font-normal">{"Place"}</p>
          </div>
        </div>
        <div className="container p-4 flex">
          <Link to={`./profile}`}>
            <div className="w-16 pr-4">
              <Avatar height={46} width={46} className="x" imageUrl={""} />
            </div>
          </Link>
          <div>
            <Link to={`./profile`}>
              <p className="text-sm font-bold">{"Name"}</p>
            </Link>
            <p className="text-sm font-normal">{"Place"}</p>
          </div>
        </div>
      </div>
      <div className="fixed bottom-0 h-12 bg-white">
        <p>Absolute child</p>
      </div>
    </div>
  );
}
