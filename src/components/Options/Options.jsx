export default function Options({
  onGoodAction,
  onNeutralAction,
  onBadAction,
  onReset,
  totalValue,
}) {
  return (
    <div>
      <button onClick={onGoodAction}>Good</button>
      <button onClick={onNeutralAction}>Neutral</button>
      <button onClick={onBadAction}>Bad</button>
      {totalValue !== 0 && <button onClick={onReset}>Reset</button>}
    </div>
  );
}
