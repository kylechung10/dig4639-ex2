let quotes = [
    `"Price is what you pay. Value is what you get."
    -Warren Buffet`,
    `"Live as if you were to die tomorrow. Learn as if you were to live forever."
    -Mahatma Gandhi`,
    `"Believe you can and you’re halfway there."
    -Theodore Roosevelt`
]

let generate = Math.floor(Math.random() * 3);

console.log(quotes[generate]);