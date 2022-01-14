/* 
Crie um algoritmo que transforme as notas do sistema
numérico para sistema de notas em caracteres tipo A B C

* de 90 para cima -   A
* entre 80 - 89   -   B
* entre 70 - 79   -   C
* entre 60 - 69   -   D
* menor que 60    -   F
*/


//let score = -1


let media = (score) => {
    
    let scoreA = score >= 90 && score <= 100
    let scoreB = score >= 80 && score <= 89 
    let scoreC = score >= 70 && score <= 79
    let scoreD = score >= 60 && score <= 69
    let scoreF = score <= 59 && score >= 0 
    
    let scoreFinal;

    if(scoreA){
scoreFinal = 'A' 
}
else if(scoreB){
scoreFinal = 'B'
}
else if(scoreC){
scoreFinal = 'C'
}
else if(scoreD){
scoreFinal = 'D'
}
else if(scoreF){
scoreFinal = 'F'
}
else{
scoreFinal = 'Nota inválida'
}
return scoreFinal
}


console.log(media(50))
console.log(media(88))
console.log(media(62))
console.log(media(81))
console.log(media(47))
console.log(media(-2))
console.log(media(100))
console.log(media(101))
console.log(media(77))



