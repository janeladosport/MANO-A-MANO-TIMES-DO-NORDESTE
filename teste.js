let dragged = null;

document.addEventListener("dragstart", e => {
  const el = e.target.closest(".player");
  if (!el) return;

  dragged = el;
  el.classList.add("dragging");
});

document.addEventListener("dragend", e => {
  const el = e.target.closest(".player");
  if (!el) return;

  el.classList.remove("dragging");
  dragged = null;
});

document.addEventListener("dragover", e => {
  
  var container = e.target.closest(".posicao");
  if (!container || !dragged) {
    const newContainer = e.target.closest(".position-box")
    if (newContainer){
      container = newContainer
    }
    if (e.target.id == "emprestimos"){
      container = e.target
    } else{
      if (e.target.id == "venda"){
        container = e.target
      } else if (!newContainer){
        return
    
      }
  
    }
  }
  
  e.preventDefault();

  const after = getAfterElement(container, e.clientX);
  if (after == null) {
    container.prepend(dragged);
  } else {
    container.insertBefore(dragged, after);
  }
});

function getAfterElement(container, x) {
  const els = [...container.querySelectorAll(".player:not(.dragging)")];

  return els.reduce((closest, el) => {
    const box = el.getBoundingClientRect();
    const offset = x - box.left - box.width / 2;

    if (offset < 0 && offset > closest.offset) {
      return { offset, el };
    }
    return closest;
  }, { offset: Number.NEGATIVE_INFINITY }).el;
}
