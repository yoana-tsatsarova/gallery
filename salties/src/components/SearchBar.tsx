import { useState } from "react";
import { Button } from "react-bootstrap";

type SearchBarProps = {
  getUserInput: (input: string) => void;
};

const SearchBar = (props: SearchBarProps) => {
  const [userInput, setUserInput] = useState("");

  const onSubmit = () => {
    props.getUserInput(userInput);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      onSubmit();
    }
  };

  return (
    <div className="d-flex justify-content-center mb-3 w-50 mx-auto">
      <input
        className="form-control form-control-sm py-1 fs-4 text-capitalize border border-3 border-dark me-2"
        type="text"
        placeholder="Search"
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <Button className="btn btn-primary" onClick={onSubmit}>
        Search
      </Button>
    </div>
  );
};

export default SearchBar;
