const currentVersion = "1.0.0"; // mesma versão do último push
  const versionUrl = "version.txt"; // caminho para o arquivo
let isVersionNew = false
  async function checkForUpdate() {
    try {
        console.log("TRYING")
      const response = await fetch(versionUrl + '?t=' + new Date().getTime()); // evita cache
      const latestVersion = (await response.text()).trim();
      if (latestVersion !== currentVersion && isVersionNew == false) {
        showUpdateNotice();
        isVersionNew = true
        clearInterval(myInterval)
        console.log("MUDOU A VERSÃO")
      } else{
        console.log(`NÃO TEM NOVIDADE. ERA: ${currentVersion} e É: ${latestVersion}`)
      }
    } catch (error) {
      console.error("Erro ao verificar versão:", error);
    }
  }

  function showUpdateNotice() {
    const notice = document.createElement("div");
    notice.setAttribute("onclick", 'window.location.reload()')
    notice.classList.add("transition")
    notice.innerText = "Novas atualizações no site. Atualize a página.";
    notice.style.position = "fixed";
    document.body.appendChild(notice)
    let topSet = 0 - notice.offsetHeight
    notice.style.inset = `${topSet}px 0 0 0`
    notice.style.top = 0
//     let counter = 0
// function mostrarAviso() {
//   if (counter >= 3) return; // para após 3 repetições
//   notice.style.top = "0"; // aparece
//   setTimeout(() => {
//     notice.style.top = `${topSet}px`; // esconde após 5s
//     counter++;
//     if (counter < 3) {
//       setTimeout(mostrarAviso, 60000); // espera 1 min e repete
//     }
//   }, 5000); // visível por 5s
// }
// // exibe imediatamente ao carregar
// mostrarAviso();
  }

showUpdateNotice()