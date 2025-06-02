let currentVersion = "1.0.0"; // versão atual que o site está usando
let hasShownNotice = false;

async function checkForUpdate() {
  try {
    const response = await fetch("version.js?t=" + new Date().getTime());
    const text = await response.text();
    const match = text.match(/appVersion\s*=\s*["'](.*?)["']/);
    const latestVersion = match ? match[1] : null;
    if (latestVersion && latestVersion !== currentVersion && !hasShownNotice) {
      console.log(`Nova versão detectada: ${latestVersion}`);
      showUpdateNotice(); // sua função para avisar o usuário
      hasShownNotice = true;
    } else {
      console.log(`Sem novidade. Versão atual: ${currentVersion}, última: ${latestVersion}`);
    }
  } catch (err) {
    console.error("Erro ao buscar versão:", err);
  }
}

function reloadWithoutCache() {
  const currentUrl = window.location.href.split("?")[0];
  const newUrl = currentUrl + "?updated=" + new Date().getTime();
  window.location.href = newUrl;
}

  function showUpdateNotice() {
    const notice = document.createElement("div");
    notice.setAttribute("onclick", 'reloadWithoutCache()')
    notice.classList.add("transition")
    notice.innerText = "Novas atualizações no site. Clique aqui para atualizar a página.";
    notice.style.position = "fixed";
    document.body.appendChild(notice)
    let topSet = 0 - notice.offsetHeight
    notice.style.inset = `${topSet}px 0 0 0`
    notice.style.top = 0
    let counter = 0
function mostrarAviso() {
  if (counter >= 3) return; // para após 3 repetições
  notice.style.top = "0"; // aparece
  setTimeout(() => {
    notice.style.top = `${topSet}px`; // esconde após 5s
    counter++;
    if (counter < 3) {
      setTimeout(mostrarAviso, 60000); // espera 1 min e repete
    }
  }, 5000); // visível por 5s
}
// exibe imediatamente ao carregar
mostrarAviso();
  }