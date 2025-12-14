
// ## Exercise 1 — Very Easy (Warming up)

// **Task (Hindi):** Ek function banao `afterDelay`

// **Requirements:**
// - Ye function do cheezein lega:
//   1. `time` (milliseconds)
//   2. `callback` function
// - Given `time` ke baad `callback` call kare
// - Callback ke andar `"Callback executed"` print hona chahiye

// **Use case:**
// > “2 second baad ek kaam karna hai”

// **Goal:**
// - Samajhna ki callback delay ke baad kaise execute hota hai
// - Ye `setTimeout` + callback connection hai

function afterDelay(time,cb){
  setTimeout(()=>{
    cb();
  },time)
}
afterDelay(3000,function(){
  console.log("Callback executed");
})


// ## Exercise 2 — Intermediate (Data flow)

// **Task (Hindi):** Ek function banao `getUser`

// **Requirements:**
// - `getUser` `username` lega
// - 1 second ke baad `callback` ko ek object de:
//   - `id`
//   - `username`

// **Then:**
// - Callback ke andar ek aur function call karo `getUserPosts`

// **`getUserPosts` requirements:**
// - `userId` lega
// - 1 second ke baad `callback` ko `posts` ka array de

// **Final output:**
// - User ka `username` print ho
// - Fir uske `posts` print ho

// **Goal:**
// - Samajhna ki ek async ka result next async ko kaise milta hai
// - Callback chaining practice

// ---


function getUser(username, cb) {
  setTimeout(() => {
    cb({ id: 1000, username: "_itz_abd" });
  }, 1000);
}

function getUserPosts(id, cb) {
  setTimeout(() => {
    cb(["Post1", "Post2"]);
  }, 1000);
}

getUser("Abdullah", function (data) {
  console.log(data.username)
  getUserPosts(data.id, function (allposts) {
    console.log(allposts);
  });
});

// ## Exercise 3 — Intermediate (Callback dependency — thoda painful)

// **Task (Hindi):** Teen functions banao:

// 1. `loginUser`
//    - 1 second baad callback ko `user` object de
// 2. `fetchPermissions`
//    - `userId` lega
//    - 1 second baad callback ko `permissions` array de
// 3. `loadDashboard`
//    - `permissions` lega
//    - 1 second baad callback ko `"Dashboard loaded"` bole

// **Flow:**
// - Pehle `loginUser`
// - Uske andar `fetchPermissions`
// - Uske andar `loadDashboard`
// - Final output console mein print ho

// **Goal:**
// - Callback nesting ko feel karna
// - Yehi structure baad mein callback hell banta hai


function loginUser(cb){
  setTimeout(()=>{
    cb({id:1,name:"Abdullah"})
  },1000)
}

function fetchPermissions(id,cb){
  setTimeout(()=>{
    cb(["Read","Write"]);
  },1000)
}
function loadDashboard(permissions,cb){
  setTimeout(()=>{
    cb("The dashboard is loaded");
  },1000)

}
loginUser(function(user){
  fetchPermissions(user.id,function(permissions){
    loadDashboard(permissions,function(msg){
      console.log(msg);
    })
  })
})