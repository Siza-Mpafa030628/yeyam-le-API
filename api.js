import textbooks from './textbooks.json' with { type: 'json' };
document.getElementById('showBooks').addEventListener('click', () => {
    const booksContainer = document.getElementById('booksContainer');
    booksContainer.innerHTML = `<h1>textbooks</h1>`; 
    textbooks.books.forEach(book => {
        const bookElement = document.createElement('div');

        bookElement.innerHTML = `
        <img src="${book.image}" alt="textbookpic" style="width: 100px; height: auto;">
        <br>
            <a href="${book.url}" target="_blank" style="color: #08000c; text-decoration: none;">
                ${book.title}
            </a>
        `;
        booksContainer.appendChild(bookElement);
    });
});

function searchBooks() {

        const input = document.getElementById("textbooksearcher");
       const  filter = input.value.toUpperCase();
       const booksContainer = document.getElementById('booksContainer');
       const bookElements = booksContainer.getElementsByTagName('div');

       for (let i = 0; i < bookElements.length; i++) {
        const bookElement = bookElements[i];
        const textbookTitle = bookElement.textContent || bookElement.innerText;
        
        if (textbookTitle.toUpperCase().indexOf(filter) > -1) {
            bookElement.style.display = "";
        } else {
            bookElement.style.display = "none";
        }
    }
}

document.getElementById("textbooksearcher").addEventListener("keyup", searchBooks);

console.log(textbooks.books[0].url);

import videos from './videos.json' with { type: 'json' };

document.getElementById('showVideos').addEventListener('click', () => {
    const videosContainer = document.getElementById('videosContainer');
    videosContainer.innerHTML = `<h1>videos</h1>`; 
    videos.Mathvideos.forEach(Mathvideo => {
        const videoElement = document.createElement('div');
        videoElement.innerHTML = `
            <a href="${Mathvideo.url}" target="_blank" style="display: inline-block; padding: 10px 20px; font-size: 16px; color: white; background-color: black; text-align: center; text-decoration: none; border-radius: 5px; width:100%; border: 2px groove black;  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.5);">
                ${Mathvideo.title}
            </a>
        `;

        const vlinkElement = videoElement.querySelector('a');

        vlinkElement.addEventListener('mouseover', () => {
             vlinkElement.style.backgroundColor = 'darkviolet';
        });
        
        vlinkElement.addEventListener('mouseout', () => {
            vlinkElement.style.backgroundColor = 'black';
        });

        videosContainer.appendChild(videoElement);
    });
});


function searchVideos() {

        const inputv = document.getElementById("videosearcher");
       const  filterv = inputv.value.toUpperCase();
       const videosContainer = document.getElementById('videosContainer');
       const videoElements = videosContainer.getElementsByTagName('div');

       for (let i = 0; i < videoElements.length; i++) {
        const videoElement = videoElements[i];
        const videoTitle = videoElement.textContent || videoElement.innerText;
        
        if (videoTitle.toUpperCase().indexOf(filterv) > -1) {
            videoElement.style.display = "";
        } else {
            videoElement.style.display = "none";
        }
    }
}

document.getElementById("videosearcher").addEventListener("keyup", searchVideos);


 console.log(videos.Mathvideos[0].url);

import pastpapers from './pastpapers.json' with { type: 'json' };

document.getElementById('showPapers').addEventListener('click', () => {
    const papersContainer = document.getElementById('papersContainer');
    papersContainer.innerHTML = `<h1>previous papers</h1>`; 
    
const addPaperWithBreak = (paper) => {
    const paperElement = document.createElement('div');
    
    paperElement.innerHTML = `
        <a href="${paper.url}" target="_blank" style="display: inline-block; padding: 10px 20px; font-size: 16px; color: white; background-color: black; text-align: center; text-decoration: none; border-radius: 5px; width:100%; border: 2px groove black;  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.5);">
            ${paper.year}  ${paper.period}  ${paper.paper} 
        </a>
    `;

        const linkElement = paperElement.querySelector('a');

linkElement.addEventListener('mouseover', () => {
         linkElement.style.backgroundColor = 'darkviolet';
 });

linkElement.addEventListener('mouseout', () => {
     linkElement.style.backgroundColor = 'black';
});

    papersContainer.appendChild(paperElement);
    const lineBreak = document.createElement('br');
    papersContainer.appendChild(lineBreak);
};

pastpapers.Novpapers.forEach(addPaperWithBreak);
pastpapers.Septpapers.forEach(addPaperWithBreak);
pastpapers.Junpapers.forEach(addPaperWithBreak);
pastpapers.Marcpapers.forEach(addPaperWithBreak);
});

function searchPapers() {

        const inputp = document.getElementById("papersearcher");
       const  filterp = inputp.value.toUpperCase();
       const papersContainer = document.getElementById('papersContainer');
       const paperElements = papersContainer.getElementsByTagName('div');

       for (let i = 0; i < paperElements.length; i++) {
        const paperElement = paperElements[i];
        const paperTitle = paperElement.textContent || paperElement.innerText;
        
        if (paperTitle.toUpperCase().indexOf(filterp) > -1) {
            paperElement.style.display = "";
        } else {
            paperElement.style.display = "none";
        }
    }
}

document.getElementById("papersearcher").addEventListener("keyup", searchPapers);


console.log(pastpapers.Novpapers[5]);
