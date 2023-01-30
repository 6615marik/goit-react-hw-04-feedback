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
  const handleClick = ({ target }) => {
    const { name } = target;
    if (name === 'good') setGood(prev => prev + 1);
    if (name === 'bad') setBad(prev => prev + 1);
    if (name === 'neutral') setNeutral(prev => prev + 1);
  };

  return (
    <div className={css.feedback}>
      <h3 className={css.title}>Please leave feedback</h3>
      <FeedbackOptions
        options={['good', 'bad', 'neutral']}
        onLeaveFeedback={handleClick}
      />
      {sum() !== 0 ? (
        <Statistics values={values} />
      ) : (
        <Notification message="There is no feedback" />
      )}
    </div>
  );
};
