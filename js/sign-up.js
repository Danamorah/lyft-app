// arreglo paises//
var paises = [   
{
nombre: "Chile",
max_digitos: 8,
bandera: "images/CL.png",
prefijo: "+569"
},
{
nombre: "Peru",
max_digitos: 9,
bandera: "images/PE.png",
prefijo: "+011"
},
{
nombre: "Mexico",
max_digitos: 8,
bandera:"images/MX.png",
prefijo: "+52"
},
{
nombre: "Argentina",
max_digitos: 8,
bandera:"images/AR.png",
prefijo: "+524"
}

]

var pais_actual = localStorage.getItem("nombre_pais") || "Chile";
var obj_pais = null;

for (var i = 0; i < paises.length ; i++){
    
    if(paises[i].nombre == pais_actual ){
        obj_pais = paises[i];
        break;
    }   
    
}

//$('#show-name span').html(obj_pais.nombre);
$('#show-name img').attr('src',obj_pais.bandera);
//$('#show-name').html(obj_pais.bandera);
$('#phone_digits').val(obj_pais.prefijo);





///validacion inputs//

function validateForm(){
    var firstName = $('#name').val();
    var lastName = $('#last_name').val();
    var email = $('#email').val();
    
    if (firstname == "" || name.length > 30 ){
        alert("invalid name");
    }
    else if(lastName == "" || lastName.length > 30){
        alert("invalid Lastname")
    }
    else if(email =="" || lastName.length > 50 ){
        alert("invalid email");
    }
}
