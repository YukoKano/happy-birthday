import { collectNumbers } from "./constants";

export function Button({ numbers, setIsCollect, setText }) {
  function click() {
    if (numbers.toString() === collectNumbers.toString()) {
      setIsCollect(true);
    } else {
      setIsCollect(false);
      setText("答えが間違っているよ");
    }
  }
  return (
    <button onClick={click}>答えを送信！</button>
  )
}