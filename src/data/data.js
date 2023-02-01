//Images
import LogoGremio from '../images/gremio-logo-escudo.png'
import LogoSaoLuiz from '../images/sao-luiz.png'
import Anuncio1 from '../images/anuncio1.jpg'
import Anuncio2 from '../images/anuncio2.png'
import LaranjeirasCup from '../images/gre-mio-vence-laranjeiras-cup-nas-categorias-sub-7--sub-8-e-sub-13-34757.jpeg'
import FinalizaPreTemporada from '../images/gre-mio-finaliza-pra--temporada-mr_-jack_bet-no-ct-luiz-carvalho--34755.jpeg'
import CopaSaoPaulo from '../images/gre-mio-deixa-a-disputa-da-copa-sa-o-paulo-2023-34753.jpg'
import RecomecaPreTemporada from '../images/atletas-voltam-aos-trabalhos-na-pra--temporada-mr-jack_bet-34736.jpg'
import Guia from '../images/guia.png'
import Comunidade from '../images/social-comunidade-tri.jpg'
import Instituto from '../images/social-igt.jpg'

// Images Products
import CamisaFeminina from '../images/SM-Camisa_Fem_Umbro_Of1_2022_Torcedora_Frente.jpg'
import CamisaBranca2022 from '../images/SM-Camisa_Masc_Umbro_Of2_2022_Classic_SN_Frente.jpg'
import CamisaAzul2022 from '../images/SM-Camisa_Masc_Umbro_Of1_2022_Atleta_SN_azul_Frente.jpg'
import CamisaAzul2021 from '../images/SM-Camisa_Masc_Of1_2021_Atleta_SN_CelPtoBco_Frente.jpg'
import Chinelo from '../images/SM-Havaianas_Gremio_Principal1.jpg'
import CopoSuarez from '../images/SM-Copo_Suarez_Principal.jpg'

// Images Elenco
import Renato from '../images/jogadores/treinador-renato.jpg'
import Adriel from '../images/jogadores/jogador-adriel.JPG'
import Grando from '../images/jogadores/jogador-grando.jpg'
import Jhonata from '../images/jogadores/jogador-jhonata.JPG'
import Guilherme from '../images/jogadores/jogador-guilherme.jpg'
import Suarez from '../images/jogadores/jogador-suarez.png'

// Images Patrocinadores
import Banrisul from '../images/Patrocinadores/logo-banrisul2022.jpg'
import Umbro from '../images/Patrocinadores/logo-umbro.png'
import Unimed from '../images/Patrocinadores/logo-unimedpoa.png'
import Vero from '../images/Patrocinadores/Logo-Vero.png'
import Brahma from '../images/Patrocinadores/logo-brahma.png'
import mrJack from '../images/Patrocinadores/Logo-mrJack.bet.png'
import Marquespan from '../images/Patrocinadores/logo-marquespan.png'

// Icons
import {
  FiCheck,
  FiInstagram,
  FiYoutube
} from 'react-icons/fi'

import { 
  FaFacebookF,
  FaTwitter
} from 'react-icons/fa'



