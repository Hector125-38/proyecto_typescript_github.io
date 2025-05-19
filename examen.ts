
(()=> {


    // Tipos
    const batman = 'Bruce';
    const superman = 'Clark';
  
    const existe = false;
  
    // Tuplas
    const parejaHeroes = [batman,superman];
    const villano = ['Lex Lutor',5,true];
  
    // Arreglos
    const aliados = ['Mujer Maravilla','Acuaman','San', 'Flash'];
  
    //Enumeraciones
    const fuerzaFlash = 5;
    const fuerzaSuperman = 100;
    const fuerzaBatman = 1;
    const fuerzaAcuaman = 0;
  
    // Retorno de funciones
    function activar_batiseñal(){
      return 'activada';
    }
  
    function pedir_ayuda(){
      console.log('Auxilio!!!');
    }
  
    // Aserciones de Tipo
    const poder: any = '100';
    const largoDelPoder:number = poder.length;
    console.log( largoDelPoder );
  
  
  
  (() => {
    

    
    const batman: string = 'Bruce';
    const superman: string = 'Clark';
    const existe: boolean = false;

    console.log(`Batman: ${batman}, Superman: ${superman}, Exists: ${existe}`);

    
    const parejaHeroes: [string, string] = [batman, superman];
    const villano: [string, number, boolean] = ['Lex Luthor', 5, true];

    console.log(`Hero Pair: ${JSON.stringify(parejaHeroes)}`);
    console.log(`Villain: ${JSON.stringify(villano)}`);

    
    const aliados: string[] = ['Mujer Maravilla', 'Acuaman', 'San', 'Flash'];
    console.log(`Allies: ${aliados.join(', ')}`);

    
    const fuerzaFlash: number = 5;
    const fuerzaSuperman: number = 100;
    const fuerzaBatman: number = 1;
    const fuerzaAcuaman: number = 0;

    console.log(`Strengths - Flash: ${fuerzaFlash}, Superman: ${fuerzaSuperman}, Batman: ${fuerzaBatman}, Aquaman: ${fuerzaAcuaman}`);

    
    function activar_batiseñal(): string {
        return 'Batiseñal activada';
    }

    function pedir_ayuda(): void {
        console.log('Auxilio!!!');
    }

    console.log(activar_batiseñal());
    pedir_ayuda();


    const poder: any = '100'; 
    const largoDelPoder: number = (poder as string).length; 
    console.log(`Length of power: ${largoDelPoder}`);
})();

  






})()