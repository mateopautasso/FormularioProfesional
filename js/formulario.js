"use strict";

const form = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');
const grupoUsuario = document.getElementById('grupo__usuario');
const grupoNombre = document.getElementById('grupo__nombre');
const grupoPassword = document.getElementById('grupo__password');
const grupoRepeatpassword = document.getElementById('grupo__repeatpassword');
const grupoCorreo = document.getElementById('grupo__correo');
const grupoTelefono = document.getElementById('grupo__telefono');
const inputTerminosCondiciones = document.getElementById('input-terminos')

const expresiones = {
	usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	password: /^.{4,12}$/, // 4 a 12 digitos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,14}$/ // 7 a 14 numeros.
}

let campos = {
	usuario: false,
	nombre: false,
	password: false,
	repeatPassword: false,
	correo: false,
	telefono: false
}

const validarFormulario = (e)=>{
	switch (e.target.name) {
		case 'usuario':
			function validarUsuario(){
				const iconInput = document.querySelector('.grupo__usuario i');
				const error = document.querySelector('.grupo__usuario .formulario__error');

				if(expresiones.usuario.test(e.target.value)) {
					error.innerHTML = ""
					iconInput.classList.remove('fa-circle-xmark');
					iconInput.classList.add('fa-circle-check');
					grupoUsuario.classList.remove('formulario__grupo--incorrecto');
					grupoUsuario.classList.add('formulario__grupo--correcto');
					campos.usuario = true;
				} else {
					error.innerHTML = "El nombre de usuario debe contener"
					iconInput.classList.remove('fa-circle-check');
					iconInput.classList.add('fa-circle-xmark');
					grupoUsuario.classList.remove('formulario__grupo--correcto');
					grupoUsuario.classList.add('formulario__grupo--incorrecto');
					campos.usuario = false;
				}
			}
			validarUsuario();
			break;

		case 'nombre':
			function validarNombre(){
				const iconInput = document.querySelector('.grupo__nombre i');
				const error = document.querySelector('.grupo__nombre .formulario__error');

				if(expresiones.nombre.test(e.target.value)) {
					error.innerHTML = ""
					iconInput.classList.remove('fa-circle-xmark');
					iconInput.classList.add('fa-circle-check');
					grupoNombre.classList.remove('formulario__grupo--incorrecto');
					grupoNombre.classList.add('formulario__grupo--correcto');
					campos.nombre = true;
				} else {
					error.innerHTML = ""
					iconInput.classList.remove('fa-circle-check');
					iconInput.classList.add('fa-circle-xmark');
					grupoNombre.classList.remove('formulario__grupo--correcto');
					grupoNombre.classList.add('formulario__grupo--incorrecto');
					campos.nombre = false;
				}
			}
			validarNombre();
			break;

		case 'password':
			function validarPassword(){
				const iconInput = document.querySelector('.grupo__password i');
				const error = document.querySelector('.grupo__password .formulario__error');

				if(expresiones.password.test(e.target.value)) {
					error.innerHTML = ""
					iconInput.classList.remove('fa-circle-xmark');
					iconInput.classList.add('fa-circle-check');
					grupoPassword.classList.remove('formulario__grupo--incorrecto');
					grupoPassword.classList.add('formulario__grupo--correcto');
					campos.password = true;
				} else {
					error.innerHTML = ""
					iconInput.classList.remove('fa-circle-check');
					iconInput.classList.add('fa-circle-xmark');
					grupoPassword.classList.remove('formulario__grupo--correcto');
					grupoPassword.classList.add('formulario__grupo--incorrecto');
					campos.password = false;
				}
			}
			validarPassword();
			break;

		case 'repeatpassword':
			function validarRepeatPassword(){
				const iconInput = document.querySelector('.grupo__repeatpassword i');
				const error = document.querySelector('.grupo__repeatpassword .formulario__error');
				const password = document.querySelector('.grupo__password .formulario__input');

				if(expresiones.password.test(e.target.value) && e.target.value === password.value) {
					error.innerHTML = ""
					iconInput.classList.remove('fa-circle-xmark');
					iconInput.classList.add('fa-circle-check');
					grupoRepeatpassword.classList.remove('formulario__grupo--incorrecto');
					grupoRepeatpassword.classList.add('formulario__grupo--correcto');
					campos.repeatPassword = true;
				} else {
					error.innerHTML = ""
					iconInput.classList.remove('fa-circle-check');
					iconInput.classList.add('fa-circle-xmark');
					grupoRepeatpassword.classList.remove('formulario__grupo--correcto');
					grupoRepeatpassword.classList.add('formulario__grupo--incorrecto');
					campos.repeatPassword = false;
				}
			}
			validarRepeatPassword();
			break;

		case 'correo':
			function validarCorreo(){
				const iconInput = document.querySelector('.grupo__correo i');
				const error = document.querySelector('.grupo__correo .formulario__error');

				if(expresiones.correo.test(e.target.value)) {
					error.innerHTML = ""
					iconInput.classList.remove('fa-circle-xmark');
					iconInput.classList.add('fa-circle-check');
					grupoCorreo.classList.remove('formulario__grupo--incorrecto');
					grupoCorreo.classList.add('formulario__grupo--correcto');
					campos.correo = true;
				} else {
					error.innerHTML = ""
					iconInput.classList.remove('fa-circle-check');
					iconInput.classList.add('fa-circle-xmark');
					grupoCorreo.classList.remove('formulario__grupo--correcto');
					grupoCorreo.classList.add('formulario__grupo--incorrecto');
					campos.correo = false;
				}
			}
			validarCorreo();
			break;

		case 'telefono':
			function validarTelefono(){
				const iconInput = document.querySelector('.grupo__telefono i');
				const error = document.querySelector('.grupo__telefono .formulario__error');

				if(expresiones.telefono.test(e.target.value)) {
					error.innerHTML = ""
					iconInput.classList.remove('fa-circle-xmark');
					iconInput.classList.add('fa-circle-check');
					grupoTelefono.classList.remove('formulario__grupo--incorrecto');
					grupoTelefono.classList.add('formulario__grupo--correcto');
					campos.telefono = true;
				} else {
					error.innerHTML = ""
					iconInput.classList.remove('fa-circle-check');
					iconInput.classList.add('fa-circle-xmark');
					grupoTelefono.classList.remove('formulario__grupo--correcto');
					grupoTelefono.classList.add('formulario__grupo--incorrecto');
					campos.telefono = false;
				}
			}
			validarTelefono();
			break;
	}
}

