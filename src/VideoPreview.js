import React from 'react';

import VideoData from './VideoData';
import * as PIXI from 'pixi.js';


class VideoPreview extends React.Component {
    componentDidMount() {
        const app = new PIXI.Application({
            width: this.refs.canvas.width, 
            height: this.refs.canvas.height, 
            backgroundColor: 0x1099bb, 
            resolution: window.devicePixelRatio || 1, 
            view: this.refs.canvas
        });

        const style = new PIXI.TextStyle({
            fontFamily: 'Arial',
            fontSize: 18,
            fontStyle: 'italic',
            fontWeight: 'bold',
            fill: ['#ffffff', '#00ff99'], // gradient
            stroke: '#4a1850',
            strokeThickness: 2,
            dropShadow: true,
            dropShadowColor: '#000000',
            dropShadowBlur: 4,
            dropShadowAngle: Math.PI / 6,
            dropShadowDistance: 6,
            wordWrap: true,
            wordWrapWidth: 440,
        });

        const richText = new PIXI.Text('Rich text with a lot of options\nand across multiple lines', style);
        richText.x = 10;
        richText.y = 10;

        app.stage.addChild(richText);
    }

    render() {
        return (
            <div className="lefts-border-line manufacturer-panel">
                <h1 className="manufacturer-title">
                    Video Preview
                </h1>
                <hr/>
                <div className="video-container">
                    <div className="aspect-ratio-fixer">
                        <div className="use-aspect-ratio">
                            <canvas ref="canvas" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default VideoPreview;
