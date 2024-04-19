import { useState } from "react";
import { Form, InputGroup, Button } from "react-bootstrap";

type Props = {
  handleSendCallBack: (inputData: any) => void;
};
const InputBox = ({ handleSendCallBack }: Props) => {
  const [inputVal, setInputVal] = useState("");

  const handleChange = (e: any) => {
    setInputVal(e.target.value);
  };

  const handleSend = () => {
    handleSendCallBack(inputVal);
    setInputVal("");
  };

  const handleKeyDown = (event: any) => {
    if (event.key === "Enter") {
      handleSendCallBack(inputVal);
      setInputVal("");
    }
  };
  return (
    <div className="cz-input-container">
      <InputGroup className="cz-input-grp">
        <Form.Control
          placeholder="Please enter your query"
          value={inputVal}
          onChange={handleChange}
          onKeyUp={handleKeyDown}
        />
        <Button variant="outline-secondary" onClick={handleSend}>
          Send
        </Button>
      </InputGroup>
    </div>
  );
};

export default InputBox;
