import styled from "styled-components";
import Color from "../../constant/Color";

const Stats = ({ information }) => {
  return (
    <StatsContainer>
      <StatItem>
        <h2>Repos</h2>
        <p>{information.public_repos}</p>
      </StatItem>
      <StatItem>
        <h2>Followers</h2>
        <p>{information.followers}</p>
      </StatItem>
      <StatItem>
        <h2>Following</h2>
        <p>{information.following}</p>
      </StatItem>
    </StatsContainer>
  );
};

const StatsContainer = styled.div`
  background-color: ${Color.backgroundGray};
  border-radius: 12px;
  display: flex;
  flex-direction: row;
  color: ${Color.secondaryText};
  padding: 0.5rem;
  margin-top: 1rem;
  align-items: center;
  font-family: ${Color.fontFamily};
  font-weight: ${Color.fontWeight};
  justify-content: space-between; /* Distribute space evenly between items */

  @media (max-width: 768px) {
    padding: 0.75rem; /* Adjust padding for smaller screens */
  }

  @media (max-width: 400px) {
    padding: 1rem; /* Increase padding on very small screens */
  }
`;

const StatItem = styled.div`
  margin: 0 1rem; /* Adjust margins for spacing between items */
  text-align: center; /* Center text within each stat item */
  flex: 1; /* Allow items to grow and shrink as needed */

  h2 {
    color: ${Color.secondaryText};
    font-size: 1rem; 
  }

  p {
    color: ${Color.primaryText};
    font-size: ${Color.numberSize};
  }

  @media (max-width: 768px) {
    h2 {
      font-size: 0.875rem; /* Smaller font size for headings on smaller screens */
    }

    p {
      font-size: ${Color.numberSize}; /* Ensure font size is readable */
    }
  }

  @media (max-width: 400px) {
    margin: 0 0.5rem; /* Adjust margin for very small screens */
    
    h2 {
      font-size: 0.75rem; /* Even smaller font size for headings on very small screens */
    }

    p {
      font-size: 0.875rem; /* Adjust number size for very small screens */
    }
  }
`;

export default Stats;
