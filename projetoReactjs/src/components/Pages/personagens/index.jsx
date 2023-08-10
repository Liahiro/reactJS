import React from "react";
import {personagens} from '../../../../my-books/api/db.json'

// COMPONENTS
import Person from "../../Person";



import './personagem.css';



function Personagens () {
    return ( <div>
        
        <section id="personagens">
            <h2>Personagens</h2>
             <ul id="lista">

                {personagens.map(person =>{
                    return(
                        <Person key={person.title} data={person}/>

                    )
                })}
                {/* <li>  <h3>Elizabeth Webber</h3> <figure><img id="personagem" src="./imagens/Liz.jpg" alt="Elizabeth Webber" />
                        <figcaption>Elizabeth Webber</figcaption></figure>
                  

                    <p>Elizabeth era uma mulher de 28 anos, esguia, com 1,70 metros de altura. Possuía pele branca, cabelos negros, olhos castanho-escuros descritos como grandes e pesados, também tinha uma pinta debaixo do canto esquerdo da boca. Liz era descrita por sua atriz, Gabi Cattuzzo, como alguém que não se destacaria em uma multidão na questão de sua aparência, sendo considerada normal em vários aspectos.</p>
                    <p>Elizabeth era uma médica e cientista forense, extremamente obstinada, inteligente e habilidosa, com uma obsessão por criar teorias e desvendar casos. Trabalhando com o seu parceiro detetive, Gustavo Dohmer, ajudou a resolver alguns casos para a Polícia Federal até que, finalmente, foi recrutada para a Ordo Realitas por Tristan Monteiro.</p> 
                </li> */}

                {/* <li>
                    <h3>Thiago Fritz</h3> <figure><img id="personagem" src="./imagens/thiago.jpg" alt="Thiago Fritz" />
                        <figcaption>Thiago Fritz</figcaption></figure>

                    <p>Thiago era um homem com 33 anos de idade e 1,73 m de altura. Tinha cabelos curtos e castanhos, tendo uma franja curta jogada para o lado, barba rala, olhos castanhos, e um porte físico atlético. Durante o primeiro caso utilizou uma camisa social avermelhada de gravata preta com as mangas puxadas e um colete preto.</p>
                    <p>Thiago era um jornalista que após a suposta morte de seu pai, Arnaldo Fritz, decidiu investigar a causa de sua morte. Por essa investigação, ele descobriu a relação entre seu pai e a Ordo Realitas, se interessando a se juntar à organização. Era conhecido por sua lábia, carisma, habilidade interpessoal e contatos.</p>
                </li>   */}

                {/* <li>
                    <h3>Daniel Hartmann</h3> <figure><img id="personagem" src="./imagens/Daniel.jpg" alt=" Daniel Hartmann" /> <figcaption>Daniel Hartmann</figcaption></figure>

                    <p>Daniel era um homem de 28 anos, de olhos verdes, com cerca de 1,78 metros de altura. Possuía uma pele bem pálida, uma barba ruiva cheia e comprida, com o cabelo raspado dos lados e preso em um coque. Durante os eventos de A Ordem Paranormal, usava um sobretudo cinza com um bolso na parte superior e, por dentro, uma camisa azul com um capuz. Seu olhar continha profundas olheiras que transmitiam cansaço e ao mesmo tempo ansiedade. Carregava um cantil de metal que aparentava conter álcool, mas após sua morte, foi revelado que era apenas água.</p>
                    <p>Ele costumava ser um escritor de contos macabros e relatos sobrenaturais de muito sucesso, porém, o que não sabia, era que o medo causado por suas obras enfraquecia a Membrana. Quando se envolveu em uma investigação da Ordem e foi confrontado pelo agente Tristan Monteiro, percebeu o que acidentalmente estava fazendo e decidiu trabalhar na organização para combater o paranormal e suas monstruosas criações.</p>
                </li> */}
{/* 
                <li>
                    <h3>Alexsander Kothe</h3> <figure><img id="personagem" src="./imagens/Alex.png" alt="Alexsander Kothe" />
                        <figcaption>Alexsander Kothe</figcaption></figure>

                    <p>Alexsander era um jovem negro de 23 anos com cabelo escuro bem curto, com óculos fino e arredondado. Durante A Ordem Paranormal, vestia um moletom amarelo com uma estampa preta que representava a evolução humana, uma bolsa também preta e um relógio de pulso.</p>
                    <p>Ele era um professor de história na Escola Nostradamus de Ensino Médio, que misteriosamente sumiu de seu local de trabalho, estando diretamente ligado com o caso sobrenatural que ocorreu no lugar.</p>
                </li> */}
            </ul>
        </section>

        <footer>
        <p>&copy; 2023 By Liah. Todos os direitos reservados
        </p>
    </footer>
        </div>
    );

}

export default Personagens ;