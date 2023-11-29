import React from "react";

// max-width: 24rem; /* 384px */
const Layout = (props) => {
  return (
    <div className="container mx-auto max-w-sm h-full bg-white">
      {props.children}
    </div>
  );
};

export default Layout;
