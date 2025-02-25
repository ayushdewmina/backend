const getRobots = (req, res) => {
    const robots = [
      { id: 1, name: "Robo1", type: "AI Assistant", description: "Helps with daily tasks" },
      { id: 2, name: "MechaX", type: "Industrial", description: "Used in manufacturing" },
      { id: 3, name: "NanoBot", type: "Medical", description: "Performs micro-surgeries" }
    ];
  
    res.json(robots);
  };
  
  module.exports = { getRobots };
  