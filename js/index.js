window.onload = function() {

  Particles.init({
    
    selector: '#particles',
    color: '#FFFFFF',
    maxParticles: 200,
    sizeVariations: 1,
    speed: 0.25,

    responsive: [
      {
        breakpoint: 800,
        options: {
          maxParticles: 150,
        }
      }, {
        breakpoint: 425,
        options: {
          maxParticles: 100
        }
      }, {
        breakpoint: 320,
        options: {
          maxParticles: 0
        }
      }
    ]

  });

};
