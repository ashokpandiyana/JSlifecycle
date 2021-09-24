document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  console.log("DOMContentLoaded");
  const DOMContentLoadedItem = document.createElement("div");
  DOMContentLoadedItem.textContent = `DOMContentLoaded`;
  console.log(DOMContentLoadedItem);
  root.appendChild(DOMContentLoadedItem);
});

document.addEventListener("load", () => {
  const root = document.getElementById("root");
  console.log("Load");
  const DOMContentLoadedItem = document.createElement("div");
  DOMContentLoadedItem.append("<>Load</p>");
  console.log(DOMContentLoadedItem);
  root.appendChild(DOMContentLoadedItem);
});

document.addEventListener("beforeunload", () => {
  // handle beforeunload event
  console.log(
    "Before Unload Can be used for redirect confirmation or analytics information gathering"
  );
});

document.addEventListener("unload", () => {
  // handle unload event
  console.log("Page Unloaded");
});
