import styled from "styled-components";

export const ChatButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 5px;
  position: fixed;
  bottom: 24px;
  right: 24px;
  background: linear-gradient(80deg, blue, green 130%);
  color: white;
  border: none;
  border-radius: 9999px;
  width: 110px;
  height: 56px;
  font-size: 19px;
  cursor: pointer;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.25);
  z-index: 1000;
`;

export const ChatButton = styled.div``;

export const Wrapper = styled.div`
  position: fixed;
  bottom: 24px;
  right: 24px;
  width: 320px;
  min-height: 400px;
  background-color: white;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  font-family: sans-serif;
`;

export const Header = styled.div`
  background-color: #4e8cff;
  color: white;
  padding: 12px;
  font-weight: bold;
`;

export const Messages = styled.div`
  flex: 1;
  padding: 12px;
  overflow-y: auto;
  color: black;
`;

export const InputWrapper = styled.div`
  display: flex;
  border-top: 1px solid #ddd;
`;

export const Input = styled.input`
  flex: 1;
  padding: 10px;
  border: none;
  outline: none;
  background: white;
  color: black;
`;

export const SendButton = styled.button`
  background-color: #4e8cff;
  color: white;
  border: none;
  padding: 0 16px;
  cursor: pointer;
`;
