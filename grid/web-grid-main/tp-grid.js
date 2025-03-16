document.addEventListener("DOMContentLoaded", () => {
  // Initial clean up. DO NOT REMOVE.
  initialCleanup();

  // Hey! Pssst! In here ...

  let hovered = 0;
  let clicked = 0;
  let total = 30;
  
  document.getElementById("btn-add-line").addEventListener("click", () => {
  for (let i = 0; i < 10; i++){
    let new_div = document.createElement("div");
    new_div.classList.add("unclicked");
    new_div.addEventListener("click", () => {
      new_div.style.backgroundColor = "green";
      if (new_div.classList.contains("unclicked")) {
      new_div.classList.replace("unclicked", "clicked");
      clicked++;
      }
      document.getElementById("clicked-squares").textContent = clicked;
      document.getElementById("original-squares").textContent = total - hovered - clicked;
      if (new_div.classList.contains("hovered")) {
        hovered--;
        new_div.classList.remove("hovered");
        document.getElementById("hovered-squares").textContent = hovered;
        document.getElementById("original-squares").textContent = total - hovered - clicked;
      }
    });
    new_div.addEventListener("mouseover", () => {
      if (new_div.classList.contains("unclicked") && !new_div.classList.contains("hovered")) {
        new_div.style.backgroundColor = "blue";
        new_div.classList.add("hovered");
        hovered++;
        document.getElementById("hovered-squares").textContent = hovered;
        document.getElementById("original-squares").textContent = total - hovered - clicked;
      }
    });
    document.getElementById("grid").appendChild(new_div);
  }
  total += 10;
  document.getElementById("total-squares").textContent = total;
  document.getElementById("original-squares").textContent = total - hovered - clicked;
  });


  document.getElementById("btn-remove-line").addEventListener("click", () => {
    const nodesToRemove = [];
    let counter = 0;
    document.getElementById("grid").childNodes.forEach((node, key) => {
      if (total - counter <= 10) {
        nodesToRemove.push(node);
      }
      counter++;
    });
    total -= 10;
    document.getElementById("total-squares").textContent = total;
    for (const node of nodesToRemove) {
      if (node.classList.contains("hovered")) {
        hovered--;
        document.getElementById("hovered-squares").textContent = hovered;
      }
      if (node.classList.contains("clicked")) {
        clicked--;
        document.getElementById("clicked-squares").textContent = clicked;
      }
      node.remove();
    }
    document.getElementById("original-squares").textContent = total - hovered - clicked;
  });


  document.getElementById("grid").childNodes.forEach((node, key) => {
    node.addEventListener("click", () => {
      node.style.backgroundColor = "green";
      if (node.classList.contains("unclicked")) {
      node.classList.replace("unclicked", "clicked");
      clicked++;
      }
      document.getElementById("clicked-squares").textContent = clicked;
      document.getElementById("original-squares").textContent = total - hovered - clicked;
      if (node.classList.contains("hovered")) {
        hovered--;
        node.classList.remove("hovered");
        document.getElementById("hovered-squares").textContent = hovered;
        document.getElementById("original-squares").textContent = total - hovered - clicked;
      }
    });
  });


  document.getElementById("grid").childNodes.forEach((node, key) => {
    node.addEventListener("mouseover", () => {
    if (node.classList.contains("unclicked") && !node.classList.contains("hovered")) {
      node.classList.add("hovered");
      node.style.backgroundColor = "blue";
      hovered++;
      document.getElementById("hovered-squares").textContent = hovered;
      document.getElementById("original-squares").textContent = total - hovered - clicked;
    }
    });
  });
});

/**
 * Cleans up the document so that the exercise is easier.
 *
 * There are some text and comment nodes that are in the initial DOM, it's nice
 * to clean them up beforehand.
 */
function initialCleanup() {
  const nodesToRemove = [];
  document.getElementById("grid").childNodes.forEach((node, key) => {
    if (node.nodeType !== Node.ELEMENT_NODE) {
      nodesToRemove.push(node);
    }
  });
  for (const node of nodesToRemove) {
    node.remove();
  }
}


