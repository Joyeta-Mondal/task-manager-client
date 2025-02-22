# TaskSphere - Task Management Web App

## 📌 Short Description
TaskSphere is a modern and efficient task management web application designed to help users organize, track, and manage their tasks seamlessly. With real-time synchronization, Firebase authentication, and a drag-and-drop task system, TaskSphere ensures an intuitive and productive experience.

## 🚀 Live Link
🔗 [TaskSphere Live App](https://TaskSphere-d9dc8.web.app/)

## 📦 Dependencies
The project relies on the following dependencies:
- *Frontend*:
  - React (Vite.js)
  - Tailwind CSS
  - Firebase Authentication
  - React DnD (Drag and Drop)
  - Axios
- *Backend*:
  - Node.js (Express.js)
  - MongoDB
  - WebSockets or Change Streams (for real-time updates)

## 🛠 Installation Steps
Follow these steps to set up TaskSphere locally:

### *Frontend Setup*
sh
# Clone the repository
git clone https://github.com/your-username/TaskSphere.git
cd TaskSphere/task-handler-client

# Install dependencies
npm install --legacy-peer-deps

# Create a .env file and add Firebase credentials
cp .env.example .env

# Start the development server
npm run dev


### *Backend Setup*
sh
cd TaskSphere/task-handler-server

# Install dependencies
npm install

# Create a .env file and add backend environment variables
cp .env.example .env

# Start the backend server
npm start


## 🏗 Technologies Used
- *Frontend*: React (Vite.js), Tailwind CSS, Firebase Authentication, React DnD
- *Backend*: Node.js, Express.js, MongoDB, WebSockets/Change Streams
- *Deployment*: Firebase Hosting (Frontend), Vercel (Backend)

Feel free to contribute and enhance TaskSphere! 🚀