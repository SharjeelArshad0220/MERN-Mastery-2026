// ==========================================
// PART 2: THE REAL CODE (YOUR TASK SOLUTION)
// ==========================================
//Ai ka code
console.log("🚀 Code Starting...");

// 1. SAVE STRING
//my practice 
localStorage.setItem('city','Lahore');
const city =localStorage.getItem('city');
console.log(`this is coming from browser's pocket ${city}`);
localStorage.setItem("drink","chai");
const drink=localStorage.getItem("drink");
console.log(`i would like to have ${drink}`);
const laptop = { brand: "Dell", ram: "16GB" };
localStorage.setItem("machine",JSON.stringify(laptop));
const getBack=localStorage.getItem("machine");
JSON.parse(getBack);
console.log(getBack);

//Task 2
const settings = { theme: "Dark Mode", volume: 80 };
localStorage.setItem("config",JSON.stringify(settings));
let config=localStorage.getItem("config");
config=JSON.parse(config);
config.theme==="Dark Mode"?console.log("Lights out! 🌑"):console.log("Too bright! ☀️");

// --- EXAMPLE CODE (Isay ghour se dekho) ---

async function bringBiryani() {
    console.log("⏳ Waiting for friends to get Biryani...");

    const friend1 = Promise.resolve("✅Biryani laya");
    const friend2 = Promise.reject("police ne pakr liya"); // Yeh fail hoga
    const friend3 = Promise.resolve("✅Raita laya");

    // Notice: await laga hai, lekin try-catch zaroori nahi
    const results = await Promise.allSettled([friend1,friend2,friend3]);
    // 'results' ab aik Array hai. Humein loop laga kar check karna parega.
    results.forEach((item) => {
        
        // CHECK: Kya ye pass hua?
        if (item.status === "fulfilled") {
            console.log("Mubarak ho:", item.value); // Pass wale ka DATA 'value' mein hota hai
        } 
        // CHECK: Agar fail hua
        else {
            console.log("Afsos:", item.reason); // Fail wale ka ERROR 'reason' mein hota hai
        }
    });
}

//exam code 
const getStockA = () => new Promise(r => setTimeout(() => r("📈 A: 100Rs"), 1000));
const getStockB = () => new Promise((_, r) => setTimeout(() => r("📉 B: Failed"), 1000)); // Fails
const getStockC = () => new Promise(r => setTimeout(() => r("📊 C: 500Rs"), 500));

async function stocksHandler() {
   
      const response=await Promise.allSettled([getStockA(),getStockB]);
    
    response.forEach((obj)=>{
        let count=0
        if (obj.status==="fulfilled") {
           count++;
        }
        console.log(`Total fetches successful:${count}`);
    });
    const responseC=await getStockC();
    try {
       if (!responseC.ok) {
          console.log(`server didn't gave data`);
       }
      const data= response.json();
        console.log(`the responses resolved are :${count}`);
    } catch (err) {
       console.log("Server nhi mila")
    }
}
stocksHandler();
