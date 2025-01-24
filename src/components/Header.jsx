import Link from "next/link";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import {
  RegisterLink,
  LoginLink,
  LogoutLink,
} from "@kinde-oss/kinde-auth-nextjs/components";

const Header = async () => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  console.log(user);
  const NavLists = (
    <>
      <li>
        <Link href="/">Home</Link>
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
              {NavLists}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl md:text-3xl font-bold">
            ReadNest
          </a>
        </div>
        <div className="navbar-center hidden lg:flex ">
          <ul className="font-semibold text-base flex gap-4">{NavLists}</ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <LogoutLink className="py-2 px-3 rounded-lg font-semibold bg-blue-500 hover:bg-blue-600 border-none">
              Logout
            </LogoutLink>
          ) : (
            <>
              <LoginLink className="py-2 px-3 rounded-lg font-semibold mr-2 bg-blue-500 hover:bg-blue-600 border-none">
                Login
              </LoginLink>
              <RegisterLink className="py-2 px-3 rounded-lg font-semibold bg-blue-500 hover:bg-blue-600 border-none">
                Register
              </RegisterLink>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
