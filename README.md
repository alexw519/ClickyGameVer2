# Community Clicky Game Ver 2

# https://alexw519.github.io/ClickyGame/
 
This is a re-upload of the code since I accidently pulled the react version of the app.
 
This web-app is a game where the user tries to get the maximum high score of 12. To obtain the high score, the user has to select the 12 different images without selecting the same image twice in the row. If you select the same image, your score will reset to zero. Try to obtain the high score!

## How To Run
The game starts as soon as you open the webpage

## How It Works
Whenever an image is clicked, an array is checked to see whether it has been clicked on or not. If the image has not been clicked, it is added to an array of clicked images and the score is updated. Then all of the images get shuffled around. If the image has been clicked, the score is reset to 0, the array is cleared and the images shuffle once again.

## Technologies
Written in javascript & react.js
