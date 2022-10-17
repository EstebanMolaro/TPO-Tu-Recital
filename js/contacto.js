window.addEventListener("load", ()=>{
    const form = document.querySelector("#formulario")
    const nombre = document.getElementById("nombre")
    const email = document.getElementById("email")
    const mensaje = document.getElementById("mensaje")

    form.addEventListener("submit", (e) => {
        e.preventDefault()
        validaCampos()
    }) 
    
    const validaCampos = () => {
        const nombreValor = nombre.value.trim()
        const emailValor = email.value.trim()
        const mensajeValor = mensaje.value.trim()
        
        if(!nombreValor){
            validaFalla(nombre, "Campo Vacío")
        } else {
            validaOk (nombre)
        }  
        
        if(!emailValor){
            validaFalla(email, 'Campo Vacío')
        }else if(!validaEmail(emailValor)){
            validaFalla(email, 'El email no es válido')
        }else {
            validaOk(email)
        }

        if(!mensajeValor){
            validaFalla(mensaje, 'Campo Vacío')
        } else{validaOk(mensaje)}
    }
    const validaFalla = (input, msje) => {
        const formControl = input.parentElement
        const aviso = formControl.querySelector('p')
        aviso.innerText = msje

        formControl.className = 'form-control falla'
    }
    const validaOk = (input, msje) => {
        const formControl = input.parentElement
        formControl.className = 'form-control Ok'
    } 

    const validaEmail= (email) => {
        return /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/.test(email)
    }
    
})
const btn = document.getElementById('button');
