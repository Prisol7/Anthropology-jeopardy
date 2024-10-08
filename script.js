const questions = {
    'box-1a': 'Question for 100 in Category 1',
    'box-2a': 'Question for 100 in Category 2', 
    'box-3a': 'Question for 100 in Category 3', 
    'box-4a': 'Question for 100 in Category 4', 
    'box-1b': 'Question for 200 in Category 1',
    'box-2b': 'Question for 200 in Category 2', 
    'box-3b': 'The term for the smallest unit of sound', 
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
        question: "the term for the practice of studying a culture from an outsider’s perspective and evaluating it based on one's own cultural standards?",
        correctAnswer: 'Ethnocentrism',
        answers: ['Cultural relativism', 'Ethnocentrism', 'Symbolic interactionsim', 'Cultural determinism']
    },
    'box-2a': {
        question: 'Which part of the human skeleton is most crucial for upright walking',
        correctAnswer: 'Pelvis',
        answers: ['Arms', 'Pelvis', 'Toes', 'Skull']
    },
    'box-3a': {
        question: 'A variant of a language spoken in a particular region or by a specific group',
        correctAnswer: 'dialect',
        answers: ['Code-switching', 'dialect', 'pidgin', 'creole']
    },
    'box-4a': {
        question: 'Discovered in the 1920s in the tomb of a Chinese emperor, this famous collection of statues represents an army created to protect the emperor in the afterlife.',
        correctAnswer: 'Terracotta Warriors',
        answers: ['Terracotta Warriors', 'The Roman Legion', 'Samurai', 'British Redcoats']
    },
    'box-1b': {
        question: 'what is a common term used to describe a kinship system in which individuals trace their ancestry through both maternal and paternal lines?',
        correctAnswer: 'Bilateral descent',
        answers: ['Bilateral descent', 'Unilineal descent', 'Matrilineal descent', 'Patrilineal descent']
    },
    'box-2b': {
        question: 'What species was the famous skeleton Lucy',
        correctAnswer: 'Australopithecus africanus',
        answers: ['Australopithecus africanus', 'Homo sapiens', 'Homo floresiensis', 'Neanderthal']
    },
    'box-3b': {
        question: 'The term for the smallest unit of sound',
        correctAnswer: 'phoneme',
        answers: ['syllable', 'phoneme', 'allophone', 'Morpheme']
    },
    'box-4b': {
        question: 'mapping technology to document social patterns based on geological location',
        correctAnswer: 'Geographic Imaging System',
        answers: ['Geographic Imaging System', 'Global Positioning System', 'Gravity Survey', 'Seismic Reflection Surveying', ]
    },
    'box-1c': {
        question: 'This field of study focuses on the cultural adaptations of a people to the enviroment they live in',
        correctAnswer: 'Cultural Ecology',
        answers: ['Cultural Ecology', 'Paleontology', 'Geology', 'Environmental science']
    },
    'box-2c': {
        question: 'Which of the following behaviors is commonly observed in primates and is crucial for social bonding',
        correctAnswer: 'Grooming',
        answers: ['Nest building', 'Tool use', 'Grooming', 'Vocalizations']
    },
    'box-3c': {
        question: 'This North American language uses a cyclical explanation of time as opposed to linear',
        correctAnswer: 'Hopi language',
        answers: ['Hopi language', 'Cree', 'Yanomaman', 'Yupik']
    },
    'box-4c': {
        question: 'The technique of measuring the half-life decay of this element in order to determine the age of any organic material between 500-60,000 years old.',
        correctAnswer: 'Carbon dating',
        answers: ['Carbon dating', 'Radiometric dating', 'Cosmogenic surface exposure dating', 'Dendrochronology']
    },
    'box-1d': {
        question: 'a.png',
        correctAnswer: 'Mayan',
        answers: ['Mayan', 'Olmec', 'Babylonian', 'Egyptian']
    },
    'box-2d': {
        question: 'Which of the following is considered one of the earliest known hominins',
        correctAnswer: 'Australopithecus afarensis',
        answers: ['Homo erectus', ' Homo sapiens', 'Neanderthals', 'Australopithecus afarensis']
    },
    'box-3d': {
        question: 'Phonations occurs in this part of the body',
        correctAnswer: 'the larynx/vocal folds',
        answers: ['the larynx/vocal folds', 'lungs', 'trachea', 'nasal cavity']
    },
    'box-4d': {
        question: 'Archaeologist re-create tools and building techniques to better understand past ways of life',
        correctAnswer: 'Experimental Archaeology',
        answers: ['Experimental Archaeology', 'Ethnoarchaeology', 'Egyptology', 'Historical Archaeology']
    },
    'box-1e': {
        question: 'This high demand religion believes that humans were created in a laboratory and planted on earth.',
        correctAnswer: 'Raelian movement',
        answers: ['Unification church', 'Raelian movement', 'Scientology', 'Branch Davidians']
    },
    'box-2e': {
        question: 'Which of the following had a approximate human brain size of 500-600cc and lived around 2.4 to 1.4 million years ago?',
        correctAnswer: 'Homo habilis',
        answers: ['Homo habilis', 'Homo erectus', 'Australopithecus africanus', 'Homo sapiens']
    },
    'box-3e': {
        question: 'this NAE phoneme is a glottal consonant',
        correctAnswer: 'h',
        answers: ['h', 'i', 't', 'k']
    },
    'box-4e': {
        question: 'These triangular stones made by the indigenous populations of the carribean served as idols to their dieties that they believed worked in threes.',
        correctAnswer: 'zemis',
        answers: ['zemis', 'totem', 'moai', 'colossal heads']
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
        if (question === 'a.png') {
            document.getElementById('popup-content').innerHTML = `<img src="${question}" alt="Question Image" style="max-width: 100%; height: auto;">`;
        }else {
            document.getElementById('popup-content').textContent = question
        }
        
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
                    box.style.backgroundColor = '#16a34a';
                    document.getElementById('popup-overlay').style.display = 'none';
                    document.getElementById('popup-card').style.display = 'none';
                }
                else {
                    answr.style.backgroundColor = 'red'; 
                }
                
            })
        })
    });

    box.addEventListener('contextmenu', function() {
        event.preventDefault();
        box.style.backgroundColor = ''
    })
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

const bel = document.querySelector('.box');

bel.addEventListener('contextmenu', function(event) {
        event.preventDefault(); // Prevent the default right-click menu
        box.style.backgroundColor = 'red'; // Change color to red
});
