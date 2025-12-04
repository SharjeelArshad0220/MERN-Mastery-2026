const apiResponse = {
  statusCode: 200,
  data: {
    user: {
      id: 77,
      email: "jane.doe@example.com",
      status: "active"
    },
    token: "xyz123abc"
  },
  timestamp: 1700000000
};
// Your Challenge: Write a single line of destructuring code to extract the following pieces of information into variables:

// The email (which is nested inside user, which is nested inside data).

// The token (which is inside data).

// The statusCode (at the top level).

// You must skip the user's id and status, and you must skip the timestamp.
const {statusCode,data:{user:{email},token}}=apiResponse;
console.log(statusCode,email,token);

// ===============================
const cartItem = {
    id: 101,
    product: "Mechanical Keyboard",
    price: 5000,
    quantity: 1
};

const cartItem2={
    ...cartItem,
    quantity:2
};
console.log(cartItem2);