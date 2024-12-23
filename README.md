# Cricket Game

<p align="left">
 <img src="https://github.com/user-attachments/assets/calculator-image.png" alt="Calculator Image" width="50%" />
</p>

## Overview

A simple interactive game where the user competes against the computer. Players select a move (bat, ball, or stump), and the game determines the outcome (Win, Lose, or Tie) based on predefined rules. The scores are stored and updated dynamically

## File Descriptions

### `index.html`
- **Purpose:** Defines the structure of the game UI
- **Details:**
    - Scoring Section: Displays the win, lose, and tie counts.
    - Game Area: Shows the user's and computer's moves and the result.
    - User Input Buttons: Allow users to select their move.
    - Reset Button: Resets the scores and clears the game state.

---

### `styles.css`
- **Purpose:** Handles the styling of the game
    - Includes layout, button styles, and animations for a polished user experience.

---

### `script.js`
- **Purpose:** Implements the game logic and interactions.
- **Details:**
    - updateScoreboard(): Updates the scoreboard UI and stores scores in localStorage.
    - generateComputerChoice(): Randomly selects a move for the computer.
    - getResult(userMove, computerMove): Determines the outcome (Win, Lose, or Tie) based on the moves.
    - playGame(userMove): Handles the main gameplay logic, including animations and sound effects.
    - resetGame(): Resets scores and clears the game state.