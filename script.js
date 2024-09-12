const questions = {
    'box-1a': 'Question for 100 in Category 1',
    'box-2a': 'Question for 100 in Category 2', 
    'box-3a': 'Question for 100 in Category 3', 
    'box-4a': 'Question for 100 in Category 4', 
    'box-1b': 'Question for 200 in Category 1',
    'box-2b': 'Question for 200 in Category 2', 
    'box-3b': 'Question for 200 in Category 3', 
    'box-4b': 'Question for 200 in Category 4', 
    'box-1c': 'Question for 300 in Category 1',
    'box-2c': 'Question for 300 in Category 2', 
    'box-3c': 'Question for 300 in Category 3', 
    'box-4c': 'Question for 300 in Category 4', 
    'box-1d': 'Question for 400 in Category 1',
    'box-2d': 'Question for 400 in Category 2', 
    'box-3d': 'Question for 400 in Category 3', 
    'box-4d': 'Question for 400 in Category 4', 
    'box-1e': 'Question for 500 in Category 1',
    'box-2e': 'Question for 500 in Category 2', 
    'box-3e': 'Question for 500 in Category 3', 
    'box-4e': 'Question for 500 in Category 4', 
}; 
const questionsV2 = {
    'box-1a': {
        question: 'Question for 100 in Category 1',
        correctAnswer: 'Correct Answer 1',
        answers: ['Correct Answer 1', 'Incorrect Answer 1', 'Incorrect Answer 2', 'Incorrect Answer 3']
    },
    'box-2a': {
        question: 'Question for 100 in Category 2',
        correctAnswer: 'Correct Answer 2',
        answers: ['Correct Answer 2', 'Incorrect Answer 1', 'Incorrect Answer 2', 'Incorrect Answer 3']
    },
    'box-3a': {
        question: 'Question for 100 in Category 3',
        correctAnswer: 'Correct Answer 3',
        answers: ['Correct Answer 3', 'Incorrect Answer 1', 'Incorrect Answer 2', 'Incorrect Answer 3']
    },
    'box-4a': {
        question: 'Question for 100 in Category 4',
        correctAnswer: 'Correct Answer 4',
        answers: ['Correct Answer 4', 'Incorrect Answer 1', 'Incorrect Answer 2', 'Incorrect Answer 3']
    },
    'box-1b': {
        question: 'Question for 200 in Category 1',
        correctAnswer: 'Correct Answer 5',
        answers: ['Correct Answer 5', 'Incorrect Answer 1', 'Incorrect Answer 2', 'Incorrect Answer 3']
    },
    'box-2b': {
        question: 'Question for 200 in Category 2',
        correctAnswer: 'Correct Answer 6',
        answers: ['Correct Answer 6', 'Incorrect Answer 1', 'Incorrect Answer 2', 'Incorrect Answer 3']
    },
    'box-3b': {
        question: 'Question for 200 in Category 3',
        correctAnswer: 'Correct Answer 7',
        answers: ['Correct Answer 7', 'Incorrect Answer 1', 'Incorrect Answer 2', 'Incorrect Answer 3']
    },
    'box-4b': {
        question: 'Question for 200 in Category 4',
        correctAnswer: 'Correct Answer 8',
        answers: ['Correct Answer 8', 'Incorrect Answer 1', 'Incorrect Answer 2', 'Incorrect Answer 3']
    },
    'box-1c': {
        question: 'Question for 300 in Category 1',
        correctAnswer: 'Correct Answer 9',
        answers: ['Correct Answer 9', 'Incorrect Answer 1', 'Incorrect Answer 2', 'Incorrect Answer 3']
    },
    'box-2c': {
        question: 'Question for 300 in Category 2',
        correctAnswer: 'Correct Answer 10',
        answers: ['Correct Answer 10', 'Incorrect Answer 1', 'Incorrect Answer 2', 'Incorrect Answer 3']
    },
    'box-3c': {
        question: 'Question for 300 in Category 3',
        correctAnswer: 'Correct Answer 11',
        answers: ['Correct Answer 11', 'Incorrect Answer 1', 'Incorrect Answer 2', 'Incorrect Answer 3']
    },
    'box-4c': {
        question: 'Question for 300 in Category 4',
        correctAnswer: 'Correct Answer 12',
        answers: ['Correct Answer 12', 'Incorrect Answer 1', 'Incorrect Answer 2', 'Incorrect Answer 3']
    },
    'box-1d': {
        question: 'Question for 400 in Category 1',
        correctAnswer: 'Correct Answer 13',
        answers: ['Correct Answer 13', 'Incorrect Answer 1', 'Incorrect Answer 2', 'Incorrect Answer 3']
    },
    'box-2d': {
        question: 'Question for 400 in Category 2',
        correctAnswer: 'Correct Answer 14',
        answers: ['Correct Answer 14', 'Incorrect Answer 1', 'Incorrect Answer 2', 'Incorrect Answer 3']
    },
    'box-3d': {
        question: 'Question for 400 in Category 3',
        correctAnswer: 'Correct Answer 15',
        answers: ['Correct Answer 15', 'Incorrect Answer 1', 'Incorrect Answer 2', 'Incorrect Answer 3']
    },
    'box-4d': {
        question: 'Question for 400 in Category 4',
        correctAnswer: 'Correct Answer 16',
        answers: ['Correct Answer 16', 'Incorrect Answer 1', 'Incorrect Answer 2', 'Incorrect Answer 3']
    },
    'box-1e': {
        question: 'Question for 500 in Category 1',
        correctAnswer: 'Correct Answer 17',
        answers: ['Correct Answer 17', 'Incorrect Answer 1', 'Incorrect Answer 2', 'Incorrect Answer 3']
    },
    'box-2e': {
        question: 'Question for 500 in Category 2',
        correctAnswer: 'Correct Answer 18',
        answers: ['Correct Answer 18', 'Incorrect Answer 1', 'Incorrect Answer 2', 'Incorrect Answer 3']
    },
    'box-3e': {
        question: 'Question for 500 in Category 3',
        correctAnswer: 'Correct Answer 19',
        answers: ['Correct Answer 19', 'Incorrect Answer 1', 'Incorrect Answer 2', 'Incorrect Answer 3']
    },
    'box-4e': {
        question: 'Question for 500 in Category 4',
        correctAnswer: 'Correct Answer 20',
        answers: ['Correct Answer 20', 'Incorrect Answer 1', 'Incorrect Answer 2', 'Incorrect Answer 3']
    },
};

