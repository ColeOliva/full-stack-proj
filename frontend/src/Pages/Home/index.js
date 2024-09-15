import axios from "axios";
import { useEffect, useState } from "react";
import InformationArea from "./InformationArea";
import SearchBar from "./SearchBar";

const Home = () => {
  const [information, setInformation] = useState({});
  const user = "Octocat";

  const searchUser = async (word) => {
    try {
      const response = await axios.get(`https://api.github.com/users/${user}`);
      const data = response.data;
      return data;
    } catch (error) {
      console.log(error);
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
