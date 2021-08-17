import React, { Component } from 'react';
import './Thukinh.css';
import dataGlasses from '../assets/json/dataGlasses.json';
export default class ThuKinh extends Component {
    state = {
        GlassesCurrent: {
            "id": 1,
            "price": 30,
            "name": "GUCCI G8850U",
            "url": "./glassesImage/v1.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        }
    };
    tryGlasses = (newGlasses) => {
        this.setState({
            GlassesCurrent: newGlasses
        });
    };
    renderGlasses = () => {
        let Glasses = dataGlasses.map((glasses, index) => {
            return <div className='col-2 border border-dark' style={{ cursor: "pointer" }} key={index}>
                <img src={glasses.url} alt={glasses.name} style={{ width: "100px" }} className='my-3'
                    onClick={() => { this.tryGlasses(glasses); }} />

            </div>;

        });
        return Glasses;
    };

    render() {
        const cssGlassesInfo = {
            bottom: '0%',
            left: "35%",
            fontSize: '12px',
            backgroundColor: '#FFCC00',
            opacity: 0.4,
            width: "30%",
            height: '40%',


        };
        return (
            <div className='glassesContent' style={{ backgroundImage: "url(./glassesImage/background.jpg)", height: "2000px" }}>
                <div style={{ backgroundColor: "rgba(0,0,0,.8)", height: "2000px" }}>
                    <h1>TRY GLASSES APP ONLINE</h1>
                    <div className='row'>
                        <div className='col-6' style={{ width: "200px", position: "relative" }}>
                            <img src="./glassesImage/model.jpg" alt="model" style={{ width: "200px" }} className='img-fluid' />
                            <img src={this.state.GlassesCurrent.url} alt="model" style={{ width: "100px", position: "absolute", top: "26%", left: "296px", opacity: "0.9" }} className='img-fluid' />
                            <div className='GlassesInfo position-absolute' style={cssGlassesInfo}>
                                <h3 className='mb-3'>{this.state.GlassesCurrent.name}</h3>
                                <p>{this.state.GlassesCurrent.desc}</p>

                            </div>

                        </div>
                        <div className='col-6' style={{ width: "200px" }}>
                            <img src="./glassesImage/model.jpg" alt="model" style={{ width: "200px" }} className='img-fluid' />
                        </div>

                    </div>
                    <div className='row container-fluid mt-5 mx-auto' style={{ backgroundColor: "white" }}>
                        {this.renderGlasses()}

                    </div>
                </div>


            </div>
        );
    }
}
