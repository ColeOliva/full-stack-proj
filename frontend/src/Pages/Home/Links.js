import { FaBuilding, FaLink, FaMapMarkerAlt, FaTwitter } from "react-icons/fa"; // Importing icons
import Color from "../../constant/Color";

const Links = ({ information }) => {
  return (
    <div
      style={{
        display: "flex",
        marginTop: "1rem",
        flexWrap: "wrap",
        justifyContent: "space-between",
        gap: "1rem", // Space between items
        width: "100%",
        color: Color.secondaryText,
      }}
    >
      {/* First row */}
      <div style={{ display: "flex", alignItems: "center", width: "48%" }}>
        <FaMapMarkerAlt style={{ marginRight: "0.5rem" }} />
        <div>{information.location || "Not Available"}</div>
      </div>
      <div style={{ display: "flex", alignItems: "center", width: "48%" }}>
        <FaTwitter style={{ marginRight: "0.5rem" }} />
        <div>{information.twitter_username || "Not Available"}</div>
      </div>

      {/* Second row */}
      <div style={{ display: "flex", alignItems: "center", width: "48%" }}>
        <FaLink style={{ marginRight: "0.5rem" }} />
        <div>
          {information.blog ? (
            <a
              href={information.blog.startsWith("http") ? information.blog : `http://${information.blog}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: 'underline', color: Color.secondaryText }} // Optional styling for the link
            >
              {information.blog}
            </a>
          ) : (
            "Not Available"
          )}
        </div>
      </div>
      <div style={{ display: "flex", alignItems: "center", width: "48%" }}>
        <FaBuilding style={{ marginRight: "0.5rem" }} />
        <div>{information.company || "Not Available"}</div>
      </div>
    </div>
  );
};

export default Links;
