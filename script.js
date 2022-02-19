window.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  console.log("DOMContentLoaded");
  const DOMContentLoadedItem = document.createElement("div");
  localStorage.setItem("DOMContentLoaded", "DOMContentLoaded");
  localStorage.removeItem("beforeunload", "beforeunload");
  DOMContentLoadedItem.textContent = `DOMContentLoaded`;
  console.log(DOMContentLoadedItem);
  root.appendChild(DOMContentLoadedItem);
});

window.addEventListener("load", () => {
  const root = document.getElementById("root");
  console.log("Load");
  localStorage.setItem("Load", "Load");
  const DOMContentLoadedItem = document.createElement("div");
  DOMContentLoadedItem.innerHTML = `<p>Load</p>`;
  console.log(DOMContentLoadedItem);
  document.body.appendChild(DOMContentLoadedItem);
});

window.addEventListener("beforeunload", () => {
  // handle beforeunload event
  localStorage.setItem("beforeunload", "beforeunload");
  console.log(
    "Before Unload Can be used for redirect confirmation or analytics information gathering"
  );
});

window.addEventListener("unload", () => {
  // handle unload event
  console.log("Page Unloaded");
  localStorage.setItem("unload", "unload");
});
