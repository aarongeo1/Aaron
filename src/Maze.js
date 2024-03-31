import React from 'react';
import { ReactP5Wrapper } from 'react-p5-wrapper';
import  { useEffect, useRef } from 'react';
function mazeGenerator(p5) {
  let cols, rows;
  let w; // Cell width for maze size, to be dynamically set
  let grid = [];
  let skills = ['Python', 'SQL', 'C++','JavaScript', 'Java', 'React', 'Node','Figma', 'MongoDB', 'MySQL', 'Pandas', 'Scikit Learn', 'Android Studio', 'HTML', 'CSS', 'SQLite', 'Git', 'GitHub', 'Linux', 'Windows', 'MacOS', 'VS Code', 'Visual Studio',  'PyCharm', 'Jupyter', 'Google Colab',  'Firebase', 'AWS',  'Docker', 'Kubernetes', 'Jenkins', 'GitLab CI', 'REST APIs', 'OAuth', 'JWT', 'Express', 'Flask', 'Django', 'Vue.js', 'Angular','Cypress', 'React Testing Library', 'JUnit'];
  let skillPositions = [];
  let current;
  let stack = [];
  let whiteDot = { i: 0, j: 0 };
  let currentSkillIndex = 0;

  p5.setup = () => {
    // Determine breakpoints and set maze dimensions
    const screenWidth = p5.windowWidth;
    const screenHeight = p5.windowHeight;
    if (screenWidth < 600) { // Example breakpoint for mobile
        cols = 9;
        rows = 18;
    } else if (screenWidth < 1200) { // Example breakpoint for tablets
        cols = 20;
        rows = 18;
    } else { // Default for larger screens
        cols = 46;
        rows = 19;
    }

    // Calculate cell size based on screen size and chosen dimensions
    w = Math.min(
        Math.floor((screenWidth - 40) / cols),
        Math.floor((screenHeight - 100) / rows)
    );

    // Set canvas size based on calculated dimensions
    const canvasWidth = cols * w - 10; // Adjusted to add a border
    const canvasHeight = rows * w - 10; // Adjusted to add a border
    p5.createCanvas(canvasWidth, canvasHeight);
    p5.frameRate(5);
    p5.background(0);

    // Draw a border for the canvas
    p5.stroke(255, 204, 0); // Bright yellow color for visibility
    p5.strokeWeight(4); // Thicker stroke for the border
    p5.noFill();
    p5.rect(0, 0, canvasWidth, canvasHeight);
      // Initialize grid and maze generation
      for (let j = 0; j < rows; j++) {
          for (let i = 0; i < cols; i++) {
              let cell = new Cell(i, j);
              grid.push(cell);
          }
      }


        current = grid[0];
        whiteDot.currentCell = current; // Align whiteDot's current cell
        current.visited = true;

        do {
            let next = current.checkNeighbors();
            if (next) {
                next.visited = true;
                stack.push(current);
                removeWalls(current, next);
                current = next;
            } else if (stack.length > 0) {
                current = stack.pop();
            }
        } while (stack.length > 0);

        // Initialize skills at random positions, avoiding duplicate positions
        while (skillPositions.length < skills.length) {
            let position = Math.floor(Math.random() * grid.length);
            if (!grid[position].skill) {
                grid[position].skill = skills[skillPositions.length];
                skillPositions.push(grid[position]);
            }
        }
    };

    p5.draw = () => {
        p5.background(0);
        grid.forEach(cell => cell.show());
        moveWhiteDot(); // Corrected to work within the defined structure
    };
  function index(i, j) {
    if (i < 0 || j < 0 || i > cols - 1 || j > rows - 1) {
      return -1;
    }
    return i + j * cols;
  }

  function Cell(i, j) {
    this.i = i;
    this.j = j;
    this.walls = [true, true, true, true]; // top, right, bottom, left
    this.visited = false;

    this.checkNeighbors = function() {
      let neighbors = [];
      let top = grid[index(i, j - 1)];
      let right = grid[index(i + 1, j)];
      let bottom = grid[index(i, j + 1)];
      let left = grid[index(i - 1, j)];

      if (top && !top.visited) neighbors.push(top);
      if (right && !right.visited) neighbors.push(right);
      if (bottom && !bottom.visited) neighbors.push(bottom);
      if (left && !left.visited) neighbors.push(left);

      if (neighbors.length > 0) {
        let r = p5.floor(p5.random(0, neighbors.length));
        return neighbors[r];
      } else {
        return undefined;
      }
    };

    this.show = function() {
      let x = this.i * w;
      let y = this.j * w;
      p5.stroke(120); // Darker stroke for a subtle look
      p5.strokeWeight(2); // Thicker walls
      if (this.walls[0]) p5.line(x, y, x + w, y);
      if (this.walls[1]) p5.line(x + w, y, x + w, y + w);
      if (this.walls[2]) p5.line(x + w, y + w, x, y + w);
      if (this.walls[3]) p5.line(x, y + w, x, y);
      if (this.visited) {
          p5.noStroke();
          p5.fill(0);
          p5.rect(x, y, w, w);
      }
      // Display skill text with enhanced floating effect
      if (this.skill) {
          p5.fill(255);
          p5.textAlign(p5.CENTER, p5.CENTER);
          let adjustedFontSize = w / 3; // Dynamically adjust font size based on cell width
          p5.textSize(Math.max(adjustedFontSize, 8)); // Ensure text is not too small; adjust minimum size as needed
          // Apply enhanced glow effect
          p5.drawingContext.shadowBlur = 20; // Increase for more pronounced effect
          p5.drawingContext.shadowColor = p5.color(255, 204, 0); // Adjust color if needed
          let displayText = this.skill.length > 10 ? this.skill.substring(0, 8) + '...' : this.skill; // Abbreviate long text
          p5.text(displayText, x + w / 2, y + w / 2);
          // Reset glow effect to avoid affecting other elements
          p5.drawingContext.shadowBlur = 0;
      }
    };
  }
  function findPathBFS(start, target, grid, cols, rows) {
    let queue = [start];
    let visited = new Set([start]);
    let prev = Array(cols * rows).fill(null);
  
    while (queue.length > 0) {
      let current = queue.shift();
      let [x, y] = current.split(',').map(Number);
  
      // Directions: top, right, bottom, left
      let directions = [
        [0, -1], [1, 0], [0, 1], [-1, 0]
      ];
  
      for (let [dx, dy] of directions) {
        let nextX = x + dx;
        let nextY = y + dy;
        let next = `${nextX},${nextY}`;
  
        if (nextX >= 0 && nextX < cols && nextY >= 0 && nextY < rows && !visited.has(next) && !grid[nextY * cols + nextX].walls[dx === 1 ? 3 : dx === -1 ? 1 : dy === 1 ? 0 : 2]) {
          queue.push(next);
          visited.add(next);
          prev[nextY * cols + nextX] = `${x},${y}`;
          if (next === target) {
            let path = [];
            while (prev[nextY * cols + nextX] !== null) {
              path.unshift([nextX, nextY]);
              [nextX, nextY] = prev[nextY * cols + nextX].split(',').map(Number);
            }
            return path;
          }
        }
      }
    }
    return [];
  }
  
  function removeWalls(a, b) {
    let x = a.i - b.i;
    if (x === 1) {
      a.walls[3] = false;
      b.walls[1] = false;
    } else if (x === -1) {
      a.walls[1] = false;
      b.walls[3] = false;
    }
    let y = a.j - b.j;
    if (y === 1) {
      a.walls[0] = false;
      b.walls[2] = false;
    } else if (y === -1) {
      a.walls[2] = false;
      b.walls[0] = false;
    }
  }

  function moveWhiteDot() {
    // Create a variable to keep track of whether the white dot has found a skill
    let foundSkill = false;

    // Iterate over all skills to check if the white dot has reached one
    for (let i = 0; i < skillPositions.length; i++) {
        let skill = skillPositions[i];
        if (whiteDot.i === skill.i && whiteDot.j === skill.j) {
            // If the white dot reaches a skill, remove the skill from the grid
            grid[skill.j * cols + skill.i].skill = null;
            // Remove the skill from the skillPositions array
            skillPositions.splice(i, 1);
            // Indicate that a skill has been found
            foundSkill = true;
            // Break out of the loop since we only need to find one skill at a time
            break;
        }
    }

    // If no skill was found, continue moving towards the next targeted skill
    if (!foundSkill && currentSkillIndex < skillPositions.length) {
        let targetSkill = skillPositions[currentSkillIndex];
        let path = findPathBFS(`${whiteDot.i},${whiteDot.j}`, `${targetSkill.i},${targetSkill.j}`, grid, cols, rows);

        if (path.length > 0) {
            // Move white dot along the path towards the current skill
            let nextStep = path[0]; // Get the next step towards the skill
            whiteDot.i = nextStep[0];
            whiteDot.j = nextStep[1];
        }
    }

    // Drawing the pixel character at the new position
    drawPixelatedCharacter(whiteDot.i * w, whiteDot.j * w, w);
}

let legMove = false; // Variable to simulate walking movement

function drawPixelatedCharacter(x, y, w) {
    // Adjust proportions for a cuter look
    let headDiameter = w * 0.7; // Larger head for cuteness
    let bodyWidth = w * 0.5;
    let bodyHeight = w * 0.3; // Shorter body to emphasize head size
    let legWidth = w * 0.2;
    let legHeight = w * 0.15; // Slightly larger legs for emphasis on movement

    // Colors
    p5.fill(255); // White for the character
    p5.stroke(0); // Black outline for features

    // Head - Larger and rounder for a cuter appearance
    p5.circle(x + w / 2, y + w / 3, headDiameter);

    // Simple face - Eyes and a smile can add a lot of personality
    p5.fill(0); // Black for eyes and smile
    p5.circle(x + w / 2 - headDiameter / 4, y + w / 3, w * 0.1); // Left eye
    p5.circle(x + w / 2 + headDiameter / 4, y + w / 3, w * 0.1); // Right eye
    p5.noFill(); // For a smiling mouth
    p5.arc(x + w / 2, y + w / 3 + headDiameter / 8, w * 0.2, w * 0.1, 0, p5.PI); // Smile

    p5.fill(255); // Reset fill to white for the body
    // Body - Positioned under the head, smaller than the head to maintain cuteness
    p5.rect(x + w / 2 - bodyWidth / 2, y + w / 2, bodyWidth, bodyHeight);

    // Legs - Use ellipses for a softer look, with movement
    if (legMove) {
        // Walking position
        p5.ellipse(x + w / 2 - bodyWidth / 4, y + w - legHeight / 2, legWidth, legHeight); // Left leg
        p5.ellipse(x + w / 2 + bodyWidth / 4, y + w - legHeight / 2, legWidth, legHeight); // Right leg
    } else {
        // Standing position
        p5.ellipse(x + w / 2, y + w - legHeight / 2, legWidth, legHeight); // Center leg
    }

    // Toggle legMove for the next frame to simulate walking
    legMove = !legMove;

    // Remove stroke for other drawings
    p5.noStroke();
}


  p5.draw = () => {
    p5.background(0);
    grid.forEach(cell => cell.show());
    moveWhiteDot(); // Now follows a path to each skill in order
  };
  

// Define the Cell constructor here with the checkNeighbors method adjusted if necessary
}

function Maze() {
  // Use a ref to access the container for the ReactP5Wrapper
  const containerRef = useRef();

  useEffect(() => {
    const resizeObserver = new ResizeObserver(entries => {
      for (let entry of entries) {
        // Here, you could potentially adjust the size of the canvas if you're dynamically setting it
        // based on the container size. This is just an example place to do so.
        console.log('Container size changed', entry.contentRect);
      }
    });

    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    // Cleanup observer on component unmount
    return () => resizeObserver.disconnect();
  }, []);

  return (
    <div ref={containerRef} style={{ display: 'flex', justifyContent: 'center', maxWidth: '100vw', overflow: 'hidden', margin: 'auto' }}>
      <ReactP5Wrapper sketch={mazeGenerator} />
    </div>
  );
}

export default Maze;