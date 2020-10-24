/*
Scenario: The user will be select one of the characteristics shown in a list of radio buttons that represents them best. Remember, only one radio button should be able to be chosen. Otherwise checkboxes (for which you can pick more than one) would be used. Then a  message will appear about their choice. 

Requirements
Name all controls, using 3 letter acronyms for first three letters. 
Only appStudio controls can be used in the app for interaction with the user, I & O (Input and Output). No alerts, popups, prompts, etc. 
Use template literals for all output. 
Add radio button(s) to the form under the label and configure them using their properties so they look  like this: 
F11Code2.png
Add event handler code  that shows a message in a label control in this format: 
I would agree that you are a 'trusting' person too!
Add a button on the right bottom corner of the form that, when clicked, goes to the next page - the favExercises page. 
*/


/*
radio button(s) under the label.
Radio button choices stacked: Optimistic, Pessimistic, Trusting, Envious.
event handler code  that shows message in label control using format: 
I would agree that you are a 'trusting' person too!
button on the right bottom corner that goes to favExercises form. 
*/
btnNextPage2.onclick=function(){
  ChangeForm(favExercises)
}


rdoDescribe.onclick=function(){
  let userChoice = $("input[name=rdoDescribe]:checked").prop("value")
  lblDescribe.hidden = false
  lblDescribe.textContent = (`I would agree that you are a '${userChoice.toLowerCase()}' person too!`)
}
