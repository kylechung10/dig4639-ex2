let quotes = [
    `"Price is what you pay. Value is what you get."
    -Warren Buffet`,
    `"Live as if you were to die tomorrow. Learn as if you were to live forever."
    -Mahatma Gandhi`,
    `"Believe you can and you’re halfway there."
    -Theodore Roosevelt`,
    `"If you spend too much time thinking about a thing, you’ll never get it done."
    -Bruce Lee`,
    `"Life is a question and how we live it is our answer."
    -Gary Keller`
]

let generate = Math.floor(Math.random() * 5);

console.log(quotes[generate]);