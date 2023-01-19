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

/*Dados para o Header*/
export const HeaderList = [
    {id: 1, option: "Futebol", URL: "/", 
      Sublist: [
        {id: 1, column:1, text: "Categoria de base", subText: "", URL: "/futebol/categoria-de-base"},
        {id: 2, column:1, text: "Escola de futebol", subText: "", URL: "/futebol/escola-de-futebol"},
        {id: 3, column:1, text: "Avaliação", subText: "", URL: "/futebol/avaliacao"},
        {id: 4, column:1, text: "Núcleos de captação", subText: "", URL: "/futebol/nucleos-de-captacao"},
        {id: 5, column:1, text: "Guias da partida", subText: "", URL: "/futebol/guias-da-partida"},
        {id: 6, column:2, text: "Futebol Masculino", subText: [
          {id: 1, subText1: "Profissional", URL: "/futebol/profissional"},
          {id: 2, subText1: "Sub 20", URL: "/futebol/sub20"},
          {id: 3, subText1: "Sub 17", URL: "/futebol/sub17"},
        ], URL: ""},
        {id: 7, column:3, text: "Futebol Feminino", subText: [
          {id: 1, subText1: "Profissional", URL: "/futebol/profissional-feminino"},
          {id: 2, subText1: "Sub 20", URL: "/futebol/sub20-feminino"}
        ], URL: ""},
      ]},
    {id: 2, option: "Clube", URL: "/", 
      Sublist: [
        {id: 1, column:1, text: "Conselho de administração", subText: "", URL: "/clube/conselho-de-administracao"},
        {id: 2, column:1, text: "Conselho deliberativo", subText: "", URL: "/clube/conselho-deliberativo"},
        {id: 3, column:1, text: "Consulados", subText: "", URL: "/clube/consulados"},
        {id: 4, column:1, text: "Governança", subText: "", URL: "/clube/governanca"},
        {id: 5, column:1, text: "Sgq - Sistema de gestão da qualidade", subText: "", URL: "/clube/sgq"},
        {id: 6, column:1, text: "Depto do torcedor gremista", subText: "", URL: "/clube/depto-do-torcedor"},
        {id: 7, column:1, text: "Ctg tricolor dos pampas", subText: "", URL: "/clube/ctg"},
        {id: 8, column:1, text: "Instituto geração tricolor", subText: "", URL: "/clube/instituto-tricolor"},
        {id: 9, column:2, text: "Licenciamento", subText: [
          {id: 1, subText1: "Fabricantes licenciados", URL: "/clube/fabricantes-licenciados"},
          {id: 2, subText1: "Seja um lojista", URL: "/clube/seja-um-lojista"},
          {id: 3, subText1: "Grêmiomania", URL: "/clube/gremiomania"},
        ], URL: ""},
        {id: 10, column:3, text: "Estrutura", subText: [
          {id: 1, subText1: "Arena do grêmio", URL: "/clube/arena-do-gremio"},
          {id: 2, subText1: "Capela nossa senhora medianeira", URL: "/clube/capela"},
          {id: 3, subText1: "Cft pres. Hélio Dourado", URL: "/clube/cft-helio-dourado"},
          {id: 4, subText1: "Ct Cristal", URL: "/clube/ct-cristal"},
          {id: 5, subText1: "Ct pres. Luiz Carvalho", URL: "/clube/ct-luiz-carvalho"},
          {id: 6, subText1: "Ilha do grêmio", URL: "/clube/ilha-do-gremio"},
          {id: 7, subText1: "Museu Hermínio", URL: "/clube/museu-herminio"},
          {id: 8, subText1: "Bittencourt", URL: "/clube/bitterncourt"},
        ], URL: ""},
        {id: 11, column:4, text: "Departamento Social", subText: [
          {id: 1, subText1: "Comunidade Tri", URL: "/clube/comunidade-tri"},
        ], URL: ""},
        {id: 12, column:4, text: "História", subText: [
          {id: 1, subText1: "Fundação", URL: "/clube/fundacao"},
          {id: 2, subText1: "Estádio Olímpico", URL: "/clube/estadio-olimpico"},
          {id: 3, subText1: "Calçada da Fama", URL: "/clube/calcada-da-fama"},
          {id: 4, subText1: "Heróis", URL: "/clube/herois"},
          {id: 5, subText1: "Presidentes", URL: "/clube/presidentes"},
          {id: 6, subText1: "Simbolos", URL: "/clube/simbolos"},
          {id: 7, subText1: "Títulos", URL: "/clube/titulos"},
        ], URL: ""},
      ]},
    {id: 3, option: "Sócios", URL: "/socios", Sublist: []},
    {id: 4, option: "Grêmiomania", URL: "/gremio-mania", Sublist: []},
    {id: 5, option: "Ingressos", URL: "/ingressos", Sublist: []},
    {id: 6, option: "Notícias", URL: "/noticias", Sublist: []},
    {id: 7, option: "Contato", URL: "/contato", Sublist: []},
    {id: 8, option: "Grêmio Play", URL: "/gremio-play", Sublist: []},
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