//PRIMER ENTREGA


/* function agarrarNumero(){
    const numero = Number(prompt("ingresa un numero "));
    if(numero===0){
        return 10;
    }
    return numero;
    

}
 
console.log(agarrarNumero);
const numero = agarrarNumero()

for(let i=1; i<=numero; i++){
    

    if(i%2===0 && i!=0){
        document.write(`<p>${i} es un numero par</p> `)

    }
    else{
        document.write(`<p>${i} es un numero impar</p> `)

    }

}
 */


 //SEGUNDA ENTREGA


 let personajes = []


 function pjs(name, status, specie){
     this.name = name;
     this.status = status;
     this.specie = specie;
 }
 
 
 personajes.push (new pjs("Rick Sanchez", "alive", "human"))
 personajes.push (new pjs("Alien Morty", "alive", "alien"))
 personajes.push (new pjs("Adjudicator Sanchez", "dead", "human"))
 personajes.push (new pjs("Summer Smith", "alive", "human"))
 personajes.push (new pjs("Beth Smith", "alive", "human"))
 personajes.push (new pjs("Alan Rails", "dead", "human"))
 
 
 for(let item of personajes){
     console.log(item.name)
 }
 
 
 let muertos = personajes.filter(persona => persona.status === "dead")
 console.log(muertos)
