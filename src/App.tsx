import { useState } from "react";
import axios from "axios";
import "./Assets/CSS/cz-style.css";
import User from "./Components/User";
import InputBox from "./Components/InputBox";
import System from "./Components/System";
import { Row, Col, Container } from "react-bootstrap";

function App() {
  const [conversation, setConversation] = useState<any[]>([]);

  const handleSendCallBack = async (inputData: any) => {
    try {
      const payload = {
        conversation_data: [
          ...conversation,
          { role: "user", content: inputData },
        ],
      };
      const response = await axios.post(
        `${process.env.REACT_APP_BASE_URL}api/chat`,
        payload
      );
      setConversation(response?.data);
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <Container>
      <Row className="cz-gpt-app">
        <Col lg={12} className="d-flex justify-content-center">
          <h2>GPT</h2>
        </Col>
        <Row className="cz-container">
          <Col lg={12}>
            <InputBox handleSendCallBack={handleSendCallBack} />
          </Col>
          <Col lg={12}>
            {conversation
              ?.slice(0)
              .reverse()
              .map((obj, idx) => {
                if (obj.role === "user") {
                  return (
                    <div className="cz-user">
                      <User data={obj} key={idx} />
                    </div>
                  );
                } else {
                  return (
                    <div className="cz-system">
                      <System data={obj} key={idx} />
                    </div>
                  );
                }
              })}
          </Col>
        </Row>
      </Row>
    </Container>
  );
}

export default App;
