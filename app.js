import { goBackToDefaultNavStateAnimation,Nav} from './animation.js'


//DOM elements

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
}
}
        })
}
addTitleAndAmount()
//function to add title and amount ending























































export { inValue ,Navv,inputAmount,addIncomeAndExpense, inputTitle,goBtn,Expenses,expenseBotton,addButton,incomeBotton,Income};