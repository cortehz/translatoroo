import styled from "styled-components/native";

export const Container = styled.View<{ windowHeight: number }>`
  flex: 1;
  background-color: #75dafe;
  align-items: center;
  justify-content: center;
  height: ${(props) => props.windowHeight}px;
  border-color: white;
  border-style: solid;
  border-bottom-width: 2px;
`;

export const OptionsContainer = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  width: 60%;
  justify-content: center;
  margin-top: 50px;
`;

export const OptionItem = styled.TouchableOpacity<{ active: boolean }>`
  background-color: ${({ active }) => (active ? "#647b85 " : "white")};
  border-radius: 10px;
  padding: 16px;
  padding-left: 20px;
  padding-right: 20px;
  margin: 10px;
  align-items: center;
  justify-content: center;
`;

export const TextBold = styled.Text<{ active: boolean }>`
  font-weight: bold;
  color: ${({ active }) => (active ? "transparent" : "#3b6c81")};
`;

export const TextSmall = styled.Text`
  color: white;
  font-size: 12px;
`;

export const TextLarge = styled.Text`
  color: white;
  margin-top: 16px;
  margin-bottom: 24px;
  font-size: 24px;
`;
