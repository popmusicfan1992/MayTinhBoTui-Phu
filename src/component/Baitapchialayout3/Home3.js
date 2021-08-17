import React, { Component } from 'react';
import Headerdemo from '../Baitapchialayout/Headerdemo';
import Footer from '../Baitapchialayout2/Footer';
import Header from '../Baitapchialayout2/Header';
import Banner from './Banner';
import Item from './Item';

export default class Home3 extends Component {
    render() {
        let style = {
            height: 500,
        };
        return (
            <div className='container-fluid p-0'>
                <div className="row">
                    <div className='col-12'>
                        <Headerdemo />

                    </div>
                </div>
                <div className="container container-fluid" style={style}>
                    <div className='row w-75 m-auto h-100'>
                        <div className='col-12 h-50'>
                            <Banner />

                        </div>
                        <div className='col-4 h-100'>
                            <Item />

                        </div>
                        <div className='col-4 h-100'>
                            <Item />

                        </div>
                        <div className='col-4 h-100'>
                            <Item />

                        </div>

                    </div>
                </div>
                <div>
                    <Footer />
                </div>

            </div>
        );
    }
}
