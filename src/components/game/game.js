import React, { useState, useEffect } from 'react';
import {FlexBox} from './style';
import differenceBy from 'lodash/differenceBy';

const items = [
    {
        name: "Paula Mehmetukaj",
        country: "Albania​",
        src: "https://s2.glbimg.com/Q4JUnqEffwE3pt13ufBee76HVXQ=/620x620/top/e.glbimg.com/og/ed/f/original/2021/04/28/albania_-_paula_mehmetukaj.jpg"
    },
    {
        name: "Alina Luz Akselrad",
        country: "Argentina",
        src: "https://s2.glbimg.com/9OQjL7upjwETLz5w43__KgVAerM=/620x620/top/e.glbimg.com/og/ed/f/original/2021/04/28/argentina_-_alina_luz_akselrad.jpg"
    },
    {
        name: "Monika Grigoryan",
        country: "Armenia",
        src: "https://s2.glbimg.com/_pcXhhOPftQxLqV-cG1i-EzErdE=/620x620/top/e.glbimg.com/og/ed/f/original/2021/04/28/armenia_-_monika_grigoryan.jpg"
    },
    {
        name: "Helen Hernandez",
        country: "Aruba",
        src: "https://s2.glbimg.com/Y52v_Ob8BCw3aCPRTkUWBQCRuSg=/620x620/top/e.glbimg.com/og/ed/f/original/2021/04/28/aruba_-_helen_hernandez.jpg"
    },
    {
        name: "Helen Hernandez",
        country: "Australia",
        src: "https://s2.glbimg.com/GK-tQJ54OUfU9KOTOUSpSIed3Yg=/620x620/top/e.glbimg.com/og/ed/f/original/2021/04/28/australia_-_maria_thattil.jpg"
    },
    {
        name: "Shauntae-Ashleigh Miller",
        country: "Bahamas",
        src: "https://s2.glbimg.com/_gb1AI1oKJ5w7NAolO-cd6ZXmXA=/620x620/top/e.glbimg.com/og/ed/f/original/2021/04/28/bahamas_-_shauntae-ashleigh_miller.jpg"
    },
    {
        name: "Hillary-Ann Williams",
        country: "Barbados",
        src: "https://s2.glbimg.com/ooJv5jb02sGIKdADx3W0hPqkSEg=/620x620/top/e.glbimg.com/og/ed/f/original/2021/05/03/barbados_-_hillary-ann_williams.jpg"
    },
    {
        name: "Dhenia Covens",
        country: "Belgium",
        src: "https://s2.glbimg.com/ArUoXJ3wlp7tSF1jG87Iyy_lrsQ=/620x620/top/e.glbimg.com/og/ed/f/original/2021/04/28/belgica_-_dhenia_covens.jpg"
    },
    {
        name: "Iris Salguero",
        country: "Belize",
        src: "https://s2.glbimg.com/gNDNsP0FbGtlNoFBnDhmbrqEpwY=/620x620/top/e.glbimg.com/og/ed/f/original/2021/04/28/belize_-_iris_salguero.jpg"
    },
    {
        name: "Lenka Nemer",
        country: "Bolivia",
        src: "https://s2.glbimg.com/Mzmq8wjtucAOEpOev7tDIKUoR0k=/620x620/top/e.glbimg.com/og/ed/f/original/2021/04/28/bolivia_-_lenka_nemer.jpg"
    },
    {
        name: "Julia Gama",
        country: "Brazil",
        src: "https://s2.glbimg.com/XCShoX0qep_Q5lAct4lm4ffJvvo=/620x620/top/e.glbimg.com/og/ed/f/original/2021/04/28/brasil_-_julia_gama.jpg"
    },
    {
        name: "Shabree Frett",
        country: "British Virgin Islands",
        src: "https://s2.glbimg.com/Qlk__RKpH_Wb3wm7WYGSTMbPysw=/620x620/top/e.glbimg.com/og/ed/f/original/2021/04/28/brit._virgin_islands_-_shabree_frett.jpg"
    },
    {
        name: "Radinela Chusheva",
        country: "Bulgaria",
        src: "https://s2.glbimg.com/-3O7tSiTfTVjFHVHsyEPG4y4smE=/620x620/top/e.glbimg.com/og/ed/f/original/2021/04/28/bulgaria_-_radinela_chusheva.jpg"
    },
    {
        name: "Sarita Reth",
        country: "Cambodia",
        src: "https://s2.glbimg.com/jUmNpshQK8vU2p3Tt6cOiQ3tESc=/620x620/top/e.glbimg.com/og/ed/f/original/2021/04/28/cambodia_-_sarita_reth.jpg"
    },
    {
        name: "Kossinda Angele",
        country: "Cameroon",
        src: "https://s2.glbimg.com/i6VJNtsaY4L4ShokJ0rdir7Luq8=/620x620/top/e.glbimg.com/og/ed/f/original/2021/04/28/cameroes_-_kossinda_angele.jpg"
    },
    {
        name: "Nova Stevens",
        country: "Canada",
        src: "https://s2.glbimg.com/T__OOm-hQYa7cL6rGQWvHJ9P4eo=/620x620/top/e.glbimg.com/og/ed/f/original/2021/04/28/canada_-_nova_stevens.jpg"
    },
    {
        name: "Mariah Tibbetts",
        country: "Cayman Islands",
        src: "https://s2.glbimg.com/WyGh7cjqeWQbaGOgOHcGlJqRQ3c=/620x620/top/e.glbimg.com/og/ed/f/original/2021/04/28/cayman_islands_-_mariah_tibbetts.jpg"
    },
    {
        name: "Daniela Nicolás",
        country: "Chile",
        src: "https://s2.glbimg.com/7ctmnwG6aOlvBsizBvnOvYb_H-w=/620x620/e.glbimg.com/og/ed/f/original/2021/04/28/chile_-_daniela_nicolas.jpg"
    },
    {
        name: "Jiaxin Sun",
        country: "China",
        src: "https://s2.glbimg.com/0Lu0eaxI58kRm0PXu7lj_4dCWMA=/620x620/e.glbimg.com/og/ed/f/original/2021/04/28/china_-_jiaxin_sun.jpg"
    },
    {
        name: "Laura Olascuaga",
        country: "Colombia",
        src: "https://s2.glbimg.com/V984DepuMlQKjTQv11zmTiDjs1Q=/620x620/e.glbimg.com/og/ed/f/original/2021/04/28/colombia_-_laura_olascuaga.jpg"
    },
    {
        name: "Ivonne Cerdas",
        country: "Costa Rica",
        src: "https://s2.glbimg.com/jUAIVTYiH7RnA0b39f_unVPeF2Q=/620x620/e.glbimg.com/og/ed/f/original/2021/04/28/costa_rica_-_ivonne_cerdas.jpg"
    },
    {
        name: "Mirna Naiia Maric",
        country: "Croatia",
        src: "https://s2.glbimg.com/h7_41puzIETbj9xzwWjOWe7nVmU=/620x620/top/e.glbimg.com/og/ed/f/original/2021/04/28/croacia_-_mirna_naiia_maric.jpg"
    },
    {
        name: "Chantal Wiertz",
        country: "Curaçao",
        src: "https://s2.glbimg.com/klBMQuPxkCQT2ulA_YLSQUe0DCw=/620x620/top/e.glbimg.com/og/ed/f/original/2021/04/28/curacao_-_chantal_wiertz.jpg"
    },
    {
        name: "Klára Vavrušková",
        country: "Czech Republic",
        src: "https://s2.glbimg.com/0S2Xt4_crorLN0qqVLDUiEKfANs=/620x620/top/e.glbimg.com/og/ed/f/original/2021/04/28/czech_rep._-_klara_vavruskova.jpg"
    },
    {
        name: "Amanda Petri",
        country: "Denmark",
        src: "https://s2.glbimg.com/OCm0vMYxILWytZZejzSn2Trqnmo=/620x620/top/e.glbimg.com/og/ed/f/original/2021/04/28/dinamarca_-_amanda_petri.jpg"
    },
    {
        name: "Kimberly Jiménez",
        country: "Dominican Republic",
        src: "https://s2.glbimg.com/IJqcyFq315ztMhsVNa_M1rWmsRM=/620x620/e.glbimg.com/og/ed/f/original/2021/04/28/dom._rep_-_kimberly_jimenez.jpg"
    },
    {
        name: "Leyla Espinoza",
        country: "Ecuador",
        src: "https://s2.glbimg.com/F0JxY47WOb08t5QbtPb9Jr2cIDU=/620x620/top/e.glbimg.com/og/ed/f/original/2021/04/28/ecuador_-_leyla_espinoza.jpg"
    },
    {
        name: "Vanessa Velásquez",
        country: "El Salvador",
        src: "https://s2.glbimg.com/Gc3NtRFs0aCz7VEjjgqauwXTpeg=/620x620/top/e.glbimg.com/og/ed/f/original/2021/04/28/el_salvador_-_vanessa_velasquez.jpg"
    },
    {
        name: "Viivi Altonen",
        country: "Finland",
        src: "https://s2.glbimg.com/PSg_zqhEWTFuSUukAl5xDNavq6I=/620x620/top/e.glbimg.com/og/ed/f/original/2021/04/28/finlandia_-_viivi_altonen.jpg"
    },
    {
        name: "Amandine Petit",
        country: "France",
        src: "https://s2.glbimg.com/_uIm3Wwz_Tr6EgMkHWn4sUbVp_o=/620x620/top/e.glbimg.com/og/ed/f/original/2021/04/28/franca_-_amandine_petit.jpg"
    },
    {
        name: "Chelsea Tayui",
        country: "Ghana",
        src: "https://s2.glbimg.com/PinxnU4MrxacZEbDYPOtYmFH30w=/620x620/e.glbimg.com/og/ed/f/original/2021/04/28/gana_-_chelsea_tayui.jpg"
    },
    {
        name: "Jeanette Akua",
        country: "Great Britain",
        src: "https://s2.glbimg.com/7e5rGE1GvPrcs6RBbz0K5I_1yjM=/620x620/e.glbimg.com/og/ed/f/original/2021/04/28/gra-bretanha_-_jeanette_akua.jpg"
    },
    {
        name: "Eden Berandoive",
        country: "Haiti",
        src: "https://s2.glbimg.com/WKQySLilEPQj2SGDJCcaQg3VXjU=/620x620/e.glbimg.com/og/ed/f/original/2021/04/28/haiti_-_eden_berandoive.jpg"
    },
    {
        name: "Cecilia Rossell",
        country: "Honduras",
        src: "https://s2.glbimg.com/yq1LSs3FUyIPjpBuKpEXpnZ4AWE=/620x620/e.glbimg.com/og/ed/f/original/2021/04/28/honduras_-_cecilia_rossell.jpg"
    },
    {
        name: "Elísabet Hulda",
        country: "Iceland",
        src: "https://s2.glbimg.com/L67s2UVV_GMVK4dL7DXjjEiHriE=/620x620/top/e.glbimg.com/og/ed/f/original/2021/04/28/iceland_-_elisabet_hulda.jpg"
    },
    {
        name: "Adline Quadros Castelino",
        country: "India",
        src: "https://s2.glbimg.com/wtO40DFxv7kd8GTGxxbJULGpgMk=/620x620/top/e.glbimg.com/og/ed/f/original/2021/04/28/india_-_adline_castelino.jpg"
    },
    {
        name: "Ayu Maulida Putri",
        country: "Indonesia",
        src: "https://s2.glbimg.com/nH1xtZkUE0aF4Vy2b7PRrtGY4r0=/620x620/top/e.glbimg.com/og/ed/f/original/2021/04/28/indonesia_-_ayu_maulida_putri.jpg"
    },
    {
        name: "Nadia Sayers",
        country: "Ireland",
        src: "https://s2.glbimg.com/BWYkuFkNqynbELrK2GhtIwZQljI=/620x620/top/e.glbimg.com/og/ed/f/original/2021/04/28/irlanda_-_nadia_sayers.jpg"
    },
    {
        name: "Tehila Levi",
        country: "Israel",
        src: "https://s2.glbimg.com/LxNljxRE3-CoO8S_EQr7bQsd9d4=/620x620/top/e.glbimg.com/og/ed/f/original/2021/04/28/israel_-_tehila_levi.jpg"
    },
    {
        name: "Viviana Vizzini",
        country: "Italy",
        src: "https://s2.glbimg.com/sGlPQPPivVZp_SfkggRUpC-FsXE=/620x620/top/e.glbimg.com/og/ed/f/original/2021/04/28/italia_-_viviana_vizzini.jpg"
    },
    {
        name: "Miqueal-Symone Williams",
        country: "Jamaica",
        src: "https://s2.glbimg.com/MiidORziBI1-U2yT3T7B0t_iXvU=/620x620/e.glbimg.com/og/ed/f/original/2021/04/28/jamaica_-_miqueal-symone_williams.jpg"
    },
    {
        name: "Aisha Harumi Tochigi",
        country: "Japan",
        src: "https://s2.glbimg.com/uHr_OPIu6ptWg267wAgIUj9dlgk=/620x620/top/e.glbimg.com/og/ed/f/original/2021/04/28/japao_-_aisha_harumi_tochigi.jpg"
    },
    {
        name: "Kamila Serikbai",
        country: "Kazakhstan",
        src: "https://s2.glbimg.com/mxsm0Rbs-ejQb2xIRI9dRjQPJvc=/620x620/top/e.glbimg.com/og/ed/f/original/2021/04/28/kazaquistao_-_kamila_serikbai.jpg"
    },
    {
        name: "Hari Park",
        country: "Korea",
        src: "https://s2.glbimg.com/wg2T8gIgZRBB_rtcL6hjcVAp6NI=/620x620/top/e.glbimg.com/og/ed/f/original/2021/04/28/korea_do_sul_-_hari_park.jpg"
    },
    {
        name: "Blerta Veseli",
        country: "Kosovo",
        src: "https://s2.glbimg.com/CRyCKwK3ViGrXh-PdW29Du6d7yE=/620x620/e.glbimg.com/og/ed/f/original/2021/04/28/kosovo_-_blerta_veseli.jpg"
    },

];



