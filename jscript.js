var x = 0;
var a = new Array();

//task strikeout
//editable task
//local storage
//task deletion
//all done button
//all del button with alert + taskhead invisibility



function samecheck(){                                 //to check if a task is previously added or not
   for (i=0;i<x;i++){
      if (a[i]==a[x]){
         alert("Task already added");
         return 0;
      }
   }
}


function show(){
   
   var value = document.getElementById("inputbox").value;             //task input content extraction
   a[x] = value;
   

   if (value == "" ){
      alert("Please type in a task");                                 //if null input, alert user
   }

   else if(samecheck() != 0){
      x++;            //this is as a task counter also used to change task id as Task 1, Task 2...

      //createElement creates an element
      //getElementById tags an element by its id, similar for class
      //append inserts text within element
      //appendChild creates a child element
      //abcd.xyz----here abcd is the var and xyz is property

      document.getElementById('taskhead').style.display = 'block';     //taskhead visibility syntax
      var checkbox = document.createElement('input');
      checkbox.type = "checkbox";                                      //checkbox creation
      var tsk = "Task " + x;                                           //unique id for each task
      checkbox.id = (tsk) ;

      var lbl = document.createElement('label');                      //label for checkbox (taskname)
      lbl.htmlFor = (tsk);                                            //checkbox linking
      lbl.append(value);                                              //Task input content injection

      var taskdiv = document.createElement("div");                    //div wrapper for each task
      taskdiv.className = "Tasks";
      taskdiv.appendChild(checkbox);                                  //child element 'checkbox' creation
      taskdiv.appendChild(lbl);                                       //child element 'lbl' creation

      var br = document.createElement('br');                          //<br> tag creation
      
      var container = document.getElementById("Tasks");         //final insertion within empty div 'Tasks'
      container.appendChild(taskdiv);                                 //content insertion
      container.appendChild(br);                                      //breakline insertion   
   }  
}
