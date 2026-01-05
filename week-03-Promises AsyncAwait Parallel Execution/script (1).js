/* -------------------------------------------------
   WEEK 3: ASYNCHRONOUS JAVASCRIPT MASTER LAB
   Student: Sharjeel
   Topics: Promises, Async/Await, Parallel Execution
   -------------------------------------------------
*/

// --- 1. ATM SYSTEM (Basic Promise & Async/Await) ---
const checkBalance = (pin) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (pin === 1234) resolve("Balance: 50,000 PKR");
      else reject("Invalid PIN!");
    }, 2000);
  });
};

async function withdrawMoney(pin) {
  console.log("\n[ATM] Checking balance...");
  try {
    let balance = await checkBalance(pin);
    console.log("[ATM] Success: " + balance);
  } catch (err) {
    console.log("[ATM] Error: " + err);
  }
}

// --- 2. FOOD ORDER SYSTEM (Sequential Execution) ---
const checkStock = (item) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (item === "Biryani") resolve("Biryani in Stock");
      else reject("Out of Stock");
    }, 2000);
  });
};

const processPayment = (amount) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (amount >= 500) resolve("Payment Successful");
      else reject("Minimum order 500 PKR required");
    }, 2000);
  });
};

const assignRider = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Rider Assigned"), 1000);
  });
};

const placeOrder = async (item, amount) => {
  console.log("\n[FoodApp] Placing order...");
  try {
    const stock = await checkStock(item);
    console.log(stock);
    const pay = await processPayment(amount);
    console.log(pay);
    const rider = await assignRider();
    console.log(rider);
    console.log("[FoodApp] Order Delivered!");
  } catch (err) {
    console.log("[FoodApp] Failed: " + err);
  }
};

// --- 3. SOCIAL DASHBOARD (Parallel Execution) ---
const fetchFollowers = () => {
  return new Promise((resolve) => {
    setTimeout(() => { resolve("10k Followers") }, 2000);
  });
};

const fetchPosts = () => {
  return new Promise((resolve) => {
    setTimeout(() => { resolve("50 Posts") }, 1000);
  });
};

const fetchLikes = () => {
  return new Promise((resolve) => {
    setTimeout(() => { resolve("1M Likes") }, 3000);
  });
};

const showDashboard = async () => {
  console.time("Total Time"); // Timer start
  
  try {
    // Teeno ko ek sath fire kiya
    const promises = [fetchFollowers(), fetchPosts(), fetchLikes()];
    
    // Destructuring: Results ko asani se alag alag variables mein nikal liya
    const [followers, posts, likes] = await Promise.all(promises);
    
    console.log(`Followers: ${followers}`);
    console.log(`Posts: ${posts}`);
    console.log(`Likes: ${likes}`);
    
  } catch (err) {
    console.log("Error loading dashboard: " + err);
  }

  console.timeEnd("Total Time");
  }
//--- TEST RUNS ---
withdrawMoney(1234);
placeOrder("Biryani", 600);
showDashboard();

// Api usage practice fetch functions control 
//Example code by Ai
// Example: Getting Weather of Lahore
async function getLahoreWeather() {
    try {
        // 1. Sending the request
        const response = await fetch('https://api.example.com/weather/lahore');
        
        // 2. Checking if the "waiter" actually found the kitchen
        if (!response.ok) 
         { console.log(`fetch was unsuccessful`);
return}
        // 3. Converting "Plate" to "Bite-sized" data
        const data = await response.json();
        
        console.log("Current Temp in Lahore: " + data.temp);
    } catch (error) {
        console.log("Problem: " + error.message);
    }
}
getLahoreWeather();

async function babyTask() {
   try {
      const response=await fetch('https://jsonplaceholder.typicode.com/posts/1');
     if (!response.ok) {
        console.log("Error occurred while bringing data")
     return ;
     }
       const unpack =await response.json();
       console.log("the data is arrived and unpacked here is your data:",unpack.title);
     }
   catch (err) {
      console.log(`we got an internet error so the fetch process failed the reason:${err}`);
   }
}
babyTask();

