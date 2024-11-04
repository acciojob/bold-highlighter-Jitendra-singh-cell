// Function to highlight bold words by changing their color to green
function highlight() {
    const boldWords = document.querySelectorAll('strong');
    
    boldWords.forEach((word) => {
        word.style.color = 'green';
    });
}

function return_normal() {
    const boldWords = document.querySelectorAll('strong');
    
    boldWords.forEach((word) => {
        word.style.color = 'black';
    });
}