/*Dados para o Header*/
export const HeaderList = [
    {id: 1, option: "Futebol", URL: "https://gremio.net/", 
      Sublist: [
        {id: 1, column:1, text: "Categoria de base", subText: "", URL: "https://gremio.net/"},
        {id: 2, column:1, text: "Escola de futebol", subText: "", URL: "https://gremio.net/"},
        {id: 3, column:1, text: "Avaliação", subText: "", URL: "https://gremio.net/"},
        {id: 4, column:1, text: "Núcleos de captação", subText: "", URL: "https://gremio.net/"},
        {id: 5, column:1, text: "Guias da partida", subText: "", URL: "https://gremio.net/"},
        {id: 6, column:2, text: "Futebol Masculino", subText: [
          {id: 1, subText1: "Profissional", URL: "https://gremio.net/"},
          {id: 2, subText1: "Sub 20", URL: "https://gremio.net/"},
          {id: 3, subText1: "Sub 17", URL: "https://gremio.net/"},
        ], URL: ""},
        {id: 7, column:3, text: "Futebol Feminino", subText: [
          {id: 1, subText1: "Profissional", URL: "https://gremio.net/"},
          {id: 2, subText1: "Sub 20", URL: "https://gremio.net/"}
        ], URL: ""},
      ]},
    {id: 2, option: "Clube", URL: "https://gremio.net/", 
      Sublist: [
        {id: 1, column:1, text: "Conselho de administração", subText: "", URL: "https://gremio.net/"},
        {id: 2, column:1, text: "Conselho deliberativo", subText: "", URL: "https://gremio.net/"},
        {id: 3, column:1, text: "Consulados", subText: "", URL: "https://gremio.net/"},
        {id: 4, column:1, text: "Governança", subText: "", URL: "https://gremio.net/"},
        {id: 5, column:1, text: "Sgq - Sistema de gestão da qualidade", subText: "", URL: "https://gremio.net/"},
        {id: 6, column:1, text: "Depto do torcedor gremista", subText: "", URL: "https://gremio.net/"},
        {id: 7, column:1, text: "Ctg tricolor dos pampas", subText: "", URL: "https://gremio.net/"},
        {id: 8, column:1, text: "Instituto geração tricolor", subText: "", URL: "https://gremio.net/"},
        {id: 9, column:2, text: "Licenciamento", subText: [
          {id: 1, subText1: "Fabricantes licenciados", URL: "https://gremio.net/"},
          {id: 2, subText1: "Seja um lojista", URL: "https://gremio.net/"},
          {id: 3, subText1: "Grêmiomania", URL: "https://gremio.net/"},
        ], URL: ""},
        {id: 10, column:3, text: "Estrutura", subText: [
          {id: 1, subText1: "Arena do grêmio", URL: "https://gremio.net/"},
          {id: 2, subText1: "Capela nossa senhora medianeira", URL: "https://gremio.net/"},
          {id: 3, subText1: "Cft pres. Hélio Dourado", URL: "https://gremio.net/"},
          {id: 4, subText1: "Ct Cristal", URL: "https://gremio.net/"},
          {id: 5, subText1: "Ct pres. Luiz Carvalho", URL: "https://gremio.net/"},
          {id: 6, subText1: "Ilha do grêmio", URL: "https://gremio.net/"},
          {id: 7, subText1: "Museu Hermínio", URL: "https://gremio.net/"},
          {id: 8, subText1: "Bittencourt", URL: "https://gremio.net/"},
        ], URL: ""},
        {id: 11, column:4, text: "Departamento Social", subText: [
          {id: 1, subText1: "Comunidade Tri", URL: "https://gremio.net/"},
        ], URL: ""},
        {id: 12, column:4, text: "História", subText: [
          {id: 1, subText1: "Fundação", URL: "https://gremio.net/"},
          {id: 2, subText1: "Estádio Olímpico", URL: "https://gremio.net/"},
          {id: 3, subText1: "Calçada da Fama", URL: "https://gremio.net/"},
          {id: 4, subText1: "Heróis", URL: "https://gremio.net/"},
          {id: 5, subText1: "Presidentes", URL: "https://gremio.net/"},
          {id: 6, subText1: "Simbolos", URL: "https://gremio.net/"},
          {id: 7, subText1: "Títulos", URL: "https://gremio.net/"},
        ], URL: ""},
      ]},
    {id: 3, option: "Sócios", URL: "https://gremio.net/", Sublist: []},
    {id: 4, option: "Grêmiomania", URL: "https://gremio.net/", Sublist: []},
    {id: 5, option: "Ingressos", URL: "https://gremio.net/", Sublist: []},
    {id: 6, option: "Notícias", URL: "https://gremio.net/", Sublist: []},
    {id: 7, option: "Contato", URL: "https://gremio.net/", Sublist: []},
    {id: 8, option: "Grêmio Play", URL: "https://gremio.net/", Sublist: []},
]

export const TextLogo = [
    {id: 1, text: "Grêmio"},
    {id: 2, text: "Foot-Ball"},
    {id: 3, text: "Porto Alegrense"},
]

export const NextGame = [
  {id: 1, 
    homeTeam: "Grêmio", 
    logoHome: LogoGremio, 
    visitingTeam: "São Luiz", 
    logoVisit: LogoSaoLuiz,
    date: "17/01/2023",
    hour: "19",
    minutes: "30",
    championship: "Recopa Gaúcha 2023",
    place: "Arena do Grêmio",
    city: "Porto Alegre/RS"}
]

export const Anuncios = [
  {id: 1, name: "Anúncio 1", image: Anuncio1, URL: "https://gremio.net/"},
  {id: 2, name: "Anúncio 2", image: Anuncio2, URL: "https://gremio.net/"},
]

