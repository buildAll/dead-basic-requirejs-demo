define(function(){
   var myName = 'Bill';
   var myJob = 'front-end developer';
   var mySalary = 'what?';
   var myTarget = 'become a successful developer';

   return {
     getName: function() {
       return myName;
     },
     getJob: function() {
       return myJob;
     },
     getSalary: function() {
       return 'salary is confidential';
     },
     getTarget: function() {
       return myTarget;
     }
   }
});
