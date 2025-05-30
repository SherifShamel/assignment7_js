var quote = document.getElementById("myQuote");
var index = 0;

var quotesList = [
    {
        quote: "Be yourself; everyone else is already taken.",
        author: "Oscar Wilde",
    },
    {
        quote: "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.",
        author: "Marilyn Monroe",
    },
    {
        quote: "So many books, so little time.",
        author: "Frank Zappa",
    },
    {
        quote: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
        author: "Albert Einstein"
    },
    {
        quote: `You know you're in love when you can't fall asleep because reality is finally better than your dreams.`,
        author: "Dr. Seuss"
    },
    {
        quote: `You only live once, but if you do it right, once is enough.`,
        author: "Mae West"
    },
    {
        quote: `You've gotta dance like there's nobody watching,
        Love like you'll never be hurt,
        Sing like there's nobody listening,
        And live like it's heaven on earth.`,
        author: "William W. Purkey"
    },
]

// Get the shuffled array from the function
doShuffle(quotesList);

function displayQuote() {
    quote.style.transform = "translateX(100%)"

    if (index < quotesList.length) {
        quote.innerHTML = ` <div class="quote  border-top border-bottom border-opacity-10">
                            <h3 class="mt-3">“${quotesList[index].quote}”</h3>
                            <p>_${quotesList[index].author}</p>
                        </div>`;
        index++;
    } else {
        index = 0;
        displayQuote();
    }
    quote.style.transform = "translateX(0)"

}


// Function to apply the Fisher-Yates Shuffle
function doShuffle(array) {
    // Iterate over the array in reverse order
    for (var i = array.length - 1; i > 0; i--) {

        // Generate Random Index
        var j = Math.floor(Math.random() * (i + 1));

        // Swap elements
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}