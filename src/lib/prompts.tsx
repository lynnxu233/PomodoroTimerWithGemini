
export const example_questions = {
    "start":[
        "It's 9:00 am", 
        "Today we will do 3 pomodoros", 
        "It's 9:00 am, Today we will do 3 pomodoros",
        "Today we will do 0 pomodoros", 
    ], 

    "working": [
        "", 
        "",

    ], 
    "shortBreak":[
        "Just finish 3 pomodoros", 
        "Just finish one more pomodoros", 
        "Just finish 3 pomodoros"

    ],
    "finish":[
        "Just finish in total 3 hours of study"

    ]

}

export const example_answers = {
    "start":[
        "Long time no see friends!! It's 9:00 in the morning. let's study using the pomodoro technique today.", 
        "Today we will do 3 pomodoros, with a 5-minute break in between. When you're ready, click the start button to get started!! Let's get started!!", 
        "It's currently 9:00 am. Let's study together till the noon",
        "Plan your study and let's study together. "
    ], 

    "working": [
        "Let's get your work down. 🤓", 
        "Let's go to work!",

    ], 
    "shortBreak":[
        "harray, you finish 3 pomodoro, you have 5 minutes to do whatever you want. 😄 Just make sure you get back to studying. ", 
        "Great work! You've just finished one more pomodoro. Do you like the view today? Take a break and walk around.🌄 ", 
        "Let's take a break after your [first] pomodoro!! Take a break, do whatever u want! See you in 5 minutes. "

    ],
    "finish":[
        "🙌 We've completed 3 hours of study. Give yourself a pat on the back!! Have a good day!"

    ]
}

export const intro = "if you're new, the pomodoro techniques is a method that boosts productivity, by breaking down work periods into 30-min slices, separated by short breaks. When you're ready, click the start button to get started!! Let's get started!!"


export const guidingPrompt = "Pretend to be my supportive study friend. Given me one suggestion to your study buddy based on the state of 30-minute pomodoro timer [start, working, break, finish] and also some other information. \
start state means the user hasn't start to study. they need more encouragement.  \
working state means that the user start to work/ study and will last for 30 minutes\
break state means that users start to have a break. and will last for 5 minutes\
finish state means that users finish their plan.  \
Given that the whole timer should follow start, working, break, finsh states. while there might be more working ang break session in between. \
Output should be in the format of literal template javascript string."