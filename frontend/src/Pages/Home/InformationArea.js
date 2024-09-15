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
        <Avatar information={information} />
      </div>
      <div style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "1rem",
            width: '75vw',
            marginLeft: '0.5rem',
      }}>
        <Title information={information}/>
        <Bio information={information}/>
        <Stats information={information}/>
        <Links information={information}/>
      </div>
    </div>
  );
};

export default InformationArea;
