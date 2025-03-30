//Módulo de lógica de viajes

const viajes = [];
const tarifas = {
  avion: 200,
  autobus: 50,
  tren: 80,
};
const cambioDolar = 20; // Tipo de cambio

export const registrarDestino = (destino, fecha, transporte, personas) => {
  viajes.push({ destino, fecha, transporte, personas });
};

export const calcularCosto = (destino, transporte, personas) => {
  let costoBase = tarifas[transporte] || 0;
  let costoTotal = costoBase * personas;

  if (personas > 3) {
    costoTotal *= 0.9; // 10% de descuento
  }
  return costoTotal;
};

export const convertirMoneda = (monto, moneda = "USD") => {
  return moneda === "USD" ? (monto / cambioDolar).toFixed(2) : monto;
};

export const mostrarItinerario = () => {
  return viajes
    .map((viaje) => {
      let costo = calcularCosto(
        viaje.destino,
        viaje.transporte,
        viaje.personas
      );
      return `Destino: ${viaje.destino}, Fecha: ${viaje.fecha}, Transporte: ${
        viaje.transporte
      }, Personas: ${viaje.personas}, Costo: $${costo} MXN / $${convertirMoneda(
        costo
      )} USD`;
    })
    .join("\n");
};
