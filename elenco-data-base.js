var positions = {
    gol: ['Goleiro', 'gol-esc'],
    ld: ['Lateral Direito', 'ld-esc'],
    lat: ['Laterais', 'lat-esc'],
    zag: ['Zagueiros', 'zag-esc'],
    zd: ['Zagueiro Direito', 'zd-esc'],
    ze: ['Zagueiro Esquerdo', 'ze-esc'],
    le: ['Lateral Esquerdo', 'le-esc'],
    avol: ['Volantes', 'vol-esc'],
    mei: ['Meias', 'mei-esc'],
    pon: ['Pontas', 'pon-esc'],
    ca: ['Centroavante', 'ca-esc']
}

function elConjunto(position, clube, players){
    let n1 = positions[position][0]
    let n2 = positions[position][1]
    let newConjunto = []
    newConjunto.push(n1, n2)
    for (i=0; i < players.length; i++){
        newConjunto.push(`imagens/${clube}/${players[i]}.png`)
    }
    return newConjunto
}

var golSport = elConjunto('gol', 'sport', ['gabriel', 'caique-frança', 'thiago-couto', 'davi'])
var ldSport = elConjunto('ld', 'sport', ['hereda', 'matheus-alexandre', 'kayan'])
var zagSport = elConjunto('zag', 'sport', ['joao-silva', 'chico', 'rafael-thyere', 'lucas-cunha', 'antonio-carlos'])
var leSport = elConjunto('le', 'sport', ['igor-carius', 'dalbert'])
var volSport = elConjunto('avol', 'sport', ['christian-rivera', 'ze-lucas', 'pedro-augusto', 'dominguez', 'du-queiroz', 'adriel'])
var meiSport = elConjunto('mei', 'sport', ['lucas-lima', 'sergio-oliveira', 'hyoran', 'titi-ortiz'])
var ponSport = elConjunto('pon', 'sport', ['barletta', 'chino-atencio', 'romarinho', 'carlos-alberto'])
var caSport = elConjunto('ca', 'sport', ['paciencia', 'pablo', 'ze-roberto'])

var golBahia = elConjunto('gol', 'bahia', ['marcos-felipe', 'danilo-fernandes', 'ronaldo'])
var ldBahia = elConjunto('ld', 'bahia', ['gilberto', 'santi-arias'])
var leBahia = elConjunto('le', 'bahia', ['luciano-juba', 'iago-borduchi'])
var zagBahia = elConjunto('zag', 'bahia', ['kanu', 'ramos-mingo', 'gabriel-xavier', 'vitor-hugo', 'david-duarte', 'rezende'])
var volBahia = elConjunto('avol', 'bahia', ['caio-alexandre','jean-lucas', 'erick', 'acevedo', 'rezende', 'rodrigo-nestor'])
var meiBahia = elConjunto('mei', 'bahia', ['everton-ribeiro', 'cauly'])
var ponBahia = elConjunto('pon', 'bahia', ['erick-pulga','ademir', 'michel-araujo', 'kayky'])
var caBahia = elConjunto('ca', 'bahia', ['william-jose', 'lucho-rodriguez'])

