const employees = [
  {
    id: 1,
    email: "employee1@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Project Kickoff Meeting",
        description: "Attend the initial project kickoff meeting.",
        date: "2024-11-15",
        category: "Meetings",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Submit Report",
        description: "Submit the weekly status report.",
        date: "2024-11-10",
        category: "Reports",
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        title: "Client Feedback Review",
        description: "Review client feedback on the latest module.",
        date: "2024-11-16",
        category: "Review",
      },
    ],
  },
  {
    id: 2,
    email: "employee2@example.com",
    password: "123",
    tasks: [
      {
        active: false,
        newTask: true,
        completed: false,
        failed: false,
        title: "Code Refactoring",
        description: "Refactor codebase for optimization.",
        date: "2024-11-17",
        category: "Development",
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        title: "UI Testing",
        description: "Perform UI testing for the latest release.",
        date: "2024-11-20",
        category: "Testing",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Team Sync",
        description: "Participate in team sync-up meeting.",
        date: "2024-11-10",
        category: "Meetings",
      },
    ],
  },
  {
    id: 3,
    email: "employee3@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Database Migration",
        description: "Prepare for database migration activities.",
        date: "2024-11-18",
        category: "Maintenance",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Documentation Update",
        description: "Update project documentation.",
        date: "2024-11-11",
        category: "Documentation",
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        title: "Sprint Planning",
        description: "Plan for the next sprint with the team.",
        date: "2024-11-19",
        category: "Planning",
      },
    ],
  },
  {
    id: 4,
    email: "employee4@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Feature Enhancement",
        description: "Implement feature enhancement for Module A.",
        date: "2024-11-21",
        category: "Development",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Debugging Session",
        description: "Resolve bugs reported in the QA phase.",
        date: "2024-11-09",
        category: "Debugging",
      },
    ],
  },
  {
    id: 5,
    email: "employee5@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "UI Design Review",
        description: "Review UI designs with the design team.",
        date: "2024-11-18",
        category: "Design",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Feedback Session",
        description: "Participate in the feedback session.",
        date: "2024-11-12",
        category: "Meetings",
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        title: "Unit Testing",
        description: "Conduct unit tests for new functions.",
        date: "2024-11-19",
        category: "Testing",
      },
    ],
  },
];

const admin = [
  {
    id: 1,
    email: "admin@example.com",
    password: "123",
  },
];

export const setLocalStorage = () => {
  // check whether employees data is present or not
  localStorage.setItem("employees", JSON.stringify(employees));
  // check whether admin data is present or not
  localStorage.setItem("admin", JSON.stringify(admin));
};

export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem("employees"));
  const admin = JSON.parse(localStorage.getItem("admin"));

  console.log(employees, admin);
};
