import React from "react";
import '../assets/styles/Project.scss';

// You'll add actual images later
const tradingImg = "https://via.placeholder.com/400x300/9333ea/ffffff?text=Trading+System";
const ticTacToeImg = "https://via.placeholder.com/400x300/6B21A8/ffffff?text=Tic+Tac+Toe+AI";
const typingImg = "https://via.placeholder.com/400x300/581c87/ffffff?text=Typing+Tester";

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="#" target="_blank" rel="noreferrer">
                    <img src={tradingImg} className="zoom" alt="thumbnail" width="100%"/>
                </a>
                <a href="#" target="_blank" rel="noreferrer">
                    <h2>Trading Order Management System</h2>
                </a>
                <p>Built high-performance trading system that processes financial orders 40% faster using optimized heap-based matching algorithms and multi-threading. Implemented thread-safe price-time priority matching engine supporting 5 order types (Market, Limit, Stop, IOC, FOK). Added comprehensive risk management with automated limits and real-time VaR calculations for pre-trade validation.</p>
            </div>
            
            <div className="project">
                <a href="#" target="_blank" rel="noreferrer">
                    <img src={ticTacToeImg} className="zoom" alt="thumbnail" width="100%"/>
                </a>
                <a href="#" target="_blank" rel="noreferrer">
                    <h2>Tic Tac Toe AI Bot</h2>
                </a>
                <p>Created unbeatable AI opponent using Minimax algorithm with 100% win/draw rate. Developed terminal-based game with real-time board updates and user-friendly interface. Built robust game logic with automated win detection, draw recognition, and turn management. Applied advanced algorithms including recursion, game trees, and decision-making.</p>
            </div>
            
            <div className="project">
                <a href="#" target="_blank" rel="noreferrer">
                    <img src={typingImg} className="zoom" alt="thumbnail" width="100%"/>
                </a>
                <a href="#" target="_blank" rel="noreferrer">
                    <h2>Typing Speed Tester</h2>
                </a>
                <p>Built performance analytics application that accurately measures typing speed (WPM) and character accuracy in real-time. Enhanced user engagement through randomized sentence generation system that provides varied testing scenarios. Delivered comprehensive performance metrics including WPM calculation, accuracy percentage, and error rate analysis using precise time-based algorithms.</p>
            </div>
        </div>
    </div>
    );
}

export default Project;