var golFortaleza = ["Goleiro", "gol-esc", "imagens/fortaleza/joao-ricardo.png", "imagens/fortaleza/brenno.png", "imagens/fortaleza/magrao.png"]
var ldFortaleza = ["Lateral Direito", "ld-esc", "imagens/fortaleza/eros-mancuso.png", "imagens/fortaleza/tinga.png", "imagens/fortaleza/britez.png"]
var leFortaleza = ["Lateral Esquerdo", "le-esc", "imagens/fortaleza/bruno-pacheco.png", "imagens/fortaleza/diogo-barbosa.png", "imagens/fortaleza/felipe-jonatan.png", "imagens/fortaleza/eros-mancuso.png", "imagens/fortaleza/gaston-avila.png"]
var zdFortaleza = ["Zagueiro Direito", "zd-esc", "imagens/fortaleza/david-luiz.png", "imagens/fortaleza/britez.png", "imagens/fortaleza/kuscevic.png", "imagens/fortaleza/gustavo-mancha.png"]
var zeFortaleza = ["Zagueiro Esquerdo", "ze-esc", "imagens/fortaleza/gaston-avila.png", "imagens/fortaleza/titi.png", "imagens/fortaleza/david-luiz.png"]
var volFortaleza = ["1º Volante", "vol-esc", "imagens/fortaleza/pol-fernandez.png", "imagens/fortaleza/rosseto.png", "imagens/fortaleza/ze-welisson.png", "imagens/fortaleza/lucas-sasha.png", "imagens/fortaleza/pedro-augusto.png"]
var mcFortaleza = ["2º Volante", "mc-esc", "imagens/fortaleza/ze-welisson.png", "imagens/fortaleza/lucas-sasha.png", "imagens/fortaleza/martinez.png"]
var meiFortaleza = ["Meia", "mei-esc", "imagens/fortaleza/pochettino.png", "imagens/fortaleza/calebe.png", "imagens/fortaleza/martinez.png", "imagens/fortaleza/kervin-andrade.png"]
var pdFortaleza = ["Ponta direita", "pd-esc", "imagens/fortaleza/pikachu.png", "imagens/fortaleza/marinho.png"]
var peFortaleza = ["Ponta esquerda", "pe-esc", "imagens/fortaleza/moises.png", "imagens/fortaleza/breno-lopes.png"]
var caFortaleza = ["Centroavante", "ca-esc", "imagens/fortaleza/lucero.png", "imagens/fortaleza/renato-kayzer.png", "imagens/fortaleza/dylan-borrero.png"]

var golVitoria = ["Goleiro", "gol-esc", "imagens/vitoria/lucas-arcanjo.png", "imagens/vitoria/gabriel.png", "imagens/vitoria/fintelman.png"]
var ldVitoria = ["Lateral Direito", "ld-esc", "imagens/vitoria/claudinho.png", "imagens/vitoria/raul-caceres.png"]
var leVitoria = ["Lateral Esquerdo", "le-esc", "imagens/vitoria/jamerson.png", "imagens/vitoria/hugo.png", "imagens/vitoria/ze-marcos.png"]
var zdVitoria = ["Zagueiro Direito", "zd-esc", "imagens/vitoria/neris.png", "imagens/vitoria/lucas-halter.png", "imagens/vitoria/camutanga.png", "imagens/vitoria/edu.png"]
var zeVitoria = ["Zaguerio Esquerdo", "ze-esc", "imagens/vitoria/lucas-halter.png", "imagens/vitoria/ze-marcos.png", "imagens/vitoria/neris.png"]
var volVitoria = ["1º Volante", "vol-esc", "imagens/vitoria/baralhas.png", "imagens/vitoria/dionisio.png", "imagens/vitoria/ricardo-ryller.png", "imagens/vitoria/val-soares.png", "imagens/vitoria/william-oliveira.png", "imagens/vitoria/thiago-conti.png"]
var mcVitoria = ["2º Volante", "mc-esc", "imagens/vitoria/pepê.png", "imagens/vitoria/ronald.png", "imagens/vitoria/dionisio.png", "imagens/vitoria/val-soares.png", "imagens/vitoria/william-oliveira.png", "imagens/vitoria/thiago-conti.png"]
var meiVitoria = ["Meia", "mei-esc", "imagens/vitoria/matheusinho.png", "imagens/vitoria/wellington-rato.png", "imagens/vitoria/pablo.png", "imagens/vitoria/pepê.png"]
var pdVitoria = ["Ponta direita", "pd-esc", "imagens/vitoria/gustavo-mosquito.png", "imagens/vitoria/lucas-braga.png", "imagens/vitoria/wellington-rato.png", "imagens/vitoria/matheusinho.png", "imagens/vitoria/janderson.png"]
var peVitoria = ["Ponta esquerda", "pe-esc", "imagens/vitoria/lucas-braga.png", "imagens/vitoria/wellington-rato.png", "imagens/vitoria/carlos-eduardo.png", "imagens/vitoria/bruno-xavier.png"]
var caVitoria = ["Centroavante", "ca-esc", "imagens/vitoria/janderson.png", "imagens/vitoria/fabri.png", "imagens/vitoria/carlinhos.png"]

