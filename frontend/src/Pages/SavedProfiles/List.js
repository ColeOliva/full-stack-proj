import { CiCircleRemove } from "react-icons/ci";
import { IoEyeOutline } from "react-icons/io5";
import Color from "../../constant/Color";
import useProfileContext from "../../hook/useProfileContext";

const List = () => {
  const { profiles, deleteProfile } = useProfileContext();

  if (!profiles || profiles.length === 0) {
    return (
      <div
        style={{
          marginLeft: "2rem",
          alignItems: "center",
          fontSize: "1.2rem",
          lineHeight: "1.5rem",
          color: Color.secondaryText,
        }}
      >
        No profiles saved yet
      </div>
    );
  }

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "flex-start",
      }}
    >
      {profiles.map((profile, index) => (
        <div
          key={index}
          style={{
            width: "200px",
            padding: "1rem",
            backgroundColor: "#fff",
            borderRadius: "10px",
            boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
            margin: "0.5rem 1rem",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* Profile avatar */}
          <img
            src={profile.profileData.avatar_url}
            alt={profile.profileData.login}
            style={{
              width: "100px",
              height: "100px",
              borderRadius: "50%",
              marginBottom: "1rem",
            }}
          />

          {/* Profile username */}
          <a
            href={profile.profileData.html_url}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: Color.tertiaryText,
              textDecoration: "none",
              fontWeight: "bold",
              marginBottom: "1rem",
              fontSize: "1.2rem",
            }}
          >
            @{profile.profileData.login}
          </a>

          {/* Action icons (view and delete) */}
          <div
            style={{ display: "flex", justifyContent: "center", gap: "2rem" }}
          >
            {/* View icon */}
            <a
              href={profile.profileData.html_url}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: Color.primaryText,
                marginRight: "1rem",
                fontSize: "1.5rem",
              }}
            >
              <IoEyeOutline color={Color.secondaryText} />
            </a>

            {/* Delete icon */}
            <button
              onClick={() => deleteProfile(profile.profileData.login)} // Call deleteProfile from context
              style={{
                background: "none",
                border: "none",
                color: Color.primaryText,
                cursor: "pointer",
                fontSize: "1.5rem",
              }}
            >
              <CiCircleRemove color={Color.secondaryText} />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default List;
