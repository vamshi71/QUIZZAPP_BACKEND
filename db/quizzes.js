const { v4: uuid } = require('uuid');

const quizzes = {
    data : [
       { 
            id: uuid(),
            category: "marvel",
            image: '',
            title: "MARVEL",
            description: "lorem ipsum",
            //questions and options
            quiz: [
                //1st question and options
                {
                    id: uuid(),
                    question: "Black panther is set in which fictional country?",
                    options: [
                        { id: uuid(), option: "Wakanda", isCorrect: true },
                        { id: uuid(), option: "vakanda", isCorrect: false },
                        { id: uuid(), option: "Jakanda", isCorrect: false },
                        { id: uuid(), option: "Takanda", isCorrect: false }
                    ]
                },
                //2nd question and options
                {
                    id: uuid(),
                    question: "Who rescued Tony Stark and Nebula from space?",
                    options: [
                        { id: uuid(), option: "Hulk", isCorrect: false },
                        { id: uuid(), option: "Thor", isCorrect: false },
                        { id: uuid(), option: "Captian Marvel", isCorrect: true },
                        { id: uuid(), option: "Captain America", isCorrect: false }
                    ]
                },
                //3rd question and options
                {
                    id: uuid(),
                    question: "Thor's Mjolnir is made from the metal of a dying ___?",
                    options: [
                        { id: uuid(), option: "Nebula", isCorrect: false },
                        { id: uuid(), option: "Star", isCorrect: true },
                        { id: uuid(), option: "Moon", isCorrect: false },
                        { id: uuid(), option: "Sun", isCorrect: false }
                    ]
                },
                //4th question and options
                {
                    id: uuid(),
                    question: "What did Thor say about Jane Foster's catchphrase?",
                    options: [
                        { id: uuid(), option: "It's Perfect", isCorrect: true },
                        { id: uuid(), option: "That's Beautiful", isCorrect: false },
                        { id: uuid(), option: "What ever", isCorrect: false },
                        { id: uuid(), option: "It's crap", isCorrect: false }
                    ]
                }
            ]
       },
       { 
            id: uuid(),
            category: "bahubali",
            image: '',
            title: "BAHUBALI",
            description: "SSR",
            //questions and options
            quiz: [
                //1st question and options
                {
                    id: uuid(),
                    question: "Who is the son of Amarendra Bahubali?",
                    options: [
                        { id: uuid(), option: "Mahendra Bahubali", isCorrect: true },
                        { id: uuid(), option: "Vijayendra Bahubali", isCorrect: false },
                        { id: uuid(), option: "Narendra Bahubali", isCorrect: false },
                        { id: uuid(), option: "Bijaladeva", isCorrect: false }
                    ]
                },
                //2nd question and options
                {
                    id: uuid(),
                    question: "who killed Bahubali?",
                    options: [
                        { id: uuid(), option: "Siddapa", isCorrect: false },
                        { id: uuid(), option: "Narappa", isCorrect: false },
                        { id: uuid(), option: "Devappa", isCorrect: false },
                        { id: uuid(), option: "Kattapa", isCorrect: true }
                    ]
                },
                //3rd question and options
                {
                    id: uuid(),
                    question: "Who is bijala?",
                    options: [
                        { id: uuid(), option: "Son of Ballala", isCorrect: false },
                        { id: uuid(), option: "Brother of Ballala", isCorrect: false },
                        { id: uuid(), option: "Father of Ballala", isCorrect: true },
                        { id: uuid(), option: "Uncle of Ballala", isCorrect: false }
                    ]
                },
                //4th question and options
                {
                    id: uuid(),
                    question: "Bahubali was directed by ?",
                    options: [
                        { id: uuid(), option: "Shankar", isCorrect: false },
                        { id: uuid(), option: "Rajamouli", isCorrect: true },
                        { id: uuid(), option: "Sandeep", isCorrect: false },
                        { id: uuid(), option: "None of the above", isCorrect: false }
                    ]
                },
                //5th question and options
                {
                    id: uuid(),
                    question: "Which of the following is Devasena's kingdom?",
                    options: [
                        {id: uuid(), option: 'Mahismati', isCorrect: false},
                        { id: uuid(), option: "Singapura", isCorrect: false },
                        { id: uuid(), option: "Amboli", isCorrect: false },
                        { id: uuid(), option: "Kunthala", isCorrect: true }
                    ]
                },
                //6th question and options
                {
                    id: uuid(),
                    question: "Which of the following language spoke by Kalakeya?",
                    options: [
                        {id: uuid(), option: 'Jungili', isCorrect: false},
                        { id: uuid(), option: "Kalikeli", isCorrect: false },
                        { id: uuid(), option: "Kilikili", isCorrect: true },
                        { id: uuid(), option: "Milikili", isCorrect: false }
                    ]
                }
            ]
       },
    ]
}

module.exports= quizzes;