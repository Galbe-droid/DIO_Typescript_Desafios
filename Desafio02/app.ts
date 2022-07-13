enum Profissao{
    Atriz,
    Padeiro,
}

interface IPessoa{
    nome?: string,
    idade?: number | string,
    profissao?: Profissao
}

let pessoa1: IPessoa = {};
pessoa1.nome = "maria";
pessoa1.idade = 29;
pessoa1.profissao = Profissao.Atriz

let pessoa2: IPessoa = {}
pessoa2.nome = "roberto";
pessoa2.idade = 19;
pessoa2.profissao = Profissao.Padeiro;

let pessoa3: IPessoa = {
    nome: "laura",
    idade: "32",
    profissao: Profissao.Atriz
};

let pessoa4: IPessoa = {
    nome: "carlos",
    idade: 19,
    profissao: Profissao.Padeiro
}