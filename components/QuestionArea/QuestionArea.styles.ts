import styled from "styled-components/native";
import { AnswerProps, ButtonContainerProps } from "../../type";

export const TextAnswer = styled.Text<ButtonContainerProps>`
  color: ${({ isAnswered, isCorrect }) =>
    isAnswered && isCorrect
      ? "white"
      : isAnswered && !isCorrect
      ? "white"
      : "#3b6c81"};
`;

export const SelectedAnswerView = styled.TouchableHighlight<AnswerProps>`
  border-radius: 12px;
  padding: ${({ currentAnswer }) => (!!currentAnswer ? 16 : 8)}px;
  min-width: ${({ currentAnswer }) => (!!currentAnswer ? "10px" : "80px")};
  border-bottom-width: ${({ currentAnswer }) => (!!currentAnswer ? 0 : 1)}px;
  background-color: ${({ isAnswered, isCorrect, currentAnswer }) =>
    isAnswered && isCorrect
      ? "#41e7e7"
      : isAnswered && !isCorrect
      ? "#ff6961"
      : currentAnswer === ""
      ? "transparent"
      : "white"};
  align-items: center;
  border-bottom-color: white;
  font-size: 20px;
  font-weight: bold;
  margin-right: 8px;
  text-align: center;
`;
