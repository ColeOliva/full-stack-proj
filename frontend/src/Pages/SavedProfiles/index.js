import ErrorContext from "../../hook/useErrorContext";
import List from "./List";

const SavedProfiles = () => {
  const { reportErrors } = ErrorContext();
  return (
    <div>
      <reportErrors pageKey="saved-profiles" />
      <List />
    </div>
  );
};

export default SavedProfiles;
