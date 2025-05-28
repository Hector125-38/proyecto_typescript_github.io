export const imprimirObjeto = (argumento: any) => {
    console.log(argumento);
}

export function funcionGenerica<T>(argumento: T): T {
    return argumento;
}

export const funcionGenericaFlecha = <T>(argumento: T) => {
    return argumento;
}

export const funcionGenericaFlecha2 = <T>(args: T) => args;

export const createPair = <S, T>(v1: S, v2: T): [S, T] => [v1, v2];

// Ejemplos de uso

// 1. Usando imprimirObjeto para imprimir diferentes tipos de datos
imprimirObjeto("Hola mundo");
imprimirObjeto(123);
imprimirObjeto({ nombre: "Carlos", edad: 40 });

// 2. Usando funcionGenerica con diferentes tipos
//const texto = funcionGenerica<string>("Texto genérico");
//const numero = funcionGenerica<number>(100);
//const arreglo = funcionGenerica<number[]>([1, 2, 3]);

//console.log(texto);
//console.log(numero);
//console.log(arreglo);

// 3. Usando funcionGenericaFlecha
//const booleano = funcionGenericaFlecha<boolean>(true);
//const objeto = funcionGenericaFlecha<{ id: number; activo: boolean }>({ id: 1, activo: true });

//console.log(booleano);
//console.log(objeto);

// 4. Usando funcionGenericaFlecha2 con tipos de unión
//const union = funcionGenericaFlecha2<string | number>("Cadena o número");
//const unionNum = funcionGenericaFlecha2<string | number>(2024);

//console.log(union);
//console.log(unionNum);

// 5. Usando createPair para crear pares de diferentes tipos
//const par1 = createPair<string, number>("Edad", 25);
//const par2 = createPair<boolean, string>(true, "Activo");

//console.log(par1);
//console.log(par2);

// 6. Array de pares con createPair
//const pares: [string, number][] = [
  //  createPair("Uno", 1),
    //createPair("Dos", 2),
    //createPair("Tres", 3)
//];

//console.log(pares);

