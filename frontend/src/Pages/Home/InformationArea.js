import Color from "../../constant/Color";
import Avatar from "./Avatar";
import Bio from "./Bio";
import Links from "./Links";
import Stats from "./Stats";
import Title from "./Title";

const InformationArea = ({ information }) => {
  if (!information) {
    return <div style={{ marginTop: "2rem" }}>No information to display</div>;
  }
  return (
    <div
      className="infoArea"
      style={{
        display: "flex",
        margin: "2rem",
        backgroundColor: Color.backgroundWhite,
        borderRadius: "12px",
        boxShadow: "0 0 15px rgba(0, 0, 0, 0.1)",
      }}
    >
      <div>
        <Avatar />
      </div>
      <div style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "1rem",
      }}>
        <Title />
        <Bio />
        <Stats />
        <Links />
      </div>
    </div>
  );
};

export default InformationArea;
