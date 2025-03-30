// app.js (Módulo de interacción con el usuario)

import { registrarDestino, mostrarItinerario } from "./planificador.js";

registrarDestino("CDMX", "2025-04-15", "avion", 4);
registrarDestino("Guadalajara", "2025-06-20", "tren", 2);
registrarDestino("Cancún", "2025-08-10", "autobus", 5);

console.log(mostrarItinerario());
