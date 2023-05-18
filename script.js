const svg = document.getElementById('basesvg');

function drawCircle(x, y, radius, color) {
    const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    circle.setAttribute('cx', x);
    circle.setAttribute('cy', y);
    circle.setAttribute('r', radius);
    circle.setAttribute('stroke', color);
    circle.setAttribute('stroke-width', 2);
    circle.setAttribute('fill', color);
    svg.appendChild(circle);
}

function isEven(num) {
    return num % 2 === 0;
}

function getRandomColor(shouldBeEven) {
    const letters = '02468ACE';
    const oddLetters = '13579BDF';
    let color = '#';

    for (let i = 0; i < 6; i++) {
        if (shouldBeEven) {
            color += letters[Math.floor(Math.random() * letters.length)];
        } else {
            color += oddLetters[Math.floor(Math.random() * oddLetters.length)];
        }
    }

    return color;
}

const bigCircleColor = getRandomColor(true);
const smallCircle1Color = getRandomColor(false);
const smallCircle2Color = getRandomColor(true);
const smallCircle3Color = getRandomColor(false);
const smallCircle4Color = getRandomColor(true);
const smallCircle5Color = getRandomColor(false);
const smallCircle6Color = getRandomColor(true);

drawCircle(300, 300, 200, bigCircleColor);
drawCircle(300, 300, 160, smallCircle1Color);
drawCircle(300, 300, 120, smallCircle2Color);
drawCircle(300, 300, 80, smallCircle3Color);
drawCircle(300, 300, 40, smallCircle4Color);
drawCircle(300, 300, 20, smallCircle5Color);
drawCircle(300, 300, 10, smallCircle6Color);