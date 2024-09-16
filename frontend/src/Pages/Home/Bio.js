import styled from "styled-components";
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

  return (
    <BioContainer>
      <BioContent>
        {information.bio ? information.bio : "This user has no bio"}
      </BioContent>
      <JoinDate>Joined {joinDate}</JoinDate>
    </BioContainer>
  );
};

const BioContainer = styled.div`
  color: ${Color.secondaryText};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 2rem;
  gap: 1rem; /* Add gap between items */

  @media (max-width: 768px) {
    flex-direction: row;
    align-items: center;
    margin-top: 1rem;
    gap: 0.5rem; /* Reduce gap on medium screens */
  }

  @media (max-width: 400px) {
    flex-direction: row;
    margin-top: 0.5rem;
    gap: 0.25rem; /* Further reduce gap on very small screens */
  }
`;

const BioContent = styled.div`
  flex: 1;
  margin-right: 1rem; /* Space between bio and join date */
  overflow-wrap: break-word; /* Handle long words or URLs */
`;

const JoinDate = styled.div`
  flex: 1;
  text-align: right; /* Align text to the right on larger screens */

  @media (max-width: 768px) {
    text-align: right; /* Keep text right-aligned */
  }

  @media (max-width: 400px) {
    text-align: right; /* Keep text right-aligned */
  }
`;

export default Bio;
