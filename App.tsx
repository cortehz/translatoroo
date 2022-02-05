import { Text, useWindowDimensions, View } from "react-native";
import { initializeApp } from "firebase/app";
import React from "react";
import { QuizState } from "./type";
import ButtonArea from "./components/ButtonArea/ButtonArea";
import QuestionsWrapper from "./components/Layout/QuestionsWrapper";
import QuestionArea from "./components/QuestionArea/QuestionArea";
import useQuestions from "./hooks/useQuestions";
import { firebaseConfig } from "./firebaseConfig";
import {
  Container,
  OptionItem,
  OptionsContainer,
  TextBold,
  TextLarge,
  TextSmall,
} from "./App.styles";

initializeApp(firebaseConfig);

export default function App() {
  const { height } = useWindowDimensions();
  const [quizState, setQuizState] = React.useState<QuizState>({
    currentQuestion: 0,
    currentAnswer: "",
    isAnswered: false,
    isCorrect: false,
  });

  const { quizQuestionsDE, isLoading } = useQuestions();

  const { currentQuestion, currentAnswer, isAnswered } = quizState;

  const handleAnswerButtonClick = (answerOption: string) => {
    setQuizState({ ...quizState, currentAnswer: answerOption });
  };

  if (isLoading) {
    return (
      <View
        style={{
          height: height,
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <Container windowHeight={height}>
      <QuestionsWrapper>
        <TextSmall>Fill in the missing word</TextSmall>
        <TextLarge>
          {quizQuestionsDE && quizQuestionsDE[currentQuestion].questionEN}
        </TextLarge>
        <QuestionArea
          quizState={quizState}
          setQuizState={setQuizState}
          quizQuestionsDE={quizQuestionsDE}
        />
        <OptionsContainer>
          {quizQuestionsDE &&
            quizQuestionsDE[currentQuestion].options.map(
              (answerOption, index) => (
                <OptionItem
                  active={currentAnswer === answerOption}
                  key={index}
                  onPress={() => handleAnswerButtonClick(answerOption)}
                  disabled={answerOption === currentAnswer || isAnswered}
                >
                  <TextBold active={currentAnswer === answerOption}>
                    {answerOption}
                  </TextBold>
                </OptionItem>
              )
            )}
        </OptionsContainer>
        <ButtonArea
          quizQuestionsDE={quizQuestionsDE}
          quizState={quizState}
          setQuizState={setQuizState}
        />
      </QuestionsWrapper>
    </Container>
  );
}
