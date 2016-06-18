import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

Template.hello.onCreated(function helloOnCreated() {
  // counter starts at 0
  this.counter = new ReactiveVar(0);
});

Template.hello.helpers({
  tasks: function() {
      var tasks = Tasks.find().fetch();
      return tasks
  },
});

Template.hello.events({
  'click #dodajTo'(event, instance) {
    // increment the counter when button is clicked
    let taskTitle = $('#title').val()
    console.log(taskTitle)
    Tasks.insert({
        text: taskTitle,
        description: "gunwo"
    })
  },
});
