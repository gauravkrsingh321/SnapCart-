import Navbar from "./Navbar";
import Footer from "./Footer"
import { Outlet } from "react-router";

export default function Layout({ location, getLocation, openDropdown, setOpenDropdown }) {
  return (
    <>
      <Navbar
        location={location}
        getLocation={getLocation}
        openDropdown={openDropdown}
        setOpenDropdown={setOpenDropdown}
      />
      <Outlet />
      <Footer />
    </>
  );
}
