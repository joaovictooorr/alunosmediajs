class Aluno{
    constructor(nome,nota){
        this.nome = nome;
        this.nota = nota;
    }
}

const aluno1 = new Aluno('joao', 6.0);
const aluno2 = new Aluno('bia', 4.0);
const aluno3 = new Aluno('mikaelle', 5.0);
const aluno4 = new Aluno('caio', 9.0);

const arrayDeAlunos = [aluno1,aluno2,aluno3,aluno4];

function alunosAprovados(arrayDeAlunos){
    const alunosNaMedia = []
    for(let i = 0; i < arrayDeAlunos.length; i++){
        if(arrayDeAlunos[i].nota >= 6){
            alunosNaMedia.push(arrayDeAlunos[i]);
        }
    }
    return alunosNaMedia;
}

function alunosAprovados2(arrayDeAlunos) {
    return arrayDeAlunos.filter(aluno => aluno.nota >= 6);
}

console.log(alunosAprovados(arrayDeAlunos));
console.log(alunosAprovados2(arrayDeAlunos));
