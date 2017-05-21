class Filter {

  inboxFilter(tasks) {
    return tasks;
  }

  todayFilter(tasks) {
    var filteredTasks = [];
    let today = new Date();
    today = Date.UTC(today.getFullYear(), today.getMonth(), today.getDate());
    for (var task in tasks) {
      let taskDate = new Date(tasks[task].due_date_utc);
      taskDate = Date.UTC(taskDate.getFullYear(), taskDate.getMonth(), taskDate.getDate());
      if(taskDate === today)
         filteredTasks.push(tasks[task]);
    }
    return filteredTasks;
  }

  weekFilter(tasks) {
    var filteredTasks = [];

    let today = new Date();
    let weekStart = Date.UTC(today.getFullYear(), today.getMonth(), today.getDate());

    let week = new Date();
    week.setDate(week.getDate() + 6);
    let weekEnd = Date.UTC(week.getFullYear(), week.getMonth(), week.getDate());

    for (var task in tasks) {
      let taskDate = new Date(tasks[task].due_date_utc);
      taskDate = Date.UTC(taskDate.getFullYear(), taskDate.getMonth(), taskDate.getDate());
      if(taskDate >= weekStart && taskDate <= weekEnd)
         filteredTasks.push(tasks[task]);
    }
    return filteredTasks;
  }

   filter(tasks, filter) {
     if (filter.title==="Inbox") {
        return this.inboxFilter(tasks);
     }else if(filter.title==="Today") {
       return this.todayFilter(tasks);
     } else {
       return this.weekFilter(tasks);
     }
  }
}

export default new Filter();
