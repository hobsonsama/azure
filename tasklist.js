const TaskDao = require("../models/TaskDao");

 class TaskList {
   /**
    * Handles the various APIs for displaying and managing tasks
    * @param {TaskDao} taskDao
    */
   constructor(taskDao) {
     this.taskDao = taskDao;
   }
   async showTasks(req, res) {
     const querySpec = {
       query: "SELECT * FROM Feedback",
     };

     const items = await this.taskDao.find(querySpec);
     res.render("index", {
       title: "Feedback ",
       feedbackL: items
     });
   }

   async addTask(req, res) {
     const item = req.body;

     await this.taskDao.addItem(item);
     res.redirect("/");
 }

 module.exports = TaskList;
