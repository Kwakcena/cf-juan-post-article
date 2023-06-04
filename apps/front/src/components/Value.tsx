import { useCounterValue } from '../contexts/CounterProvider';

export default function Value() {
  const counter = useCounterValue();

  console.log('Value');

  return <div>{counter}</div>;
}
