

const submitbtn = document.querySelector("#submit")
function submitbutton(){
    console.log(submitbtn.value)


}



let toggle = document.querySelector('.toggle') 
toggle.addEventListener('click', () => {
  document.documentElement.classList.toggle('dark-theme')
})


