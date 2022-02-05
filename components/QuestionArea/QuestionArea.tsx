import { useState } from "react";
import { View, Text } from "react-native";
import styled from "styled-components/native";
import useDictionary from "../../hooks/useDictionary";
import { TextNormal } from "../../sharedStyles";
import { Question, QuizState, Word } from "../../type";
import { SelectedAnswerView, TextAnswer } from "./QuestionArea.styles";

interface QuestionAreaProps {
  quizQuestionsDE?: Question[];
  quizState: QuizState;
  setQuizState: (quizState: QuizState) => void;
}

const QuestionArea: React.FunctionComponent<QuestionAreaProps> = ({
  quizQuestionsDE,
  quizState,
  setQuizState,
}) => {
  const { currentQuestion, currentAnswer, isAnswered, isCorrect } = quizState;
  const [wordTranslation, setWordTranslation] = useState<Word>();

  const { dictionaryDE_EN } = useDictionary();

  const checkWordMeaning = (word: string) => {
    const lowerCaseWord = word.toLowerCase();
    const wordTranslation = dictionaryDE_EN?.results.find((wordmeaning) => {
      return wordmeaning.word.toLowerCase() === lowerCaseWord;
    });
    setWordTranslation(wordTranslation);
  };

  //convert question string to lowercase and split it into array of words to
  //manipulate each word separately
  const originalQuestion =
    quizQuestionsDE && quizQuestionsDE[currentQuestion].questionDE;
  const splitOriginalQuestionString = originalQuestion?.split(" ");

  return (
    <View style={{ flexDirection: "row", alignItems: "center", marginTop: 20 }}>
      {splitOriginalQuestionString?.map((word: string) => {
        return (
          <View key={word}>
            {/* take answer awar from question string */}
            {word === quizQuestionsDE![currentQuestion].answer ? (
              <SelectedAnswerView
                currentAnswer={currentAnswer}
                isAnswered={isAnswered}
                isCorrect={isCorrect}
                onPress={() => {
                  setQuizState({ ...quizState, currentAnswer: "" });
                }}
                disabled={currentAnswer !== "" || isAnswered}
              >
                <TextAnswer isAnswered={isAnswered} isCorrect={isCorrect}>
                  {currentAnswer === "" ? "" : currentAnswer}
                </TextAnswer>
              </SelectedAnswerView>
            ) : (
              <>
                <WordWithMeaning onPress={() => checkWordMeaning(word)}>
                  {wordTranslation?.word.toLowerCase() ===
                    word.toLowerCase() && (
                    <Text
                      style={{
                        flex: 1,
                        position: "absolute",
                        backgroundColor: "white",
                        width: wordTranslation?.word.length * 10,
                        textAlign: "center",
                        bottom: 36,
                      }}
                    >
                      {wordTranslation.translation}
                    </Text>
                  )}

                  <TextNormal>{word}</TextNormal>
                  <View style={[{ height: 1, overflow: "hidden" }]}>
                    <View
                      style={[
                        {
                          height: 2,
                          borderWidth: 1,
                          borderColor: "#ddd",
                          borderStyle: "dashed",
                        },
                      ]}
                    ></View>
                  </View>
                </WordWithMeaning>
              </>
            )}
          </View>
        );
      })}
    </View>
  );
};

export default QuestionArea;

const WordWithMeaning = styled.TouchableOpacity`
  position: relative;
  margin-right: 10px;
`;
