import './App.css';
import { useState, useEffect } from 'react';
import Options from './Options/Options';
import Description from './Description/Description';
import Feedback from './Feedback/Feedback';
import Notification from './Notification/Notification';

export default function App() {
  const [value, setValue] = useState(() => {
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

  useEffect(() => {
    window.localStorage.setItem('feedback-values', JSON.stringify(value));
  });

  const updateFeedback = feedbackType => {
    setValue({
      ...value,
      [feedbackType]: value[feedbackType] + 1,
    });
  };

  const resetFeedback = () => {
    setValue({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };
  const { good, neutral, bad } = value;
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

// let clicks = 0;
// const [clicks, setClick] = useState(() => {
//   // Зчитуємо значення за ключем
//   const savedClicks = window.localStorage.getItem('saved-clicks');
//   // Якщо там щось є, повертаємо це значення як початкове значення стану
//   if (savedClicks !== null) {
//     return JSON.parse(savedClicks);
//   }
//   // Else return default value
//   return 0;

//   // Or through ternary operator
//   // return savedClicks !== null ? JSON.parse(savedClicks) : 0;
// });

// useEffect(() => {
//   window.localStorage.setItem('saved-clicks', JSON.stringify(clicks));
// }, [clicks]);

// const handleClick = e => {
//   setClick(clicks + 1);
// };
