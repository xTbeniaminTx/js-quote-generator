const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');

// Get Quote from API
async function getQuote() {
    const apiUrl = 'https://type.fit/api/quotes/?method=getQuote&lang=fr&format=json';
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        let number = Math.floor(Math.random() * data.length);

        authorText.innerText = data[number].author;
        quoteText.innerText = data[number].text;
    } catch (error) {
        console.log(error);
    }
}

// On Load
getQuote();