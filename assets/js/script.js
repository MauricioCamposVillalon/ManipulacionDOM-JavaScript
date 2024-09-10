const cuerpoTablas = document.getElementById('cuerpo-tabla');

var tareas = [
    { tarea: "Pintar la fachada de la casa" },
    { tarea: "Comprar comida para el perro" },
    { tarea: "Pagar la tarjeta de crédito" }
]

let ind =0

carga()



let magrega = document.querySelector('#btnagrega');
let estado = false
console.log(magrega)

magrega.addEventListener('click', () => {
    if (estado == false) {
        document.getElementById("formulario").style.display = "contents";
        estado = true;
    } else {
        document.getElementById("formulario").style.display = "none";
        estado = false;
    }


});



let formulario = document.getElementById("foagrega");
formulario.addEventListener("submit", function (event) {
    event.preventDefault();
    let ingresoTarea = document.getElementById("nuevaTarea").value;
    tareas.push({ tarea: ingresoTarea });
    console.log(tareas);
    ind += 1;
    cuerpoTablas.innerHTML += `<tr><td scope="col">${ingresoTarea}</td><td scope="col"><button type="button" class="btn btn-danger" onclick="eliminar1(this)" >Finalizar</button></td><tr>
        
            `;
    document.getElementById("nuevaTarea").value ="";
    document.getElementById("formulario").style.display = "none";
    estado = false;
    
});

//let eliminar = document.getElementById("cuerpo-tabla");

//console.log(eliminar)

function eliminar1(Id) {
  
    let fila = Id.parentNode.parentNode;
    let tabla = document.getElementById("tabla-tareas"); 
    tabla.deleteRow(fila.rowIndex); // con rowIndex me posiciono en la fila a borrar y con DeleteRow elimino esta fila
  
  };


function carga(){
    
    tareas.forEach(tare => {
        let x = tare.tarea;
        
        console.log(x)
        console.log(ind)
        cuerpoTablas.innerHTML += `<tr><td scope="col">${x}</td><td scope="col"><button type="button" class="btn btn-danger" onclick="eliminar1(this)" >Finalizar</button></td><tr>
        
            `;
        ind += 1;
    });

    
    
        
        
    
}

