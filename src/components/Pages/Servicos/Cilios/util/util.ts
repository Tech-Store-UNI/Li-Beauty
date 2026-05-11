import classic from "../../../../../img/img-servico1.png";
import hidrido from "../../../../../img/img-servico2.png";
import russo from "../../../../../img/img-servico3.png";
import brasileiro from "../../../../../img/img-servico4.png";
import remocao from "../../../../../img/img-servico5.png";
import manut_dias from "../../../../../img/img-servico6.png";
import manut_volume from "../../../../../img/img-servico7.png";
import remocao_colocacao from "../../../../../img/img-servico8.png";
import pacote1 from "../../../../../img/pacote-1.png";
import pacote2 from "../../../../../img/pacote-2.png";

export const todosCiliosServices = [
    { id: 1, nome: "Clássico", preco: "R$ 150", img: classic },
    { id: 2, nome: "Híbrido", preco: "R$ 150", img: hidrido },
    { id: 3, nome: "Russo", preco: "R$ 150", img: russo },
    { id: 4, nome: "Brasileiro", preco: "R$ 150", img: brasileiro },
    { id: 5, nome: "Remoção", preco: "R$ 60", img: remocao },
    { id: 6, nome: "Manut. 15 á 20 dias", preco: "R$ 110", img: manut_dias },
    { id: 7, nome: "Manut. Volume Brasileiro", preco: "R$ 120", img: manut_volume },
    { id: 8, nome: "Remoção + Colocação", preco: "R$ 190", img: remocao_colocacao },
];



export const pacotesCilios = [
    {
        id: 1,
        nome: "Pacote 1",
        detalhes: ["1º mês", "1 aplicação", "3 manutenções semanais"],
        preco: "R$ 480,00",
        img: pacote1 
    },
    {
        id: 2,
        nome: "Pacote 2",
        detalhes: ["1º mês", "Manutenção mensal", "4 manutenções semanais"],
        preco: "R$ 440,00",
        img: pacote2
    }
];