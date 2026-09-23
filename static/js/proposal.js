const yesButton = document.getElementById("yesButton");
const noButton = document.getElementById("noButton");

const proposalCard = document.getElementById("proposalCard");
const successCard = document.getElementById("successCard");

function moveNoButton() {
    const buttonWidth = noButton.offsetWidth;
    const buttonHeight = noButton.offsetHeight;

    const maxX = window.innerWidth - buttonWidth - 20;
    const maxY = window.innerHeight - buttonHeight - 20;

    const x = Math.max(20, Math.random() * maxX);
    const y = Math.max(20, Math.random() * maxY);

    noButton.style.position = "fixed";
    noButton.style.left = `${x}px`;
    noButton.style.top = `${y}px`;
}

noButton.addEventListener("mouseenter", moveNoButton);

noButton.addEventListener("touchstart", function(event) {
    event.preventDefault();
    moveNoButton();
});

yesButton.addEventListener("click", function() {
    proposalCard.style.display = "none";
    successCard.style.display = "block";
    createHearts();
});

function createHearts() {
    for (let i = 0; i < 30; i++) {
        const heart = document.createElement("div");

        heart.innerHTML = "❤️";
        heart.className = "floating-heart";

        heart.style.left = Math.random() * 100 + "vw";
        heart.style.animationDelay = Math.random() * 2 + "s";

        document.body.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 5000);
    }
}
