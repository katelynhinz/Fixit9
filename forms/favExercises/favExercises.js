var exercises = ["pullups","pushups","situps","jogging","plank","curls"]
var coreExercises = ["situps","plank"]

favExercises.onshow=function(){
drpDesserts.clear()   
    for (i = 0; i <= exercises.length - 1; i++) 
        selExercises.addItem(exercises[i])
    for (i = 0; i <= coreExercises.length - 1; i++) 
        selExercises.addItem(coreExercises[i])
}

selExercises.onfocusout=function(){

}


/*Basic Scenario:
Complete the favExercises.onshow event handler so it populates the select list from both the 'exercises' and
'coreExercises' arrays when the form loads/starts. 
Add a button so when the user has chosen their two exercises, it shows them in a control that uses this format: 
        You chose situps and pushups. 
Add a button on the right bottom corner of the form that, when clicked, goes to the next page - the mobileNav page. 

Name all controls, using 3 letter acronyms for first three letters. 
Only appStudio controls can be used in the app for interaction with the user, and for I & O 
(Input and Output). No alerts, popups, prompts, etc. 
Use template literals for all output. 
Complete the favExercises.onshow event handler so it populates the select list from both the 'exercises' and
'coreExercises' arrays when the form loads/starts. 
Add a button so when the user has chosen their two exercises, it shows them in a control
this output in this format: 
        You chose situps and planks - those are the two core exercises. 
OR 
       You did not pick the two core exercises. 
Add a button on the right bottom corner of the form that, when clicked, goes to the next page - the mobileNav page. 

*/

btnDone.onclick=function(){
  // text returned is an array of the text choices made by the user
  let message = "You chose " 
  for (i = 0; i <= selExercises.text.length - 1; i++)
    message = message + selExercises.text[0] + " and " + selExercises.text[1]
    // message = message.slice(0, -2);
    lblFav.hidden = false
    lblFav.textContent = message
}


btnNextPage3.onclick=function(){
  ChangeForm(mobileNav)
}
