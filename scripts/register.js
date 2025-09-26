 const API_URL = "https://riconada-s1-bastosthomas-ruedasergio.onrender.com/api/v1";

 document.getElementById("formularioRegistro").addEventListener("submit", async function(e){
    e.preventDefault();
  
    const email = document.getElementById("correoRegistro").value;
    const password = document.getElementById("contraseñaRegistro").value;
  
    try {
      const response = await fetch(`${API_URL}/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ email, password })
      });
  
      if (!response.ok) {
        throw new Error("Registro fallido");
      }
  
      const data = await response.json();
      alert("Usuario registrado en la BBDD ");
  
      window.location.href = "index.html"; 
    } catch (err) {
      console.error("Error al registrar usuario:", err);
      alert("Error al registrar, intenta de nuevo");
    }
  });