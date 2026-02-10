let step = 0;

const riddles = [
  {
    question: `I start your day and end your night,  
    I hold your dreams till morning light.  
    Where do you rest your lovely head?`,
    answer: "bed"
  },
  {
    question: `I’m cold and sticky but you stay for hours,  
    We cuddle here with tired feet.  
    Netflix knows this place quite well 😉`,
    answer: "couch"
  },
  {
    question: `
    I’m a box that’s cold and white,
    I keep your treats frozen tight.
    you open me up so rarely,
    Find a clue to something sweet!`,
    answer: "freezer"
  },
  {
    question: `Final clue 💌  
    You come to me morning, noon, and night,
    I’m where you find everything ready.
    You check on top of me to find something hot waiting for you,
    I'm sometimes used as a toolbox, but today I hold a clue 😌`,
    answer: "kitchen island"
  }
];

function checkAnswer() {
  const input = document.getElementById("answer").value.trim().toLowerCase();
  const feedback = document.getElementById("feedback");
  const riddleText = document.getElementById("riddle");

  if (input === riddles[step].answer) {
    step++;

    if (step < riddles.length) {
      riddleText.innerText = riddles[step].question;
      feedback.innerText = "Correct 💖 Go to the next spot!";
      document.getElementById("answer").value = "";
    } else {
     riddleText.innerHTML = `
  <div class="space-y-4">
    <h2 class="text-3xl font-bold text-pink-600">
      🎁 Treasure Found! 🎁
    </h2>

    <img 
      src="https://d2w1ef2ao9g8r9.cloudfront.net/images/EclipseDiLunaInside.JPG"
      alt="Romantic Restaurant"
      class="rounded-2xl shadow-lg mx-auto"
    />

    <p class="text-lg text-gray-700 font-medium">
      Dinner is already reserved just for us 🍽️✨
    </p>

    <div class="bg-pink-100 rounded-xl p-4">
      <p class="text-pink-700 font-semibold">
        📅 February 11, 2026
      </p>
      <p class="text-pink-700 font-semibold">
        ⏰ 7:30 PM
      </p>
    </div>

    <p class="text-pink-600 font-semibold">
      Check the dining table ❤️
    </p>
  </div>
`;

      document.getElementById("answer").style.display = "none";
      feedback.innerText = "Happy Valentine’s Day, my love 💕";
    }
  } else {
    feedback.innerText = "Hmm… not quite 😘 Try again!";
  }
}
