function toDoList(task) {
  this.newTask = task;
}

// Contact.prototype.fullName = function() {
//   return this.firstName + " " + this.lastName;
// }

$(document).ready(function() {
  $("form#new-task-form").submit(function(event) {
    event.preventDefault();

    var inputtedNewTask = $("input#newTaskItem").val();

    var newItem = new toDoList(inputtedNewTask);

    $("ul#all-tasks").append("<li class='task'>" + newItem.newTask + "</li>");

    $("input#newTaskItem").val("");

    $(".task").click(function() {
      $(this).remove();
      $(this).appendTo("ul#completed-tasks")
      
    });

  });
});
