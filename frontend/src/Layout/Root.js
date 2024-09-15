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

// Adjust the width and background color
const SidebarWrapper = styled.div`
  height: 8rem; // 1rem = 16px
  background-color: ${Color.backgroundGray};
  border-right: 1px solid ${Color.backgroundGray};
  width: 100%-2rem; // use percentage instead of viewport width
`;

const PageWrapper = styled.div`
  height: calc(100% - 8rem); // space not taken by sidebar
  width: 100%-2rem; // use percentage instead of viewport width
  overflow-y: auto; // allow vertical scrolling
  padding: 1rem;

  @media (max-width: 992px) {
    height: calc(100% - 2rem);
    padding: 2rem;
  }
`;

export default Root;
