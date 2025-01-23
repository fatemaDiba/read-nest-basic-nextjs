import Link from "next/link";

const Header = () => {
  const navLists = (
    <>
      <li>
        <Link href="/home">Home</Link>
      </li>
      <li>
        <Link href="/profile">Profile</Link>
      </li>
    </>
  );
  return (
    <div className="bg-blue-300">
      <div className="navbar w-11/12 mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className=" dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <navLists></navLists>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl md:text-3xl font-bold">
            ReadNest
          </a>
        </div>
        <div className="navbar-center hidden lg:flex ">
          <ul className="font-semibold text-base flex gap-4">{navLists}</ul>
        </div>
        <div className="navbar-end">
          <a className="btn bg-blue-500 hover:bg-blue-600 border-none">Login</a>
        </div>
      </div>
    </div>
  );
};

export default Header;
