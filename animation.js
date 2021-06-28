 
import { inValue ,Navv,inputAmount,addIncomeAndExpense, inputTitle,goBtn,Expenses,expenseBotton,addButton,incomeBotton,Income} from './app.js';

// DOM variables
const loadingDisplay = document.querySelector(".preloader");
const Body = document.querySelector(".body");
const Header = document.querySelector("#header");
const balanceCon = document.querySelector(".balanceandtotalcontainer");
const Nav = document.querySelector(".navandbutton");

;
// DOM variables ending


//onload animations
function toDisplayValuesOnLoad(){
  window.addEventListener('load', () => {
    setTimeout(() => {
      gsap.to(loadingDisplay, { opacity: 0, visibility: 'hidden', ease: 'easeOut', duration: 1, })
    }, 1600)
  })
  
  setTimeout(() => {
  
    gsap.to(Header, { marginLeft: 0, duration: 2 })
    setTimeout(() => {
      gsap.to(Nav, { marginBottom: 0, duration: 1 })
    }, 1700)
    setTimeout(() => {
      gsap.to(balanceCon, { duration: 1.1, opacity: 1 })
    }, 1900)
  
    setTimeout(() => {
      gsap.to(addButton, { duration: 1, marginBottom: '21vh' })
    }, 2810)
  
  }, 2200)

}
//onload animations ending
toDisplayValuesOnLoad()


//addbotton animations
function forAddButtonAnimation(){
  setTimeout(() => {
  addButton.addEventListener('click', () => {
    setTimeout(() => {
      //display income and expense botton
      gsap.to(expenseBotton, { duration: 0.8, visibility: 'visible', marginLeft: '-50px' })
      gsap.to(incomeBotton, { duration: 0.8, visibility: 'visible', marginLeft: '60px' })
      if (expenseBotton.style.visibility == "visible") {
        gsap.to(expenseBotton, { duration: 0.8, marginLeft: '0px' })
        gsap.to(incomeBotton, { duration: 0.8, marginLeft: '0px' })

        setTimeout(() => {
          gsap.to(expenseBotton, { duration: 1, visibility: 'hidden' })
          gsap.to(incomeBotton, { duration: 1, visibility: 'hidden' })
        }, 0o750)
      }
 }, 0o000)
  })
}, 3000);
}
forAddButtonAnimation()
//addbotton animations ending



function displayExpenseAndIncomeDiv(){
  //onclick addexpense botton 
expenseBotton.addEventListener
('click', () => {


  gsap.to(expenseBotton, { duration: 0.8, marginLeft: '0px' })
  gsap.to(incomeBotton, { duration: 0.8, marginLeft: '0px' })

  setTimeout(() => {
    gsap.to(expenseBotton, { duration: .02, visibility: 'hidden' })
    gsap.to(incomeBotton, { duration: .02, visibility: 'hidden' })

    gsap.to(addButton, { duration: 0.4, marginBottom: '0' })
    setTimeout(() => {
      Nav.style.animation = 'navupdown 0.2s ease'

      setTimeout(()=>{
        Nav.style.animation= 'none'
     },1000)
      inputTitle.style.visibility='visible';
inputTitle.style.position= 'relative'


inputAmount.style.visibility='hidden'
inputAmount.style.position='absolute'
      
      gsap.to(addButton, { duration: 0, visibility: 'hidden' })
      gsap.to(Expenses, { duration: 0, visibility: 'hidden' })
      gsap.to(Income, { duration: 0, visibility: 'hidden' })

      Expenses.remove()
      addIncomeAndExpense.remove()
      Income.remove()
      inValue.style.visibility='visible'

     
    }, 0o500)
  }, 0o750)

})
//onclick addexpense botton ending


//onclick addincome botton 
incomeBotton.addEventListener
  ('click', () => {


    gsap.to(expenseBotton, { duration: 0.8, marginLeft: '0px' })
    gsap.to(incomeBotton, { duration: 0.8, marginLeft: '0px' })
  
    setTimeout(() => {
      gsap.to(expenseBotton, { duration: .02, visibility: 'hidden' })
      gsap.to(incomeBotton, { duration: .02, visibility: 'hidden' })
  
      gsap.to(addButton, { duration: 0.4, marginBottom: '0' })
      setTimeout(() => {
        Nav.style.animation = 'navupdown 0.2s ease'

        setTimeout(()=>{
          Nav.style.animation= 'none'
       },1000)
        inputTitle.style.visibility='visible';
  inputTitle.style.position= 'relative'
  
  
  inputAmount.style.visibility='hidden'
  inputAmount.style.position='absolute'
        
        gsap.to(addButton, { duration: 0, visibility: 'hidden' })
        gsap.to(Expenses, { duration: 0, visibility: 'hidden' })
        gsap.to(Income, { duration: 0, visibility: 'hidden' })
  
        Expenses.remove()
        addIncomeAndExpense.remove()
        Income.remove()
        inValue.style.visibility='visible'
  
       
      }, 0o500)
    }, 0o750)

  })
//onclick addincome botton ending
}
displayExpenseAndIncomeDiv()



//go button
function goButtonAnimation(){
  goBtn.addEventListener('touchstart',()=>{
  
  goBtn.style.boxShadow ='-1px -2px 5px 0.1px rgba(255, 255, 255, 0.249),4px 3px 7px 0.1px rgba(14, 13, 13, 0.249)'
});

goBtn.addEventListener('touchend',()=>{
  
  goBtn.style.boxShadow = '-2px -2px 5px rgba(255, 255, 255, 0.549),4px 3px 7px 1px rgba(14, 13, 13, 0.549)'
  
})
}
goButtonAnimation()

// input behaviour
/*
inputTitle.addEventListener('focus',()=>{
Nav.style.position = 'relative'  
Body.style.position = 'relative' 

})
inputTitle.addEventListener('blur',()=>{
  
})
// input behaviour ending*/




//go back to default display

 function goBackToDefaultNavStateAnimation(){
    
   Nav.style.animation = 'navupdown 0.3s ease'
 inValue.style.visibility='hidden'
 inputAmount.style.visibility = 'hidden'
 Navv.appendChild(Expenses)
 Navv.appendChild(addIncomeAndExpense)
 Navv.appendChild(Income)
  gsap.to(addButton, { duration: 0, visibility: 'visible' })
  gsap.to(Expenses, { duration: 0, visibility: 'visible' })
  gsap.to(Income, { duration: 0, visibility: 'visible' })

  setTimeout(()=>{
    gsap.to(addButton, { duration: 1, marginBottom: '21vh'  })

  },0o500)

 
  setTimeout(()=>{
     Nav.style.animation= 'none'
  },1000)
 
  
}

  
 

export {goBackToDefaultNavStateAnimation,Nav}