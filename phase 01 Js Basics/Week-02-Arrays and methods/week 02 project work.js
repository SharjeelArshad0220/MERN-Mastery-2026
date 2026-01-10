//Project work starts here 
let expenses=[];
const addExpense=(desc, amount)=>{expenses.push({id:Date.now()+Math.random(),description :desc,
amount: amount
 });
     console.log(`Expense added:${desc}`);                            }

const deleteExpense=(id)=>{expenses =expenses.filter((expense) =>expense.id!==id);
     console.log(`Expense deleted`);}

function showSummary()
{
  const summaryExpenses=expenses.map((expense) =>`ID:${expense.id}|${expense.description} - ${expense.amount}PKR\n`).join("");
  const totalExpenses=expenses.reduce((acc,obj)=>
    acc+obj.amount
    ,0);
  console.log(summaryExpenses+"----------------\n",totalExpenses);
}

// 1. Kuch kharchay add karo
addExpense("Chaye", 50);
addExpense("Petrol", 500);
addExpense("Burger", 300);

// 2. Summary dekho (Total 850 hona chahiye)
console.log("\n--- Initial List ---");
showSummary();

// 3. Koi ek item delete karo (Manually ID copy mat karna, bas logic check karna)
// Filhal test ke liye array ke pehle item ki ID utha lena code mein
deleteExpense(expenses[0].id);

// 4. Dobara Summary dekho (Kam hona chahiye)
console.log("\n--- After Deletion ---");
showSummary();