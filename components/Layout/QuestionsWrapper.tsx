import { useWindowDimensions } from "react-native";
import styled from "styled-components/native";

interface QuestionsWrapperProps {}

const QuestionsWrapper: React.FunctionComponent<QuestionsWrapperProps> = ({
  children,
}) => {
  const { height } = useWindowDimensions();
  return (
    <QuestionContainer containerHeight={height * 0.2}>
      {children}
    </QuestionContainer>
  );
};

export default QuestionsWrapper;

const QuestionContainer = styled.View<{ containerHeight: number }>`
  flex: 1;
  align-items: center;
  margin-top: ${({ containerHeight }) => containerHeight}px;
  border-top-right-radius: 36px;
  border-top-left-radius: 36px;
  justify-content: flex-start;
  background-color: #3b6c81;
  padding-top: 50px;
  width: 100%;
`;
