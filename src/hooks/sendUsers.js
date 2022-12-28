
 export const sendUsers =(name, email)=>{
    const userInfor={
        userName: name,
        userEmail: email,
        role: 'user'
    }
    fetch('http://localhost:5000/users',{
        method:'POST',
        headers:{
            'content-type': 'application/json'
        },
        body: JSON.stringify(userInfor)
    })
    .then(res =>res.json())
    .then(data =>{
        console.log(data)
    })
    .catch(err =>console.log(err))
 }