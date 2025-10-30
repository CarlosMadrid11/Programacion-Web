let info=document.querySelector("#info");
const obtenerUbicacion = () => {
    navigator.geolocation.getCurrentPosition(function(position){
        const lat=position.coords.latitude;
        const lon=position.coords.longitude;
        info.textContent='Latitud: '+lat+' - longitud: '+lon;
        notificar();
    },function(error){
        console.log('Error: '+error.message);
    })
}
let boton=document.querySelector("#ubicacion");
boton.addEventListener("click", () => {
    obtenerUbicacion();
});

//Notificaciones
// const notificar = () => {
//     Notification.requestPermission();
//     .then(permission => {
//         if(permission == "granted"){
//             new Notification("Coordenadas obtenidas");
//         }
//     })
// }

