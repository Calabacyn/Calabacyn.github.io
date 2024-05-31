document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.form-register');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const email = document.getElementById('correo').value;
        const password = document.getElementById('contraseña').value;

        // Validar las credenciales
        if (email === 'correo@gmail.com' && password === 'contraseña') {
            // Redirigir a otra página en caso de éxito
            window.location.href = '../principal/index.html'; 
        } else {
            alert('Correo o contraseña incorrectos.');
        }
    });
});
