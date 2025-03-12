# Birthday Reminder

A simple React application that displays a list of people with their birthdays and allows users to clear the list with a button click.

## Features
- Displays a list of people with their name, age, and profile picture.
- Fetches images dynamically from Unsplash.
- Provides a button to clear the list of birthdays.

## Technologies Used
- React
- JavaScript (ES6+)
- CSS

## Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/lawrenzoo/birthday-reminder.git
   ```
2. Navigate to the project directory:
   ```sh
   cd birthday-reminder
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
4. Start the development server:
   ```sh
   npm run dev
   ```

## Usage
1. The app will display a list of people with their birthdays.
2. Click the **Clear All** button to remove the list.

## File Structure
```
├── src
│   ├── App.jsx
│   ├── Data.js
│   ├── Component
│   │   ├── List.jsx
│   ├── App.css
├── package.json
├── README.md
```

## Known Issues
- Ensure image URLs are valid; if they fail to load, use static URLs instead.
- If `Data.js` is not importing correctly, check the file path.

## License
This project is open-source and free to use.

## Author
Created by chiagozie mbanusi lawrence

