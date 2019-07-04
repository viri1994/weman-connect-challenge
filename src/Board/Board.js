import React from 'react';
import './Board.css';
import Doggo from './Doggo';
import Reactive from './Reactive';

import { COLUMNS, ROWS } from '../GameState';

function Tile({ current, coordinates, mines }) {
  if (current.row === coordinates.row && current.column === coordinates.column) {
    return <Doggo></Doggo>;
  }

  if (mines[coordinates.row][coordinates.column] === 1) {
    return <Reactive></Reactive>;
  }

  return "";
}

function Board({ current, mines }) {

  return (
    <table className="Board-table">
      <tbody>
        {
          Array.from(Array(ROWS)).map((_, row) =>
            <tr key={'pos' + row}>
              {
                Array.from(Array(COLUMNS)).map((_, column) =>
                  <td key={'pos' + row + '_' + column}>
                    <Tile coordinates={{ row, column }} current={current} mines={mines}></Tile>
                  </td>
                )
              }
            </tr>
          )
        }
      </tbody>
    </table>
  );
}

export default Board;
