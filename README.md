# Gemini Pomodoro Timer with google prompt api

## Inspiration  
Studying always make people feel boring and unmotivating. Many people struggle with procrastination and isolation. Inspired by tools like the Pomodoro timer and the popularity of "Study with Me" videos on YouTube, we set out to create an AI-powered companion.  

## What it does  
The Gemini Pomodoro Timer is an intelligent tool designed to make studying engaging, and supportive. It:  
- Splits study sessions into Pomodoro-style subsessions (30 minutes of study + 5 minutes of break).  
- Tracks users' progress through states: Start → Working → Break → Finish.  
- Uses the Google Prompt API to provide real-time, context-aware motivational prompts tailored to the user's study state.  

## How we built it  
- Implemented Pomodoro-style session management with status tracking.  
- Leveraged the Google Prompt API to create personalized motivational messages based on user status and context.  
- Designed guiding prompts asking the language model to act as a supportive study friend, following study rules and providing context-aware encouragement.  
- We also Provid examples to the model to ensure consistency and clarity in responses.  

## Challenges we ran into  
- Customizing prompts to ensure the model provided responses that felt supportive and human-like.  
- Balancing the need for structure in the Pomodoro technique with flexibility for users’ unique preferences.  
- Ensuring the app adapts seamlessly to different study states as a beginner of Frontend development. 

## Accomplishments that we're proud of  
- Successfully customizing and integrating prompt API to generate supportive message considering the usage scenario.
- Designing a smooth flow for users to track their study process.  
- Creating a tool that provides real-time, personalized encouragement, addressing the emotional aspects of learning.  

## What we learned  
- The importance of personalization in enhancing motivation and productivity.  
- How to effectively use the Google Prompt API context-aware interactions.  Like providing some example questions and answers, which is N-shot prompt engineering technique.
- The value of user feedback in designing intuitive and impactful features.  

## What's next for Gemini Pomodoro Timer  
We plan to expand its functionality with:  
1. **Smart Session Management**  
   - Allowing users to customize work and break intervals.  
2. **Adaptive Learning Support**  
   - Goal-setting assistance.  
   - Performance analysis and visualization.  
   - Tailored study strategies based on user performance and expert recommendations. 