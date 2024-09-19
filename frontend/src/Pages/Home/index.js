import axios from "axios";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import ErrorDisplay from "../../component/ErrorDisplay";
import useErrorContext from "../../hook/useErrorContext";
import InformationArea from "./InformationArea";
import SearchBar from "./SearchBar";

const Home = () => {
  const [information, setInformation] = useState({});
  const [searchParams] = useSearchParams();
  const { reportErrors } = useErrorContext();
  const user = searchParams.get("user") || "Octocat";

  const searchUser = async (user) => {
    try {
      const response = await axios.get(`https://api.github.com/users/${user}`);
      const data = response.data;
      return data;
    } catch (error) {
      reportErrors("home", error.message);
    }
  };

  // renders the initial definition for user to see when first loaded
  useEffect(() => {
    const renderInitialDefinition = async () => {
      const data = await searchUser(user);
      setInformation(data);
    };

    renderInitialDefinition();
  }, []);

  return (
    <div>
      <ErrorDisplay pageKey="home" />
      <SearchBar
        searchUser={searchUser}
        information={information}
        setInformation={setInformation}
      />
      <InformationArea information={information} />
    </div>
  );
};

export default Home;
