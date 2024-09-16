import styled from "styled-components";
import { FaBuilding, FaLink, FaMapMarkerAlt, FaTwitter } from "react-icons/fa";
import Color from "../../constant/Color";

const Links = ({ information }) => {
  return (
    <LinksContainer>
      <LinkItem>
        <FaMapMarkerAlt style={{ marginRight: "0.5rem" }} />
        <div>{information.location || "Not Available"}</div>
      </LinkItem>
      <LinkItem>
        <FaTwitter style={{ marginRight: "0.5rem" }} />
        <div>{information.twitter_username || "Not Available"}</div>
      </LinkItem>
      <LinkItem>
        <FaLink style={{ marginRight: "0.5rem" }} />
        <div>
          {information.blog ? (
            <a
              href={
                information.blog.startsWith("http")
                  ? information.blog
                  : `http://${information.blog}`
              }
              target="_blank"
              rel="noopener noreferrer"
              style={{
                textDecoration: "underline",
                color: Color.secondaryText,
              }} // Optional styling for the link
            >
              {information.blog}
            </a>
          ) : (
            "Not Available"
          )}
        </div>
      </LinkItem>
      <LinkItem>
        <FaBuilding style={{ marginRight: "0.5rem" }} />
        <div>{information.company || "Not Available"}</div>
      </LinkItem>
    </LinksContainer>
  );
};

const LinksContainer = styled.div`
  margin-top: 0.5rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 1rem;
  width: 100%;
  color: ${Color.secondaryText};

  @media (max-width: 768px) {
    gap: 0.5rem;
  }

  @media (max-width: 400px) {
    gap: 0.25rem;
  }
`;

const LinkItem = styled.div`
  display: flex;
  align-items: center;
  flex: 1 1 45%; /* Flex-grow, flex-shrink, and flex-basis for responsiveness */

  @media (max-width: 768px) {
    flex: 1 1 100%; /* Take full width on smaller screens */
    margin-top: 0.5rem; /* Adjust margin for smaller */
  }

  @media (max-width: 400px) {
    flex: 1 1 100%; /* Ensure full width on very small screens */
  }

  a {
    color: ${Color.secondaryText};
  }
`;

export default Links;
