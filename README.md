# Real-Time Chat Application

A modern real-time chat application built using React.js, Node.js, Socket.IO, and MongoDB.

## Features

- User authentication with JWT
- Real-time messaging using Socket.IO
- Direct messaging between users
- Message history persistence
- Responsive Telegram-style UI
- Modern design with Tailwind CSS

## Tech Stack

### Frontend
- React.js
- Tailwind CSS
- Socket.IO Client
- Axios for HTTP requests

### Backend
- Node.js
- Express.js
- Socket.IO
- MongoDB with Mongoose
- JWT for authentication

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   # Install backend dependencies
   cd backend
   npm install

   # Install frontend dependencies
   cd ../frontend
   npm install
   ```

3. Set up environment variables:
   - Create `.env` file in the backend directory
   - Create `.env` file in the frontend directory

4. Start the application:
   ```bash
   # Start backend server
   cd backend
   npm run dev

   # Start frontend development server
   cd ../frontend
   npm start
   ```

## Project Structure

```
chat-app/
├── frontend/          # React frontend application
│   ├── src/
│   │   ├── components/
│   │   ├── contexts/
│   │   ├── hooks/
│   │   └── pages/
│   └── public/
└── backend/          # Node.js backend server
    ├── src/
    │   ├── controllers/
    │   ├── models/
    │   ├── routes/
    │   └── services/
    └── config/
```

## License

MIT 

## Output
![Image](https://github.com/user-attachments/assets/acb83792-2b28-447f-8e52-8d6ad15b7a98)
![Image](https://github.com/user-attachments/assets/d6ffdf0f-68ce-4f2b-8994-5ec8c721e12a)
