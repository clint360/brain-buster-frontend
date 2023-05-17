/* eslint-disable operator-assignment */
/* eslint-disable no-unused-vars */
/* eslint-disable consistent-return */
/* eslint-disable no-plusplus */
/* eslint-disable no-unreachable-loop */
import React, { useContext, useEffect, useState } from 'react';
import { RWebShare } from 'react-web-share';
import { useNavigate, useParams } from 'react-router-dom';
import { AppContext } from '../../../../core/data/Context';
import './UserResults.css';
import { userInfoUpdate } from '../../../../api/auth';

function UserResults() {
  const routeParams = useParams();
  const [result, setResult] = useState('Failed');
  const { quizName } = routeParams;
  const compare = (arr1, arr2) => {
    let total = 0;
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] === arr2[i]) {
        total = total + 1;
      }
    }
    return total;
  };
  const redirect = useNavigate();
  const { questions, userResponses, quizTaker, quizInfo } =
    useContext(AppContext);
  const questionAnswers = questions.map((a) => a.answerIndex);
  const [results, setResults] = useState({
    numberOfQuestions: questionAnswers.length,
    numberOfQuestionsAttempted: userResponses.filter((a) => {
      return a !== null;
    }).length,
    userScore: `${compare(userResponses, questionAnswers)}/${questions.length}`,
    percentage:
      (compare(userResponses, questionAnswers) / questions.length) * 100,
  });
  useEffect(() => {
    if (results.percentage >= 50) {
      setResult('Passed');
    }
    const update = {
      attemps: results.numberOfQuestionsAttempted,
      earnPoints: results.userScore,
      quizResult: result,
      quizName,
    };
    async function Updates() {
      await userInfoUpdate(update, quizTaker.emailAddress);
    }
    Updates();
  }, [result]);
  return (
    <div>
      <div className="whole">
        <div className="centered-div">
          {results.percentage >= 50 ? (
            <div className="remark">
              <i className="fa-solid fa-check fa-beat-fade" />
            </div>
          ) : (
            <div className="remark" style={{ background: 'coral' }}>
              <i className="fa-solid fa-x fa-beat-fade" />
            </div>
          )}
          <div className="feedback-message">
            <p className="message">
              {results.percentage >= 50
                ? `Great Job, ${quizTaker.studentName}! Here is how you performed in this quiz`
                : `Nice Try ${quizTaker.studentName}! Here is how you performed in this quiz`}
            </p>
          </div>
          <hr className="line" />
          <div className="metrics-container">
            <div className="metrics">
              <div className="sub-total">
                <p className="total-content">Total Questions:</p>
              </div>
              <div className="number">
                <p className="sub-number">{results.numberOfQuestions}</p>
              </div>
            </div>

            <div className="metrics">
              <div className="sub-total">
                <p className="total-content"> Attempt:</p>
              </div>
              <div className="number">
                <p className="sub-number">
                  {results.numberOfQuestionsAttempted}
                </p>
              </div>
            </div>
            <div className="metrics">
              <div className="sub-total">
                <p className="total-content"> Score: </p>
              </div>
              <div className="number">
                <p className="sub-number">{results.userScore}</p>
              </div>
            </div>
            <div className="metrics">
              <div className="sub-total">
                <p className="total-content"> Percentage: </p>
              </div>
              <div className="number">
                <p className="sub-number">{results.percentage}%</p>
              </div>
            </div>
            <hr className="line" />
            <div className="metrics">
              <div className="sub-total">
                <p className="total-content">Quiz Result:</p>
              </div>
              <div className="number">
                <p className="sub-number">{result}</p>
              </div>
            </div>
            <div className="quiz-result-buttons">
              <div>
                <RWebShare
                  data={{
                    text: `Here is a summary of my Brain Buster ${quizName} Results. I scored ${results.userScore} points with a percentage of ${results.percentage}. I bet you can't challenge me`,
                    url: 'http://localhost:3000',
                    title: `${quizTaker.studentName}'s performance in Brain Buster - ${quizName}`,
                  }}
                >
                  <button className="share-button" type="button">
                    Share <i className="fa-solid fa-share-nodes" />
                  </button>
                </RWebShare>
              </div>
              <div />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserResults;
