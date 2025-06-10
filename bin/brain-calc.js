#!/usr/bin/env node

import { calcNums, generationNumber, generationMathOperator } from '../src/helpers/helpers.js'
import runGame from '../src/runGame.js'

const generateCalcQuestion = () => {
  const a = generationNumber()
  const b = generationNumber()
  const op = generationMathOperator()

  const correctAnswer = String(calcNums(a, b, op))
  const question = `${a} ${op} ${b}`

  return [question, correctAnswer]
}
const description = 'What is the result of the expression?'
runGame(description, generateCalcQuestion)
