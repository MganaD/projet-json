fetch("data.json")
  .then(res => res.json())
  .then(data => {

    document.body.innerHTML =
      "<h2>Légumes</h2>" +
      data.legumes.join("<br>") +
      "<h2>Fruits</h2>" +
      data.fruits.join("<br>");

  });