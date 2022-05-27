var x = 0;
var a = new Array();                                   //task content storage array
//var deletion = new Array();


//editable task
//local storage
//task deletion


function samecheck(){                                 //to check if a task is previously added or not
   for (i=0;i<x;i++){
      if (a[i]==a[x]){
         alert("Task already added");
         return 0;
      }
   }
}


function show(){            //to create a task on button click
   
   var value = document.getElementById("inputbox").value;             //task input content extraction
   a[x] = value;                                                    //value globalization for samecheck()
   

   if (value == "" ){
      alert("Please type in a task");                                 //if null input, alert user
   }

   else if(samecheck() != 0){

      x++;                  //this is as a task counter also used to change task id as Task 1, Task 2...

      //createElement creates an element
      //getElementById tags an element by its id, similar for class
      //append inserts text within element
      //appendChild creates a child element
      //abcd.xyz----here abcd is the var and xyz is property

      document.getElementById('taskhead').style.display = 'block';     //taskhead visibility toggle on

      var checkbox = document.createElement('input');
      checkbox.type = "checkbox";                                      //checkbox creation
      var tsk = "Task " + x;                                           //unique id for each task
      checkbox.id = (tsk) ;
      checkbox.name = "chk";

      var lbl = document.createElement('label');                   //create label for checkbox (taskname)
      lbl.htmlFor = (tsk);                                            //checkbox linking
      lbl.append(value);                                              //Task input content injection

      var del = document.createElement('button');                      //create a delete task btn
      del.type = 'button';
      del.append('X');
      //deletion[x] = "Delbtn " + x;
      //del.id = (deletion[x]);
      del.className = "taskdelbtn";
      
      var taskdiv = document.createElement("div");                    //div wrapper for each task
      taskdiv.className = "Tasks";
      taskdiv.appendChild(checkbox);                                  //child element 'checkbox' creation
      taskdiv.appendChild(lbl);                                       //child element 'lbl' creation
      taskdiv.appendChild(del);

      var br = document.createElement('br');                          //<br> tag creation
      
      var container = document.getElementById("Tasks");               //insertion within empty div 'Tasks'
      container.appendChild(taskdiv);                                 //content insertion
      container.appendChild(br);                                      //breakline insertion   
   }  
}




// for (i=0;i<x;i++){
// document.getElementById(deletion[i]).onclick = function() {deltask()};
// function deltask(){

//    var tsk = "Task " + i; 
//    document.getElementById(tsk).innerHTML = "";
// }
// }
var close = document.getElementsByClassName('taskdelbtn');
for (var i = 0; i < close.length; i++) {
   close[i].onclick = function() {
      this.style.display = "none";
      var diva = this.parentElement;
      delete (diva);
      document.getElementsByClass("Tasks").innerHTML = "";
  }
}




function delall(){                                                     //func to del all task

   alert("Are you sure you want to delete all tasks forever?");        //alert for delete all task
   document.getElementById('taskhead').style.display = 'none';         //taskhead visibility toggle off
   document.getElementById("Tasks").innerHTML = "";                    //tasklist clearance
   x = 0;                                                              //counter reset
}


function checkall(){                                                   //func to check all chkboxes

   document.getElementById('chk').style.display = "none";              //mark-done btn toggle invisible
   document.getElementById('unchk').style.display = "inline-flex";     //mark-undone btn toggle visible
   //document.getElementById('Tasks').style.opacity = "50%";           //div opacity down to 50%
   var ele = document.getElementsByName('chk');                        //taking the checkboxes in acc
   for(var i=0; i<ele.length; i++){
      if(ele[i].type=='checkbox')
         ele[i].checked=true;                                          //all chkbox checked syntax
   }           
}


function uncheckall(){                                                 //func to uncheck all chkboxes

   document.getElementById('unchk').style.display = "none";            //mark-undone btn toogle invisible
   document.getElementById('chk').style.display = "inline-flex";       //mark-done button toggle visible
   //document.getElementById('Tasks').style.opacity = "100%";          //div opacity back to 100%
   var ele = document.getElementsByName('chk');                        //taking the checkboxes in acc
   for(var i=0; i<ele.length; i++){  
      if(ele[i].type=='checkbox')  
            ele[i].checked=false;                                      //all chkbox unchecked syntax
   }
}


