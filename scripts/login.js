const API_URL = "https://riconada-s1-bastosthomas-ruedasergio.onrender.com/api/v1";


document.getElementById("formulariologin").addEventListener("submit", async function(e){
    e.preventDefault();
  
  const email = document.getElementById("correo").value;
  const password = document.getElementById ("Contraseña").value;
  try {
    const response = await fetch(`${API_URL}/auth/login`,{
    method: "POST",
    headers:{
      "Content-Type": "application/json"
    },
    body: JSON.stringify({email,password})
    });
  if(!response.ok){
    throw new Error("Login fallido");
  }
  const data = await response.json();
  const token = data.token;
  
  localStorage.setItem("token",token);
  window.location.href = "principal.html";
  } catch (err) {
    console.error("Error al iniciar sesion:",err)
    alert("credenciales invalidas o error del servidor");
  }
  
  });



  let inputUserName = '';
  let inputPassword = '';

let apiData = {
    user: 'user',
    pass: 'klksflbsklf'
}

  if (inputUserName === apiData.user && inputPassword === apiData) {
    
  }