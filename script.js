const GameBoard = (function () {
    let gameBoard = [
        ["", "", ""],
        ["", "", ""],
        ["", "", ""],
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
    const setBoardCell = (row, column, symbol) => {
        if (gameBoard[row][column] != "X" && gameBoard[row][column] != "O") {
            gameBoard[row][column] = symbol;
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
function player(name) {
    let point = 0;
    const addPoint = () => point++;
    const rejectPoint = () => point--;
    const getPoint = () => point;
    return {
        name,
        addPoint,
        rejectPoint,
        getPoint,
    };
}

const init = (function () {
    const player1 = player("joe");
    const player2 = player("joseph");
    let symbol = "X";
    const containerCell = document.querySelector(".container");
    containerCell.addEventListener("click", (e) => {
        switch (e.target.id) {
            case "1":
                GameBoard.setBoardCell(0, 0, symbol);
                break;
            case "2":
                GameBoard.setBoardCell(0, 1, symbol);
                break;
            case "3":
                GameBoard.setBoardCell(0, 2, symbol);
                break;
            case"4":
                GameBoard.setBoardCell(1, 0, symbol);
                break;
            case "5":
                GameBoard.setBoardCell(1, 1, symbol);
                break;
            case "6":
                GameBoard.setBoardCell(1, 2, symbol);
                break;
            case "7":
                GameBoard.setBoardCell(2, 0, symbol);
                break;
            case "8":
                GameBoard.setBoardCell(2, 1, symbol);
                break;
            case "9":
                GameBoard.setBoardCell(2, 2, symbol);
                break;
        }
        e.target.textContent = symbol;
        GameBoard.print();

        // if (GameBoard.whoWinner() === player1.symbolBool) {
        //     console.log("Player 1 Win");
        //     player1.addPoint();
        // } else if (GameBoard.whoWinner() === player2.symbolBool) {
        //     console.log("Player 2 Win");
        //     player2.addPoint();
        // } else {
        //     console.log("Draw");
        // }
    });
    console.log({
        point1: player1.getPoint(),
        point2: player2.getPoint(),
    });
})();
