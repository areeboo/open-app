export async function GET() {
    const quotes = [
        { quote: "The best way to predict the future is to create it.", author: "Peter Drucker" },
        { quote: "Success is not final, failure is not fatal.", author: "Winston Churchill" },
        { quote: "You miss 100% of the shots you don’t take.", author: "Wayne Gretzky" },
    ];
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];
    return Response.json(randomQuote);
}
