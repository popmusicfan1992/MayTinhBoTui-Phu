import React, { Component } from 'react';
import Datafilms from '../assets/json/DataFilms.json';

export default class Renderfilm extends Component {

    renderFilms = () => {
        let ListFilms = Datafilms.map((film, index) => {
            return <div className='col-2 mt-2'>
                <div className="card text-white" style={{ height: "400px" }}>
                    <div className='card-header p-0' style={{ height: "60%" }}>
                        <img src={film.hinhAnh} alt={1} className='img-fluid' style={{ height: "100%", width: "100%" }} />


                    </div>
                    <div className="card-body" style={{ backgroundColor: "rgb(53,57,66)", height: "40%" }}>
                        <h4 className="card-title" style={{ fontSize: "17px" }}>{film.tenPhim}</h4>
                        <p className="card-text" style={{ fontSize: "12px" }}>{film.moTa.length > 60 ? <p>{film.moTa.substr(0, 60)} ... </p> : <p>{film.moTa}</p>}</p>
                    </div>
                </div>


            </div>;
        });
        return ListFilms;
    };

    render() {
        return (
            <div className='container-fluid films' style={{ backgroundImage: 'url(./resource/background/avanger.jpg)', minHeight: "1500px", backgroundColor: "rgba(0,0,0,.5)" }} >
                <div className='row container-fluid'>
                    {this.renderFilms()};

                </div>

            </div >
        );
    }
}
