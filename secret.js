async function adicionarScriptNoHtml(objeto) {
    const token = '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'; 
    const repo = 'janeladosport/MANO-A-MANO-TIMES-DO-NORDESTE';
    const path = 'sport-fortaleza.html';
    const apiUrl = `https://api.github.com/repos/${repo}/contents/${path}`;
    let timeUm = []
    for (i=0; i < jogadoresUm.length; i++){
        const url = jogadoresUm[i].querySelector("img").src;
        const penultimaBarra = url.lastIndexOf('/', url.lastIndexOf('/', url.lastIndexOf('/') - 1) - 1);
        const resultado = url.substring(penultimaBarra + 1);
        timeUm.push(resultado)
    }
    let jogadoresDois = document.querySelectorAll(".time-dois")
    let timeDois = []
    for (i=0; i < jogadoresDois.length; i++){
        const url = jogadoresDois[i].querySelector("img").src;
        const penultimaBarra = url.lastIndexOf('/', url.lastIndexOf('/', url.lastIndexOf('/') - 1) - 1);
        const resultado = url.substring(penultimaBarra + 1);
        timeDois.push(resultado)
    }
    // 1. Buscar o arquivo atual
    const getResponse = await fetch(apiUrl, {
      headers: {
        'Authorization': `token ${token}`,
        'Accept': 'application/vnd.github.v3+json'
      }
    });
    const fileData = await getResponse.json();
    const conteudoAtual = atob(fileData.content); // Decodifica o conteúdo Base64
  
    // 2. Adicionar nova <script> antes do </body>
    const novaTagScript = `
  <script>
    fortaleza = ${timeUm}
    sport = ${timeDois}
    timesFut["Fortaleza"] = fortaleza
    timesFut["Sport"] = sport
    botarUm("Sport", false)
    botarDois("Fortaleza", false)
  </script>
  `;
  
    const novoConteudo = conteudoAtual.replace(
      '</body>',
      `${novaTagScript}\n</body>` // Insere o novo script antes do fechamento </body>
    );
  
    // 3. Codificar de novo em Base64
    const novoConteudoBase64 = btoa(novoConteudo);
  
    // 4. Enviar de volta atualizado
    const updateResponse = await fetch(apiUrl, {
      method: 'PUT',
      headers: {
        'Authorization': `token ${token}`,
        'Accept': 'application/vnd.github.v3+json'
      },
      body: JSON.stringify({
        message: 'Adicionando nova tag <script> automaticamente',
        content: novoConteudoBase64,
        sha: fileData.sha
      })
    });
  
    const updateData = await updateResponse.json();
    console.log(updateData);
  }