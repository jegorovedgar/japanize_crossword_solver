import React, { ChangeEvent, useEffect, useState } from "react";
import Game, { GameDefinition } from "./components/game";

export type GameSize = {
  width: number,
  height: number
}
export const getGameDefinition = (size: GameSize): GameDefinition => ({
  width: [],
  height: []
})
const App = () => {
  const [size, setSize] = useState<GameSize>({ width: 10, height: 10 });
  const [definition, setDefinition] = useState<GameDefinition>(getGameDefinition(size));
  useEffect(() => setDefinition(getGameDefinition(size)), [size]);
  const inputChangeHandler = (key: keyof GameSize) => (event: ChangeEvent<HTMLInputElement>) => setSize({
    ...size,
    [key]: Math.max(1, parseInt(event.target.value) || 1)
  })
  return (
    <>
      <pre>{JSON.stringify(size, null, 2)}</pre>
      <label>
        Width<br />
        <input type="number" value={size.width} onChange={inputChangeHandler("width")} />
      </label>
      <br />
      <label>
        Height<br />
        <input type="number" value={size.height} onChange={inputChangeHandler("height")} />
      </label>
      <br />

      <Game definition={definition} matrix={[]}/>
    </>
  )
};

export default App;