const Game = () => {
    const [misses, setMisses] = useState([]);
    const [displays, setDisplays] = useState([]);
    const [winner, setWinner] = useState([]);
    const [winners, setWinners] = useState([]);
    const [loading, setLoading] = useState(false);
    const [updated, setUpdated] = useState([]);
    const [done, setDone] = useState(false);
    const [finalWinner, setFinalWinner] = useState();
    const [final, setFinal] = useState(false);
    const [looser, setLooser] = useState();
    const [loosers, setLoosers] = useState([]);



    useEffect(()=> {
        const random = items.sort(()=> Math.random() - 0.5);
        setMisses(random);
        setDisplays([random[0], random[1]]);

    },[]);


    function clickHandler(miss) {
        setWinner(miss);
        setWinners([...winners, miss]);
        const perdedora = displays.filter(item => item !== miss);
        console.log(perdedora);
        setLooser(perdedora[0]);
        setLoosers([...loosers, perdedora[0]]);
        setLoading(true);
        if(misses.length < 2){
            setFinalWinner(miss);
            setFinal(true);
        };

    };




    const handleData = () => {
        if(loading === true){
            const result = differenceBy(items, loosers, 'name');
            console.log(result);

            setUpdated(result);
            setDone(true);

            if(done === true){
                const random = updated.sort(()=> Math.random() - 0.5);
                setMisses(random);
                setDisplays([random[0], random[1]]);
                setLoading(false);

                if(updated.length === 1){
                    setFinal(true);
                }
            }


        }
    };

    handleData();


    console.log(winner);


    console.log(loosers);

    console.log(looser);

    console.log(updated);

    console.log(displays);


    console.log(loading);


    console.log("final", final);

    console.log("winner", winner);

    console.log("final winner", finalWinner);

    console.log("updated", updated[0]);









    return (
        <FlexBox>
            <h1 className="title">Miss Universe world cup</h1>
            {final ? 
            (
                <div 
                className="final">
                    <div className="centered">
                    <h1>Winner</h1>
                        <img alt={winner.name} className="image" src={winner.src}></img>
                        <h5>{winner.name}</h5>
                        <h5>{winner.country}</h5>
                    </div>
                </div>
                
            ) : 
            (
                displays.map(d => {
                    return (
                            <div 
                            className="flex-1" 
                            key = {d.name} 
                            onClick={()=> clickHandler(d)}>
                                <img alt={d.name} className="image" src={d.src}></img>
                                <h1>{d.name}</h1>
                            </div>
                        )
                })
            )}
        </FlexBox>
    )

};


export default Game;