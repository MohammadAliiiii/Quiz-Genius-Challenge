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
    {
        question: "Which planet is known as the 'Red Planet'?",
        options: ["Venus", "Mars", "Jupiter", "Saturn"],
        correctAnswer: "Mars"
    },
    {
        question: "In which year did the United States declare its independence?",
        options: ["1776", "1789", "1800", "1812"],
        correctAnswer: "1776"
    },
    {
        question: "What is the chemical symbol for water?",
        options: ["O2", "H2O", "CO2", "N2"],
        correctAnswer: "H2O"
    },
    {
        question: "In which city were the first modern Olympic Games held?",
        options: ["Rome", "Athens", "Paris", "London"],
        correctAnswer: "Athens"
    },
    {
        question: "How often are the Summer Olympic Games held?",
        options: ["Every 2 years", "Every 4 years", "Every 6 years", "Every 8 years"],
        correctAnswer: "Every 4 years"
    },
    {
        question: "Which country has won the most gold medals in the history of the Summer Olympics?",
        options: ["United States", "China", "Soviet Union (USSR)", "Germany"],
        correctAnswer: "United States"
    },
    {
        question: "In which year did the Olympic Games have the first official mascot?",
        options: ["1968", "1972", "1980", "1984"],
        correctAnswer: "1972"
    },
    {
        question: "Which sport is not part of the Summer Olympics?",
        options: ["Table Tennis", "Curling", "Archery", "Taekwondo"],
        correctAnswer: "Curling"
    },
    {
        question: "What does CPU stand for?",
        options: ["Central Process Unit", "Computer Personal Unit", "Central Processor Unit", "Central Peripheral Unit"],
        correctAnswer: "Central Process Unit"
    },
    {
        question: "Which programming language is often used for artificial intelligence and machine learning?",
        options: ["Java", "Python", "C++", "Ruby"],
        correctAnswer: "Python"
    },
    {
        question: "What is the primary function of RAM in a computer?",
        options: ["Long-term storage", "Short-term storage", "Processing calculations", "Cooling the system"],
        correctAnswer: "Short-term storage"
    },
    {
        question: "What does HTML stand for?",
        options: ["Hyperlink and Text Markup Language", "Hyper Text Markup Language", "High-level Text Markup Language", "Hyper Transfer Markup Language"],
        correctAnswer: "Hyper Text Markup Language"
    },
    {
        question: "Which operating system is developed by Apple Inc.?",
        options: ["Windows", "Linux", "macOS", "Android"],
        correctAnswer: "macOS"
    },
    {
        question: "What is the largest mammal in the world?",
        options: ["Elephant", "Blue Whale", "Giraffe", "Polar Bear"],
        correctAnswer: "Blue Whale"
    },
    {
        question: "Which bird is known for its ability to mimic human speech?",
        options: ["Eagle", "Parrot", "Penguin", "Owl"],
        correctAnswer: "Parrot"
    },
    {
        question: "What is the fastest land animal?",
        options: ["Cheetah", "Lion", "Gazelle", "Leopard"],
        correctAnswer: "Cheetah"
    },
    {
        question: "What is a group of wolves called?",
        options: ["Pack", "Herd", "Flock", "Swarm"],
        correctAnswer: "Pack"
    },
    {
        question: "Which animal is known for sleeping up to 22 hours a day?",
        options: ["Elephant", "Sloth", "Koala", "Bat"],
        correctAnswer: "Sloth"
    },
    {
        question: "Which organ is responsible for producing insulin?",
        options: ["Liver", "Pancreas", "Kidneys", "Stomach"],
        correctAnswer: "Pancreas"
    },
    {
        question: "What is the largest organ in the human body?",
        options: ["Heart", "Liver", "Skin", "Lungs"],
        correctAnswer: "Skin"
    },
    {
        question: "Where is the smallest bone in the human body located?",
        options: ["Ear", "Hand", "Foot", "Nose"],
        correctAnswer: "Ear"
    },
    {
        question: "What is the function of the red blood cells?",
        options: ["Carry oxygen", "Fight infection", "Digest food", "Produce hormones"],
        correctAnswer: "Carry oxygen"
    },
    {
        question: "Which part of the brain is responsible for regulating basic bodily functions such as breathing and heart rate?",
        options: ["Cerebrum", "Cerebellum", "Medulla oblongata", "Thalamus"],
        correctAnswer: "Medulla oblongata"
    },
    {
        question: "Where are the vocal cords located?",
        options: ["Lungs", "Throat", "Stomach", "Nose"],
        correctAnswer: "Throat"
    },
    {
        question: "Which type of muscle is involuntary and found in the walls of organs like the stomach and intestines?",
        options: ["Skeletal muscle", "Smooth muscle", "Cardiac muscle", "Striated muscle"],
        correctAnswer: "Smooth muscle"
    },
    {
        question: "How many chambers are there in the human heart?",
        options: ["2", "3", "4", "5"],
        correctAnswer: "4"
    },
    {
        question: "What is the main function of the kidneys?",
        options: ["Digestion", "Filtration of blood", "Regulation of body temperature", "Production of insulin"],
        correctAnswer: "Filtration of blood"
    },
    {
        question: "What is the purpose of the respiratory system?",
        options: ["Pump blood", "Break down food", "Exchange gases (oxygen and carbon dioxide)", "Control body movement"],
        correctAnswer: "Exchange gases (oxygen and carbon dioxide)"
    },
    {
        question: "Where is the epiglottis located?",
        options: ["Lungs", "Throat", "Stomach", "Brain"],
        correctAnswer: "Throat"
    },
    {
        question: "What is the name of the fluid that lubricates joints and reduces friction between bones?",
        options: ["Synapse", "Synovial fluid", "Cerebrospinal fluid", "Lymph"],
        correctAnswer: "Synovial fluid"
    },
    {
        question: "What is the purpose of the digestive system?",
        options: ["Pump blood", "Exchange gases", "Break down and absorb nutrients from food", "Control body temperature"],
        correctAnswer: "Break down and absorb nutrients from food"
    },
    {
        question: "Which hormone is responsible for regulating blood sugar levels?",
        options: ["Insulin", "Estrogen", "Testosterone", "Adrenaline"],
        correctAnswer: "Insulin"
    },
    {
        question: "Where are the taste buds located?",
        options: ["Nose", "Eyes", "Tongue", "Ears"],
        correctAnswer: "Tongue"
    },
    {
        question: "What is the SI unit of force?",
        options: ["Newton", "Joule", "Watt", "Pascal"],
        correctAnswer: "Newton"
    },
    {
        question: "Which law states that an object at rest will remain at rest, and an object in motion will remain in motion unless acted upon by an external force?",
        options: ["Newton's First Law of Motion", "Newton's Second Law of Motion", "Newton's Third Law of Motion", "Law of Conservation of Energy"],
        correctAnswer: "Newton's First Law of Motion"
    },
    {
        question: "What is the acceleration due to gravity on Earth's surface?",
        options: ["9.8 m/s²", "6.3 m/s²", "12.5 m/s²", "5.2 m/s²"],
        correctAnswer: "9.8 m/s²"
    },
    {
        question: "What is the formula for calculating work done?",
        options: ["Work = Force × Distance", "Work = Mass × Acceleration", "Work = Power × Time", "Work = Energy / Time"],
        correctAnswer: "Work = Force × Distance"
    },
    {
        question: "Which of the following is a vector quantity?",
        options: ["Speed", "Mass", "Distance", "Velocity"],
        correctAnswer: "Velocity"
    },
    {
        question: "What is the law of conservation of energy?",
        options: ["Energy cannot be created or destroyed, only transformed from one form to another.", "Energy increases with time.", "Energy can be created but not destroyed.", "Energy is inversely proportional to mass."],
        correctAnswer: "Energy cannot be created or destroyed, only transformed from one form to another."
    },
    {
        question: "In which state of matter do particles have the most kinetic energy?",
        options: ["Solid", "Liquid", "Gas", "Plasma"],
        correctAnswer: "Plasma"
    },
    {
        question: "What is the formula for calculating speed?",
        options: ["Speed = Distance × Time", "Speed = Force / Mass", "Speed = Acceleration × Time", "Speed = Energy / Distance"],
        correctAnswer: "Speed = Distance × Time"
    },
    {
        question: "According to the law of reflection, the angle of incidence is equal to the angle of _______.",
        options: ["Absorption", "Refraction", "Reflection", "Diffraction"],
        correctAnswer: "Reflection"
    },
    {
        question: "What is the unit of electrical resistance?",
        options: ["Ohm", "Volt", "Ampere", "Watt"],
        correctAnswer: "Ohm"
    },
    {
        question: "Which color of light has the shortest wavelength?",
        options: ["Red", "Green", "Blue", "Yellow"],
        correctAnswer: "Blue"
    },
    {
        question: "What is the law of conservation of momentum?",
        options: ["The total momentum of a closed system is constant.", "Momentum is inversely proportional to velocity.", "Momentum is directly proportional to mass.", "Momentum increases with time."],
        correctAnswer: "The total momentum of a closed system is constant."
    },
    {
        question: "What is the principle behind a lever?",
        options: ["Archimedes' Principle", "Pascal's Principle", "Bernoulli's Principle", "Principle of Moments"],
        correctAnswer: "Principle of Moments"
    },
    {
        question: "What is the formula for gravitational potential energy?",
        options: ["PE = m * g * h", "PE = 1/2 * m * v^2", "PE = F * d", "PE = P * t"],
        correctAnswer: "PE = m * g * h"
    },
    {
        question: "What does the law of inertia state?",
        options: ["An object at rest will remain at rest, and an object in motion will remain in motion unless acted upon by an external force.", "The force acting on an object is equal to the mass of that object multiplied by its acceleration.", "For every action, there is an equal and opposite reaction.", "The pressure applied to a confined fluid is transmitted undiminished to all portions of the fluid and to the walls of its container."],
        correctAnswer: "An object at rest will remain at rest, and an object in motion will remain in motion unless acted upon by an external force."
    }
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
function counting() {
    
}
