import Main from "../../src/components/Main";
import CounterProvider from "../../src/contexts/CounterProvider";

export default function MainPage() {
  return (
    <CounterProvider>
      <Main />
    </CounterProvider>
  );
}
