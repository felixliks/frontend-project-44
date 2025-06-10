#!/usr/bin/env node
import readlineSync from 'readline-sync';

export const greetUser = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};

export const askQuestion = (question) => {
  console.log(`Question: ${question}`);
};

export const getAnswer = () => {
  return readlineSync.question('Your answer: ').toLowerCase().trim();
};