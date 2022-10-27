var formElement = document.getElementById("form");
formElement.addEventListener("submit", getInputValue);
var inputValue;
function getInputValue(e) {
    e.preventDefault();
    let numberInputValue = document.getElementById("number-of-buttons").value;
    inputValue = numberInputValue;
    generateButons(numberInputValue);
}

function generateButons(numOfButtons) {
    for (let i = 0; i <= numOfButtons; i++) {
        createButton(i);
    }
}

function createButton(idNumber) {
    let createdButtonWrapper = document.getElementsByClassName("buttons-ct");
    console.log(createdButtonWrapper);
    let createdButton = document.createElement("button");
    let idNumberText = idNumber + 1;
    createdButton.innerHTML = "button " + idNumberText;
    createdButton.className = "btn btn-primary button";
    createdButton.id = idNumber;
    createdButtonWrapper[0].appendChild(createdButton);
    createdButton.addEventListener("click", function (e) {
        getId(this.id);
    });
}

function getId(id) {
    let winnerBox = document.getElementById("show-winner-text-ct");
    let winnerText = document.getElementById("winner-text");
    randomNumber = getRandomInt();
    if (randomNumber == id) {
        winnerText.style.color = "forestgreen";
        winnerText.innerHTML = " ";
        winnerText.innerHTML = "You won!!"
        winnerBox.classList.add("active");
    } else {
        winnerText.style.color = "red";
        winnerText.innerHTML = " ";
        winnerText.innerHTML = "You lose!!"
        winnerBox.classList.add("active");
    }
}

function getRandomInt() {
    return Math.floor(Math.random() * inputValue)
}