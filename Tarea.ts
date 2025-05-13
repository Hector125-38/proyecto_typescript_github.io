const nombres: string[] = ['Hugo', 'Paco', 'Luis', 'Pedro', 'Hector'];
const edades: number[] = [35, 50, 40, 18, 30];

const encontrarMayorYMenor = (nombres: string[], edades: number[]): string => {
    const mayorEdad = Math.max(...edades);
    const menorEdad = Math.min(...edades);

    const nombreMayor = nombres[edades.indexOf(mayorEdad)];
    const nombreMenor = nombres[edades.indexOf(menorEdad)];

    return `${nombreMenor} es el menor con ${menorEdad} años.\n${nombreMayor} es el mayor con ${mayorEdad} años.`;
};

console.log(encontrarMayorYMenor(nombres, edades));

