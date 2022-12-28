import { useEffect, useState } from "react"

 const useToken = (email)=>{
    const [token, setToken] = useState("");
    console.log(email)
    useEffect(()=>{
        if(email){
            fetch(`http://localhost:5000/jwt?email=${email}`)
                .then(res=>res.json())
                .then(data =>{
                    if (data.sendToken) {
                        localStorage.setItem("sendToken", data.sendToken);
                        setToken(data.sendToken);
                      }
                })
                .catch(err =>console.log(err))
            
        }
            
    },[email])
    return [token];
}
export default useToken;