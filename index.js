import { createCanvas } from 'canvas';

export default function handler(req, res) {
    const { text = 'Hello, World!', width = 800, height = 400 } = req.query;

    // Convert width and height to numbers
    const canvasWidth = parseInt(width, 10);
    const canvasHeight = parseInt(height, 10);

    // Create a canvas
    const canvas = createCanvas(canvasWidth, canvasHeight);
    const ctx = canvas.getContext('2d');

    // Set background color
    ctx.fillStyle = '#f0f0f0'; // Light gray background
    ctx.fillRect(0, 0, canvasWidth, canvasHeight);

    // Set text properties
    ctx.fillStyle = '#333'; // Dark gray text
    ctx.font = 'bold 40px Arial';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    // Draw the text in the center of the canvas
    ctx.fillText(text, canvasWidth / 2, canvasHeight / 2);

    // Convert canvas to buffer and send it as a PNG image
    const buffer = canvas.toBuffer('image/png');
    res.setHeader('Content-Type', 'image/png');
    res.send(buffer);
}
