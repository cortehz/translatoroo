import React, { useEffect, useState, useRef } from "react";
import { getDatabase, ref, onValue } from "firebase/database";
import { Question, Word, WordResults } from "../type";
import { Alert } from "react-native";

const useDictionary = () => {
  const isMounted = useRef(false);
  const [dictionaryDE_EN, setDictionaryDE_EN] = React.useState<WordResults>();
  const [isLoading, setIsLoading] = useState(false);

  const getWords = async () => {
    setIsLoading(true);
    try {
      const db = getDatabase();
      const reference = ref(db, "/wordsDE_EN");
      onValue(reference, (snapshot) => {
        const words = snapshot.val();
        if (isMounted.current) {
          setDictionaryDE_EN(words);
          setIsLoading(false);
        }
      });
    } catch (error: any) {
      Alert.alert(
        `${error}: An error occurred while retrieving dictionary data`
      );
      setIsLoading(false);
    }
  };

  useEffect(() => {
    isMounted.current = true;
    getWords();
    return () => {
      isMounted.current = false;
    };
  }, []);

  return { dictionaryDE_EN, isLoading };
};
export default useDictionary;
