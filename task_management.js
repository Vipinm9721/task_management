let task = ["Task1", "Task2", "Task3", "Task4", "Task5"];

for (let i = 1; i < task.length; i++) {
    task[i - 1] = task[i];
}
task.length--;

task.length += 2;
for (let i = task.length - 1; i >= 2; i--) {
    task[i] = task[i - 2];
}
task[0] = "HighPriorityTask1";
task[1] = "HighPriorityTask2";

task[task.length - 1] = "NewLastTask";

console.log("Updated task list:", task);
