import css from './Section.module.css';
import React from 'react';
import { useState } from 'react';

import { Statistics } from '../Statistics/Statistics';
import { Notification } from '../Notification/Notification';
import { FeedbackOptions } from '../FeedbackOptions/FeedbackOptions';

export const Section = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const sum = () => good + neutral + bad;
  const positivePercentage = Math.round((good / sum()) * 100);

  const values = [
    ['Good', good],
    ['Neutral', neutral],
    ['Bad', bad],
    ['Total', good + neutral + bad],
    ['Positive feedback', `${positivePercentage}%`],
  ];

  const goodIncrement = () => {
    setGood(good + 1);
  };

  const neutralIncrement = () => {
    setNeutral(neutral + 1);
  };

  const badIncrement = () => {
    setBad(bad + 1);
  };

  return (
    <div className={css.feedback}>
      <h3 className={css.title}>Please leave feedback</h3>
      <FeedbackOptions
        goodIncrement={goodIncrement}
        neutralIncrement={neutralIncrement}
        badIncrement={badIncrement}
      />
      {sum() !== 0 ? (
        <Statistics values={values} />
      ) : (
        <Notification message="There is no feedback" />
      )}
    </div>
  );
};
