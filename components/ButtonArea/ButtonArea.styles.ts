import styled from "styled-components/native";
import { ButtonContainerProps } from "../../App";

export const FlexRow = styled.View`
  flex-direction: row;
  width: 80%;
  margin-bottom: 16px;
  justify-content: space-between;
  align-items: center;
`;

export const ButtonContainer = styled.View<ButtonContainerProps>`
  padding-top: 28px;
  margin-top: auto;
  height: ${({ height }) => height}px;

  background-color: ${({ isAnswered, isCorrect }) =>
    isAnswered && isCorrect
      ? "#41e7e7"
      : isAnswered && !isCorrect
      ? "#ff6961"
      : "transparent"};
  justify-content: flex-start;
  align-items: center;
  border-top-right-radius: 36px;
  border-top-left-radius: 36px;
  width: 100%;
`;

export const TextWithState = styled.Text<ButtonContainerProps>`
  font-size: 16px;
  padding-top: 4px;
  padding-bottom: 4px;
  color: ${({ isAnswered, isCorrect }) =>
    isAnswered && isCorrect
      ? "#41e7e7"
      : isAnswered && !isCorrect
      ? "#ff6961"
      : "#3b6c81"};
  font-weight: bold;
`;

export const SubmitButton = styled.TouchableOpacity`
  padding: 12px;
  align-items: center;
  border-radius: 50px;
  width: 80%;
`;

export const SubmitButtonInActive = styled(SubmitButton)`
  background-color: #647b85;
`;

export const CheckAnswerButton = styled(SubmitButton)`
  background-color: #75dafe;
`;

export const SubmitButtonActive = styled(SubmitButton)`
  background-color: #fff;
`;
