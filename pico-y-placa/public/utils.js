// Función para verificar si una hora está en uno de los rangos especificados
function estaEnRango(horaStr) {
    const hora = new Date(`1970-01-01T${horaStr}:00Z`).getHours() + new Date(`1970-01-01T${horaStr}:00Z`).getMinutes() / 60;

    const rango1Inicio = 6;    // 6 AM
    const rango1Fin = 9;       // 9 AM
    const rango2Inicio = 16;   // 4 PM
    const rango2Fin = 20;      // 8 PM

    return (hora >= rango1Inicio && hora <= rango1Fin) ||
           (hora >= rango2Inicio && hora <= rango2Fin);
}

// Función para determinar si un vehículo puede circular basado en su placa, fecha y hora
function puedeCircular(placa, fecha, hora) {
    const ultimoDigito = parseInt(placa.slice(-1));
    const diaSemana = new Date(fecha).getDay();
    const atiempo = estaEnRango(hora);

    const restricciones = {
        1: [1, 2], // Lunes
        2: [3, 4], // Martes
        3: [5, 6], // Miércoles
        4: [7, 8], // Jueves
        5: [9, 0], // Viernes
        6: [],     // Sábado (sin restricciones)
        0: []      // Domingo (sin restricciones)
    };

    return atiempo && !restricciones[diaSemana].includes(ultimoDigito);
}

module.exports = { puedeCircular };
