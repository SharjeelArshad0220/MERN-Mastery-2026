// task one 
// const box = document.getElementById("start-box");
// box.parentElement.classList.add("black", "radius", "shadow");
// box.children[1].classList.add("green", "radius", "textDecor");
// box.nextElementSibling.children[0].classList.add("grey", "radius");
// box.nextElementSibling.children[2].classList.add("grey", "radius");
// box.parentElement.children[1].classList.add("blue", "textDecor", "radius");//player-list
// box.parentElement.children[2].classList.add("yellow", "textDecor", "radius");//Submit button
// task two 
// const start = document.getElementById('target-span');
// const firstParent=start.parentElement.parentElement;
// firstParent.classList.add("green", "radius", "textDecor")
// const grandParent=firstParent.parentElement
// grandParent.classList.add("yellow", "radius", "shadow","container","textDecor");
// const cardC=grandParent.children[2];
// cardC.classList.add("black", "radius");
// cardC.children[1].innerText = "SOLD";
// task 3
// const btn = document.getElementById('reply-btn');
// const parentBox=btn.parentElement.parentElement.parentElement;
// btn.addEventListener('click',()=>{
//     parentBox.children[2].classList.remove("hidden");}
// )
// task 4
// document.getElementById("card-container").addEventListener('click',(event)=>{if(event.target.classList.contains("delete-btn")){const btn =event.target;
//     btn.closest(".card").classList.add("hidden")}});
// // task 5
// // Dummy Data Generator (Isay copy kar lo)
// const products = Array.from({ length: 100 }, (_, i) => `Product Item #${i + 1}`);
// const tray=document.createDocumentFragment();
// const list=document.getElementById("inventory");
// for (let i = 0; i < products.length; i++) {
//     const element = document.createElement("li");
//     i%2==0?element.classList.add("blue","textDecor"):element.classList.add("grey","textDecor")
//     element.textContent=products[i];
//     tray.appendChild(element);
// }
// list.appendChild(tray);
// task 06
// const list=document.getElementById("email-list");
// if (list) {
// list.addEventListener('click',(event)=>{
//     if(event.target.matches('li[data-provider="gmail"]')){
//         const member=event.target.nextElementSibling;
//         member?member.classList.add("gold"):alert("end of list");
//     }
// })
// }
// Practice drills
// // TIER 1 (30 min): Direct Application
// // Task 1: Button se parent card tak pohanchna
// const btn = document.querySelector('.buy-btn');
// const card = btn.parentElement; // Code likho

// // Task 2: Card ke andar heading dhundna
// const heading = card.firstElementChild; // Code likho

// // Task 3: Heading ke baad wala paragraph dhundna
// const price = heading.nextElementSibling; // Code likho
// ==========
// TIER 2 (45 min): Integration with Array Methods
// / Task: List of comments, har ek ke saath delete button
// Jab delete pe click, us comment ka sibling count display karo
// const comments = document.querySelectorAll('.comment');
// comments.forEach(comment => {
//   const deleteBtn = comment.querySelector('.delete-btn');
//   deleteBtn.addEventListener('click', () => {
//     alert(`${(deleteBtn.closest("#comments-container").children.length)-1}`);
//     comment.remove();
//   });
// });
// ===========
// TIER 3: The Final Boss (Reddit Style Nesting)
const commentBox=document.getElementById("thread-container");
commentBox.addEventListener('click',(event)=>{
    if (event.target.matches('.reply-btn')) {
        const replyBtn=event.target;
        const comment=replyBtn.closest(".comment");
        let level=parseInt(comment.getAttribute("data-level"))||1;
        if (level<3) { 
        level++;
        const newComment=document.createElement("div");
    newComment.innerHTML=`    <div class="nested-comment comment" data-level="${level}" style="border-left: 2px solid #ccc; padding: 10px; margin: 10px;">
        <p><strong>OP:</strong> Who is the best cricketer?</p>
        <div class="actions">
            <button class="reply-btn">Reply</button>
            <button class="delete-btn">Delete</button>
        </div>
        </div>`;
    comment.appendChild(newComment);
    }
    else{
        alert("Bas bhai! 3 levels se aage nahi ja sakte.")
    }
    }
    if(event.target.matches('.delete-btn')){
        const comment=event.target.closest(".comment");
        comment.remove();
    }
})
