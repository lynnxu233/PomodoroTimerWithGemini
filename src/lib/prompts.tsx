// Encouragement data mapped to different statuses


const encouragementPrompts ={
    "start": [
      "I'm about to start my study session. Can you help me get motivated and set a positive mindset for my upcoming Pomodoro?",
      "I'm feeling a bit nervous about my study session. Can you provide some encouragement and help me feel confident about getting started?",
      "What advice can you give me to make the most of my upcoming focused study time?",
      "I want to start my study session strong. Can you give me a pep talk and some strategies to maintain focus?",
      "I'm preparing to begin my study session. What mental preparation would you recommend to set myself up for success?"
    ],
    "working": [
      "I'm in the middle of my study session and starting to feel tired. Can you help me regain my motivation and energy?",
      "I'm struggling to maintain focus right now. What encouragement or techniques can you suggest to help me push through?",
      "Midway through my study session, I'm feeling a bit discouraged. Can you help me reframe my thinking and stay motivated?",
      "I'm finding it challenging to concentrate. What strategies can you recommend to help me stay engaged and productive?",
      "How can I overcome this moment of mental fatigue and stay committed to my study goals?"
    ],
    "shortBreak": [
      "I'm on a short break between study sessions. How can I make the most of these few minutes to recharge?",
      "Can you help me use this break effectively to reset my mind and prepare for the next study session?",
      "I want to make sure I'm using my break time wisely. What quick activities or mindset shifts do you recommend?",
      "How can I ensure this short break helps me feel refreshed and ready to dive back into studying?",
      "What mental and physical strategies can help me make the most of this brief rest period?"
    ],
    "finish": [
      "I've completed my Pomodoro study session. Can you help me reflect on my progress and feel good about what I've accomplished?",
      "I've finished my study sessions for today. Can you provide some perspective and encouragement about my efforts?",
      "Looking back on my study time, what positive insights can you share to help me feel motivated and proud?",
      "I want to celebrate completing my study goals. How can I acknowledge my hard work and maintain this positive momentum?",
      "Can you help me reframe my study session as a success and boost my confidence for future learning?"
    ]
  }

const examples = {
    "start":[
        "Long time no see friends!! It's [current_time] in the [morning/ afternoon/ evening]. let's study using the pomodoro technique today.", 
        "Today we will do [num] pomodoros, with a 5-minute break in between. When you're ready, click the start button to get started!! Let's get started!!", 
        "It's currently [] [am/ pm]. Let's study together till the [noon/ evening]"
    ], 

    "working": [
        "Let's get your work down. 🤓", 
        "Let's go to work!",

    ], 
    "shortBreak":[
        "harray, you finish [num] pomodoro, you have 5 minutes to do whatever you want. 😄 Just make sure you get back to studying. ", 
        "Great work! You've just finished one more pomodoro. Do you like the view today? Take a break and walk around.🌄 ", 
        "Let's take a break after your [first] pomodoro!! Take a break, do whatever u want! See you in 5 minutes. "

    ],
    "finish":[
        "🙌 We've completed [time] of study. Give yourself a pat on the back!! Have a good day!"

    ]
}

const intro = "if you're new, the pomodoro techniques is a method that boosts productivity, by breaking down work periods into 30-min slices, separated by short breaks."

