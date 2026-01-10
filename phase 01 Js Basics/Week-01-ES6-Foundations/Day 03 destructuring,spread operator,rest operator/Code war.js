console.log("WAR ZONE 1: THE REDUX STATE UPDATE 🛡️");
// Scenario: React/Redux mein hum purani state ko kabhi change (mutate) nahi karte. Hum hamesha Copy banate hain aur copy mein change karte hain.

// Problem: Tumhare paas aik complex object hai initialState. Tumhein aik naya object newState banana hai jismein:

// loading ko false karna hai.

// user ke andar preferences ke andar theme ko "dark" karna hai.

// Baqi sab kuch waisa hi rehna chahiye.
const initialState = {
    loading: true,
    error: null,
    user: {
        id: 1,
        name: "Sharjeel",
        preferences: {
            theme: "light",
            notifications: true
        }
    }
};
const newState={...initialState,loading:false,user:{...initialState.user,preferences:{...initialState.user.preferences,theme:"dark"}}};
console.log(newState);

console.log("WAR ZONE 2: THE `UNLIMITED` PARAMETERS ♾️");
// Problem: Aik function sumAll likho jo:

// Pehla argument multiplier le.

// Uske baad jitne marzi numbers le (using Rest Operator ...).

// Return kare: Un sab numbers ka Sum multiplied by multiplier.

// Example Usage: sumAll(2, 10, 20, 30) -> Logic: (10+20+30) * 2 -> Result: 120.

// Constraint: ...args (Rest) use karna zaroori hai. reduce method (jo tumne subah seekha tha) use karke sum nikalna.
const sumAll=(multiplier,...numbers)=>{
    return numbers.reduce((sum,price)=>{
        return sum+price;
    })*multiplier;
}
console.log(sumAll(3,23,22,12,21));
console.log("WAR ZONE 3: THE `PROFILE MAKER` (FINAL BOSS) 👹");

const createProfile=(userName, email , ...extraDetails)=>{
    return {
        id:Date.now(),
        email,userName,details:extraDetails
    }
};
console.log(createProfile("sharjeel","shargeelarshad619@gmail.com","insert whatever you want"));
