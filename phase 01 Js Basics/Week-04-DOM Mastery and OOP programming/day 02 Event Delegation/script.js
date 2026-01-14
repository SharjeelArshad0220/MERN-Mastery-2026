// const list=document.getElementById("color-list");
// list.addEventListener('click',(event)=>{
// if (event.target.matches('li')) {
//     const activeItem=document.querySelector('.selected');
//     if (activeItem) {
//         activeItem.classList.remove('selected','blue');
//     }
//     const clickedElement=event.target;
//     clickedElement.classList.add("blue","selected");
//     console.log(`user clicked:`,clickedElement);
//     const selectedList=document.getElementById("t1-output");
//     selectedList.innerText="Selected:";
//     selectedList.innerText+=clickedElement.innerText;
// }
// });
// // tier 2
// const actionBox=document.getElementById("message-box");
// if (actionBox) {
// actionBox.addEventListener('click',(event)=>{
//     const targeted=event.target;
//     if (targeted) {
//     if (targeted.classList.contains("btn-reply")) {
//         console.log("Opening reply input...");
//         alert("Opening reply input...");
//     }
//     if (targeted.classList.contains("btn-copy")) {
//         console.log("Copied to clipboard");
//         alert("Copied to clipboard");
//     }
//     if (targeted.classList.contains('btn-delete')) {
//         console.log("Message deleted");
//         alert("Message deleted");
//     }  
//     }
// });

// }
// if(!actionBox){
//     console.log("box hi nhi mila")
// }

// Event bubbling example
// const grandparent = document.querySelector('.grandparent');
// const parent = document.querySelector('.parent');
// const child = document.querySelector('.child');

// child.addEventListener('click', (event) => {
// event.stopPropagation();
//   console.log('Child clicked!');
// });

// parent.addEventListener('click', () => {
//   console.log('Parent clicked!');
// });

// grandparent.addEventListener('click', () => {
//   console.log('Grandparent clicked!');
// });
// function addPost(){
// const currentId=feed.lastElementChild?parseInt(feed.lastElementChild.dataset.id):0;
// const newPost = document.createElement('div');
// newPost.className = 'post';
// newPost.dataset.id=currentId+1;
// const post_text="hey there";//this can be updated on user input using an input tag or a prompt function
// newPost.innerHTML = `
//     <h3>Post Title 1</h3>
//     <h3>${post_text}</h3>
//             <button class="del-btn">❌</button>
//             <button class="like-btn">Like</button>
//             <button class="share-btn">Share</button>
// `;
// feed.appendChild(newPost);
// }
// const feed=document.getElementById("feed");
// feed.addEventListener('click',(event)=>{
//     const target=event.target;
//     const post=target.closest('.post');
//     if(!post)
//         return;

//     if (target.classList.contains('like-btn')) {
//         // const post=target.closest('.post');
//     const postId=post.dataset.id;
//     console.log("post with id "+postId+" is liked.");
//     target.innerText='Liked ❤️';
//     alert(`post ${postId} is liked`);
//     }
//     else if (target.classList.contains('share-btn')) {
//         // const post=target.closest('.post');
//     const postId=post.dataset.id;
//     console.log(`post ${postId} Shared`);
//     target.innerText='Shared';
//     alert(`Post ${postId} shared`);
//     }
//    else if (target.classList.contains('del-btn')) {
//         // const post=target.closest('.post');
//         // post?
//         post.remove()
//         // :alert('didnt got the post.');
//     }
//     else{
//         post.classList.add("yellow");
//     }
    
// })
// const addBtn=document.getElementById('add-post');
// addBtn.addEventListener('click',(event)=>{
//     addPost();
// })

//daily coding task 
// Initial data
let restaurants = [
  // { id: 1, name: 'Bundu Khan', dish: 'Tikka', price: 800, likes: 0 },
  // { id: 2, name: 'Howdy', dish: 'Burger', price: 600, likes: 0 },
  // { id: 3, name: 'Jade', dish: 'Pasta', price: 1200, likes: 0 }
];

// Render posts function
function renderPosts() {
  const feed = document.getElementById('feed');
  feed.innerHTML = restaurants.map(r =>`
    <div class="post" data-id="${r.id}">
      <h3>${r.name} - ${r.dish}</h3>
      <p>Price: Rs. ${r.price}</p>
      <button class="like-btn">👍 Like (${r.likes})</button>
      <button class="order-btn">🛒 Order</button>
      <button class="delete-btn">🗑️ Delete</button>
    </div>
  `).join('');
}
// Add new post dynamically
document.getElementById('add-post').addEventListener('click', () => {
  const newPost = {
    id: Date.now(),
    name: 'New Restaurant',
    dish: 'Special Dish',
    price: Math.floor(Math.random() * 1000) + 500,
    likes: 0
  };
  restaurants.push(newPost);
  renderPosts();
  // No need to re-attach listeners! Delegation handles it ✨
});

// Event delegation (SINGLE listener)
const feed = document.getElementById('feed');
feed.addEventListener('click', (event) => {
  const target = event.target;
  const post = target.closest('.post');
  if (!post) {console.log("did'nt got that post.")
    return;} // Clicked outside post
  
  const id = Number(post.dataset.id);
  
  // Handle like
  if (target.classList.contains('like-btn')) {
    restaurants=restaurants.map((restaurant)=>{
      if (restaurant.id===id) {
        restaurant.likes++;
        return restaurant
      }
      return restaurant;
    });
  renderPosts();
}
  // Handle order
  else if (target.classList.contains('order-btn')) {
    for (const r of restaurants) {
      if (r.id===id) {
        alert(`Restaurant: ${r.name}\nPrice: ${r.price}`);
        break;
      }
    }
  }
  // Handle delete
  else if (target.classList.contains('delete-btn')) {
    // console.log('deleted',id)
    restaurants=restaurants.filter(r=>r.id!==id);
    renderPosts();
  }
  else{
    post.classList.contains('selected')?post.classList.remove('selected'):post.classList.add('selected');
  }
});

