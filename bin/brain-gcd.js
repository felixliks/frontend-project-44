#!/usr/bin/env node

import { generationNumber, gcd } from '../src/helpers/helpers.js'
import runGame from '../src/runGame.js'

const generateGcdQuestion = () => {
  const a = generationNumber()
  const b = generationNumber()

  const correctAnswer = String(gcd(a, b))
  const question = `${a} ${b}`

  return [question, correctAnswer]
}
const description = 'Find the greatest common divisor of given numbers.'
runGame(description, generateGcdQuestion)
