import React, { useEffect, useState, useRef } from "react";
import { getDatabase, ref, onValue } from "firebase/database";
import { Question } from "../type";
import { Alert } from "react-native";

const useQuestions = () => {
  const isMounted = useRef(false);
  const [quizQuestionsDE, setQuizQuestionsDE] =
    React.useState<Array<Question>>();
  const [isLoading, setIsLoading] = useState(false);

  const getQuiz = async () => {
    setIsLoading(true);
    try {
      const db = getDatabase();
      const reference = ref(db, "/quizEN_DE");
      onValue(reference, (snapshot) => {
        const quiz = snapshot.val();
        if (isMounted.current) {
          setQuizQuestionsDE(quiz);
          setIsLoading(false);
        }
      });
    } catch (error: any) {
      Alert.alert(`${error}: An error occurred while retrieving quiz data`);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    isMounted.current = true;
    getQuiz();
    return () => {
      isMounted.current = false;
    };
  }, []);

  return { quizQuestionsDE, isLoading };
};
export default useQuestions;
