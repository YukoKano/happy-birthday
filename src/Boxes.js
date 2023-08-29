import { Box } from './Box';

export function Boxes({ numbers, setNumbers, setIsNumbersChanged }) {

  function handleClick(i, value) {
    const nextNumbers = [...numbers];
    nextNumbers[i] = value;
    setNumbers(nextNumbers);
    setIsNumbersChanged(true);
  }

  const boxesArray = Array(4);

  return (
    <div className='boxes'>
      {boxesArray.map((index) => {
          return (
            <Box value={numbers[index]} onBoxChange={(event) => handleClick(index, event.target.value)}/> // 動かなくなっちゃった＞＜
          )
        }
      )}
    </div>
  )
}