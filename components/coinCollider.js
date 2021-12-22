AFRAME.registerComponent("coin", {
    init: function () {
      for (var i = 1; i <= 20; i++) {

        var id = `coins${i}`;

        var posX = Math.floor(Math.random() * 3000 + -1000);
        var posY = Math.floor(Math.random() * 2 + -1);
        var posZ = Math.floor(Math.random() * 3000 + -1000);
  
        var position = { x: posX, y: posY, z: posZ };
  
        this.swim(id, position);
      }
    },
    swim: (id, position) => {
      var coinEl = document.querySelector("#island");
      var coinEl = document.createElement("a-entity");

      coinEl.setAttribute("id", id);
  
      coinEl.setAttribute("position", position);
      coinEl.setAttribute("scale", { x: 500, y: 500, z: 500 });
  
      coinEl.setAttribute("gltf-model", "./assets/models/coin/scene.gltf");

      islandEl.appendChild(coinEl);
    }
  });
  
  
  