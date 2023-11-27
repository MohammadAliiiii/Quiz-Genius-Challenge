let questionElement = document.querySelector('.question');
let questionOption1 = document.querySelector('._4');
let questionOption2 = document.querySelector('._1');
let questionOption3 = document.querySelector('._2');
let questionOption4 = document.querySelector('._3');
let answer = document.querySelector('.result');
const quizQuestions = [
    {
        question: 'What is the capital city of Australia?',
        options: ['Berlin', 'Madrid', 'Paris', 'Canberra'],
        correctAnswer: 'Canberra'
    },
    {
        question: 'Name the longest river in the world.',
        options: ['Nile', 'Amazon', 'Yangtze', 'Mississippi'],
        correctAnswer: 'Nile'
    },
    {
        question: 'In what year did World War II end?',
        options: ['1943', '1944', '1945', '1946'],
        correctAnswer: '1945'
    },
    {
        question: 'Who developed the theory of relativity?',
        options: ['Isaac Newton', 'Albert Einstein', 'Galileo Galilei', 'Nikola Tesla'],
        correctAnswer: 'Albert Einstein'
    },
    {
        question: 'What is the chemical symbol for gold?',
        options: ['Au', 'Ag', 'Fe', 'Hg'],
        correctAnswer: 'Au'
    },
    {
        question: 'Which social media platform was founded by Mark Zuckerberg?',
        options: ['Twitter', 'Instagram', 'Facebook', 'LinkedIn'],
        correctAnswer: 'Facebook'
    },
    {
        question: 'In what year did the first modern Olympic Games take place?',
        options: ['1892', '1900', '1904', '1896'],
        correctAnswer: '1896'
    },
    {
        question: 'Who painted the Mona Lisa?',
        options: ['Vincent van Gogh', 'Leonardo da Vinci', 'Pablo Picasso', 'Michelangelo'],
        correctAnswer: 'Leonardo da Vinci'
    },
    {
        question: 'What is the largest planet in our solar system?',
        options: ['Earth', 'Jupiter', 'Saturn', 'Mars'],
        correctAnswer: 'Jupiter'
    },
    {
        question: 'What film won the Academy Award for Best Picture in 2020?',
        options: ['Parasite', '1917', 'Joker', 'The Irishman'],
        correctAnswer: 'Parasite'
    },
    {
        question: 'Who wrote the play "Romeo and Juliet"?',
        options: ['William Shakespeare', 'Charles Dickens', 'Jane Austen', 'Mark Twain'],
        correctAnswer: 'William Shakespeare'
    },
    {
        question: 'What is the title of the first Harry Potter book?',
        options: ['Harry Potter and the Sorcerer\'s Stone', 'Harry Potter and the Chamber of Secrets', 'Harry Potter and the Philosopher\'s Stone', 'Harry Potter and the Prisoner of Azkaban'],
        correctAnswer: 'Harry Potter and the Philosopher\'s Stone'
    },
    {
        question: 'In which novel does the character Atticus Finch appear?',
        options: ['To Kill a Mockingbird', '1984', 'The Great Gatsby', 'Pride and Prejudice'],
        correctAnswer: 'To Kill a Mockingbird'
    },
    {
        question: 'Who is often referred to as the "Queen of Pop"?',
        options: ['Madonna', 'Beyoncé', 'Lady Gaga', 'Taylor Swift'],
        correctAnswer: 'Madonna'
    },
    {
        question: 'What band is often associated with the song "Bohemian Rhapsody"?',
        options: ['The Beatles', 'Queen', 'Led Zeppelin', 'The Rolling Stones'],
        correctAnswer: 'Queen'
    },
    {
        question: 'Name the album released by The Beatles in 1967 that is often considered a masterpiece.',
        options: ['Abbey Road', 'Let It Be', 'Sgt. Pepper\'s Lonely Hearts Club Band', 'The White Album'],
        correctAnswer: 'Sgt. Pepper\'s Lonely Hearts Club Band'
    },
    // Add more questions similarly
];
let randomIndex = Math.floor(Math.random() * quizQuestions.length)
const quiz = () =>{
    questionElement.innerHTML = quizQuestions[randomIndex].question;
    questionOption1.innerHTML = quizQuestions[randomIndex].options[0];
    questionOption2.innerHTML = quizQuestions[randomIndex].options[1];
    questionOption3.innerHTML = quizQuestions[randomIndex].options[2];
    questionOption4.innerHTML = quizQuestions[randomIndex].options[3];
}
quiz();
function resultt() {
    answer.innerHTML = 'Correct answer is: ' + quizQuestions[randomIndex].correctAnswer
}

