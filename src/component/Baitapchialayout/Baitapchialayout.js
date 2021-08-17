import React, { Component } from 'react';
import Headerdemo from './Headerdemo';
import Productdemo from './Productdemo';

export default class Baitapchialayout extends Component {
    render() {
        return (
            <div>
                <Headerdemo />
                <Productdemo />
            </div>
        );
    }
}
