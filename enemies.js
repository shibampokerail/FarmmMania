let enemies_location = []



function initEnemies(count) {
    for (let i = 0; i < count; i++) {
      let coords = getRandomCoordinatesOnFarm();
      enemies_location.push(coords);
      enemies_location.sort((a, b) => a.y - b.y);
      
    }
  }
  
  function getRandomCoordinatesOnFarm() {
    let x = Math.random() * (windowWidth - getRelativeX(290) - getRelativeX(1157)) + getRelativeX(1257);
    let y = Math.random() * (windowHeight - getRelativeY(190) - getRelativeY(282)) + getRelativeY(320);
    
    // Array of enemies
    const enemies = [worm, crow];
    
    // Get a random enemy
    const randomEnemy = enemies[Math.floor(Math.random() * enemies.length)];
    
    return { x: x, y: y, enemy: randomEnemy };
}