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

var golSport = elConjunto('gol', 'sport', ['gabriel', 'caique-frança', 'davi'])
var ldSport = elConjunto('ld', 'sport', ['hereda', 'matheus-alexandre', 'aderlan'])
var zagSport = elConjunto('zag', 'sport', ['joao-silva', 'chico', 'ramon', 'rafael-thyere'])
var leSport = elConjunto('le', 'sport', ['igor-carius', 'kevyson', 'luan-candido', 'victor-hugo'])
var volSport = elConjunto('avol', 'sport', ['christian-rivera', 'ze-lucas', 'pedro-augusto', 'lucas-kal', 'adriel'])
var meiSport = elConjunto('mei', 'sport', ['lucas-lima', 'sergio-oliveira', 'hyoran'])
var ponSport = elConjunto('pon', 'sport', ['barletta', 'chino-atencio', 'derik-lacerda', 'matheusinho', 'romarinho'])
var caSport = elConjunto('ca', 'sport', ['ignacio-ramirez', 'paciencia', 'pablo', 'ze-roberto'])

var golBahia = elConjunto('gol', 'bahia', ['marcos-felipe', 'danilo-fernandes', 'ronaldo'])
var ldBahia = elConjunto('ld', 'bahia', ['gilberto', 'santi-arias'])
var leBahia = elConjunto('le', 'bahia', ['luciano-juba', 'iago-borduchi'])
var zagBahia = elConjunto('zag', 'bahia', ['kanu', 'ramos-mingo', 'gabriel-xavier', 'vitor-hugo', 'david-duarte', 'rezende'])
var volBahia = elConjunto('avol', 'bahia', ['caio-alexandre','jean-lucas', 'erick', 'acevedo', 'rezende', 'rodrigo-nestor'])
var meiBahia = elConjunto('mei', 'bahia', ['everton-ribeiro', 'cauly'])
var ponBahia = elConjunto('pon', 'bahia', ['erick-pulga','ademir', 'michel-araujo', 'kayky'])
var caBahia = elConjunto('ca', 'bahia', ['william-jose', 'lucho-rodriguez'])

var golFortaleza = elConjunto('gol', 'fortaleza', ['joao-ricardo', 'brenno', 'magrao'])
var ldFortaleza = elConjunto('ld', 'fortaleza', ['eros-mancuso', 'tinga'])
var leFortaleza = elConjunto('le', 'fortaleza', ['bruno-pacheco', 'diogo-barbosa'])
var zagFortaleza = elConjunto('zag', 'fortaleza', ['david-luiz', 'gustavo-mancha', 'britez', 'kuscevic', 'gaston-avila', 'lucas-gazal', 'benevenuto'])
var volFortaleza = elConjunto('avol', 'fortaleza', ['ze-welisson', 'lucas-sasha', 'martinez', 'rosseto', 'rodrigo-santos', 'pierre', 'pablo-roberto'])
var meiFortaleza = elConjunto('mei', 'fortaleza', ['pochettino', 'calebe', 'kervin-andrade', 'matheus-pereira'])
var ponFortaleza = elConjunto('pon', 'fortaleza', ['marinho', 'breno-lopes', 'lucca-prior', 'moises', 'pikachu'])
var caFortaleza = elConjunto('ca', 'fortaleza', ['deyverson', 'lucero'])

