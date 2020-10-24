var dessertList = ['Chocolate Cake','Cream Brulee','Cheesecake',
                  'Keyline Pie','Cherry Cobbler','Chocolate Chip Cookies']

dessertVoting.onshow=function(){
    drpDesserts.clear()   
    for (i = 0; i <= dessertList.length - 1; i++) 
        drpDesserts.addItem(dessertList[i])
}


drpDesserts.onclick=function(s){
    if (typeof(s) == "object"){ 
    return                    
   } else { 
    drpDesserts.value = s  
   lblResult.hidden = false
   lblResult.textContent = (`You picked ${s} -that is a great choice!`)
   }
}


/*
First Program
form named dessertVoting.
Used dropdown the list.
Used array to populate dropdown.
Finished event handler code for dessertVoting.onshow event.
> it populates the dropdown control with desserts from the array
Finished event handler code for drpDesserts.onclick event.
> it identifies the dessert chosen and outputs message in label with format:       You picked Cherry Pie -that is a great choice!
Button on right bottom that goes to describeYou form when clicked. 
*/
/*
Scenario: The user will be shown several desserts. The user can pick the one they like best, and a message will appear.

Requirements
Name all controls, using 3 letter acronyms for first three letters. 
Only appStudio controls can be used in the app for interaction with the user, I & O (Input and Output). No alerts, popups, prompts, etc. 
Use template literals for all output. 
Use a dropdown control for the list of desserts. 
Use the array of desserts to populate the dropdown.
Finish the event handler code for the dessertVoting.onshow event. The code must populate the dropdown control with 
all of the desserts in the dessertList array. 
Finish the event handler code for the drpDesserts.onclick event. The code must identify the dessert the user 
chose and output a  message in a label control that uses this format: 
      You picked Cherry Pie -that is a great choice!
Add a button on the right bottom corner of the form that, when clicked, goes to the next page - the describeYou page. 
*/


btnNextPage.onclick=function(){
  ChangeForm(describeYou)
}
