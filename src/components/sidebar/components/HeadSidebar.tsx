import { Fragment } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";

const HeadSidebar = () => {
  return (
    <Fragment>
      <div className="head py-5 flex justify-between px-6">
        <Link to={"/"}>
          <img src="./images/logo.png" alt="logo" className="mx-auto w-24" />
        </Link>
        <button>
          <AiOutlineMenu color="#fff" />
        </button>
      </div>
      <hr />
    </Fragment>
  );
};

export default HeadSidebar;
