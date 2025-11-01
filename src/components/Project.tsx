import React from "react";
import '../assets/styles/Project.scss';

// You'll add actual images later
const tradingImg = "https://media.istockphoto.com/id/1317587887/photo/trading-charts-on-a-display.jpg?s=1024x1024&w=is&k=20&c=fpn9EL7TIA9BxzT83LZ0_MlC5rQ4VJYSUF5f8Ig4yfY=";
const ticTacToeImg = "https://c8.alamy.com/comp/FK3KD7/tic-tac-toe-FK3KD7.jpg";
const typingImg = "https://thumbs.dreamstime.com/b/hands-typing-laptop-keyboard-close-up-motion-blur-effect-conveying-speed-technology-dynamic-indoor-setting-394997347.jpg";

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="#" target="_blank" rel="noopener noreferrer">
                    <img src={tradingImg} className="zoom" alt="thumbnail" width="100%"/>
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer">
                    <h2>Trading Order Management System</h2>
                </a>
                <p>Built high-performance trading system that processes financial orders 40% faster using optimized heap-based matching algorithms and multi-threading. Implemented thread-safe price-time priority matching engine supporting 5 order types (Market, Limit, Stop, IOC, FOK). Added comprehensive risk management with automated limits and real-time VaR calculations for pre-trade validation.</p>
            </div>
            
            <div className="project">
                <a href="#" target="_blank" rel="noopener noreferrer">
                    <img src={ticTacToeImg} className="zoom" alt="thumbnail" width="100%"/>
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer">
                    <h2>Tic Tac Toe AI Bot</h2>
                </a>
                <p>Created unbeatable AI opponent using Minimax algorithm with 100% win/draw rate. Developed terminal-based game with real-time board updates and user-friendly interface. Built robust game logic with automated win detection, draw recognition, and turn management. Applied advanced algorithms including recursion, game trees, and decision-making.</p>
            </div>
            
            <div className="project">
                <a href="#" target="_blank" rel="noopener noreferrer">
                    <img src={typingImg} className="zoom" alt="thumbnail" width="100%"/>
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer">
                    <h2>Typing Speed Tester</h2>
                </a>
                <p>Built performance analytics application that accurately measures typing speed (WPM) and character accuracy in real-time. Enhanced user engagement through randomized sentence generation system that provides varied testing scenarios. Delivered comprehensive performance metrics including WPM calculation, accuracy percentage, and error rate analysis using precise time-based algorithms.</p>
            </div>
        </div>
    </div>
    );
}

export default Project;
