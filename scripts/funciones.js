const formulario = document.querySelector('#formulario')
const patronCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


formulario.addEventListener('submit', function(e) {
    e.preventDefault();

    const nombre = document.querySelector('#nombre-completo');
    const correo = document.querySelector('#correo');
    const telefono = document.querySelector('#telefono');
    const tipoConsulta = document.querySelector('#tipo-consulta');
    const mensaje = document.querySelector('#mensaje');
    const mensajeConfirmacion = document.querySelector('#mensaje-confirmacion')

    let formularioValido = true;
    let mensajeError = '';

    if(nombre.value.trim() === '') {
        nombre.classList.add('campo-error');
        formularioValido = false;
        if(!mensajeError) {
            mensajeError = 'Error, el nombre es obligatorio.'
        }
    } else {
        nombre.classList.remove('campo-error');
    }

    if(!patronCorreo.test(correo.value.trim())) {
        correo.classList.add('campo-error');
        formularioValido = false;
    } else {
        correo.classList.remove('campo-error')
    }

    if(telefono.value.trim() === '' || telefono.value.length < 9) {
        telefono.classList.add('campo-error')
        formularioValido = false;
        if(!mensajeError) {
            mensajeError = 'Error, el numero de telefono es obligatorio y debe tener al menos 8 digitos.'
        }
    } else {
        telefono.classList.remove('campo-error')
    }

    if(tipoConsulta.value === '') {
        tipoConsulta.classList.add('campo-error')
        formularioValido = false;
        if(!mensajeError) {
            mensajeError = 'Error, el tipo de consulta es obligatorio.'
        }
    } else {
        tipoConsulta.classList.remove('campo-error')
    }


    if(mensaje.value.trim() === '') {
        mensaje.classList.add('campo-error')
        formularioValido = false;
        if(!mensajeError) {
            mensajeError = 'Error, el mensaje debe ser obligatorio.'
        }
    } else {
        mensaje.classList.remove('campo-error');
    }

    if(formularioValido) {
        mensajeConfirmacion.textContent = 'Formulacion enviado con exito'
    } else {
        mensajeConfirmacion.textContent = mensajeError;
    }
})