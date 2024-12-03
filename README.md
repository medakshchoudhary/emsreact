# Task Management System

A modern task management application built with React that allows administrators to assign and track tasks while employees can manage their assigned tasks efficiently.

## 🚀 Features

- **User Authentication System**
  - Admin and Employee roles
  - Secure login system
  - Persistent sessions using localStorage

- **Admin Dashboard**
  - Create and assign tasks to employees
  - View all employees' task statistics
  - Real-time task count updates
  - Task categorization system

- **Employee Dashboard**
  - View assigned tasks by status
  - Task management capabilities:
    - Accept new tasks
    - Mark tasks as completed
    - Mark tasks as failed
  - Task statistics overview

- **Task Categories**
  - New Tasks (Blue)
  - Active Tasks (Yellow)
  - Completed Tasks (Green)
  - Failed Tasks (Red)

## 🔑 Login Credentials

### Admin Access
- Email: `admin@me.com`
- Password: `123`

### Sample Employee Accounts
1. **Employee 1**
   - Email: `e@e.com`
   - Password: `123`

2. **Employee 2**
   - Email: `e2@e.com`
   - Password: `123`

*Note: More employee accounts can be viewed in the Application tab of your browser's Developer Tools under localStorage.*

## 🛠️ Technologies Used

- React.js
- Context API for state management
- localStorage for data persistence
- Tailwind CSS for styling
- Vite for build tooling

## 🚦 Getting Started

1. Clone the repository:

```
git clone https://github.com/medakshchoudhary/emsreact.git
```

2. Navigate to the project directory:

```
cd emsreact
```

3. Install dependencies:

```
npm install
```

4. Run the development server:

```
npm run dev
```

5. Open `http://localhost:5173` in your browser

## 💡 Usage Tips

- **For Admins:**
  - Create tasks by filling out the task creation form
  - Monitor all employees' task progress from the dashboard
  - View comprehensive task statistics for each employee

- **For Employees:**
  - Accept new tasks from the task list
  - Update task status as needed
  - Track personal task statistics

## 🗄️ Data Persistence

The application uses localStorage to persist:
- User authentication status
- Employee data
- Task information
- Task statistics

*Note: You can inspect stored data in Developer Tools → Application → Local Storage*

## 🎨 UI Features

- Responsive design
- Color-coded task categories
- Clean and intuitive interface
- Real-time updates
- Scrollable task lists

## 🔒 Security Note

This is a demo application using basic authentication. In a production environment, implement proper security measures and user authentication systems.

## 🤝 Contributing

Feel free to fork this repository and submit pull requests. For major changes, please open an issue first to discuss what you would like to change.

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🔗 Live Demo

Visit the live application at: [emsreact.vercel.app](https://emsreact.vercel.app)

## 📊 Project Stats
- JavaScript: 97.8%
- HTML: 1.5%
- CSS: 0.7%

[Source](https://github.com/medakshchoudhary/emsreact)