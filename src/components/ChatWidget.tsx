/*import { useEffect, useState } from "react";
import { io } from "socket.io-client";
import {
  Wrapper,
  Header,
  Messages,
  InputWrapper,
  Input,
  SendButton,
  ChatButton,
  ChatButtonWrapper,
} from "./ChatWidget.styles";

const socket = io("http://localhost:4000"); // zamijeni ako je backend drugdje

type Message = {
  sender: string;
  text: string;
};

export const ChatWidget = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    socket.on("receiveMessage", (msg: Message) => {
      setMessages((prev) => [...prev, msg]);
    });

    return () => {
      socket.off("receiveMessage");
    };
  }, []);

  const sendMessage = () => {
    if (!input.trim()) return;

    const msg = { sender: "User", text: input };
    socket.emit("sendMessage", msg);
    //setMessages((prev) => [...prev, msg]);
    setInput("");
  };

  return (
    <>
      {!open ? (
        <ChatButtonWrapper onClick={() => setOpen(!open)}>
          <p>Chat</p>
          <ChatButton>💬</ChatButton>
        </ChatButtonWrapper>
      ) : (
        <Wrapper>
          <Header>💬 Chat Support</Header>
          <Messages>
            {messages.map((msg, i) => (
              <div key={i}>
                <b>{msg.sender}:</b> {msg.text}
              </div>
            ))}
          </Messages>
          <InputWrapper>
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type a message..."
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            />
            <SendButton onClick={sendMessage}>Send</SendButton>
          </InputWrapper>
        </Wrapper>
      )}
    </>
  );
};*/
