console.log("---Experiment no. one:loop leakage----");
// Case A : var behaya
for (var i=0;i<10;i++)
{
    console.log("iteration for var");
}
console.log("checking if the loop variable var (behaya) is still alive or not ->",i);

// // Case B : let shareef wala
for (let j=0;j<10;j++){
    console.log("main shareef hu(let loop iterations)");
} 
try{
    console.log("check if the loop variable let(shareef) is still alive or not ->",j);
}
catch(error)
{
console.log("Error agaya! matlab j access nhi ho skta acha ha yeh variable loop k liye acha ha var nhi acha");
}
// acha mentor yeh note mn tumhare liye likh rha hu k mujhy is snippet mn kya smjh aya aur kya nhi smjh aya firstly yeh pta chala k var use krne se mn baad mn dobara loop k bahar bhi ussi variable ki wajah se tang hounga like agr mn ne do hi loop chalay hn aur aik i use kr k chala du to let se ho jayega but var pichly walay variable ki value e nhi chalaorayga 

// kiun na kr k dekhen 
// chlo krte hn 
// var wala case 
for (var loop1=0;loop1<3;loop1++){
    console.log(loop1);
}
for(var loop1=3;loop1>=0;loop1--){
    console.log(loop1);
}
// let wala case 
for (let loop2=0;loop2<3;loop2++){
    console.log(loop2);
}
for(let loop2=3;loop2>=0;loop2--){
    console.log(loop2);
}
// yeh kya baat hui yar mn ne check kiya ha dono e chal gaye i think experiment fail ho gaya acha chlo kher output mn first loop 0 se 3 tak chala aur second 3 se 0 tak counting thi 0123321 aur phir yeh nichy walay loops mn iterations toh hui thi but same lemme check again han 4 dafa 0 aur 4 dafa 3 bta rha ha console acha logging krne ka faida toh hua abb loop dekhty hn humare var walay loops mn logic jo lagaya ha woh sahi ja rha ha var redefine ho kr naya loop bhi sahi chala rha ha aur rahi baat let walay loops ki toh isny loop2 ki assigned value 0,3 e 4 dafa kiun print kr di issy increment decrement krni chahiye thi arrrayyyyyyyy yarrr mn ne abhi dekha meri galti thi mn ne code copy paste kiya tha var walay loops ka but increment decrement mn loop2 nhi kiya loop1 e tha change kr diya ha dobara check krty hn oye meraconsole pagal ho gaya 😂🤣 isny values itni zyada print kr di jiska koi hisaab e nhi boht sari aur infinite loop mn phans gaya pr kiun dekhty hn yr iski mujhy samjh nhi aa rahi aisa kiun ho rha ha pr itna pta chal gaya ha k var jo ha woh loop k baad khatam nhi hota aur problem krta ha aur let jo ha woh loop k sath e khatam bhi ho jata ha ha aur bahar access ka toh sawal e paida nhi hota 
// ======================================================
console.log("\n--- EXPERIMENT 2: TDZ CRASH ---");
// chlo abb krte hn temporal dead zone mn mahool ko wavy 
try{
        console.log("apna future dekhhny ki koshish krte hn");
    console.log(myFuture);
    // future abhi aaya hi nhi toh dekhengy kese error aa jayega
    let myFuture="Engineer at systems limited";
}
catch(mera_error){
    // acha mn ne tukka mara tha k yaha bracket mn error ka variable aa rha ha kiun k tumny code snippet mn issy ussy tarah use kiya hua tha kher chlo km kren 
    console.log("CRASH!! Error msg:",mera_error.message)
}
// yeh mazay ka tha aur simple bhi matlab k agr humny variable baad mn declare kiya toh error ayega
// ===========================================================
console.log("\n--- EXPERIMENT 3: HOISTING GHOST ---");
console.log("Trying to access 'variable' before declaration...");
console.log("Value is:", variable);
var variable= "Purana Zamana";
console.log("Ab value hai:", variable);
