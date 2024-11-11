function mostrarMensaje() {
  const nombre = document.getElementById("nombre").value;
  const apellido = document.getElementById("apellido").value;
  const fechaNacimiento = new Date(
    document.getElementById("fechaNacimiento").value
  );
  const hoy = new Date();
  const diferenciaTiempo = hoy - fechaNacimiento;
  const diasVividos = Math.floor(diferenciaTiempo / (1000 * 60 * 60 * 24));

  alert(`Bienvenido ${nombre} ${apellido}, has vivido  ${diasVividos} días.`);
}
