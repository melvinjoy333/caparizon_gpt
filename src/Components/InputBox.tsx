import { useState } from "react";
import { Form, InputGroup, Button, Row, Col } from "react-bootstrap";

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
    <Row>
      <Col className="cz-input-container" xs={12}>
        <InputGroup>
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
      </Col>
    </Row>
  );
};

export default InputBox;
