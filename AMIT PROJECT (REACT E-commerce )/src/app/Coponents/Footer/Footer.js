import React, { Fragment } from "react";
import RightCartIcon from "../Cart/RightCartIcon";

function Footer() {
  return (
    <Fragment>
      <RightCartIcon />
      <div className="text-center bg-dark text-white py-2 fixed-bottom">
        <span>
          Developed by Mahmoud Wessam The One and only 
        </span>
      </div>
    </Fragment>
  );
}

export default Footer;