export const News = [
  {id: 1, 
  kindOfNews: "Campeões", 
  title: "Grêmio vence Laranjeiras CUP nas categorias sub-7, sub-8 e sub-13",
  image: LaranjeirasCup,
  date: "15 JAN 2023",
  hour: "15",
  minutes: "51",
  fixed: "No",
  URL: "https://gremio.net/"},
  {id: 2, 
    kindOfNews: "Preparação", 
    title: "Grêmio finliza Pré-Temporada Mr.Jack.bet no CT Luiz Carvalho",
    image: FinalizaPreTemporada,
    date: "15 JAN 2023",
    hour: "12",
    minutes: "41",
    fixed: "No",
    URL: "https://gremio.net/"},
  {id: 3, 
  kindOfNews: "Final", 
  title: "Grêmio deixa a disputa da Copa São Paulo 2023",
  image: CopaSaoPaulo,
  date: "14 JAN 2023",
  hour: "19",
  minutes: "12",
  fixed: "No",
  URL: "https://gremio.net/"},  
  {id: 4, 
    kindOfNews: "Trabalho", 
    title: "Atletas voltam aos trabalhos na Pré-temporada MR Jack.bet",
    image: RecomecaPreTemporada,
    date: "13 JAN 2023",
    hour: "18",
    minutes: "15",
    fixed: "No",
    URL: "https://gremio.net/"},
  {id: 5, 
  kindOfNews: "", 
  title: "GUIA DA PARTIDA",
  image: Guia,
  date: "03 NOV 2022",
  hour: "18",
  minutes: "11",
  fixed: "Yes",
  URL: "https://gremio.net/"},
]

export const ButtonGremioPlay = [
  {id: 1, text: "Saiba mais", URL: "https://gremio.net/"},
  {id: 2, text: "Cadastre-se", URL: "https://gremio.net/"},
  {id: 3, text: "Faça login", URL: "https://gremio.net/"},
]

export const Products = [
  {id: 1, title: "Copo suárez 9", price: "R$ 15,99", image: CopoSuarez},
  {id: 2, title: "Chinelo havaianas adulto unissex", price: "R$ 69,90", image: Chinelo},
  {id: 3, title: "Camisa Grêmio I Masc. Atleta Umbro 2021 S/Nº", price: "R$ 159,90", image: CamisaAzul2021},
  {id: 4, title: "Camisa Grêmio I Masc. Atleta Umbro 2022 S/Nº", price: "R$ 359,90", image: CamisaAzul2022},
  {id: 5, title: "Camisa Grêmio I Feminina Classic Umbro 2022 S/Nº", price: "R$ 279,90", image: CamisaFeminina},
  {id: 6, title: "Camisa Grêmio II Masc. Classic Umbro 2022 S/Nº", price: "R$ 299,90", image: CamisaBranca2022},
]

export const QuadroSocial = [
  {id: 1, text: "Programa de fidelidade", icon: <FiCheck />},
  {id: 2, text: "Desconto em produtos oficiais", icon: <FiCheck />},
  {id: 3, text: "Rede de convênios", icon: <FiCheck />},
  {id: 4, text: "Promoções e ações exclusivas", icon: <FiCheck />},
  {id: 5, text: "Ajuda o Grêmio", icon: <FiCheck />},
]

export const Elenco = [
  {id: 1, name: "Renato Portaluppi", position: "Treinado", image: Renato},
  {id: 2, name: "Adriel", position: "Goleiro", image: Adriel},
  {id: 3, name: "Gabriel Grando", position: "Goleiro", image: Grando},
  {id: 4, name: "Guilherme", position: "Atacante", image: Guilherme},
  {id: 5, name: "Jhonata Robert", position: "Atacante", image: Jhonata},
  {id: 6, name: "Luis Suárez", position: "Atacante", image: Suarez},
]

export const Informations = [
  {id: 1, 
    title: "Comunidade tri", 
    text: "A iniciativa visa o aprimoramento do entorno da Arena oportunizando à comunidade a melhoria de espaços de convívio e serviços públicos como ajardinamento, remoção de focos de lixo, reforço de sinalização, entre outros.",
    subText: "Esta atitude transformará os bairros em uma região agradável.",
    image: Comunidade
  },
  {id: 2, 
    title: "Instituto Geração Tricolor", 
    text: "Braço social do Clube, é uma associação sem fins lucrativos que tem por finalidade atender crianças e adolescentes em situação de vulnerabilidade social, por meio de atividades em horário inverso ao da escola.",
    subText: "Fortalecer os vínculos familiares e comunitários é o objetivo.",
    image: Instituto
  },
]

export const SocialIcons = [
  {id: 1, title: "Facebook", icon: <FaFacebookF />},
  {id: 2, title: "Twitter", icon: <FaTwitter />},
  {id: 3, title: "Instagram", icon: <FiInstagram />},
  {id: 4, title: "Youtube", icon: <FiYoutube />},
]

export const Patrocinadores = [
  {id:1, title: "Banrisul", image: Banrisul},
  {id:2, title: "Umbro", image: Umbro},
  {id:3, title: "Unimed", image: Unimed},
  {id:4, title: "Vero", image: Vero},
  {id:5, title: "Brahma", image: Brahma},
  {id:6, title: "mrJack", image: mrJack},
  {id:7, title: "Marquespan", image: Marquespan},
]
