// src/app/services/mock-posts.service.ts
import {Injectable} from '@angular/core';
import {Post} from "../../../models/post.model";

@Injectable({
  providedIn: 'root'
})
export class MockPostsService {
  private posts: Post[] = [
    {
      title: 'Escola de Palhaçaria 2024',
      content: `É com grande satisfação que compartilhamos as últimas conquistas do nosso
projeto, que tem transformado vidas através da arte da Palhaçaria. No último dia 09
de junho conseguimos formar 16 novos artistas, que participaram do processo de
formação da Escola de Palhaçaria 2024.
Esses talentosos voluntários, que passaram por cinco meses de formação, além das
etapas de seleção, agora avançam para uma fase crucial em suas jornadas: os
estágios. Primeiro o estágio de observação no ambiente hospitalar, durante este
período, eles terão a oportunidade de observar os artistas que já atuam na Santa
Casa de Paranavaí nos plantões besteirológicos. Em um segundo momento, irão
aplicar suas habilidades recém-adquiridas, absorvendo experiências práticas para
continuarem aperfeiçoando suas técnicas sob a orientação dos professores em seus
estágios práticos. Esse processo leva cerca de dois meses, finalizando em setembro.
E, claro, não poderíamos deixar de mencionar o nosso icônico Cabaré Artístico! Este
evento celebra e marca a conclusão do processo de formação dos nossos artistas.
Este ano, eles apresentaram a peça "Isso não é um espetáculo: O espetáculo" na Casa
da Cultura de Paranavaí, encantando mais de 130 pessoas. Após a apresentação, os
novos artistas foram certificados e aplaudidos de pé por amigos e familiares,
tornando a ocasião ainda mais especial.
Sabemos! Todo mundo pensa que é só colocar um nariz vermelho e pronto!
Por aqui o processo é diferente!
Fique com alguns registros do nosso espetáculo!`
    },
    {
      title: 'Conheça nosso Programa de Formação',
      content: `Para atuar diretamente com pacientes hospitalizados, é essencial contar com
profissionais qualificados, preparados especificamente para o ambiente hospitalar e
capazes de aplicar o conhecimento obtido durante sua formação. Antes de iniciar as
intervenções, os voluntários passam por aulas teóricas e práticas. Durante esse
processo, eles criam um personagem que finge ser médico para entrar no hospital,
um ambiente bem diferente dos grandes palcos e picadeiros aos quais os Palhaços
estão acostumados.
A formação tem uma carga horária de 100 horas, abrangendo uma variedade de
temas essenciais. Entre eles estão a história universal do teatro, circo e palhaço, além
da inserção desse trabalho no Brasil e a função específica do palhaço no hospital. Os
voluntários também estudam sobre humanização hospitalar e voluntariado, além de
realizar pesquisas corporais e jogos cênicos. A criação do personagem envolve
técnicas de maquiagem cênica e confecção de figurinos. Questões de ética e a
observação do ambiente hospitalar são igualmente importantes, culminando em um
estágio supervisionado e a participação no Cabaré Artístico.
Todo esse processo é realizado de forma voluntária pelos artistas formadores da
Escola de Palhaçaria Médicos do Humor.
A gente volta logo com mais novidades!`
    }
  ];

  getPosts(): Post[] {
    return this.posts;
  }
}
