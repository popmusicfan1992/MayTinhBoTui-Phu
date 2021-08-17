import React, { Component } from 'react';
import '../Styling/Styling.css';
import style from '../Styling/Styling.module.css';
export default class Styling extends Component {
    render() {
        return (
            <div>
                <h1 className='txt'>Alo 123</h1>
                <h2 className={style.txt2}>Hello ban oi</h2>
            </div>
        );
    }
}
