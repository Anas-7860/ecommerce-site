import lm10_i from '../Assets/JerseyN/messi_mia.jpeg'
import cr7 from '../Assets/JerseyN/cr7_an.jpeg'
import jb5 from '../Assets/JerseyN/jude_rma.jpeg'
import eh9 from '../Assets/JerseyN/haaland_mci.jpeg'
import dr8 from '../Assets/JerseyN/rice_arsenal.jpeg'
import hk9 from '../Assets/JerseyN/kane_bm.jpeg'
import km9 from '../Assets/Jersey/mbappe psg.jpeg'
import rl9 from '../Assets/JerseyN/lewa_barca.jpeg'
const all_data = [
    {
        id: 1,
        name: "Lionel Messi - Inter Miami 2023",
        image: lm10_i,
        category: "current",
        new_price: 120.00,
        old_price: 150.00
    },
    {
        id: 2,
        name: "Cristiano Ronaldo - Al Nassr 2023",
        image: cr7,
        category: "current",
        new_price: 110.00,
        old_price: 140.00
    },
    {
        id: 3,
        name: "Jude Bellingham - Real Madrid 2023",
        image:jb5,
        category: "current",
        new_price: 115.00,
        old_price: 135.00
    },
    {
        id: 4,
        name: "Erling Haaland - Manchester City 2023",
        image: eh9,
        category: "sale",
        new_price: 125.00,
        old_price: 160.00
    },
    {
        id: 5,
        name: "Declan Rice - Arsenal 2023",
        image: dr8,
        category: "current",
        new_price: 105.00,
        old_price: 130.00
    },
    {
        id: 6,
        name: "Harry Kane - Bayern Munich 2023",
        image: hk9,
        category: "sale",
        new_price: 130.00,
        old_price: 150.00
    },
    {
        id: 7,
        name: "Kylian Mbappe - PSG 2023",
        image: km9,
        category: "current",
        new_price: 135.00,
        old_price: 165.00
    },
    {
        id: 8,
        name: "Robert Lewandowski - Barcelona 2023",
        image: rl9,
        category: "sale",
        new_price: 125.00,
        old_price: 155.00
    },
    {
        id: 9,
        name: "Virgil van Dijk - Liverpool 2023",
        image: "path/to/vandijk_liverpool.jpeg",
        category: "current",
        new_price: 115.00,
        old_price: 135.00
    },
    {
        id: 10,
        name: "Marcus Rashford - Manchester United 2023",
        image: "path/to/rashford_united.jpeg",
        category: "sale",
        new_price: 120.00,
        old_price: 150.00
    },
    // Retro Players
    {
        id: 11,
        name: "Diego Maradona - Napoli 1986",
        image: "path/to/maradona_napoli.jpeg",
        category: "retro",
        new_price: 200.00,
        old_price: 230.00
    },
    {
        id: 12,
        name: "Pele - Santos 1970",
        image: "path/to/pele_santos.jpeg",
        category: "retro",
        new_price: 210.00,
        old_price: 240.00
    },
    {
        id: 13,
        name: "Johan Cruyff - Barcelona 1974",
        image: "path/to/cruyff_barcelona.jpeg",
        category: "retro",
        new_price: 180.00,
        old_price: 200.00
    },
    {
        id: 14,
        name: "Zinedine Zidane - Real Madrid 2002",
        image: "path/to/zidane_real.jpeg",
        category: "retro",
        new_price: 170.00,
        old_price: 190.00
    },
    {
        id: 15,
        name: "Ronaldo Nazário - Inter Milan 1998",
        image: "path/to/ronaldo_inter.jpeg",
        category: "retro",
        new_price: 175.00,
        old_price: 200.00
    },
    {
        id: 16,
        name: "Thierry Henry - Arsenal 2004",
        image: "path/to/henry_arsenal.jpeg",
        category: "retro",
        new_price: 160.00,
        old_price: 190.00
    },
    {
        id: 17,
        name: "David Beckham - Manchester United 1999",
        image: "path/to/beckham_united.jpeg",
        category: "retro",
        new_price: 155.00,
        old_price: 180.00
    },
    {
        id: 18,
        name: "Franz Beckenbauer - Bayern Munich 1976",
        image: "path/to/beckenbauer_bayern.jpeg",
        category: "retro",
        new_price: 190.00,
        old_price: 220.00
    },
    {
        id: 19,
        name: "Ronaldinho - Barcelona 2006",
        image: "path/to/ronaldinho_barca.jpeg",
        category: "retro",
        new_price: 165.00,
        old_price: 200.00
    },
    {
        id: 20,
        name: "Andrea Pirlo - AC Milan 2007",
        image: "path/to/pirlo_milan.jpeg",
        category: "retro",
        new_price: 150.00,
        old_price: 180.00
    },
    // Continue for 30 more players...
    {
        id: 21,
        name: "Paolo Maldini - AC Milan 2003",
        image: "path/to/maldini_milan.jpeg",
        category: "retro",
        new_price: 170.00,
        old_price: 190.00
    },
    {
        id: 22,
        name: "Xavi Hernandez - Barcelona 2011",
        image: "path/to/xavi_barca.jpeg",
        category: "retro",
        new_price: 160.00,
        old_price: 190.00
    },
    {
        id: 23,
        name: "Carles Puyol - Barcelona 2010",
        image: "path/to/puyol_barca.jpeg",
        category: "retro",
        new_price: 160.00,
        old_price: 190.00
    },
    {
        id: 24,
        name: "Steven Gerrard - Liverpool 2005",
        image: "path/to/gerrard_liverpool.jpeg",
        category: "retro",
        new_price: 155.00,
        old_price: 180.00
    },
    {
        id: 25,
        name: "Roberto Baggio - Juventus 1993",
        image: "path/to/baggio_juventus.jpeg",
        category: "retro",
        new_price: 180.00,
        old_price: 210.00
    },
    {
        id: 26,
        name: "Zlatan Ibrahimovic - AC Milan 2022",
        image: "path/to/zlatan_milan.jpeg",
        category: "current",
        new_price: 140.00,
        old_price: 170.00
    },
    {
        id: 27,
        name: "Neymar Jr. - PSG 2022",
        image: "path/to/neymar_psg.jpeg",
        category: "current",
        new_price: 135.00,
        old_price: 160.00
    },
    {
        id: 28,
        name: "Gianluigi Buffon - Juventus 2017",
        image: "path/to/buffon_juve.jpeg",
        category: "retro",
        new_price: 145.00,
        old_price: 170.00
    },
    {
        id: 29,
        name: "Sergio Ramos - Real Madrid 2018",
        image: "path/to/ramos_real.jpeg",
        category: "retro",
        new_price: 150.00,
        old_price: 175.00
    },
    {
        id: 30,
        name: "Mesut Ozil - Arsenal 2016",
        image: "path/to/ozil_arsenal.jpeg",
        category: "retro",
        new_price: 140.00,
        old_price: 160.00
    },
    // Add 20 more to reach 50...
    {
        id: 31,
        name: "Fernando Torres - Chelsea 2012",
        image: "path/to/torres_chelsea.jpeg",
        category: "sale",
        new_price: 140.00,
        old_price: 170.00
    },
    {
        id: 32,
        name: "Alessandro Del Piero - Juventus 2006",
        image: "path/to/delpiero_juve.jpeg",
        category: "retro",
        new_price: 145.00,
        old_price: 170.00
    },
    {
        id: 33,
        name: "Kaka - AC Milan 2007",
        image: "path/to/kaka_milan.jpeg",
        category: "retro",
        new_price: 155.00,
        old_price: 180.00
    },
    {
        id: 34,
        name: "Samuel Eto'o - Barcelona 2009",
        image: "path/to/etoo_barca.jpeg",
        category: "sale",
        new_price: 160.00,
        old_price: 190.00
    },
    {
        id: 35,
        name: "Gareth Bale - Real Madrid 2017",
        image: "path/to/bale_real.jpeg",
        category: "retro",
        new_price: 160.00,
        old_price: 190.00
    },
    {
        id: 36,
        name: "Frank Lampard - Chelsea 2013",
        image: "path/to/lampard_chelsea.jpeg",
        category: "retro",
        new_price: 155.00,
        old_price: 180.00
    },
    {
        id: 37,
        name: "Luis Suarez - Barcelona 2015",
        image: "path/to/suarez_barca.jpeg",
        category: "retro",
        new_price: 150.00,
        old_price: 170.00
    },
    {
        id: 38,
        name: "Phil Foden - Manchester City 2023",
        image: "path/to/foden_mancity.jpeg",
        category: "current",
        new_price: 135.00,
        old_price: 165.00
    },
    {
        id: 39,
        name: "Son Heung-min - Tottenham 2023",
        image: "path/to/son_tottenham.jpeg",
        category: "current",
        new_price: 130.00,
        old_price: 160.00
    },
    {
        id: 40,
        name: "Mohamed Salah - Liverpool 2023",
        image: "path/to/salah_liverpool.jpeg",
        category: "current",
        new_price: 140.00,
        old_price: 170.00
    },
    {
        id: 41,
        name: "Toni Kroos - Real Madrid 2023",
        image: "path/to/kroos_real.jpeg",
        category: "current",
        new_price: 140.00,
        old_price: 165.00
    },
    {
        id: 42,
        name: "Kevin De Bruyne - Manchester City 2023",
        image: "path/to/debruyne_mancity.jpeg",
        category: "current",
        new_price: 145.00,
        old_price: 170.00
    },
    {
        id: 43,
        name: "Luka Modric - Real Madrid 2022",
        image: "path/to/modric_real.jpeg",
        category: "current",
        new_price: 140.00,
        old_price: 165.00
    },
    {
        id: 44,
        name: "Pierre-Emerick Aubameyang - Chelsea 2022",
        image: "path/to/auba_chelsea.jpeg",
        category: "current",
        new_price: 135.00,
        old_price: 160.00
    },
    {
        id: 45,
        name: "Gerard Pique - Barcelona 2021",
        image: "path/to/pique_barca.jpeg",
        category: "retro",
        new_price: 140.00,
        old_price: 170.00
    },
    {
        id: 46,
        name: "Paul Pogba - Manchester United 2022",
        image: "path/to/pogba_united.jpeg",
        category: "current",
        new_price: 135.00,
        old_price: 160.00
    },
    {
        id: 47,
        name: "Edinson Cavani - PSG 2020",
        image: "path/to/cavani_psg.jpeg",
        category: "retro",
        new_price: 145.00,
        old_price: 170.00
    },
    {
        id: 48,
        name: "Robin van Persie - Manchester United 2013",
        image: "path/to/vanpersie_united.jpeg",
        category: "retro",
        new_price: 155.00,
        old_price: 180.00
    },
    {
        id: 49,
        name: "Sergio Aguero - Manchester City 2020",
        image: "path/to/aguero_mancity.jpeg",
        category: "retro",
        new_price: 150.00,
        old_price: 175.00
    },
    {
        id: 50,
        name: "Thiago Silva - Chelsea 2023",
        image: "path/to/silva_chelsea.jpeg",
        category: "current",
        new_price: 140.00,
        old_price: 165.00
    }
];

export default all_data;
