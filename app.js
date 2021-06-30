import { goBackToDefaultNavStateAnimation,Nav,} from './animation.js'


//DOM elements

const balanceValue = document.querySelector(".balance-number"); 
const incomeValue = document.querySelector(".income-number");

const incomeContainer = document.querySelector(".income-container");
const expenseContainer = document.querySelector(".expense-container");

const Navv = document.querySelector(".nav");
const inValue = document.createElement('div');
inValue.classList.add('inval')
inValue.style.overflow='hidden'




const inputTitle = document.createElement('input')

inputTitle.classList.add('inputtitle');

const inputAmount = document.createElement('input')
inputAmount.classList.add('inputtitle');
inputAmount.type='number'
inputAmount.style.visibility='hidden'
inputAmount.style.position='inherit'

const goBtn = document.createElement('button')
goBtn.innerHTML='GO'

goBtn.classList.add('gobtn')

inValue.appendChild(inputTitle)
inValue.appendChild(inputAmount)
inValue.appendChild(goBtn)
//

const Expenses = document.createElement('div')
Expenses.classList.add('expenses')
const H2 = document.createElement('h2')
H2.innerHTML= 'expenses'
Expenses.appendChild(H2);

const addIncomeAndExpense = document.createElement('div')
addIncomeAndExpense.classList.add('addincomeandexpense')
const expenseBotton = document.createElement('div')
expenseBotton.innerHTML = 'exp'
expenseBotton.classList.add('expensebotton')



const addButton = document.createElement('div');
addButton.classList.add('addbutton')
const Plus = document.createElement('div');
Plus.classList.add('plus')
const plusH4 = document.createElement('h4')
plusH4.innerHTML = '+'
Plus.appendChild(plusH4)
addButton.appendChild(Plus)

const incomeBotton = document.createElement('div')
incomeBotton.innerHTML = 'inc'
incomeBotton.classList.add('incomebotton')

addIncomeAndExpense.appendChild(expenseBotton)
addIncomeAndExpense.appendChild(addButton)
addIncomeAndExpense.appendChild(incomeBotton)

const Income = document.createElement('div')
Income.classList.add('income')
const incomeH2 = document.createElement('h2')
incomeH2.innerHTML= 'income'
Income.appendChild(incomeH2);


Navv.appendChild(inValue)
Navv.appendChild(Expenses)
Navv.appendChild(addIncomeAndExpense)
Navv.appendChild(Income)

//DOM elements




//entry list for all entries
const ENTRY_LIST = []
//entry list for all entries



//verify input if adding expense
expenseBotton.addEventListener('click',()=>{
inputTitle.placeholder='expense';

})

//verify input if adding income
incomeBotton.addEventListener('click',()=>{
    inputTitle.placeholder='income';
    })
//


