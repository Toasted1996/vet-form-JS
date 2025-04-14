// Este archivo contiene la logica detras del formulario de registro para mascotas
//Se encarga de validar lo datos ingresador por el usuario y ademas los almacena en un arreglo

let datos=[]
const validar = (e) =>{
    //e.preventDefault evita que el formulario se envie, antes de validarlo 
    e.preventDefault();
    //Variable que determina si el formulario es valido o no 
    let formularioValido = true;
    //Capturamos los datos con querySelectorAll, gracias al su clase .form-control
    document.querySelectorAll('.form-control').forEach(item => {
        if(item.value === ''){
            item.classList.add('is-invalid');
            item.classList.remove('is-valid');
            //Si el valor es vacio, el formulario no es valido por lo tanto es false
            formularioValido = false;          
        }else{
            item.classList.remove('is-invalid');
            item.classList.add('is-valid');
        }
    })
    
    if (formularioValido){
        //Si el formulario es valido, se dispara la guardar()
        guardar()
    }else{
        //Si el formulario no esta completo, arroja mensaje de error
        alert('Ingrese los datos requeridos')
    }
}

const guardar=() => {
    let ownerName = document.getElementById('owner-name').value
    let ownerPhone = document.getElementById('owner-phone').value
    let petName = document.getElementById('pet-name').value
    let petType = document.getElementById('pet-type-selector').value
    let petAge = document.getElementById('pet-age').value
    let petVaccinesFile = document.getElementById('pet-vaccines-file').value

    datos.push({
        ownerName: ownerName,
        ownerPhone: ownerPhone,
        petName: petName,
        petType: petType,
        petAge: petAge,
        petVaccinesFile: petVaccinesFile
    })
    console.log(datos)
    
}

const limpiar = () => {
    //Se resetea el formulario para que este vacio
    document.getElementById('vet-form').reset()
    //ejeuta la funion limpiaValidacion para eliminar las clases de validacion 
    limpiaValidacion()
    //Oculta el mensaje de exito si esta visible
    document.getElementById('success-message').style.display('none')
}



//Limpiar el formulario
const limpiaValidacion= () =>{
    document.querySelectorAll('.form-control').forEach(item=>{
        if (item.value === ''){
            item.classList.remove('is-valid')
            item.classList.remove('is-invalid')
        }
    })
}

const verRegistros = () => {
    if(datos.length === 0){
        alert('No existen registros previos')    
    }else{

    }
}