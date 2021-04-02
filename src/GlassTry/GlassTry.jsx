import React, { Component } from 'react';
import dataGlasses from '../Data/dataGlasses.json';

export default class GlassTry extends Component {
    state = {
        glassesCurrent: {
            "id": 3,
            "price": 30,
            "name": "DIOR D6700HQ",
            "url": "./img/glassesImage/v3.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        }
    }

    renderGlassList = () => {
        return dataGlasses.map((glassesItem, index) => {
            return <img
                onClick={() => { this.changeGlasses(glassesItem) }}
                className="ml-2 p-2 border border-width-1"
                key={index}
                src={glassesItem.url}
                alt={glassesItem.url}
                style={{
                    width: '110px',
                    cursor: 'pointer'
                }}
            />
        })
    }

    changeGlasses = (newGlasses) => {
        this.setState({
            glassesCurrent: newGlasses
        })
    }


    render() {
        const keyframe = `@keyframes animChangeGlasses${Date.now()} {
            from {
                width:0;
            }
            to {
                width:150px;
            }
        }`;

        const styleGlasses = {
            width: '150px',
            top: '75px',
            right: '70px',
            opacity: '0.7',
            animation: `animChangeGlasses${Date.now()} 1s`
        };

        return (
            <div style={{
                backgroundImage: 'url(./img/glassesImage/background.jpg)',
                backgroundSize: '2000px',
                minHeight: '2000px',
            }}>
                <style>
                    {keyframe}
                </style>
                <div style={{
                    backgroundColor: 'rgba(0,0,0,.8)',
                    minHeight: '2000px'
                }}>
                    <h3
                        style={{
                            backgroundColor: 'rgba(238,44,44,.3)'
                        }}
                        className="text-center text-light p-5"
                    >
                        TRY GLASSES APP ONLINE
                    </h3>
                    <div className="container">
                        <div className="row mt-5 text-center">
                            <div className="col-6">
                                <div className="position-relative">
                                    <img
                                        className="position-absolute"
                                        style={{
                                            width: '250px'
                                        }}
                                        src="./img/glassesImage/model.jpg"
                                        alt="model.jpg"
                                    />
                                    <img
                                        style={styleGlasses}
                                        src={this.state.glassesCurrent.url}
                                        alt={this.state.glassesCurrent.url}
                                        className="position-absolute"
                                    />
                                    <div
                                        className="position-relative"
                                        style={{
                                            width: '250px',
                                            left: '270px',
                                            top: '200px',
                                            paddingLeft: '15px',
                                            textAlign: 'left',
                                            height: '105px',
                                            backgroundColor: 'rgba(255,127,0,.5)'
                                        }}
                                    >
                                        <span
                                            style={{
                                                color: '#AB82FF'
                                            }}
                                            className="font-weight-bold"
                                        >
                                            {this.state.glassesCurrent.name}
                                        </span>
                                        <br />
                                        <span
                                            style={{
                                                fontSize: '13px',
                                                fontWeight: '400'
                                            }}
                                        >
                                            {this.state.glassesCurrent.desc}
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6">
                                <img
                                    style={{
                                        width: '250px'
                                    }}
                                    src="./img/glassesImage/model.jpg"
                                    alt="model.jpg"
                                />
                            </div>

                        </div>
                    </div>
                    {/* Div contains choosing glasses */}
                    <div
                        className="bg-light container text-center p-5 mt-5 d-flex justify-content-center"
                    >
                        {this.renderGlassList()}
                    </div>
                </div>
            </div >
        )
    }
}
