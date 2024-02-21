import './App.css';
import { useState, useEffect } from 'react';
import Options from './Options/Options';
import Description from './Description/Description';
import Feedback from './Feedback/Feedback';
import Notification from './Notification/Notification';

export default function App() {
  //useState for values{good, neutral, bad}
  const [value, setValue] = useState(() => {
    //get value from localStorage or set default 0, 0, 0
    const feedbackValues = window.localStorage.getItem('feedback-values');
    if (feedbackValues !== null) {
      return JSON.parse(feedbackValues);
    }
    return {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  });

  //onUpdate value - update localStorage
  useEffect(() => {
    window.localStorage.setItem('feedback-values', JSON.stringify(value));
  }, [value]);

  //update feedback depands of feedbackType through setValue from useState
  const updateFeedback = feedbackType => {
    setValue({
      ...value,
      [feedbackType]: value[feedbackType] + 1,
    });
  };

  //reset value through setValue(0,0,0)
  const resetFeedback = () => {
    setValue({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };
  //destructure elements from value
  const { good, neutral, bad } = value;

  //count totalFeedback
  const totalFeedback = good + neutral + bad;

  return (
    <div>
      <Description></Description>
      <Options
        onGoodAction={() => updateFeedback('good')}
        onNeutralAction={() => updateFeedback('neutral')}
        onBadAction={() => updateFeedback('bad')}
        onReset={resetFeedback}
        totalValue={totalFeedback}
      ></Options>

      {totalFeedback === 0 ? (
        <Notification></Notification>
      ) : (
        <Feedback getValue={value} totalValue={totalFeedback}></Feedback>
      )}
    </div>
  );
}
