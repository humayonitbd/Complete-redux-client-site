// export const sendUsers = (name, email) => {
//   const userInfor = {
//     userName: name,
//     userEmail: email,
//     role: "user",
//   };
//   fetch("https://complete-redux-server-site.vercel.app/users", {
//     method: "POST",
//     headers: {
//       "content-type": "application/json",
//     },
//     body: JSON.stringify(userInfor),
//   })
//     .then((res) => res.json())
//     .then((data) => {
//       console.log(data);
//     })
//     .catch((err) => console.log(err));
// };
