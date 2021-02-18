const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');
const loader = document.getElementById('loader');

// Show loading
function loading() {
    loader.hidden = false;
    quoteContainer.hidden = true;
}

// Hide loading
function complete() {
    if (!loader.hidden) {
        quoteContainer.hidden = false;
        loader.hidden = true;
    }
}

// Get Quote from API
async function getQuote() {
    // Start loader
    loading();
    const apiUrl = 'https://type.fit/api/quotes/?method=getQuote&lang=fr&format=json';
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        let number = Math.floor(Math.random() * data.length);
        if (data[number].text.length > 120) {
            quoteText.classList.add('long-text');
        } else {
            quoteText.classList.remove('long-text');
        }
        authorText.innerText = data[number].author;
        quoteText.innerText = data[number].text;
        //Stop loader and show the quote
        complete();
    } catch (error) {
        console.log(error);
    }
}

// Tweet Quote
function tweetQuote() {
    const quote = quoteText.innerText;
    const author = authorText.innerText;
    const tweeterUrl = `https://twitter.com/intent/tweet?text=${quote} - ${author}`;
    window.open(tweeterUrl, '_blank');
}

// Event Listeners
newQuoteBtn.addEventListener('click', getQuote);
twitterBtn.addEventListener('click', tweetQuote);

// On Load
getQuote();