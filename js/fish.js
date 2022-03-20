AFRAME.registerComponent("fish", {
    init: function () {
      for (var i = 1; i <= 10; i++) {
        const id = `fish${i}`;
  
        const posX = Math.random() * 100 + -50;
        const posY = Math.random() * 5 + 5;
        const posZ = Math.random() * 60 + -40;
        const position = { x: posX, y: posY, z: posZ };
        this.genrateFish(id, position);
      }
    },
    genrateFish: function (id, position) {
      const fishModelEntity = document.querySelector("#fishModels");
      var fishEl = document.createElement("a-entity");
  
      fishEl.setAttribute("id", id);
      fishEl.setAttribute("position", position);
      fishEl.setAttribute("rotation", { x: 0, y: 270, z: 0 });
  
      fishEl.setAttribute("scale", { x: 2, y: 2, z: 2 });
  
      fishEl.setAttribute("gltf-model", "../assets/fish/scene.gltf");
  
      
      fishEl.setAttribute("animation", {
        property: "position",
        to: "100 10 -20",
        loop: "true",
        dur: 20000
      });
  
      fishEl.setAttribute("animation-mixer", {});
      fishEl.setAttribute("static-body", {
        shape: "sphere",
        sphereRadius: 2
      });
  
       //set the game play attribute
       fishEl.setAttribute("game-play", {
        elementId: `#${id}`,
      });
  
      fishModelEntity.appendChild(fishEl);
    }
  })