import { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import styled from "styled-components";
import Color from "../../constant/Color";

const SearchBar = ({
  searchUser,
  information,
  setInformation,
}) => {
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const word = text;
    if (word === "") return;
    const data = await searchUser(word);
    setInformation(data);
  };

  return (
    <InputForm onSubmit={handleSubmit}>
      <div className="leftSideSearch">
        <Button type="submit">
          <IoSearchOutline size={20} color={"blue"} />
        </Button>
        <Input
          className="searchInput"
          value={text}
          type="text"
          onChange={handleChange}
          placeholder="Search Github Username..."
        />
      </div>
      <Button className="searchButton" type="submit">
        Search
      </Button>
    </InputForm>
  );
};

const InputForm = styled.form`
  height: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${Color.backgroundWhite};
  padding: 0.75rem;
  border-radius: 12px;
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.1);
  font-family: "Space Mono", monospace;
  font-weight: ${Color.fontWeight};
  font-size: 1rem; /* Updated font size */
  line-height: 1.5rem; /* Updated line height */

  .searchInput {
    width: 100%;
    height: auto;
    flex: 1;
  }

  .leftSideSearch {
    flex: 1;
    display: flex;
    align-items: center;
  }

  .searchButton {
    background-color: ${Color.primaryButton};
    font-family: "Space Mono", monospace;
    color: ${Color.backgroundWhite};
    border-radius: 8px;
    padding: 0.75rem;
    font-size: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100px;
    height: auto;
    border: none;
    cursor: pointer;
  }

  .searchButton:hover {
    background-color: ${Color.hoverButton};
  }

  @media (max-width: 992px) {
    height: auto;
    padding: 1rem;

    .searchInput {
      width: 75%;
      margin-bottom: 0.5rem;
    }

    .searchButton {
      width: 25%;
      height: auto;
    }
  }
`;

const Input = styled.input`
  border: none;
  outline: none;
  background-color: inherit;
  font-family: "Space Mono", monospace;
  font-weight: ${Color.fontWeight};
`;

const Button = styled.button`
  background-color: inherit;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
`;

export default SearchBar;
