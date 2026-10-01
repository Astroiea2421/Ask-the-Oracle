const globe = document.querySelector("#globe");
const button = document.querySelector("#shake");
const message = document.querySelector("#message");

const messages = [
    "You deserve care and compassion, grant yourself some.",
    "Surround yourself with those who care, and surround them with love.",
    "In your Actions, above all, show kindness to others.",
    "Make your own intuition, not the advice of others, your guide in life.",
    "With Ambition you may conquer the world.",
    "Do as you must, but have care for the land and creatures of the earth.",
    "Remember those who came before, for they guide the path ahead.",
    "Your intentions are true, so too shall be your path.",
];

button.addEventListener("click", () => {
    globe.classList.add("shaking");
    setTimeout(() => globe.classList.remove("shaking"), 600);

    const pick = Math.floor(Math.random() * messages.length);
    message.textContent = messages[pick];
});