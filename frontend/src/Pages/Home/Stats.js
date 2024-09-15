import Color from "../../constant/Color";

const Stats = ({ information }) => {
  return (
    <div
      style={{
        backgroundColor: Color.backgroundGray,
        borderRadius: "12px",
        display: "flex",
        flexDirection: "row",
        color: Color.secondaryText,
        padding: "0.5rem",
        marginTop: "1rem",
        alignItems: "center",
        fontFamily: Color.fontFamily,
        fontWeight: Color.fontWeight,
      }}
    >
      <div style={{ marginRight: "8rem", marginLeft: "2rem" }}>
        <h2
          style={{
            color: Color.secondaryText,
            fontSize: "1rem",
          }}
        >
          Repos
        </h2>
        <p
          style={{
            color: Color.primaryText,
            fontSize: Color.numberSize,
          }}
        >
          {information.public_repos}
        </p>
      </div>
      <div style={{ marginRight: "8rem" }}>
        <h2
          style={{
            color: Color.secondaryText,
            fontSize: "1rem",
          }}
        >
          Followers
        </h2>
        <p
          style={{
            color: Color.primaryText,
            fontSize: Color.numberSize,
          }}
        >
          {information.followers}
        </p>
      </div>
      <div style={{ marginRight: "8rem" }}>
        <h2
          style={{
            color: Color.secondaryText,
            fontSize: "1rem",
          }}
        >
          Following
        </h2>
        <p
          style={{
            color: Color.primaryText,
            fontSize: Color.numberSize,
          }}
        >
          {information.following}
        </p>
      </div>
    </div>
  );
};

export default Stats;
