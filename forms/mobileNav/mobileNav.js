
hmbMenu.onclick=function(s){
  if (typeof(s) == "object"){ 
    return 
  } else { 
  hmbMenu.value = s  
 switch(s) {
  case "Login":
    ChangeForm(Login)
    break;
  case "Describe You":
    ChangeForm(describeYou)
    break;
  case "Dessert Voting":
    ChangeForm(dessertVoting)
    break;
  case "Fav Exercises":
    ChangeForm(favExercises)
    break;
  default:
  return
}
}
}




/*
Name all controls, using 3 letter acronyms for first three letters. 
Only appStudio controls can be used in the app for interaction with the user, I & O (Input and Output). No alerts, popups, prompts, etc. 
Use template literals for all output. 
Add the form names to the hamburger menu control at design time. Use these names: 
Note: you may have to abbreviate some of these.  
Login
Dessert Voting
Describe You
Favorite Exercises (or AB Favorite Exercises)
Complete the hmbMenu.onclick event handler by using a switch statement so it takes the choice the 
user made and takes them to the corresponding form.
Hint: ChangeForm() will come in handy here.....  

Fourth Program
hamburger menu with choices:
Login
Favorite Foods
Dessert Voting
Describe Me
Favorite Exercises (or AB Favorite Exercises)
hmbMenu.onclick event handler with switch statement using user's choice - takes them to the corresponding form.

*/