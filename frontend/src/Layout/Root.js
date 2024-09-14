import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Color from "../constant/Color";
import Sidebar from "./Sidebar";

const Root = () => {

  return (
    <div
      style={{
        flexDirection: "column",
        display: "flex",
      }}
    >
      <SidebarWrapper>
        <Sidebar />
      </SidebarWrapper>
      <PageWrapper>
        <Outlet />
      </PageWrapper>
    </div>
  );
};

// width, background color, scrolling behavior.
const SidebarWrapper = styled.div`
  height: 10rem; // 1rem = 16px
  background-color: ${Color.backgroundGray};
  border-right: 1px solid ${Color.backgroundGray};
  width: 100vh; // full height of viewport

  // common breakpoints: 320, 768, 1024, 1440
  @media (max-width: 992px) {
    display: none;
  }
`;

const PageWrapper = styled.div`
  height: calc(100% - 10rem); // space not taken by sidebar
  width: 100vh; // full height of viewport
  overflow-y: auto; // allow scrolling
  padding: 4rem;

  @media (max-width: 992px) {
    width: calc(100% - 2rem);
    padding: 2rem;
  }
`;

export default Root;
