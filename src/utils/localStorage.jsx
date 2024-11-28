const employees = [
  {
    id: 1,
    firstName: "Aarav",
    lastName: "Sharma",
    email: "e@e.com",
    password: "123",
    taskCount: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 0
    },
    tasks: [
      {
        title: "Write Project Documentation",
        description: "Complete the documentation for the ongoing project.",
        date: "2024-11-27",
        category: "Documentation",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        title: "Prepare Sales Report",
        description: "Compile and analyze the sales data for the current month.",
        date: "2024-11-28",
        category: "Reporting",
        active: false,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Review Team Goals",
        description: "Assess and update the team's objectives for the quarter.",
        date: "2024-11-29",
        category: "Planning",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      }
    ]
  },
  {
    id: 2,
    firstName: "Vihaan",
    lastName: "Gupta",
    email: "employee2@example.com",
    password: "123",
    taskCount: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        title: "Organize Meeting Agenda",
        description: "Plan the agenda for the upcoming team meeting.",
        date: "2024-11-27",
        category: "Meetings",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Update Client Records",
        description: "Ensure all client information is up to date in the CRM.",
        date: "2024-11-28",
        category: "Database Management",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Create Marketing Strategy",
        description: "Develop a plan for the next marketing campaign.",
        date: "2024-11-30",
        category: "Marketing",
        active: true,
        newTask: false,
        completed: false,
        failed: true
      }
    ]
  },
  {
    id: 3,
    firstName: "Ishaan",
    lastName: "Malhotra",
    email: "employee3@example.com",
    password: "123",
    taskCount: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        title: "Fix Website Bugs",
        description: "Identify and resolve reported issues on the company website.",
        date: "2024-11-27",
        category: "Development",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      },
      {
        title: "Train New Interns",
        description: "Conduct an onboarding session for the newly joined interns.",
        date: "2024-11-28",
        category: "Training",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Generate Quarterly Report",
        description: "Prepare a detailed report for the last quarter's performance.",
        date: "2024-11-29",
        category: "Reporting",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      }
    ]
  },
  {
    id: 4,
    firstName: "Arjun",
    lastName: "Kumar",
    email: "employee4@example.com",
    password: "123",
    taskCount: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0
    },
    tasks: [
      {
        title: "Plan Holiday Event",
        description: "Organize a company event for the upcoming holidays.",
        date: "2024-12-01",
        category: "Event Management",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Update Software Tools",
        description: "Upgrade the tools used by the team to the latest version.",
        date: "2024-11-28",
        category: "IT",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Respond to Customer Feedback",
        description: "Address the feedback received from customers on recent projects.",
        date: "2024-11-29",
        category: "Customer Relations",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      }
    ]
  },
  {
    id: 5,
    firstName: "Kabir",
    lastName: "Rao",
    email: "employee5@example.com",
    password: "123",
    taskCount: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        title: "Analyze Market Trends",
        description: "Research and document the latest trends in the market.",
        date: "2024-11-27",
        category: "Research",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Prepare Budget Proposal",
        description: "Draft a budget plan for the next fiscal year.",
        date: "2024-11-28",
        category: "Finance",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Host Webinar",
        description: "Present a webinar on the latest industry practices.",
        date: "2024-11-30",
        category: "Training",
        active: true,
        newTask: false,
        completed: false,
        failed: true
      }
    ]
  }
];


const admin = [
    {
      "id": 1,
      "email": "admin@example.com",
      "password": "123"
    }
]

export const setLocalStorage = () => {
    localStorage.setItem('employees', JSON.stringify(employees));
    localStorage.setItem('admin', JSON.stringify(admin));
}
export const getLocalStorage = () => {
    const employees = JSON.parse(localStorage.getItem('employees'));
    const admin = JSON.parse(localStorage.getItem('admin'));

    return {employees, admin}
}