async function fetchUsers() {
   try {
      const response=await fetch('https://jsonplaceholder.typicode.com/users');
     if (!response.ok) {
    console.log(`users ka data nhi mila`);
       return;
     }
     const userData=await response.json();
     const userFound=userData.find((user)=> user.id===5);
     const siteInfo=userFound?userFound.website:"no website available"
console.log(`User 5 ki website yeh ha :[${siteInfo}]`);
   } 
   catch (err) {
      console.log(`bharu internet toh theek kr le${err}`);
     return;
   }
}
fetchUsers();

//Tier 3 practice Task
async function tier_3_Task() {
   try {
      const response =await fetch("https://jsonplaceholder.typicode.com/todos");
     if (!response.ok) {
        console.log(`Data nhi ska boss raste mn pathar thy data girr gaya 😂😔😭`);
     }
     const todos=await response.json();
     const data=todos.filter((item) =>!item.completed &&    item.id>100).map((item) => { const{title,id}=item
      return`\nTask title:
      ${title}\nTask id:${id}`
      } ).join("");
     console.log(`Tasks after 100:${data}`);
   } catch (err) {
      console.log(`Network gaya bhar mn.`);
   }
}
tier_3_Task();

// Dummy Helpers (Inko mat chairna)
const getUser = () => new Promise(r => setTimeout(() => r({ id: 5, name: "Sharjeel" }), 1000));
const getPosts = (userId) => new Promise(r => setTimeout(() => r([{ postId: 101, title: "Js Guide" }]), 1000));
const getComments = (postId) => new Promise(r => setTimeout(() => r(["Nice post!", "Good work"]), 1000));

// --- TUMHARA KAAM YAHAN HAI ---
async function runTheChain() {
    console.log("🚂 Train start ho gayi...");

    try {
  const user = await getUser();
      //yahan mn data accuracy cgeck nhi lga raha kiun k Promises apny code k hi hn 
      const posts=await getPosts(user.id);
      // Step 2: User ki ID nikal kar Posts lao
        // const posts = ... ?
//Same here getComments will be provided by posts.id
      const comments=await getComments(posts.id)
        // Step 3: Pehli post ki ID nikal kar Comments lao
        // const comments = ... ?

        console.log("Final Output: ", comments);
        
    } catch (error) {
        console.log("Chain toot gayi!", error);
    }
}

runTheChain();


//now abb real jung
async function realWorldChain() {
    console.log("🌍 Real API Train starting...");

    try {
        // --- STEP 1: Get User ---
        console.log("Step 1: User data fetching...");
      const responseOfUser= await fetch('https://jsonplaceholder.typicode.com/users/1');
      if (!responseOfUser.ok) {
         console.log(`server data nhi de rha thappar mara usny mujhy....😭`);
      }
      const userData=await responseOfUser.json();
  const userId=userData.id;
        // --- STEP 2: Get Posts of that User ---
        console.log("Step 2: Posts fetching for User ID...");
        const responseOfpost=await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
      if (!responseOfpost.ok) {console.log(`server data nhi de rha thappar mara usny mujhy....😭`);
      }
      const postsArray=await responseOfpost.json();
        // 3. IMPORTANT: Ye Array ayegi. Iska PEHLA item (index 0) uthao aur uski 'id' nikalo.
        const postId=postsArray[0].id;
        // --- STEP 3: Get Comments of that Post ---
        console.log("Step 3: Comments fetching for Post ID...");
       const responseOfComments =await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`);
      if (!responseOfComments.ok) {
console.log(`server data nhi de rha thappar mara usny mujhy....😭`);
      }
      const comments = await responseOfComments.json();
      const firstCommentEmail=comments[0].email
      // --- FINAL STEP: Show Output ---
        // Pehle comment ka email address console mein dikhao.
        console.log("🎉 Final Result - First Commenter Email: ",firstCommentEmail);

    } catch (error) {
        console.log("❌ Chain toot gayi! Wajah: ", error);
    }
}

realWorldChain();

//local storage practice block
// --- 🚨 JUGAAD: FAKE BROWSER STORAGE FOR REPLIT 🚨 ---
// (Interview mein yeh mat likhna, yeh sirf practice ke liye hai)
if (typeof localStorage === "undefined" || localStorage === null) {
  var localStorage = {
    _data: {},
    setItem: function(k, v) { this._data[k] = String(v); },
    getItem: function(k) { return this._data.hasOwnProperty(k) ? this._data[k] : null; },
    removeItem: function(k) { delete this._data[k]; },
    clear: function() { this._data = {}; }
  };
}
// --------------------------------------------------------
