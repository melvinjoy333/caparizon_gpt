import { useState } from "react";
import axios from "axios";
import "./App.css";
import User from "./Components/User";
import InputBox from "./Components/InputBox";
import System from "./Components/System";

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
        "http://0.0.0.0:5002/api/chat",
        payload
      );
      console.log("response", response?.data);

      setConversation(response?.data);
    } catch (error) {
      console.log("error", error);
    }
  };
  return (
    <div
      className="gpt-App"
      style={{ display: "flex", alignItems: "center", flexDirection: "column" }}
    >
      <div>
        <h2>GPT</h2>
      </div>
      <div style={{ width: "700px" }}>
        <InputBox handleSendCallBack={handleSendCallBack} />
        <div>
          {conversation
            ?.slice(0)
            .reverse()
            .map((obj, idx) => {
              if (obj.role === "user") {
                return (
                  <div style={{ display: "flex", justifyContent: "flex-end", marginTop:"10px" }}>
                    <User data={obj} key={idx} />
                  </div>
                );
              } else {
                return (
                  <div
                    style={{ display: "flex", justifyContent: "flex-start", marginTop:"10px"  }}
                  >
                    <System data={obj} key={idx} />
                  </div>
                );
              }
            })}
        </div>
      </div>
    </div>
  );
}

export default App;