var golVitoria = ["Goleiro", "gol-esc", "imagens/vitoria/lucas-arcanjo.png", "imagens/vitoria/fintelman.png"]
var ldVitoria = ["Lateral Direito", "ld-esc", "imagens/vitoria/claudinho.png", "imagens/vitoria/raul-caceres.png"]
var leVitoria = ["Lateral Esquerdo", "le-esc", "imagens/vitoria/jamerson.png", "imagens/vitoria/ze-marcos.png"]
var zdVitoria = ["Zagueiro Direito", "zd-esc", "imagens/vitoria/neris.png", "imagens/vitoria/lucas-halter.png", "imagens/vitoria/camutanga.png", "imagens/vitoria/edu.png"]
var zeVitoria = ["Zaguerio Esquerdo", "ze-esc", "imagens/vitoria/lucas-halter.png", "imagens/vitoria/ze-marcos.png", "imagens/vitoria/neris.png"]
var volVitoria = ["1º Volante", "vol-esc", "imagens/vitoria/baralhas.png", "imagens/vitoria/dionisio.png", "imagens/vitoria/ricardo-ryller.png", "imagens/vitoria/val-soares.png", "imagens/vitoria/william-oliveira.png", "imagens/vitoria/thiago-conti.png"]
var mcVitoria = ["2º Volante", "mc-esc", "imagens/vitoria/pepê.png", "imagens/vitoria/ronald.png", "imagens/vitoria/dionisio.png", "imagens/vitoria/val-soares.png", "imagens/vitoria/william-oliveira.png"]
var meiVitoria = ["Meia", "mei-esc", "imagens/vitoria/matheusinho.png", "imagens/vitoria/pepê.png"]
var pdVitoria = ["Ponta direita", "pd-esc", "imagens/vitoria/lucas-braga.png", "imagens/vitoria/matheusinho.png"]
var peVitoria = ["Ponta esquerda", "pe-esc", "imagens/vitoria/lucas-braga.png"]
var caVitoria = ["Centroavante", "ca-esc", "imagens/vitoria/fabri.png", "imagens/vitoria/renato-kayzer.png"]

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

var golRBB = elConjunto("gol", 'bragantino', ['cleiton', 'lucao', 'fernando-costa', 'fabricio'])
var latRBB = elConjunto("lat", 'bragantino', ['andres-hurtado', 'santanna', 'nathan-mendes', 'juninho-capixaba', 'guilherme-lopes'])
var zagRBB = elConjunto("zag", "bragantino", ['pedro-henrique', 'guzman', 'eduardo', 'gustavo-marques'])
var volRBB = elConjunto("avol", "bragantino", ['gabriel', 'eric-ramires', 'fabinho', 'matheus-fernandes'])
var meiRBB = elConjunto("mei", "bragantino", ['jhon-jhon', 'gustavo-neves', 'joao-neto'])
var ponRBB = elConjunto("pon", 'bragantino', ['lucas-barbosa', 'mosquera', 'vinicinho', 'laquintana', 'marcelinho-braz', 'athyrson'])
var caRBB = elConjunto("ca", 'bragantino', ['pitta', 'sasha', 'thiago-borbas', 'fernando'])

var golVAS = elConjunto("gol", 'vasco', ['leo-jardim', 'daniel-fuzato', 'pablo'])
var latVAS = elConjunto("lat", 'vasco', ['puma-rodriguez', 'paulo-henrique', 'lucas-piton', 'victor-luis', 'paulo-ricardo', 'riquelme'])
var zagVAS = elConjunto("zag", "vasco", ['cuesta', 'robert-renan', 'lucas-freitas', 'lucas-oliveira'])
var volVAS = elConjunto("avol", "vasco", ['cauan-barros', 'jair', 'tche-tche', 'thiago-mendes', 'hugo-moura', 'paulinho', 'matheus-carvalho'])
var meiVAS = elConjunto("mei", "vasco", ['coutinho', 'estrella'])
var ponVAS = elConjunto("pon", 'vasco', ['rayan', 'nuno-moreira','garre', 'loide-augusto', 'andres-gomez', 'jean-david', 'adson'])
var caVAS = elConjunto("ca", 'vasco', ['vegetti', 'david', 'matheus-frança'])

var golGRE = elConjunto("gol", 'gremio', ['tiago-volpi', 'gabriel-grando', 'thiago-beltrame', 'jorge'])
var latGRE = elConjunto("lat", 'gremio', ['marlon', 'marcos-rocha', 'lucas-esteves', 'enzo', 'joao-lucas', 'joao-pedro'])
var zagGRE = elConjunto("zag", "gremio", ['kannemann', 'balbuena', 'wagner-leonardo', 'gustavo-martins', 'jemerson', 'rodrigo-ely', 'viery'])
var volGRE = elConjunto("avol", "gremio", ['dodi', 'edenilson', 'erick-noriega', 'villasanti', 'willian', 'alex-santana', 'camilo', 'cuellar'])
var meiGRE = elConjunto("mei", "gremio", ['arthur', 'cristaldo', 'monsalve', 'riquelme'])
var ponGRE = elConjunto("pon", 'gremio', ['aravena', 'cristian-oliveira', 'pavon', 'alysson'])
var caGRE = elConjunto("ca", 'gremio', ['braithwaite', 'carlos-vinicius', 'andre-henrique'])

