//SE BORRARON LOS COMENTARIOS INICIALES
var registros = [];
var contador = 0;
//SE BORRARON LAS CREDENCIALES HARDCODEADAS

//SE BORRÓ LA CONFIGURACIÓN INICIAL HARDCODEADA 

//SE BORRARON LOGS PELIGROSOS

//SE BORRARON LOS COMENTARIOS DE LO QUE HACE CADA FUNCIÓN
function inicializar() {
    console.log("Inicializando sistema de registro...");
    //SE BORRARON LOGS PELIGROSOS E INNECESARIOS
    
    document.getElementById('registroForm').addEventListener('submit', function(e) {
        e.preventDefault();
        guardarRegistro();
    });
    
    console.log("Sistema listo. Esperando registros...");
}

//SE BORRARON LOS COMENTARIOS DE LO QUE HACE ESTA FUNCIÓN
function guardarRegistro() {
    console.log("==== GUARDANDO NUEVO REGISTRO ====");
    
    var nombre = document.getElementById('nombre').value;
    var apellido1 = document.getElementById('apellido1').value;
    var apellido2 = document.getElementById('apellido2').value;
    var telefono = document.getElementById('telefono').value;
    var curp = document.getElementById('curp').value;
    var email = document.getElementById('email').value;
    
    //SE BORRARON LOGS PELIGROSOS E INNECESARIOS
    
    if (!validarFormulario(nombre, apellido1, apellido2, telefono, curp, email)) {
        return;
    }
    
    var nuevoRegistro = {
        id: contador++,
        nombre,
        apellido1,
        apellido2,
        nombreCompleto: `${nombre} ${apellido1} ${apellido2}`,
        telefono,
        curp,
        email,
        fechaRegistro: new Date().toISOString(),
        sessionToken: "TOKEN_" + Math.random().toString(36).substring(7)
    };
    //SE BORRARON LOGS PELIGROSOS E INNECESARIOS
    
    registros.push(nuevoRegistro);
    
    agregarFilaTabla(nuevoRegistro);
    
    document.getElementById('registroForm').reset();
    
    //SE BORRARON LOGS PELIGROSOS E INNECESARIOS
    
    enviarAServidor(nuevoRegistro);
}

//SE BORRARON LOS COMENTARIOS DE LO QUE HACE ESTA FUNCIÓN Y CAMBIÓ EL COMO LO HACE
function agregarFilaTabla(registro) {
    const tabla = document.getElementById('tablaRegistros');
    const fila = document.createElement('tr');

    const campos = [
        registro.nombreCompleto,
        registro.telefono,
        registro.curp,
        registro.email
    ];

    campos.forEach(texto => {
        const td = document.createElement('td');
        td.textContent = texto;
        fila.appendChild(td);
    });

    tabla.appendChild(fila);
}

//SE VALIDA MEJOR
function validarFormulario(nombre, apellido1, apellido2, telefono, curp, email) {
    var patronNombre = /^[a-záéíóúñüA-ZÁÉÍÓÚÑÜ0-9]{3,}$/;
    var patronApellido = /^[a-záéíóúñüA-ZÁÉÍÓÚÑÜ\s]{2,}$/;
    var patronTelefono = /^[0-9]{10}$/;
    var patronCurp = /^[A-Z0-9]{18}$/;
    var patronEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (nombre.trim() === "") {
        alert("NOMBRE: Campo obligatorio. Ingresa tu nombre.");
        return false;
    }
    
    if (!patronNombre.test(nombre)) {
        alert("NOMBRE: Debe contener mínimo 3 caracteres. Solo se permiten letras (A-Z, a-z, á, é, í, ó, ú, ñ) y números (0-9).");
        return false;
    }
    
    if (apellido1.trim() === "") {
        alert("PRIMER APELLIDO: Campo obligatorio. Ingresa tu primer apellido.");
        return false;
    }
    
    if (!patronApellido.test(apellido1)) {
        alert("PRIMER APELLIDO: Debe contener mínimo 2 caracteres. Solo se permiten letras (A-Z, a-z, á, é, í, ó, ú, ñ) y espacios.");
        return false;
    }
    
    if (apellido2.trim() === "") {
        alert("SEGUNDO APELLIDO: Campo obligatorio. Ingresa tu segundo apellido.");
        return false;
    }
    
    if (!patronApellido.test(apellido2)) {
        alert("SEGUNDO APELLIDO: Debe contener mínimo 2 caracteres. Solo se permiten letras (A-Z, a-z, á, é, í, ó, ú, ñ) y espacios.");
        return false;
    }
    
    if (telefono.trim() === "") {
        alert("TELÉFONO: Campo obligatorio. Ingresa tu número de teléfono.");
        return false;
    }
    
    if (!patronTelefono.test(telefono)) {
        alert("TELÉFONO: Debe contener exactamente 10 dígitos. Solo se permiten números (0-9).");
        return false;
    }
    
    if (curp.trim() === "") {
        alert("CURP: Campo obligatorio. Ingresa tu CURP.");
        return false;
    }
    
    if (!patronCurp.test(curp)) {
        alert("CURP: Debe contener exactamente 18 caracteres en mayúsculas. Solo se permiten letras mayúsculas (A-Z) y números (0-9).");
        return false;
    }
    
    if (email.trim() === "") {
        alert("CORREO ELECTRÓNICO: Campo obligatorio. Ingresa tu correo.");
        return false;
    }
    
    if (!patronEmail.test(email)) {
        alert("CORREO ELECTRÓNICO: Formato inválido. Debe ser: usuario@dominio.com");
        return false;
    }
    
    return true;
}

//SE BORRARON LOS COMENTARIOS DE LO QUE HACE ESTA FUNCIÓN
function enviarAServidor(datos) {   
    //SE BORRARON LOS VALORES HARDCODEADOS  
    
    //SE BORRARON LOGS PELIGROSOS
    
    setTimeout(function() {
        console.log("Respuesta del servidor: 200 OK");
        console.log("==================================");
    }, 1000);
}

    //SE BORRARON LAS FUNCIONES COMENTADAS

//SE CAMBIÓ LA INFORMACIÓN MOSTRADA EN EL DIAGNÓSTICO
function diagnosticoSistema() {
  console.table({
    idioma: navigator.language,
    online: navigator.onLine
  });
}

// Ejecutar diagnóstico al cargar
diagnosticoSistema();


//SE BORRARON LAS FUNCIONES COMENTADAS

var ultimoRegistro = null;

window.addEventListener('DOMContentLoaded', function() {
    console.log("DOM cargado. Iniciando aplicación...");
    inicializar();
    //SE BORRARON LOGS PELIGROSOS E INNECESARIOS
});

//SE BORRARON LAS FUNCIONES COMENTADAS

console.log("Script cargado completamente");