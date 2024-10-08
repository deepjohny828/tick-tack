const GameBoard = (function () {
    let gameBoard = [
        [" ", " ", " "],
        [" ", " ", " "],
        [" ", " ", " "],
    ];
    const whoWinner = function () {
        let symbol;
        if (
            (gameBoard[1][1] === gameBoard[0][0] &&
                gameBoard[0][0] === gameBoard[2][2]) ||
            (gameBoard[1][1] === gameBoard[2][0] &&
                gameBoard[2][0] === gameBoard[0][2])
        ) {
            symbol = gameBoard[1][1];
        }
        if (
            gameBoard[0][0] === gameBoard[0][1] &&
            gameBoard[0][1] === gameBoard[0][2]
        ) {
            symbol = gameBoard[0][0];
        } else if (
            gameBoard[1][0] === gameBoard[1][1] &&
            gameBoard[1][1] === gameBoard[1][2]
        ) {
            symbol = gameBoard[1][0];
        } else if (
            gameBoard[2][0] === gameBoard[2][1] &&
            gameBoard[2][1] === gameBoard[2][2]
        ) {
            symbol = gameBoard[2][0];
        }
        if (
            gameBoard[0][0] === gameBoard[1][0] &&
            gameBoard[1][0] === gameBoard[2][0]
        ) {
            symbol = gameBoard[0][0];
        } else if (
            gameBoard[0][1] === gameBoard[1][1] &&
            gameBoard[1][1] === gameBoard[2][1]
        ) {
            symbol = gameBoard[0][1];
        } else if (
            gameBoard[0][2] === gameBoard[1][2] &&
            gameBoard[1][2] === gameBoard[2][2]
        ) {
            symbol = gameBoard[0][2];
        }

        if (symbol === "X") {
            return true;
        } else if (symbol === "O") {
            return false;
        } else {
            return;
        }
    };
    const getBoardCell = (row, column) => gameBoard[row][column];
    const setBoardCell = (row, column, symbolBool) => {
        if (gameBoard[row][column] != "X" && gameBoard[row][column] != "O") {
            gameBoard[row][column] = symbolBool ? "X" : "O";
        } else {
            console.log("Cell is busy");
        }
    };
    const print = () => {
        console.table(gameBoard);
    };
    return {
        whoWinner,
        print,
        setBoardCell,
        getBoardCell,
    };
})();
//true  - X
//false - O
function player(name, symbolBool) {
    let point = 0;
    const addPoint = () => point++;
    const rejectPoint = () => point--;
    const getPoint = () => point;
    return {
        name,
        symbolBool,
        addPoint,
        rejectPoint,
        getPoint,
    };
}

const init = (function () {
    const cell = document.getElementsByClassName("cell");
    
    const player1 = player("joe", true);
    const player2 = player("joseph", false);
    GameBoard.setBoardCell(2, 2, player1.symbolBool);
    GameBoard.setBoardCell(2, 1, player2.symbolBool);
    GameBoard.setBoardCell(0, 0, player1.symbolBool);
    GameBoard.setBoardCell(1, 1, player1.symbolBool);
    if (GameBoard.whoWinner() === player1.symbolBool) {
        console.log("Player 1 Win");
        player1.addPoint();
    } else if (GameBoard.whoWinner() === player2.symbolBool) {
        console.log("Player 2 Win");
        player2.addPoint();
    } else {
        console.log("Draw");
    }
    GameBoard.print();

    console.log({
        point1: player1.getPoint(),
        point2: player2.getPoint(),
    });
})();
