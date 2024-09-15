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
  width: 100vw; // full width of viewport
`;

const PageWrapper = styled.div`
  height: calc(100% - 10rem); // space not taken by sidebar
  width: 100vw; // full width of viewport
  overflow-y: auto; // allow scrolling
  padding: 4rem;

  @media (max-width: 992px) {
    height: calc(100% - 2rem);
    padding: 2rem;
  }
`;

export default Root;
