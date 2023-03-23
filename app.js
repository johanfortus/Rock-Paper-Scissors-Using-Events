let rockButton = document.querySelector('.rock')
let paperButton = document.querySelector('.paper')
let scissorButton = document.querySelector('.scissor')
let results = document.querySelector('.resultSpace')

let choice = ['rock', 'paper', 'scissor'];

function pick(arr){
    let i = Math.floor(Math.random() * arr.length);
    return arr[i]
}

paperButton.addEventListener('click', function(e){
    let computerAnswer = pick(choice);
    if(computerAnswer === 'paper'){
        let userResult = document.createElement('div')
        let computerResult = document.createElement('div')
        let winnerResult = document.createElement('div')
        userResult.innerText = 'Your choice is: Paper';
        userResult.className = 'resultText'
        computerResult.innerText = 'Computer choice is: Paper'
        winnerResult.innerText = "Winner: It's a Tie!"
        results.append(userResult);
        userResult.append(computerResult)
        computerResult.append(winnerResult)
    }
    if(computerAnswer === 'rock'){
        let userResult = document.createElement('div')
        let computerResult = document.createElement('div')
        let winnerResult = document.createElement('div')
        userResult.innerText = 'Your choice is: Paper';
        userResult.className = 'resultText'
        computerResult.innerText = 'Computer choice is: Rock'
        winnerResult.innerText = "Winner: You Won! "
        results.append(userResult);
        userResult.append(computerResult)
        computerResult.append(winnerResult)
    }
    if(computerAnswer === 'scissor'){
        let userResult = document.createElement('div')
        let computerResult = document.createElement('div')
        let winnerResult = document.createElement('div')
        userResult.innerText = 'Your choice is: Paper';
        userResult.className = 'resultText'
        computerResult.innerText = 'Computer choice is: Scissors'
        winnerResult.innerText = "Winner: You Lost! "
        results.append(userResult);
        userResult.append(computerResult)
        computerResult.append(winnerResult)
    }
})

rockButton.addEventListener('click', function(e){
    let computerAnswer = pick(choice);
    if(computerAnswer === 'rock'){
        let userResult = document.createElement('div')
        let computerResult = document.createElement('div')
        let winnerResult = document.createElement('div')
        userResult.innerText = 'Your choice is: Rock';
        userResult.className = 'resultText'
        computerResult.innerText = 'Computer choice is: Rock'
        winnerResult.innerText = "Winner: It's a Tie!"
        results.append(userResult);
        userResult.append(computerResult)
        computerResult.append(winnerResult)
    }
    if(computerAnswer === 'paper'){
        let userResult = document.createElement('div')
        let computerResult = document.createElement('div')
        let winnerResult = document.createElement('div')
        userResult.innerText = 'Your choice is: Rock';
        userResult.className = 'resultText'
        computerResult.innerText = 'Computer choice is: Paper'
        winnerResult.innerText = "Winner: Computer Won! "
        results.append(userResult);
        userResult.append(computerResult)
        computerResult.append(winnerResult)
    }
    if(computerAnswer === 'scissor'){
        let userResult = document.createElement('div')
        let computerResult = document.createElement('div')
        let winnerResult = document.createElement('div')
        userResult.innerText = 'Your choice is: Rock';
        userResult.className = 'resultText'
        computerResult.innerText = 'Computer choice is: Scissors'
        winnerResult.innerText = "Winner: You Won! "
        results.append(userResult);
        userResult.append(computerResult)
        computerResult.append(winnerResult)
    }
})

scissorButton.addEventListener('click', function(e){
    let computerAnswer = pick(choice);
    if(computerAnswer === 'rock'){
        let userResult = document.createElement('div')
        let computerResult = document.createElement('div')
        let winnerResult = document.createElement('div')
        userResult.innerText = 'Your choice is: Scissors';
        userResult.className = 'resultText'
        computerResult.innerText = 'Computer choice is: Rock'
        winnerResult.innerText = "Winner: Computer Won!"
        results.append(userResult);
        userResult.append(computerResult)
        computerResult.append(winnerResult)
    }
    if(computerAnswer === 'paper'){
        let userResult = document.createElement('div')
        let computerResult = document.createElement('div')
        let winnerResult = document.createElement('div')
        userResult.innerText = 'Your choice is: Scissors';
        userResult.className = 'resultText'
        computerResult.innerText = 'Computer choice is: Paper'
        winnerResult.innerText = "Winner: You Won! "
        results.append(userResult);
        userResult.append(computerResult)
        computerResult.append(winnerResult)
    }
    if(computerAnswer === 'scissor'){
        let userResult = document.createElement('div')
        let computerResult = document.createElement('div')
        let winnerResult = document.createElement('div')
        userResult.innerText = 'Your choice is: Scissors';
        userResult.className = 'resultText'
        computerResult.innerText = 'Computer choice is: Scissors'
        winnerResult.innerText = "Winner: It's a Tie! "
        results.append(userResult);
        userResult.append(computerResult)
        computerResult.append(winnerResult)
    }
})