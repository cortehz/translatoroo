import { Alert, Text, useWindowDimensions } from "react-native";
import { TextNormal } from "../../sharedStyles";
import { Question, QuizState } from "../../type";
import {
  ButtonContainer,
  CheckAnswerButton,
  FlexRow,
  SubmitButtonInActive,
  SubmitButtonActive,
  TextWithState,
} from "./ButtonArea.styles";

interface ButtonAreaProps {
  quizState: QuizState;
  quizQuestionsDE?: Question[];
  setQuizState: (quizState: QuizState) => void;
}

const ButtonArea: React.FunctionComponent<ButtonAreaProps> = ({
  quizState,
  quizQuestionsDE,
  setQuizState,
}) => {
  const { height } = useWindowDimensions();
  const { currentQuestion, currentAnswer, isAnswered, isCorrect } = quizState;

  const checkAnswer = (currentAnswer: string) => {
    if (!quizQuestionsDE) return;
    const { answer } = quizQuestionsDE[currentQuestion];
    const isCorrect = answer === currentAnswer;
    setQuizState({
      ...quizState,
      isAnswered: true,
      isCorrect,
    });
  };

  const handleNextButtonClick = () => {
    if (!quizQuestionsDE) return;
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < quizQuestionsDE.length) {
      setQuizState({
        ...quizState,
        currentAnswer: "",
        isAnswered: false,
        currentQuestion: nextQuestion,
      });
    } else {
      Alert.alert("Quiz is finished, restarting quiz...");
      setTimeout(() => {
        setQuizState({
          ...quizState,
          currentAnswer: "",
          isAnswered: false,
          currentQuestion: 0,
        });
      }, 3000);
    }
  };

  const displayButton = () => {
    if (currentAnswer === "") {
      return (
        <SubmitButtonInActive
          onPress={() => {
            handleNextButtonClick();
          }}
          disabled={!!!currentAnswer}
        >
          <TextNormal>CONTINUE</TextNormal>
        </SubmitButtonInActive>
      );
    } else if (currentAnswer !== "" && !isAnswered) {
      return (
        <CheckAnswerButton
          onPress={() => {
            checkAnswer(currentAnswer);
          }}
        >
          <TextNormal>CHECK ANSWER</TextNormal>
        </CheckAnswerButton>
      );
    } else {
      return (
        <SubmitButtonActive
          onPress={() => {
            handleNextButtonClick();
          }}
          disabled={!!!currentAnswer}
        >
          <TextWithState isAnswered={isAnswered} isCorrect={isCorrect}>
            CONTINUE
          </TextWithState>
        </SubmitButtonActive>
      );
    }
  };

  return (
    <ButtonContainer
      height={height / 5}
      isAnswered={isAnswered}
      isCorrect={isCorrect}
    >
      {isAnswered && (
        <FlexRow>
          <TextNormal>
            {isAnswered && isCorrect
              ? "Great job!"
              : isAnswered && !isCorrect
              ? `Answer: ${
                  quizQuestionsDE && quizQuestionsDE[currentQuestion].answer
                }`
              : null}
          </TextNormal>
          <Text>icon</Text>
        </FlexRow>
      )}
      {displayButton()}
    </ButtonContainer>
  );
};

export default ButtonArea;