document.querySelectorAll('.box').forEach(box => {
    box.addEventListener('click', function() {
        const boxId = this.id
        //const question = questions[boxId];
        const dataForBox = questionsV2[boxId]
        
        if (!dataForBox) {
            console.error("Question data is missing for box ID: ", boxId);
            return;
        }
        const {question, correctAnswer, answers} = dataForBox;
        const shuffledAnswers = shuffleArray(answers)
        document.querySelectorAll('.bubble').forEach(bubble => {
            bubble.style.backgroundColor = ''; // Reset to default
        });

        document.getElementById('popup-content').textContent = question
        document.getElementById('answer-1').textContent = shuffledAnswers[0];
        document.getElementById('answer-2').textContent = shuffledAnswers[1];
        document.getElementById('answer-3').textContent = shuffledAnswers[2];
        document.getElementById('answer-4').textContent = shuffledAnswers[3];

        document.getElementById('popup-overlay').style.display = 'block';
        document.getElementById('popup-card').style.display = 'block';
        
        document.querySelectorAll('.bubble').forEach(answr => {
            answr.addEventListener('click', function() {
                const id = this.id
                choice = this.textContent
                console.log(choice)
                if (answerChecker(choice, correctAnswer)) {
                    box.style.backgroundColor = 'green';
                    document.getElementById('popup-overlay').style.display = 'none';
                    document.getElementById('popup-card').style.display = 'none';
                }
                else {
                    answr.style.backgroundColor = 'red'; 
                }
                
            })
        })
    });
});

document.getElementById('popup-overlay').addEventListener('click', function() {
    document.getElementById('popup-overlay').style.display = 'none';
    document.getElementById('popup-card').style.display = 'none';
}); 
document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      // Close the popup here
      const popupOverlay = document.getElementById('popup-overlay');
      popupOverlay.style.display = 'none';
      const popup = document.getElementById('popup-card');
      popup.style.display = 'none';
    }
  });

  function shuffleArray(array) {
    let currentIndex = array.length, temporaryValue, randomIndex;
    
    // While there remain elements to shuffle...
    while (currentIndex !== 0) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

function answerChecker(choice, answer) {
    if (choice === answer){
        return true
        
    }else {
        return false
    }
}