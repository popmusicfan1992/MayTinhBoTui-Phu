import React, { Component } from 'react';
import Headerdemo from '../component/Baitapchialayout/Headerdemo';
export default class Databiding extends Component {
    name = 'phu';
    student = {
        name: "phu",
        age: "21",
    };

    renderImg = () => {
        return <img src="data:image/png;base64,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" alt="google.com" />;

    };

    renderHeader = () => {
        return <Headerdemo />;
    };
    render() {
        const school = 'sky';
        return (

            <div>
                <p>{this.name} trường {school}</p>

                <h1>Hello {this.student.name} bạn đã {this.student.age} tuổi</h1>
                {this.renderImg()}
                {this.renderHeader()}
            </div>
        );
    }
}