var golCeara = elConjunto('gol', 'ceara', ['bruno-ferreira', 'fernando-miguel', 'keiller', 'richard'])
var ldCeara = elConjunto('ld', 'ceara', ['fabiano-souza', 'rafael-ramos', 'dieguinho'])
var zagCeara = elConjunto('zag', 'ceara', ['marllon', 'william-machado', 'eder', 'ramon-menezes', 'gabriel-lacerda', 'luiz-otavio', 'marcos-vitor'])
var leCeara = elConjunto('le', 'ceara', ['matheus-bahia', 'nicolas', 'william-machado'])
var volCeara = elConjunto("avol", 'ceara', ['dieguinho', 'fernando-sobral', 'lourenço', 'richardson'])
var meiCeara = elConjunto("mei", 'ceara', ['lucas-mugni', 'matheus-araujo', 'romulo', 'recalde'])
var ponCeara = elConjunto("pon", 'ceara', ['pedro-henrique', 'fernandinho', 'galeano', 'bruno-tubarao', 'joao-victor', 'alejandro-martinez'])
var caCeara = elConjunto("ca", 'ceara', ['pedro-raul', 'aylon', 'guilherme'])

var golSp = elConjunto('gol', 'sao paulo', ['rafael', 'jandrei'])
var latSp = elConjunto('lat', 'sao paulo', ['enzo-diaz', 'wendell', 'igor-vinicius', 'cedric'])
var zagSp = elConjunto('zag','sao paulo', ['alan-franco', 'arboleda', 'ferraresi', 'sabino', 'ruan', 'patryck'])
var volSp = elConjunto('avol', 'sao paulo', ['alisson', 'bobadilla', 'marcos-antonio', 'pablo-maia', 'luiz-gustavo'])
var meiSp = elConjunto('mei', 'sao paulo', ['lucas-moura', 'matheus-alves', 'oscar', 'rodriguinho'])
var ponSp = elConjunto("pon", 'sao paulo', ['ferreirinha', 'lucas-ferreira', 'luciano'])
var caSp = elConjunto("ca", 'sao paulo', ['andre-silva', 'calleri', 'ryan-francisco'])

var golMir = elConjunto("gol", 'mirassol', ['walter', 'alex-muralha'])
var latMir = elConjunto("lat", 'mirassol', ['lucas-ramon', 'reinaldo', 'daniel-borges'])
var zagMir = elConjunto("zag", 'mirassol', ['joao-victor', 'jemmes', 'luiz-otavio', 'david-braz'])
var avolMir = elConjunto("avol", 'mirassol', ['neto-moura', 'danielzinho', 'yago-felipe', 'jose-aldo', 'roni'])
var meiMir = elConjunto("mei", 'mirassol', ['gabriel', 'chico-kim'])
var ponMir = elConjunto("pon", 'mirassol', ['negueba', 'fabricio-daniel'])
var caMir = elConjunto("ca", "mirassol", ['edson-carioca', 'leo-gamalho'])

var dados = {
    Sport: [golSport, ldSport, zagSport, leSport, volSport, meiSport, ponSport, caSport],
    Bahia: [golBahia, ldBahia, zdBahia, zeBahia, leBahia, volBahia, mcBahia, meiBahia, pdBahia, peBahia, caBahia],
    Fortaleza: [golFortaleza, ldFortaleza, zdFortaleza, zeFortaleza, leFortaleza, volFortaleza, mcFortaleza, meiFortaleza, pdFortaleza, peFortaleza, caFortaleza],
    Vitoria:[golVitoria, ldVitoria, zdVitoria, zeVitoria, leVitoria, volVitoria, mcVitoria, meiVitoria, pdVitoria, peVitoria, caVitoria],
    Ceara: [golCeara, ldCeara,zdCeara, zeCeara, leCeara, volCeara, mcCeara, meiCeara, pdCeara, peCeara, caCeara]
};

function createElement(tag, properties){
    let newElement = document.createElement(tag)
    if (!properties){return newElement}
    for (j=0; j < properties.length; j++){
        let actual = properties[j]
        if (actual[0] == 'class'){newElement.classList.add(actual[1])} else if (actual[0] == 'innerHTML'){newElement.innerHTML = actual[1]} else{
            newElement.setAttribute(actual[0], actual[1])
        }
    }
    return newElement
}