import { httpClient } from './axios';

export function register(user) {
  return httpClient.post('user/addUser', user);
}

export function login(emailAddress, password) {
  return httpClient.post('user/login', { emailAddress, password });
}

export function getCurrentUser() {
  return httpClient.get('user/current-user').then(({ data }) => data);
}

export function updateUser(userUpdate) {
  return httpClient.put(`user/${userUpdate.id}`, userUpdate);
}

export function setQuiz(quiz) {
  return httpClient.post('quiz/addQuiz', quiz);
}

export function userInfo(info) {
  return httpClient.post('result/addResult', info);
}

export function quizQuestion(quiz) {
  return httpClient.post('quiz/getAllQuestions', quiz);
}