var golCRU = elConjunto("gol", 'cruzeiro', ['cassio', 'leo-aragao', 'otavio'])
var latCRU = elConjunto("lat", 'cruzeiro', ['william', 'kaiki', 'fagner', 'kaua-moraes', 'kaua-prates'])
var zagCRU = elConjunto("zag", "cruzeiro", ['fabricio-bruno', 'villalba', 'joao-marcelo', 'jonathan-jesus', 'gamarra'])
var volCRU = elConjunto("avol", "cruzeiro", ['lucas-romero', 'walace', 'lucas-silva', 'matheus-henrique', 'murilo-rhikman'])
var meiCRU = elConjunto("mei", "cruzeiro", ['matheus-pereira', 'eduardo', 'japa', 'ryan-guilherme'])
var ponCRU = elConjunto("pon", 'cruzeiro', ['christian', 'wanderson', 'bolasie', 'sinisterra', 'marquinhos', 'keny-arroyo'])
var caCRU = elConjunto("ca", 'cruzeiro', ['kaio-jorge', 'gabigol', 'kaique-kenji'])

var golPAL = elConjunto("gol", 'palmeiras', ['weverton', 'carlos-miguel', 'marcelo-lomba'])
var latPAL = elConjunto("lat", 'palmeiras', ['giay', 'khellven', 'piquerez', 'jefte'])
var zagPAL = elConjunto("zag", "palmeiras", ['bruno-fuchs', 'murilo', 'gustavo-gomez', 'micael', 'benedetti'])
var volPAL = elConjunto("avol", "palmeiras", ['anibal-moreno', 'martinez', 'andreas-pereira', 'lucas-evangelista', 'figueiredo'])
var meiPAL = elConjunto("mei", "palmeiras", ['mauricio', 'raphael-veiga'])
var ponPAL= elConjunto("pon", 'palmeiras', ['paulinho', 'ramon-sosa', 'facundo-torres', 'bruno-rodrigues', 'felipe-anderson'])
var caPAL = elConjunto("ca", 'palmeiras', ['vitor-roque', 'flaco-lopez', 'luighi'])

// var gol = elConjunto("gol", 'team', [])
// var lat = elConjunto("lat", 'team', [])
// var zag = elConjunto("zag", "team", [])
// var vol = elConjunto("avol", "team", [])
// var mei = elConjunto("mei", "team", [])
// var pon = elConjunto("pon", 'team', [])
// var ca = elConjunto("ca", 'team', [])


let pos = ['gol','lat','zag','vol','mei','pon','ca']

var dados = {
    Sport: [golSport, ldSport, zagSport, leSport, volSport, meiSport, ponSport, caSport],
    Bahia: [golBahia, ldBahia, zagBahia, leBahia, volBahia, meiBahia, ponBahia, caBahia],
    Fortaleza: [golFortaleza, ldFortaleza, zagFortaleza, leFortaleza, volFortaleza, meiFortaleza, ponFortaleza, caFortaleza],
    Vitoria:[golVitoria, ldVitoria, zdVitoria, zeVitoria, leVitoria, volVitoria, mcVitoria, meiVitoria, pdVitoria, peVitoria, caVitoria],
    Ceara: allConjunto("Ceara"),
    Bragantino: allConjunto("RBB"),
    Vasco: allConjunto("VAS"),
     Gremio: allConjunto("GRE"),
     Cruzeiro: allConjunto("CRU"),
     Palmeiras: allConjunto("PAL")
};


function allConjunto(team){
    let conjunto = []
    for (i=0; i< pos.length; i++){
        conjunto.push(window[pos[i]+team])
    }
    return conjunto
}

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