const GameBoard = (function () {
    let gameBoard = [
        [, ,],
        [, ,],
        [, ,],
    ];
    const whoWinner = function () {
        let symbol = "";
        //diagonally to left
        if (
            (gameBoard[1][1] === gameBoard[0][0]) &&
            (gameBoard[0][0] === gameBoard[2][2]) &&
            gameBoard[0][0] != undefined
        ) {
            console.log("1");
            symbol = gameBoard[1][1];
        //diagonally to right    
        } else if (
            (gameBoard[1][1] === gameBoard[2][0]) &&
            (gameBoard[2][0] === gameBoard[0][2]) &&
            gameBoard[2][0] != undefined
        ) {
            console.log("2");
            symbol = gameBoard[1][1];
        }
        //first row horizontaly
        else if (
            (gameBoard[0][0] === gameBoard[0][1]) &&
           (gameBoard[0][1] === gameBoard[0][2]) &&
           gameBoard[0][1] != undefined
        ) {
            console.log("3");
            symbol = gameBoard[0][1];
        //second row horizontaly
        } else if (
            (gameBoard[1][0] === gameBoard[1][1]) &&
            (gameBoard[1][1] === gameBoard[1][2]) &&
            gameBoard[1][1] != undefined
        ) {
            console.log("4");
            symbol = gameBoard[1][1];
        //third row horizontaly    
        } else if (
            (gameBoard[2][0] === gameBoard[2][1]) &&
            (gameBoard[2][1] === gameBoard[2][2]) &&
            gameBoard[2][1] != undefined
        ) {
            console.log("5");
            symbol = gameBoard[2][1];
        }
        //first vertical
        else if (
            (gameBoard[0][0] === gameBoard[1][0]) &&
            (gameBoard[1][0] === gameBoard[2][0])&&
            gameBoard[1][0] != undefined
        ) {
            console.log("6");
            symbol = gameBoard[1][0];
        //second vertical
        } else if (
            (gameBoard[0][1] === gameBoard[1][1]) &&
            (gameBoard[1][1] === gameBoard[2][1])&&
            gameBoard[1][1] != undefined
        ) {
            console.log("7");
            symbol = gameBoard[1][1];
        //third vertical    
        } else if (
            (gameBoard[0][2] === gameBoard[1][2]) &&
            (gameBoard[1][2] === gameBoard[2][2]) &&
            gameBoard[1][2] != undefined
        ) {
            console.log("8");
            symbol = gameBoard[1][2];
        }
        console.log(symbol)
        if (symbol === "X") {
            return true;
        } else if (symbol === "O") {
            return false;
        }
        else{
            return null;
        }
    };
    const getBoardCell = (row, column) => gameBoard[row][column];
    const setBoardCell = (row, column, symbol) => {
        if (gameBoard[row][column] != "X" && gameBoard[row][column] != "O") {
            gameBoard[row][column] = symbol;
        } else {
            console.log("Cell is busy");
            return false;
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
    let count = 0;
    let symbol;
    const containerCell = document.querySelector(".container");
    containerCell.addEventListener("click", (e) => {
        switch (e.target.id) {
            case "1":
                symbol === "X" ? (symbol = "O") : (symbol = "X");
                GameBoard.setBoardCell(0, 0, symbol);
                e.target.textContent = GameBoard.getBoardCell(0, 0);
                break;
            case "2":
                symbol === "X" ? (symbol = "O") : (symbol = "X");
                GameBoard.setBoardCell(0, 1, symbol);
                e.target.textContent = GameBoard.getBoardCell(0, 1);
                break;
            case "3":
                symbol === "X" ? (symbol = "O") : (symbol = "X");
                GameBoard.setBoardCell(0, 2, symbol);
                e.target.textContent = GameBoard.getBoardCell(0, 2);
                break;
            case "4":
                symbol === "X" ? (symbol = "O") : (symbol = "X");
                GameBoard.setBoardCell(1, 0, symbol);
                e.target.textContent = GameBoard.getBoardCell(1, 0);
                break;
            case "5":
                symbol === "X" ? (symbol = "O") : (symbol = "X");
                GameBoard.setBoardCell(1, 1, symbol);
                e.target.textContent = GameBoard.getBoardCell(1, 1);
                break;
            case "6":
                symbol === "X" ? (symbol = "O") : (symbol = "X");
                GameBoard.setBoardCell(1, 2, symbol);
                e.target.textContent = GameBoard.getBoardCell(1, 2);
                break;
            case "7":
                symbol === "X" ? (symbol = "O") : (symbol = "X");
                GameBoard.setBoardCell(2, 0, symbol);
                e.target.textContent = GameBoard.getBoardCell(2, 0);
                break;
            case "8":
                symbol === "X" ? (symbol = "O") : (symbol = "X");
                GameBoard.setBoardCell(2, 1, symbol);
                e.target.textContent = GameBoard.getBoardCell(2, 1);
                break;
            case "9":
                symbol === "X" ? (symbol = "O") : (symbol = "X");
                GameBoard.setBoardCell(2, 2, symbol);
                e.target.textContent = GameBoard.getBoardCell(2, 2);
                break;
        }
        if (count > 3) {
            if (GameBoard.whoWinner()) {
                console.log("Player 1 Win");
                player1.addPoint();
            } else if (GameBoard.whoWinner() != null) {
                console.log("Player 2 Win");
                console.log({
                    GameBoard,
                });
                player2.addPoint();
            } else if (count > 8) {
                console.log("Draw");
            }
        }
        count++;
        GameBoard.print();
    });
    
    // console.log({
    //     point1: player1.getPoint(),
    //     point2: player2.getPoint(),
    // });
})();
