rdoDescribe.onclick=function(){
  let userChoice = $("input[name=rdoDescribe]:checked").prop("value")
  lblDescribe.hidden = false
  lblDescribe.textContent = (`I would agree that you are a '${userChoice.toLowerCase()}' person too!`)
}

btnNextPage2.onclick=function(){
  ChangeForm(favExercises)
}