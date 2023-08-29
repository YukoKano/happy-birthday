import { collectNumbers } from "./constants";

export function Button({ inputNumbers, setIsFinished, setIsCollect }) {
  function click() {
    if (inputNumbers.toString() === collectNumbers.toString()) {
      setIsFinished(true);
    } else {
      setIsCollect(false);
    }
  }
  return (
    <button onClick={click}>答えを送信！</button>
  )
}