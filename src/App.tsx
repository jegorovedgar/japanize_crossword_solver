import React, { ChangeEvent, useEffect, useState } from "react";
import Game, { GameDefinition } from "./components/game";
import { MatrixCellState } from "./components/game/cells/matrix-cell";
import { GameMatrix } from "./components/game/playground";
import "normalize.css";

export type GameSize = {
  width: number,
  height: number
}
export const getGameDefinition = (size: GameSize): GameDefinition => ({
  x: new Array(size.width).fill(undefined).map(() => new Array(Math.floor(Math.random() * 4)).fill(undefined).map(() => Math.floor(Math.random() * 4))),
  y: new Array(size.height).fill(undefined).map(() => new Array(Math.floor(Math.random() * 4)).fill(undefined).map(() => Math.floor(Math.random() * 4))),
})
export const getGameMatrix = (size: GameSize): GameMatrix => new Array(size.height)
  .fill(undefined)
  .map(() => new Array(size.width)
    .fill(undefined)
    .map(() => {
      const r = Math.random();
      if (r > 0.6)
        return MatrixCellState.Filled;
      if (r > 0.3)
        return MatrixCellState.Empty;
      return MatrixCellState.Null
    })
  );
const App = () => {
  const [size, setSize] = useState<GameSize>({ width: 10, height: 10 });
  const [definition, setDefinition] = useState<GameDefinition>(getGameDefinition(size));
  const [matrix, setMatrix] = useState<GameMatrix>(getGameMatrix(size));
  useEffect(() => {
    setDefinition(getGameDefinition(size))
    setMatrix(getGameMatrix(size))
  }, [size]);
  const inputChangeHandler = (key: keyof GameSize) => (event: ChangeEvent<HTMLInputElement>) => setSize({
    ...size,
    [key]: Math.max(1, parseInt(event.target.value) || 1)
  });
  return (
    <>
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
      <Game definition={definition} matrix={matrix} onDefChange={setDefinition}/>
    </>
  )
};

export default App;
