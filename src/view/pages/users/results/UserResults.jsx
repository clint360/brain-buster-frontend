/* eslint-disable consistent-return */
/* eslint-disable no-plusplus */
/* eslint-disable no-unreachable-loop */
import React, { useContext, useEffect } from 'react';
import { AppContext } from '../../../../core/data/Context';

function UserResults() {
  const { questions, userResponses } = useContext(AppContext);
  const questionAnswers = questions.map((a) => a.answerIndex);
  const compare = (arr1, arr2) => {
    let total = 0;
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] === arr2[i]) {
        total++;
      }
      return total;
    }
  };

  useEffect(() => {}, []);

  return <div>{compare(questionAnswers, userResponses)}</div>;
}

export default UserResults;
