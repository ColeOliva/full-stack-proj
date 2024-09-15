import { CiCirclePlus } from "react-icons/ci";
import Color from "../../constant/Color";

const Title = ({ information }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <div>
        <div
          style={{
            fontSize: Color.headerFontSize,
            fontWeight: Color.fontWeight,
          }}
        >
          {information.name}
        </div>
        <div style={{ marginTop: "0.75rem" }}>
          <a
            style={{
              textDecoration: "none",
              color: Color.tertiaryText,
            }}
            href={`https://github.com/${information.login}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            @{information.login}
          </a>
        </div>
      </div>
      <div
        style={{
          padding: "1rem",
        }}
      >
        <CiCirclePlus size={40} />
      </div>
    </div>
  );
};

export default Title;
