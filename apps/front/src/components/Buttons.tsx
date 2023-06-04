import { useCounterActions } from '../contexts/CounterProvider';

export default function Buttons() {
  const actions = useCounterActions();

  console.log('Buttons');

  return (
    <div>
      <button onClick={actions.increase}>+</button>
      <button onClick={actions.decrease}>-</button>
    </div>
  );
}
