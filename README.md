# Quiz Game App

A web-based quiz game inspired by "Kaun Banega Crorepati" (KBC) that allows players to join the game by scanning a QR code from a mobile device. Players can answer questions displayed on both computer and mobile screens, providing an interactive experience.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [How to Play](#how-to-play)
- [Contributing](#contributing)
- [License](#license)

## Features

- Playable on both desktop and mobile devices.
- QR code generation for easy player access.
- Randomly selected quiz questions from a predefined list.
- Interactive interface for answering questions.
- Displays correct/incorrect feedback and tracks player progress.

## Technologies Used

- **React**: JavaScript library for building user interfaces.
- **CSS**: For styling the application.
- **qrcode.react**: Library for generating QR codes.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/avinash-18-art/Indroyd-Assignment-quiz-game.git

   ```

2. Navigate to the project directory: cd quiz-game-app

3. Install the required dependencies: npm install

4. Usage npm start

5. Project Structure: quiz-game-app/ ├── public/ │ ├── index.html # Main HTML file │ ├── favicon.ico # Favicon for the app │ └── ... # Other public assets ├── src/ │ ├── components/ # Reusable components │ │ ├── GameScreen.js # Component for the main game screen │ │ ├── MobileScreen.js # Component for the mobile view │ │ ├── QRCodeDisplay.js # Component for displaying the QR code │ │ └── ... # Other components as needed │ ├── styles/ # Stylesheets │ │ ├── App.css # Main CSS file for styling │ │ └── ... # Additional CSS files for components │ ├── data/ # Data files (if needed) │ │ ├── questions.js # File for storing questions and answers │ │ └── ... # Other data files if required │ ├── App.js # Main app component │ ├── index.js # Entry point for React │ ├── App.css # Main CSS file for the app │ └── ... # Other files as needed (e.g., utilities) ├── .gitignore # Git ignore file ├── package.json # Project dependencies and scripts └── README.md # Project documentation

## How to Play

Join the Game: Players can scan the displayed QR code using their mobile devices to join the game. Enter Player Name: Players will input their names on their mobile devices. Answer Questions: Players can select their answers from multiple-choice options. Feedback: The application provides immediate feedback on answers and advances to the next question if the answer is correct. Completion: After all questions have been answered, the game will display a completion message.

## License

### How to Use the README

1. **Project Name**: Replace `Quiz Game App` with the actual name of your project if different.
2. **Repository URL**: Update the clone URL (`https://github.com/yourusername/quiz-game-app.git`) with your actual GitHub repository link.
3. **Features**: You can modify or add any additional features specific to your application.
4. **Technologies**: List any other technologies you may have used or plan to use.
5. **License**: If you're using a different license, update the License section accordingly.

Feel free to customize any section to better fit your project's specifics! Let me know if you need more help with this.
