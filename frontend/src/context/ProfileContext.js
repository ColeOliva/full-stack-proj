import axios from "axios";
import { createContext, useEffect, useState } from "react";
import useErrorContext from "../hook/useErrorContext";

const ProfileContext = createContext({
  profiles: [],
  addProfile: () => {},
  deleteProfile: () => {},
  updateProfile: () => {},
});

const ProfileProvider = ({ children }) => {
  const [profiles, setProfiles] = useState([]);
  const { reportErrors } = useErrorContext();

  useEffect(() => {
    const fetchProfiles = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3001/saved-profiles"
        );
        const data = response.data;
        setProfiles(data);
      } catch (error) {
        reportErrors("saved-profiles", error.message);
      }
    };

    fetchProfiles();
  }, []);

  const addProfile = async (profile) => {
    try {
      const response = await axios.post(
        "http://localhost:3001/saved-profiles",
        {
          _id: profile.login,
          profileData: profile,
        }
      );
      const data = response.data;
      setProfiles([...profiles, data]);
    } catch (error) {
      reportErrors("add-profile", error.message);
    }
  };

  const updateProfile = async (oldUsername, newProfile) => {
    try {
      await axios.delete(`http://localhost:3001/saved-profiles/${oldUsername}`);
      const response = await axios.post(
        "http://localhost:3001/saved-profiles",
        {
          _id: newProfile.login,
          profileData: newProfile,
        }
      );

      const data = response.data;
      const updatedProfiles = profiles.map((profile) =>
        profile._id === oldUsername ? data : profile
      );
      setProfiles(updatedProfiles);
    } catch (error) {
      reportErrors("update-profile", error.message);
    }
  };

  const deleteProfile = async (username) => {
    try {
      await axios.delete(`http://localhost:3001/saved-profiles/${username}`);
      const filteredProfiles = profiles.filter((p) => p._id !== username);
      setProfiles(filteredProfiles);
    } catch (error) {
      reportErrors("delete-profile", error.message);
    }
  };

  return (
    <ProfileContext.Provider
      value={{
        profiles,
        addProfile,
        updateProfile,
        deleteProfile,
      }}
    >
      {children}
    </ProfileContext.Provider>
  );
};

export { ProfileContext, ProfileProvider };
export default ProfileContext;
