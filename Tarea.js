"use strict";
const nombres = ['Hugo', 'Paco', 'Luis', 'Pedro', 'Hector'];
const edades = [35, 50, 40, 18, 30];
const indiceEdadMin = () => edades.indexOf(Math.min(...edades));
const indiceEdadMax = () => edades.indexOf(Math.max(...edades));
const nombreMenorEdad = () => nombres[indiceEdadMin()];
const nombreMayorEdad = () => nombres[indiceEdadMax()];
console.log(`${nombreMenorEdad()} es el menor con ${edades[indiceEdadMin()]} años.`);
console.log(`${nombreMayorEdad()} es el mayor con ${edades[indiceEdadMax()]} años.`);
