AFRAME.registerComponent("fish", {
    init: function () {
      for (var i = 1; i <= 20; i++) {

        var id = `fishes${i}`;

        var posX = Math.floor(Math.random() * 3000 + -1000);
        var posY = Math.floor(Math.random() * 2 + -1);
        var posZ = Math.floor(Math.random() * 3000 + -1000);
  
        var position = { x: posX, y: posY, z: posZ };
  
        this.swim(id, position);
      }
    },
    swim: (id, position) => {
      var islandEl = document.querySelector("#island");
      var fishEl = document.createElement("a-entity");

      fishEl.setAttribute("id", id);
  
      fishEl.setAttribute("position", position);
      fishEl.setAttribute("scale", { x: 500, y: 500, z: 500 });
  
      fishEl.setAttribute("gltf-model", "./assets/models/fish/scene.gltf");

      islandEl.appendChild(fishEl);
    }
  });
  
  
  