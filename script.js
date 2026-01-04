function selectMood(mood) {
  const output = document.getElementById("moodInsight");

  if (mood === "happy") {
    output.textContent = "Feeling good? Protect it by avoiding endless scrolling.";
  } else if (mood === "neutral") {
    output.textContent = "A good time to take a mindful pause.";
  } else if (mood === "tired") {
    output.textContent = "Late screen use may be draining your energy.";
  } else if (mood === "stressed") {
    output.textContent = "Short offline breaks can help lower stress.";
  }
}

function selectHabit(habit) {
  const output = document.getElementById("habitOutput");

  if (habit === "walk") {
    output.textContent = "Walking helps reset your focus and reduce mental fatigue.";
  } else if (habit === "read") {
    output.textContent = "Reading slows your mind and improves attention span.";
  } else if (habit === "journal") {
    output.textContent = "Journaling helps process thoughts and emotions.";
  }
}

function showAwareness(type) {
  const output = document.getElementById("awarenessOutput");

  if (type === "night") {
    output.textContent = "Late-night scrolling interferes with sleep quality.";
  } else if (type === "social") {
    output.textContent = "Endless feeds encourage comparison and anxiety.";
  } else if (type === "multitask") {
    output.textContent = "Multitasking reduces focus and increases mental load.";
  }
}

const prompts = [
  "When did you first check your phone today?",
  "Did screen time help or hurt your mood?",
  "What could you do offline for 10 minutes?",
  "What app did you use the most today?"
];

function generatePrompt() {
  const randomIndex = Math.floor(Math.random() * prompts.length);
  document.getElementById("reflectionPrompt").textContent = prompts[randomIndex];
}

function toggleTheme() {
  document.body.classList.toggle("focus-theme");
}

function dismissReminder() {
  document.getElementById("reminder").style.display = "none";
}
