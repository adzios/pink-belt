Tasks = new Meteor.Collection("tasks");
var myTasks = Tasks.find();

Tasks.allow({
    'insert': function (userId,doc) {
      /* user and doc checks ,
      return true to allow insert */
      return true;
     },
     'update': function (userID, doc) { return userId === task.userId; },
    'remove': function (userId,doc) {
       /* user and doc checks ,
       return true to allow insert */
       return true;
      }
});
