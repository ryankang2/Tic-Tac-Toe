var playerOne = prompt("Enter Player 1's name:");
if(playerOne == null)
{
    playerOne = "Player One";
}
var playerTwo = prompt("Enter Player 2's name:");
if(playerTwo == null)
{
    playerTwo = "Player Two";
}
var playerOneWins = 0;
var playerTwoWins = 0;
var playerOneLosses = 0;
var playerTwoLosses = 0;
var playerOneTies = 0;
var playerTwoTies = 0;	

function startGame()
{
    for(var i = 1; i <= 9; i++)
    {
        clearBox(i);
    }				
    if(randomStarter() == 1)
    {
        document.turn = "X";
        setMessage(playerOne + " (" + document.turn + ")" + " will start!");
    }
    else
    {
        document.turn = "O";
        setMessage(playerTwo + " (" + document.turn +								")"  + " will start!");
    }
    setPlayerOneName(playerOne);	
    setPlayerTwoName(playerTwo);
    document.winner = null;
    document.tie = null;
}
			

function setPlayerOneName(msg)
{			
    document.getElementById("playerOneName").innerText = msg;
}
function setPlayerTwoName(msg)
{
    document.getElementById("playerTwoName").innerText = msg
}
			
function setStatsMessage(msg, player)
{
    if(player == playerOne)
    {
        if(msg == playerOneWins)
        {
            document.getElementById("playerOneWins").innerText = msg;
        }
        else
        {
            document.getElementById("playerOneLosses").innerText = msg;
        }
    }
    if(player == playerTwo)
    {
        if(msg == playerTwoWins)
        {
            document.getElementById("playerTwoWins").innerText = msg;
        }
        else
        {
            document.getElementById("playerTwoLosses").innerText = msg;
        }
    }
}
			
function randomStarter()
{
    var num = Math.floor((Math.random() * 2) + 1);
    return num;
}
function setMessage(msg)
{
    document.getElementById("message").innerText = msg;
}
			
function nextMove(square)
{
    if(document.winner != null)
    {
        setMessage(document.winner + " already won the game");
    }
    else if(document.tie != null)
    {

    }
    else if(square.innerText == "")			
    {
        square.innerText = document.turn;
        switchTurn();	
    } 
    else
    {
        setMessage("Square is already used");
    }
}	

function switchTurn()
{
    if(checkWinner(document.turn) == true)
    {
        setMessage("Congrats, " + document.winner + "! You WIN!");	
    }
    else if(checkTie() == true)
    {
        setMessage("It's a tie!!!");
        document.tie = document.turn;
        playerOneTies++;
        playerTwoTies++;
        document.getElementById("playerOneTies").innerText = playerOneTies;
        document.getElementById("playerTwoTies").innerText = playerTwoTies;
    }
    else if(document.turn == "X")
    {
        document.turn = "O";
        setMessage(playerTwo  + " (" + document.turn + 
								")" + " turn")
    }
    else
    {
        document.turn = "X";
        setMessage(playerOne + " (" + document.turn + 
                   ")" + " turn");
    }
}	
			
function checkWinner(move)
{				
    var result = false;
    if(checkRow(1,2,3,move) || checkRow(4,5,6,move) ||                          checkRow(7,8,9,move)
       ||checkRow(1,4,7,move) || checkRow(2,5,8,move) || 
       checkRow(3,6,9,move) || checkRow(1,5,9,move) || checkRow(3,5,7,move))
    {
        result = true;
        if(document.turn == "X")
        {
            document.winner = playerOne;
            playerOneWins++;
            playerTwoLosses++;
            setStatsMessage(playerOneWins, playerOne);
            setStatsMessage(playerTwoLosses, playerTwo);
        }
        else
        {
            document.winner = playerTwo;
            playerOneLosses++;
            playerTwoWins++;
            setStatsMessage(playerOneLosses, playerOne);
            setStatsMessage(playerTwoWins, playerTwo);
        }
    }
    return result;
}
			
function checkRow(a,b,c,move)
{
    var result = false;
    if(getBox(a) == move && getBox(b) == move && getBox(c) == move)
    {
        result = true;
    }
    return result;
}

function getBox(number)
{
    return document.getElementById("s" + number).innerText;
}			

function clearBox(number)
{
    return document.getElementById("s" + number).innerText = 
        "";
}

function checkTie()
{
    for(var i = 1; i <= 9; i++)
    {
        if(document.getElementById("s" + i).innerText == "")
        {
            return false;
        }
    }
    return true;
}
		
	
