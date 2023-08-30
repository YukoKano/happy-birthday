export function Box({ onBoxChange, myKey }) {
  return (
    <input className="box" type="text" inputMode="numeric" maxLength="1" pattern='\d' onChange={onBoxChange} key={myKey} />
  );
}
