import { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import styled from "styled-components";
import Color from "../../constant/Color";

const SearchBar = ({ searchUser, information }) => {
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = async (e) => {
    // prevent default form submission, which refreshes page
    e.preventDefault();
    // call function to search user
    const word = text.trim();
    if (word === "") return;
    const data = await searchUser(word);
  };

  return (
    <InputForm onSubmit={handleSubmit} info={information}>
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
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${Color.backgroundWhite};
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  font-family: "Space Mono", monospace;
  font-weight: ${Color.fontWeight};

  .searchInput {
    width: 75vw;
  }

  .leftSideSearch {
    display: flex;
    align-items: center;
  }

  .searchButton {
    background-color: ${Color.primaryButton};
    font-family: "Space Mono", monospace;
    color: ${Color.backgroundWhite};
    border-radius: 8px;
    padding: 16px;
    font-size: 16px;
    width: 100px;
    height: 50px;
    border: none;
    cursor: pointer;
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
