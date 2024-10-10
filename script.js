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
    const clearGameBoard = () => gameBoard = [
        [, ,],
        [, ,],
        [, ,],
    ];
    const print = () => {
        console.table(gameBoard);
    };
    return {
        clearGameBoard,
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
    const resetPoint = () => point = 0
    return {
        name,
        resetPoint,
        addPoint,
        rejectPoint,
        getPoint,
    };
}
function clearDOMBoard(){
    const btn = document.querySelectorAll(".cell")
    btn.forEach((item) => item.textContent = "")
}
const init = (function () {
    
    const containerCell = document.querySelector(".container");
    const startBtn = document.querySelector("#start-btn")
    const namePlayer1 = (document.querySelector("#name-player1").value) === "" ? "Anonim 1" : document.querySelector("#name-player1").value
    const namePlayer2 = (document.querySelector("#name-player2").value) === "" ? "Anonim 2" : document.querySelector("#name-player2").value
    const scorePlayer1 = document.querySelector("#score-player1")
    const scorePlayer2 = document.querySelector("#score-player2")
    const statusRound = document.querySelector("#status-round")
    const statusGame = document.querySelector("#status-game")
    const player1 = player(namePlayer1);
    const player2 = player(namePlayer2);

    let stopGame = false;
    let count = 0;
    let symbol;

    startBtn.addEventListener("click",() => {
        if(player1.getPoint() === 3 || player2.getPoint() === 3){
            player1.resetPoint()
            player2.resetPoint()
            scorePlayer1.textContent = player1.getPoint()
            scorePlayer2.textContent = player2.getPoint()
            statusGame.textContent = ""
        }
        clearDOMBoard();
        GameBoard.clearGameBoard();
        stopGame = false
        statusRound.textContent = ""
        symbol = "O"
    })
    containerCell.addEventListener("click", (e) => {
        if(stopGame === false && player1.getPoint() < 3 && player2.getPoint() < 3){
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
                    if(player1.getPoint() === 2){
                        statusGame.textContent = "Player 1 Win"
                    }
                    statusRound.textContent = "Player 1 Win"
                    stopGame = true
                    count = -1
                    player1.addPoint();
                    scorePlayer1.textContent = player1.getPoint()
                } else if (GameBoard.whoWinner() != null) {
                    console.log("Player 2 Win");
                    if(player2.getPoint() === 2){
                        statusGame.textContent = "Player 2 Win"
                    }
                    statusRound.textContent = "Player 2 Win"
                    stopGame = true
                    count = -1
                    player2.addPoint();
                    scorePlayer2.textContent = player2.getPoint()
                } else if (count > 8) {
                    console.log("Draw");
                    statusRound.textContent = "Draw"
                    count = -1
                    stopGame = true
                }
            }
            count++;
            GameBoard.print();
        }
        
    });
})();
