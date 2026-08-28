const formulario = document.querySelector('#formulario')
const patronCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


formulario.addEventListener('submit', function(e) {
    e.preventDefault();

    const nombre = document.querySelector('#nombre-completo');
    const correo = document.querySelector('#correo');
    const telefono = document.querySelector('#telefono');
    const tipoConsulta = document.querySelector('#tipo-consulta');
    const mensaje = document.querySelector('#mensaje');
    let formularioValido = true;

    if(nombre.value.trim() === '') {
        nombre.classList.add('campo-error');
        formularioValido = false;
    } else {
        nombre.classList.remove('campo-error');
    }

    if(!patronCorreo.test(correo.value.trim())) {
        correo.classList.add('campo-error');
        formularioValido = false;
    } else {
        correo.classList.remove('campo-error')
    }

    if(telefono.value.trim() === '') {
        telefono.classList.add('campo-error')
        formularioValido = false;
    } else {
        telefono.classList.remove('campo-error')
    }

    if(tipoConsulta.value === '') {
        tipoConsulta.classList.add('campo-error')
        formularioValido = false;
    } else {
        tipoConsulta.classList.remove('campo-error')
    }


    if(mensaje.value.trim() === '') {
        mensaje.classList.add('campo-error')
        formularioValido = false;
    } else {
        mensaje.classList.remove('campo-error');
    }

    if(formularioValido) {
        document.querySelector('#mensaje-confirmacion').textContent = 'Formulario enviado con exito';
    }
})