import React from "react";
import './mecanica.css';


function Mecanica () {
    return ( <div>

        <img id="manual" src="./imagens/manual.jpg"></img> <img id="simbulo" src="./imagens/simbulo.png" alt="" />

        <section id="mecanica">
            <h2>Mecânica do jogo</h2>
            <p><h3>Classes básicas</h3> Ordem Paranormal RPG segue fiel a Call of Cthulhu neste aspecto, simplificando a escolha em três caminhos a serem seguidos: combatente, especialista e ocultista.</p>

            <p> escolha da classe define Pontos de Vida, Pontos de Esforço, valor de Sanidade (Nível de Exposição) e número de perícias nas quais o personagem é treinado.</p>

            <p><h3>Atributos e perícias</h3> Em vez dos 6 atributos básicos do sistema d20, temos aqui 5 atributos. Além disso, o personagem possui um valor numérico que já é o próprio bônus. Enquanto isso, as perícias foram atualizadas para o universo de Ordem Paranormal.</p>

            <p><h3>Testes</h3> Uma novidade interessante é que o teste de perícia é feito com 1d20 mais a quantidade de d20 do seu bônus do atributo, adicionando +5 se o personagem for treinado na perícia. Ou seja, um personagem com Força +2 e treinado em Atletismo vai rolar 3d20 + 5 e ficar com o número mais alto no d20 para tentar alcançar a dificuldade estipulada pelo mestre.</p>

            <p>mecânica do jogo é que qualquer combinação entre atributos e perícias é permitida para realizar testes, desde que autorizada pelo mestre e faça sentido na interpretação do personagem.</p>

            <p><h3>Pontos de Esforço</h3> Adaptado a partir dos “Pontos de Mana” de Tormenta 20, os PEs são usados para habilidades especiais e rituais. Um destaque interessante é a possibilidade de ter que sacrificar PEs de forma permanente para poder lançar um ritual muito poderoso.</p>

            <p><h3>Equipamentos</h3> O sistema facilita a jogabilidade ao apresentar as regras de equipamentos. Como todo personagem é agente da Ordo Realitas, o acesso dele a armas e outros acessórios depende do Prestígio e da Patente que possui. Ou seja, em linhas gerais, através da experiência obtida com o cumprimento de missões de menor ou maior grau de dificuldade.</p>

            <p>O inventário calculado em “espaços” é uma simplificação de regras que surgiu como regra opcional de Tormenta 20, em uma edição da revista digital Dragão Brasil. Assim, em vez de perder tempo calculando o peso dos itens que é capaz de carregar, o sistema oferece a regra de limite de espaços disponíveis na carga (sim, como os “slots” de RPGs virtuais).</p>

            <p><h3>Rituais e Elementos</h3> Os rituais são parte importante do universo de Ordem Paranormal e possuem mecânicas muito simples para sua utilização em jogo. Para quem estiver familiarizado com as regras de magia de Tormenta 20 será ainda mais fácil.</p>

            <p>O Guia Rápido de Regras oferece apenas os rituais de 1º círculo necessários para jogar a aventura Os Espinhos da Aurora Escarlate.</p>
                
            <p>Um dos pontos mais interessantes das regras de rituais são os Elementos: Conhecimento, Energia, Morte, Sangue e Medo. Além disso, há uma correlação de eficácia maior ou menor ao usar um Ritual de determinado elemento contra uma Criatura ou contra outro Ritual. Quem joga Pokemón vai sacar fácil.</p>

            <p><h3>Cenas – Ação, Investigação e Interlúdio</h3> Ordem Paranormal divide a narrativa de uma sessão de jogo (“episódio”) em cenas, uma forma de medir a passagem do tempo conforme mudam o cenário ou a narrativa passa de uma ação para uma investigação ou vice-versa, entre outras condições decididas pelo mestre.</p>

            <p>A ação se desenrola com as mesmas mecânicas de combate do sistema d20. Adicionalmente, o jogo traz a possibilidade de usar ações de reação durante um combate como uma forma de “defesa ativa”. O personagem pode reagir uma vez por rodada para bloquear, contra-atacar ou esquivar de um ataque.</p>
                
            <p>As Cenas de Investigação se desenrolam com testes de perícias e uma mecânica de urgência, ou seja, quanto tempo os personagens têm para investigar o local.</p>
                
            <p>Já as Cenas de Interlúdio acontecem durante as missões, mecânica desenvolvida inicialmente em Tormenta 20 para o personagem desenvolver a própria narrativa entre uma e outra aventura do grupo.</p>

            <p><h3>Morte – há vida sem matemática</h3> O sistema do RPG de Cellbit facilita a vida da galera de humanas. Em Ordem Paranormal, não é necessário calcular a gravidade da situação toda vez que um personagem chegar a zero Pontos de Vida.</p>

            <p>Ao atingir zero ou menos Pontos de Vida, se um personagem não tiver os PVs restaurados até a quarta rodada, ele morre. E se na mesma cena ele começar a morrer novamente, essa “sobrevida” vai caindo para três, duas ou uma rodada, até levar à morte instantânea.</p>

            <p><h3>NPCs – resumo em uma frase</h3> Para quem for mestrar Ordem Paranormal RPG, no final do Guia de Regras há uma ideia emprestada do RPG Numenera e trazida para cá de forma bem eficaz.</p>

            <p>Ao ter que lidar com a construção de NPCs (Non-Player Characters, ou Personagens Não-Jogadores), escreva uma frase-chave que resume tudo que você precisa saber sobre quem é e o que pretende este personagem na história. Assim, além de um nome provavelmente improvisado na hora, ele pode ter um objetivo na vida e alguma característica marcante que o torne mais interessante para os jogadores.</p>
        </section>


        <footer>
        <p>&copy; 2023 By Liah. Todos os direitos reservados
        </p>
    </footer>
        </div>
    );

}

export default Mecanica ;