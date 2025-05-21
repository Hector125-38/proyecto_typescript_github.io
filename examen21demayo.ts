// Clase para vehículos
class Vehiculo {
  carroceria: string;
  modelo: string;
  antibalas: boolean;
  pasajeros: number;

  constructor(carroceria: string, modelo: string, antibalas: boolean, pasajeros: number) {
    this.carroceria = carroceria;
    this.modelo = modelo;
    this.antibalas = antibalas;
    this.pasajeros = pasajeros;
  }
}

// Clase para el Batimóvil
class Batimovil extends Vehiculo {
  constructor() {
    super("Negra", "6x6", true, 4);
  }
}

// Clase para Bumblebee
class Bumblebee extends Vehiculo {
  constructor() {
    super("Amarillo con negro", "4x2", true, 4);
  }

  disparar() {
    console.log("Disparando");
  }
}

// Clase para Villanos
class Villano {
  nombre: string;
  edad: number | undefined;
  mutante: boolean;

  constructor(nombre: string, edad: number | undefined, mutante: boolean) {
    this.nombre = nombre;
    this.edad = edad;
    this.mutante = mutante;
  }
}

// Crear un arreglo de villanos
const villanos: Villano[] = [
  new Villano("Lex Luthor", 54, false),
  new Villano("Erik Magnus Lehnsherr", 49, true),
  new Villano("James Logan", undefined, true)
];

// Tipos para Charles y Apocalipsis
type Charles = {
  poder: string;
  estatura: number;
};

type Apocalipsis = {
  lider: boolean;
  miembros: string[];
};

// Mystique puede ser Charles o Apocalipsis
let mystique: Charles | Apocalipsis;

const charles: Charles = {
  poder: "psiquico",
  estatura: 1.78
};

const apocalipsis: Apocalipsis = {
  lider: true,
  miembros: ["Magneto", "Tormenta", "Psylocke", "Angel"]
};

// Asignaciones a Mystique
mystique = charles;
mystique = apocalipsis;

// Ejemplo de uso
const batimovil = new Batimovil();
const bumblebee = new Bumblebee();
bumblebee.disparar();

console.log(batimovil);
console.log(bumblebee);
console.log(villanos);
console.log(mystique);
