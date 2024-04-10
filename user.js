const Login = async (userName, password) => {
    var users = await fetch("./userDetails.json").then((response) => {
        return response.json();
        });

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            var user=users.users.find((user)=>{
                user.name===userName && user.pwd===password;
            })
            if (user) {
                resolve(user);
                alert("User logged in Succesfully")
        } else {
            reject(new Error("Invalid  password"));
        }
    },1000);
});

};


document.getElementById("submitForm").addEventListener("sumbit", async (e) => {
    e.preventDefault();
    let userName = document.getElementById('user').value;
    let password = document.getElementById('pwd').value;
    try {
        let user = await  Login(userName, password);
        console.log("User logged in:", user);
    }catch (error) {
    console.error("Login error:", error.message);
}
});



function updateuser(){
    var username = document.getElementById('suser').value;
    var mailid = document.getElementById('smail').value;
    var password = document.getElementById('spwd').value;
    var newuser={
        "name":username,
        "email":mailid,
        "password":password
    }
    users=[...users,newuser];
   for(var key in users){
    console.log(users[key]);
   }
}
