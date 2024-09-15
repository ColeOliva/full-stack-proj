import Color from "../../constant/Color";

const Bio = ({ information }) => {
  // Formatting the join date
  const joinDate = new Date(information.created_at).toLocaleDateString(
    "en-US",
    {
      year: "numeric",
      month: "long",
      day: "numeric",
    }
  );

  // Check if the user has a bio
  if (!information.bio) {
    return (
      <div
        style={{
          color: Color.secondaryText,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: "3rem",
        }}
      >
        <div>this user has no bio</div>
        <div>Joined {joinDate}</div>
      </div>
    );
  }

  // Render bio and join date if the bio exists
  return (
    <div
      style={{
        color: Color.secondaryText,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: "2rem",
      }}
    >
      <div>{information.bio}</div>
      <div>Joined {joinDate}</div>
    </div>
  );
};

export default Bio;
