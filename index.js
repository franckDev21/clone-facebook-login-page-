let btns = Array.from(document.querySelectorAll('.form__btn'))
let form = document.querySelector('.form')

if(form && btns.length > 0){
  btns.forEach(btn => btn.addEventListener('click',e => {
    e.preventDefault()

    window.alert("😊 Hi👋, Thanks for visiting this website ❤")
  }))
}