// Función para calcular la edad
function calcularEdad(fechaNacimiento) {
    const fechaActual = new Date();
    const diferencia = fechaActual - fechaNacimiento;
    const edad = Math.floor(diferencia / (1000 * 60 * 60 * 24 * 365.25));
    return edad;
}
 
// Función para actualizar la edad cada año
function actualizarEdad() {
    const fechaNacimiento = new Date('2003-05-06'); // Cambia esta fecha por tu fecha de nacimiento
    const edad = calcularEdad(fechaNacimiento);
    document.getElementById('span-edad').textContent = edad + ' años';
}
 
// Actualizar la edad al cargar la página
window.onload = function() {
    actualizarEdad();
    // Actualizar la edad cada año
    setInterval(actualizarEdad, 1000 * 60 * 60 * 24 * 365); // Actualizar cada año
};
function descargarArchivo() {
    var url = './CV/Curriculum Vitae_MichellCruz.pdf';
    var link = document.createElement('a');
    link.href = url;
    link.download = 'CV.pdf';
  
    document.body.appendChild(link);
  
    link.click();
  
    document.body.removeChild(link);
  }
  
  document.getElementById('downloadButton').addEventListener('click', descargarArchivo);
