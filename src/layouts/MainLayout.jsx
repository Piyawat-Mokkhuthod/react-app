import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

import { Outlet } from "react-router-dom"; // ตัวแทนสิ่งที่อยู่กึ่งกลางของMain layout

function MainLayout() {
  return (
    <>
      <NavBar />
      <main >
        <div className="w-full xl:w-[45%] space-x-6 px-4 md:px-8 pt-6 pd-24">
          <Outlet />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default MainLayout;
