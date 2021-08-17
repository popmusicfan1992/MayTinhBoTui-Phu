import React, { Component, createElement } from 'react';
import './BaiTapChonXeNangCao.css';
import DataFeatures from '../assets/json/arrayFeatures.json';
import DataWheel from '../assets/json/wheels.json';
export default class BaiTapChonXeNangCao extends Component {
    state = {
        carCurrent: {
            "id": 1,
            "title": "Crystal Black",
            "type": "Pearl",
            "img": "./images/icons/icon-black.jpg",
            "srcImg": "images-black/images-black-1/",
            "color": "Black",
            "price": "19,550",
            "engineType": "In-Line 4-Cylinder",
            "displacement": "1996 cc",
            "horsepower": "158 @ 6500 rpm",
            "torque": "138 lb-ft @ 4200 rpm",
            "redline": "6700 rpm",
            "wheels": [ {
                "idWheel": 1,
                "srcImg": "images-black/images-black-1/"
            },
            {
                "idWheel": 2,
                "srcImg": "images-black/images-black-2/"
            },
            {
                "idWheel": 3,
                "srcImg": "images-black/images-black-3/"
            }
            ]
        }
    };
    changeColor = (newimgCar) => {
        this.setState({
            carCurrent: newimgCar
        });
    };
    renderIcon = () => {
        return DataFeatures.map((icons, index) => {
            return <div className="row border border-link pt-2 pb-2" style={{ cursor: "pointer" }} key={index}>
                <img src={icons.img} alt={icons.id} className='col-2' onClick={() => {
                    this.changeColor(icons);
                }} />
                <div className="col-10">
                    <h4>{icons.title}</h4>
                    <p>{icons.type}</p>
                </div>
            </div>;
        });
    };
    changeWheel = (Wheel) => {
        let objWheelCar = this.state.carCurrent.wheels.find(item => item.idWheel === Wheel.idWheel);
        this.setState({
            //rest parameter
            carCurrent: { ...this.state.carCurrent, srcImg: objWheelCar.srcImg }
        });

    };
    renderWheel = () => {
        return DataWheel.map((item, index) => {
            return <div className="row border border-link pt-2 pb-2" style={{ cursor: "pointer" }} key={index}
                onClick={() => { this.changeWheel(item); }}>
                <img src={item.img} alt={item.id} className='col-2' />
                <div className="col-10">
                    <h4>{item.title}</h4>
                    <p>{item.price}</p>
                </div>
            </div>;

        });
    };
    componentDidMount = () => {
        //Đây là phương thức có sẵn của component tự động thực thi khi renderđược gọi // lưu ý : chỉ chạy 1 lần đầu tiên sau khi render thực thi
        // <script
        //     src="https://cdn.scaleflex.it/plugins/js-cloudimage-360-view/2.6.0/js-cloudimage-360-view.min.js"></script>
        let tagScript = document.createElement('script');
        tagScript.src = "https://cdn.scaleflex.it/plugins/js-cloudimage-360-view/2.6.0/js-cloudimage-360-view.min.js";
        document.querySelector('#appendScript').appendChild(tagScript);
    };
    componentDidUpdate = () => {
        document.querySelector('.car').innerHTML = '';
        let tagScript = document.createElement('script');
        tagScript.src = "https://cdn.scaleflex.it/filerobot/js-cloudimage-360-view/v2.0.0.lazysizes.min.js";
        document.querySelector('#appendScript').innerHTML = '';
        document.querySelector('#appendScript').appendChild(tagScript);
    };
    render() {
        return (
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-6'>
                        <div className='model'>
                            {/* <img style={{ width: "100%" }} src={this.state.imgCar} alt='model1' /> */}
                            <div
                                className="cloudimage-360 car"
                                data-folder={"./images/" + this.state.carCurrent.srcImg}
                                data-filename="civic-{index}.jpg"
                                data-amount="8" style={{ minWidth: "100%" }}></div>
                            <div id='appendScript'>

                            </div>

                        </div>
                        <div className="card text-left">
                            <div className='card-header'>
                                <h4>Exterior Color</h4>
                            </div>
                            <div className="card-body">
                                <h4 className="card-title">See More LX Features</h4>
                                <table className="table border border-color-light" border='1'>
                                    <tbody>
                                        <tr>
                                            <td>Color</td>
                                            <td>Black</td>

                                        </tr>
                                        <tr>
                                            <td>Price</td>
                                            <td>$19500</td>
                                        </tr>
                                        <tr>
                                            <td>Engine Type</td>
                                            <td>In-line-4-Cylinder</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                    </div>
                    <div className='col-6'>

                        <div className="card text-white">
                            <div className='card-header text-primary'>
                                Exterior Color
                            </div>
                            <div className="card-body text-left text-dark" >
                                {this.renderIcon()}
                                <div className='container mt-4'>
                                    {this.renderWheel()}
                                </div>

                            </div>


                        </div>

                    </div>

                </div>

            </div>
        );
    }
}
