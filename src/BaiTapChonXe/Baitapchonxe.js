import React, { Component } from 'react';
export default class Baitapchonxe extends Component {

    state = {
        imgProduct: require('../assets/products/black-car.jpg').default,
    };
    renderCar = (newImg) => {
        this.setState({
            imgProduct: newImg
        });
    };

    render() {

        return (
            <div classname="container-fluid">
                <div className="row">
                    <div className="col-7">
                        <img src={this.state.imgProduct} alt='blackcar' className='img-fluid' style={{ width: '100%' }} />
                    </div>
                    <div className="col-5">
                        <div className="card text-white">
                            <div className='card-header text-primary'>
                                Exterior Color
                            </div>
                            <div className="card-body text-left text-dark" >
                                <div className="row border border-link pt-2 pb-2" onClick={() => { this.renderCar(require("../assets/products/black-car.jpg").default); }} style={{ cursor: "pointer" }}>
                                    <img src={require('../assets/icons/icon-black.jpg').default} alt="icon1" className='col-2' />
                                    <div className="col-10">
                                        <h4>Crystal Black</h4>
                                        <p>Pearl</p>
                                    </div>
                                </div>
                                <div className="row border border-link pt-2 pb-2">
                                    <img src={require('../assets/icons/icon-red.jpg').default} alt="icon2" className='col-2' onClick={() => { this.renderCar(require("../assets/products/red-car.jpg").default); }} style={{ cursor: "pointer" }} />
                                    <div className="col-10">
                                        <h4>Rall Red</h4>
                                        <p>Pearl</p>
                                    </div>
                                </div>
                                <div className="row border border-link pt-2 pb-2">
                                    <img src={require('../assets/icons/icon-silver.jpg').default} alt="icon3" className='col-2' onClick={() => { this.renderCar(require("../assets/products/silver-car.jpg").default); }} style={{ cursor: "pointer" }} />
                                    <div className="col-10">
                                        <h4>Luna Silver</h4>
                                        <p>Metalic</p>
                                    </div>
                                </div>
                                <div className="row border border-link pt-2 pb-2">
                                    <img src={require('../assets/icons/icon-steel.jpg').default} alt="icon4" className='col-2' onClick={() => { this.renderCar(require("../assets/products/steel-car.jpg").default); }} style={{ cursor: "pointer" }} />
                                    <div className="col-10">
                                        <h4>Modern Steel</h4>
                                        <p>Metalic</p>
                                    </div>
                                </div>

                            </div>


                        </div>
                    </div>
                </div>
            </div>



        );
    }
}
