export const ROWS = 10;
export const COLUMNS = 20;
export const mines = Array.from(Array(ROWS)).map(y => Array.from(Array(COLUMNS)).map(x => 0));


function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

Array.from(Array(7)).forEach(() => {
    while (true) {
        let row = getRandomInt(ROWS - 1);
        let column = getRandomInt(COLUMNS - 1);

        if (mines[row][column] === 0) {
            mines[row][column] = 1;
            break;
        }
    }
});


export const board = {
    mines,
    current: {
        row: 0,
        column: 0,
    },
    ROWS,
    COLUMNS,
};
