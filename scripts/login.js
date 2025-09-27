

// URL base de tu API desplegada en Render
const API_URL = "https://riconada-s1-bastosthomas-ruedasergio-i61e.onrender.com/api/v1";

document.addEventListener('DOMContentLoaded', () => {

    const loginForm = document.getElementById('formulariologin'); 
    
    if (loginForm) {
        loginForm.addEventListener('submit', handleLogin);
    } else {
        console.error("Error: No se encontró el formulario de Login. Verifica el ID 'formulariologin'.");
    }
});

async function handleLogin(event) {
    event.preventDefault(); 


    const email = document.getElementById('correo').value; 
    const password = document.getElementById('contraseña').value; 

    if (!email || !password) {
        console.log('Error: Por favor, ingresa tu correo y contraseña.');
        return;
    }

    try {
        const response = await fetch(`${API_URL}/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password })
        });

        const data = await response.json();

        if (response.ok) {
            
            const token = data.token;
            localStorage.setItem('jwtToken', token); 
            
            console.log('Inicio de sesión exitoso. Token guardado.');
            window.location.href = 'principal.html'; 
        } else {
            
            const errorMessage = data.message || data.msg || 'Credenciales inválidas.';
            console.error('Error al iniciar sesión:', errorMessage);
            
        }
    } catch (error) {
        console.error('Error de red:', error);
    }
}