//function to add title and amount
    function addTitleAndAmount(){

        goBtn.addEventListener('click',()=>{
            //check if input to add expense title has a value
if(inputTitle.value && inputTitle.placeholder =='expense'){
    let expense= {
        id:  "EX" +
        Math.floor((Math.random(0.9, 100) * -232) % 70) +
        Math.random(3).toString(36).substring(9) +
        "SE",
      type: "expense",
      title: "",
      amount: parseFloat(""),

    }

    expense.title = inputTitle.value

    inputTitle.style.visibility='hidden';
    inputTitle.style.position= 'absolute'
    

    inputAmount.style.visibility='visible'
inputAmount.style.position='relative'
inputAmount.placeholder='expense_amount'
inputAmount.focus()
//check if input to add amount for expense has a value
if(inputAmount.value && inputAmount.placeholder =='expense_amount'){

expense.amount= inputAmount.value
ENTRY_LIST.push(expense)
console.log(ENTRY_LIST)
inputTitle.value=''
inputAmount.value=''



addListToPage(expense);
goBackToDefaultNavStateAnimation()


}


}

//check for income values
else if(inputTitle.value && inputTitle.placeholder =='income'){
    let income= {
        id:  "IN" +
        Math.floor((Math.random(0.9, 100) * -232) % 70) +
        Math.random(3).toString(36).substring(9) +
        "ME",
      type: "income",
      title: "",
      amount: parseFloat(""),

    }

   income.title = inputTitle.value

    inputTitle.style.visibility='hidden';
    inputTitle.style.position= 'absolute'
    

    inputAmount.style.visibility='visible'
inputAmount.style.position='relative'
inputAmount.placeholder='income_amount'
inputAmount.focus()
//check if input to add amount for income has a value
if(inputAmount.value && inputAmount.placeholder =='income_amount'){

income.amount= inputAmount.value
ENTRY_LIST.push(income)
console.log(ENTRY_LIST)
inputTitle.value=''
inputAmount.value=''


goBackToDefaultNavStateAnimation()

addListToPage(income);
}
}
        })
}
addTitleAndAmount()
//function to add title and amount ending
function addListToPage(entry){

    const List = `<li class="list">
<div class="titleNamount">
  <input class="title" value='${ entry.title }' disabled='true'>
<h1 class="amount">${entry.amount}</h1> 
</div>
<div class="editNdelete"><svg xmlns="http://www.w3.org/2000/svg" 
  xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" 
  version="1.1" width="25" height="25" x="0" y="0" viewBox="0 0 325 325.37515" 
  style="enable-background:new 0 0 512 512" xml:space="preserve" class="">
  <g><path xmlns="http://www.w3.org/2000/svg" 
    d="m114.6875 284.675781-73.800781-73.800781 178.5-178.5 73.800781 73.800781zm-80.699219-60.800781 67.699219 67.699219-101.5 33.800781zm281.898438-140.300781-12.800781 12.800781-73.898438-73.898438 12.800781-12.800781c12.894531-12.902343 33.804688-12.902343 46.699219 0l27.199219 27.199219c12.800781 12.9375 12.800781 33.765625 0 46.699219zm0 0" fill="#39703a" data-original="#000000" /></g></svg>

    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs=
    "http://svgjs.com/svgjs" version="1.1" width="25" height="25" x="0" y="0" viewBox="0 0 512 512"
     style="enable-background:new 0 0 512 512" xml:space="preserve" ><g><g xmlns="http://www.w3.org/2000/svg">
      <path d="m424 64h-88v-16c0-26.51-21.49-48-48-48h-64c-26.51 0-48 21.49-48 48v16h-88c-22.091 0-40 17.909-40 40v32c0 8.837 7.163 16 16 16h384c8.837 0 16-7.163 16-16v-32c0-22.091-17.909-40-40-40zm-216-16c0-8.82 7.18-16 16-16h64c8.82 0 16 7.18 16 16v16h-96z" fill="#ed0d0d" data-original="#000000" /><path d="m78.364 184c-2.855 0-5.13 2.386-4.994 5.238l13.2 277.042c1.22 25.64 22.28 45.72 47.94 45.72h242.98c25.66 0 46.72-20.08 47.94-45.72l13.2-277.042c.136-2.852-2.139-5.238-4.994-5.238zm241.636 40c0-8.84 7.16-16 16-16s16 7.16 16 16v208c0 8.84-7.16 16-16 16s-16-7.16-16-16zm-80 0c0-8.84 7.16-16 16-16s16 7.16 16 16v208c0 8.84-7.16 16-16 16s-16-7.16-16-16zm-80 0c0-8.84 7.16-16 16-16s16 7.16 16 16v208c0 8.84-7.16 16-16 16s-16-7.16-16-16z"
       fill="#ed0d0d" data-original="#000000" /></g></g></svg>
 </div>
</li>`


let allIncome = calculatedTotal('income',ENTRY_LIST)
let allExpense = calculatedTotal('expense',ENTRY_LIST)
let Balance =  calculateBalance(allIncome,allExpense)

balanceValue.innerHTML = Balance
incomeValue.innerHTML = allIncome

if(entry.type == 'income'){
  incomeContainer.insertAdjacentHTML('afterbegin',List)}
else if(entry.type == 'expense'){
  
  expenseContainer.insertAdjacentHTML('afterbegin',List)}


}

//calculate balance
function calculatedTotal(type,list){
  let sum = 0;
  list.forEach((item) => {
    if (item.type == type) {
      sum += parseFloat(item.amount);
    }
  });
  return sum;
  

}


function calculateBalance(allIncome,allExpense){
  let balance = allIncome-allExpense
  return balance
}
  
window.addEventListener('load',()=>{
  balanceValue.innerHTML = !balanceValue.innerHTML? 0 : allIncome


incomeValue.innerHTML = !incomeValue.innerHTML? 0 : allIncome
})












































export { inValue,incomeContainer,expenseContainer ,Navv,inputAmount,addIncomeAndExpense, inputTitle,goBtn,Expenses,expenseBotton,addButton,incomeBotton,Income};