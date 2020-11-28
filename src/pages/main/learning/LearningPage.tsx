import React from 'react'
import { LearningWithCards, LearningWithoutCards } from './components'

export default function LearningPage() {
  return <>{true ? <LearningWithCards /> : <LearningWithoutCards />}</>
}
