import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-produto-thumbnail',
	templateUrl: './produto.component.html',
	styleUrls: ['./produto.component.css']
})
export class ProdutoThumbnailComponent {
	imgPath = "../assets/images/";

	public constructor(
		private router: Router,
	) { }

	produtosLista = [
		{
			"desc": "Resident Evil 2 - PS4",
			"vendidoPor": "Vendido por Saraiva",
			"precoDe": "249,90",
			"precoPor": "219,91",
			"parcelamento": "em 8x de R$ 31,24",
			"imagem": this.imgPath + "resident_evil2.jpg",
			"alt": "Resident Evil 2 - PS4",
			"descricao": "Resident Evil 2, a obra-prima que definiu um gênero, está de volta completamente reconstruído do zero para proporcionar uma experiência narrativa mais profunda. Usando a RE Engine proprietária da Capcom, Resident Evil 2 oferece uma nova visão sobre a clássica saga de horror de sobrevivência com visuais realísticos de tirar o fôlego, áudio imersivo de causar arrepios, uma nova câmera sobre os ombros e controles modernizados, além dos modos de jogo do título original. O pesadelo retorna reimaginado no PlayStation 4, Xbox One e Windows PC no dia 25 de janeiro de 2019 com legendas em português brasileiro."
		},
		{
			"desc": "Spider-Man - PS4",
			"vendidoPor": "Vendido por Saraiva",
			"precoDe": "199,00",
			"precoPor": "157,52",
			"parcelamento": "em 5x de R$ 35,80",
			"imagem": this.imgPath + "spider_man.png",
			"alt": "Spider-Man - PS4",
			"descricao": "Marvel's Spider-Man Marvel’s Spider-Man traz seu lançador de teias favorito em uma história diferente de qualquer outra antes vista. Agora como um super-herói experiente, Peter Parker tem estado ocupado combatendo o crime nas ruas como o Homem-Aranha. E justamente quando ele está disposto a priorizar sua vida como Peter, um novo vilão chega para ameaçar New York. Enfrentando adversidades avassaladoras e enormes riscos, o Homem-Aranha terá de mostrar sua força e ser superior. A Sony Interactive Entertainment, a Marvel e a Insomniac Games apresentam Marvel’s Spider-Man exclusivamente para o PlayStation 4. Seja o Homem-Aranha Após oito anos usando a máscara, Peter Parker agora é um mestre na luta contra o crime. Sinta todo o poder de um Homem-Aranha mais experiente com uma mecânica de combate improvisada, habilidades acrobáticas dinâmicas, movimentos urbanos brandos e interações com o ambiente. Não sendo mais um principiante, esse é o Homem-Aranha mais habilidoso que você já jogou. Os mundos se colidem Os mundos de Peter Parker e do Homem-Aranha se colidem em uma história original cheia de ação. Nesse novo universo do Homem-Aranha, os personagens famosos das vidas de Peter e do Homem-Aranha foram reinventados para exercerem papéis únicos. A Nova York da Marvel é seu parque de diversões A Grande Maçã ganha vida como o mundo mais vasto e interativo da Insomniac até agora. Percorra bairros vibrantes e capture vistas espetaculares de locais famosos da Marvel e de Manhattan. Use o ambiente para derrotar vilões com golpes épicos em uma ação digna de sucessos de bilheteria."
		},
		{
			"desc": "Metal Gear Survive - PS4",
			"vendidoPor": "Vendido por Saraiva",
			"precoDe": "149,90",
			"precoPor": "21,91",
			"parcelamento": "em 1x de R$ 24,90",
			"imagem": this.imgPath + "metal_gear_survive.png",
			"alt": "Metal Gear Survive - PS4",
			"descricao": "A Konami Digital Entertainment inova com um derivado original de Metal Gear Solid V chamado Metal Gear Survive. Este título introduz um novo espírito de exploração, mecânicas únicas e jogabilidade cooperativa estratégica. Após a fuga de Big Boss no fim de Metal Gear Solid: Ground Zeroes, um soldado nem pleno desabamento da Base Mãe quase é puxado para um buraco de minhoca que se abre acima da base. O soldado perde a consciência e acorda seis meses depois em uma instalação pertencente a Wardenclyffe Section, uma organização secreta no governo dos Estados Unidos. Os jogadores tomam o controle deste soldado com o objetivo de resgatar aqueles que foram sugados pelo buraco de minhoca meio ano antes e descobrir a cura para uma misteriosa infecção. “E você não fica de fora desta. Você já está infectado com a forma de vida que mencionei antes, ” instrui um homem da Wardenclyffe Section chamado Goodluck. Metal Gear Survive é um jogo de ação e sobrevivência em um universo alternativo. Na batalha para sobreviver e entender este novo ambiente infernal, os jogadores participam sozinhos ou conectados cooperativamente. Lutando para sobreviver, os materiais encontrados devem ser forjados em itens utilizáveis, equipamentos e armas se você quer ter alguma chance de voltar para casa. Destaques do jogo: • Dois jeitos de jogar – solo e cooperativo. Estes modos estão conectados via Acampamento Base, e o progresso do personagem e seus equipamentos são válidos para ambos os modos. • Construa e desenvolva seu Acampamento Base. Isto lhe proporciona acesso à forja de armas e equipamentos, além de servir de centro de comando para o planejamento de missões tanto no modo solo quanto cooperativo. • Junte recursos, esquemas e materiais brutos para a criação de itens. Estes podem ser encontrados no modo solo explorando o ambiente, ou conquistados em missões cooperativas bem-sucedidas. • Desenvolva o Acampamento Base com novas instalações para ajudar na sobrevivência, incluindo o crescimento de plantações, criação de animais e estoque de comida e água. Conforme seu acampamento se desenvolve você ganha acesso a itens de alta classe. • Gerencie recursos, incluindo os essenciais como comida e água, além de materiais brutos necessários para armas, proteções e consumíveis. • Complete Ordens em eventos diários, semanais e especiais para receber ricos materiais e esquemas para utilização em ambos os modos de jogo."
		},
		{
			"desc": "God Of War - PS4",
			"vendidoPor": "Vendido por Saraiva",
			"precoDe": "199,90",
			"precoPor": "113,52",
			"parcelamento": "em 4x de R$ 32,25",
			"imagem": this.imgPath + "god_of_war.png",
			"alt": "God Of War - PS4",
			"descricao": "É um novo começo para Kratos! O Santa Monica Studio e o diretor de criação Cory Barlog lançam um novo começo para um dos personagens mais conhecidos dos jogos. Vivendo como um homem, fora da sombra dos deuses, Kratos deve se adaptar a terras desconhecidas, ameaças inesperadas e a uma segunda oportunidade de ser pai. Junto ao seu filho, Atreus, os dois vão se aventurar pelas selvagens florestas nórdicas e lutar para cumprir uma missão profundamente pessoal. Recursos do Jogo; • Um novo começo ousado: sua vingança contra os deuses do Olimpo agora é passado e Kratos vive como um homem comum no reino dos monstros e deuses nórdicos. E é nesse mundo inóspito e implacável que ele precisa lutar para sobreviver... e ensinar seu filho a fazer o mesmo. Essa nova versão surpreendente de God of War desconstrói os principais elementos que definiram a série (combates gratificantes, proporção espetacular e uma narrativa poderosa), combinando-os de uma forma diferente. • Uma segunda oportunidade: Kratos é pai novamente. Assumindo o papel de mentor e protetor de seu filho, Atreus, que está determinado a conquistar seu respeito, Kratos é forçado a lidar e controlar a fúria que, por muito tempo, foi sua essência, e a explorar um mundo extremamente perigoso com seu filho. • Um mundo mais sombrio e elementar: desde as colunas de mármore de ornamentação do Olimpo até as florestas, montanhas e cavernas realistas do universo nórdico pré-viking, esse é um reino claramente novo com seu próprio panteão de criaturas, monstros e deuses. Com uma nova ênfase na descoberta e na exploração, esse mundo atrairá os jogadores para explorar cada centímetro do cenário surpreendentemente ameaçador de God of War, que é, sem dúvida, o maior da série. • Combates físicos violentos: com uma câmera livre e por cima do corpo que aproxima ainda mais o jogador da ação, as lutas de God of War refletem o panteão de criaturas nórdicas que Kratos enfrentará: grandiosas, realistas e exaustivas. Uma nova arma principal e novas habilidades mantêm o espírito que define God of War, além de apresentarem uma visão de conflitos violentos que criam uma nova base para o gênero."
		},
	];

	public visualizarProduto(produto: any) {
		console.log(produto)
		const navigationExtras: any = {
			queryParams: produto
		};
		this.router.navigate(["produto"], navigationExtras);
	}
}