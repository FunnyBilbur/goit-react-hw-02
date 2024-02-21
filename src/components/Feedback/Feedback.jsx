export default function Feedback({ getValue, totalValue }) {
  const { good, neutral, bad } = getValue;
  const positive = Math.round(((good + neutral) / totalValue) * 100);
  return (
    <div>
      <p>Good:{good}</p>
      <p>Neutral:{neutral}</p>
      <p>Bad:{bad}</p>
      <p>Total:{totalValue}</p>
      <p>Positive: {positive}%</p>
    </div>
  );
}
