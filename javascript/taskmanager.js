// Task Manager
const taskManager = {
    tasks: [],
    
    // Accessor property to get the number of tasks
    get taskCount() {
      return this.tasks.length;
    },
    
    // Method to add a new task
    addTask(title, description) {
      const task = { title, description, completed: false };
      this.tasks.push(task);
    },
    
    // Method to mark a task as completed
    completeTask(index) {
      if (index >= 0 && index < this.taskCount) {
        this.tasks[index].completed = true;
      }
    },
    
    // Method to display all tasks
    displayTasks() {
      console.log('Tasks:');
      this.tasks.forEach((task, index) => {
        console.log(`Task ${index + 1}:`);
        console.log(`Title: ${task.title}`);
        console.log(`Description: ${task.description}`);
        console.log(`Status: ${task.completed ? 'Completed' : 'Incomplete'}`);
        console.log('---------------------------');
      });
    }
  };
  
  // Adding tasks
  taskManager.addTask('Task 1', 'Complete the project');
  taskManager.addTask('Task 2', 'Review the documentation');
  taskManager.addTask('Task 3', 'Prepare for the presentation');
  
  // Marking a task as completed
  taskManager.completeTask(0);
  
  // Displaying all tasks
  taskManager.displayTasks();
  
  // Getting the number of tasks using the accessor property
  console.log('Task Count:', taskManager.taskCount);
  
  // Using Object.entries() to iterate over tasks
  console.log('Iterating over tasks using Object.entries():');
  Object.entries(taskManager.tasks).forEach(([index, task]) => {
    console.log(`Task ${Number(index) + 1}: ${task.title}`);
  });
  