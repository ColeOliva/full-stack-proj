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
      <Button type="submit">
        <IoSearchOutline size={20} color={"blue"} />
      </Button>
      <Input
        value={text}
        type="text"
        onChange={handleChange}
        placeholder="Search for any user..."
      />
    </InputForm>
  );
};

const InputForm = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${Color.backgroundWhite};
  padding: 1rem;
  border-radius: 8px;
`;
/* 
  &:focus-within {
    box-shadow: 0 0 0 2px
      ${(props) => {
        if (!props.information) return Color.error;
        else return Color.backgroundGray;
      }}; // props
  }
`; */

const Input = styled.input`
  border: none;
  outline: none;
  background-color: inherit;
`;

const Button = styled.button`
  background-color: inherit;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
`;

export default SearchBar;
