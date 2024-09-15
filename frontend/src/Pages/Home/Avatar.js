const Avatar = ({ information }) => {
  return (
    <div
      style={{
        width: 100,
        height: 100,
        borderRadius: "50%",
        backgroundColor: "gray",
        overflow: "hidden", // Ensures the image doesn't overflow the circular container
      }}
    >
      <img
        src={information.avatar_url}
        alt="User Avatar"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover", // Ensures the image covers the div while keeping its aspect ratio
        }}
      />
    </div>
  );
};

export default Avatar;