inputs.forEach((input)=>{
    input.addEventListener('keyup', validarFormulario)
    input.addEventListener('blur', validarFormulario)
})


form.addEventListener('submit', (e)=>{
    e.preventDefault()

	let terminosCondiciones = inputTerminosCondiciones.checked;
	let camposValidados = Object.values(campos);

	return new Promise((res, rej) => {
		if(	camposValidados[0] === true &&
			camposValidados[1] === true &&
			camposValidados[2] === true &&
			camposValidados[3] === true &&
			camposValidados[4] === true  ) {
				res(terminosCondiciones)
			} else {
				rej ('Campos Incompletos')
				document.querySelector('.grupo__submit .formulario__submit-error').classList.remove('hiddenElement')
				document.querySelector('.grupo__submit .formulario__msgEnviado').classList.add('hiddenElement')
				document.querySelector('.grupo__submit .formulario__msgIncompleto').innerHTML = "<b>Error: Por favor rellene el formulario correctamente</b>"
			}

	}).then((res)=>{
		if(res) {

			//Consulta de usuario en BD:
			const validacionEnBD = async ()=>{
				let request = await fetch('https://sheet.best/api/sheets/41087ecb-5f48-4297-8668-1d8f92ae328e')
				let response = await request.json();
				let arrayUserBD = await response;
				let userInBD = arrayUserBD.some((user)=>{
					return user.Correo === document.getElementById('input-correo').value;
				})
				if(userInBD) {
					return true
				} else {
					return false
				}
			}
			const usuarioEnBD = validacionEnBD()

			//Envío de datos:
			usuarioEnBD.then((res)=>{
				console.log(res)
				if(res) {
					console.log('Usuario ya registrado')
					document.querySelector('.grupo__submit .formulario__submit-error').classList.remove('hiddenElement')
					document.querySelector('.grupo__submit .formulario__msgIncompleto').innerHTML = "<b>Error: El correo que ingresó ya se encuentra registrado</b>"
				} else {
					fetch('https://sheet.best/api/sheets/41087ecb-5f48-4297-8668-1d8f92ae328e', {
						method: 'POST',
						headers: {
							'Content-Type' : 'application/json'
						},
						body: JSON.stringify({
							"Usuario": `${document.getElementById('input-usuario').value}`,
							"Nombre":`${document.getElementById('input-nombre').value}`,
							"Correo":`${document.getElementById('input-correo').value}`,
							"Celular": `${document.getElementById('input-telefono').value}`,
							"Password": `${document.getElementById('input-password').value}`,
							"RpPassword": `${document.getElementById('input-repeatpassword').value}`
						})
					})
					// alert('Felicitaciones! campos completos')
					document.querySelector('.grupo__submit .formulario__submit-error').style.display = "none"
					document.querySelector('.grupo__submit .formulario__msgEnviado').classList.remove('hiddenElement')
				}
			})
		} else {
			// alert('Terminos y condiciones no aceptadas')
			document.querySelector('.grupo__submit .formulario__submit-error').classList.remove('hiddenElement')
			document.querySelector('.grupo__submit .formulario__msgEnviado').classList.add('hiddenElement')
			document.querySelector('.grupo__submit .formulario__msgIncompleto').innerHTML = "<b>Error: Se necesitan aceptar los términos y condiciones para continuar</b>"
		}
	})
	.catch((rej)=>{
		// alert(rej)
	})
})
