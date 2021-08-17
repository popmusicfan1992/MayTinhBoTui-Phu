import React, { Component } from 'react';
import stylebai1 from './BaiTapMayTinh.css';
export default class BaiTapMayTinh extends Component {



    state = {
        value: " "
    };

    handleClick = (newState) => {

        this.setState({

            value: this.state.value.concat(newState)
        });
    };
    Calculate = () => {
        this.setState({

            value: (eval(this.state.value).toString())
        });

    };
    Clear = () => {
        this.setState({

            value: ""
        });
    };
    ClearText = () => {

        this.setState({

            value: this.state.value.slice(0, -1)
        });
    };


    render() {
        return (

            <div className='container-fluid cal-content'>

                <div className='screen text-right'>
                    <input type="text" name="input" size={16} id="answer" className='mt-1' value={this.state.value} />


                </div>
                <div className='calculator'>
                    <table className="table">
                        <tbody>
                            <tr>
                                <td >
                                    <button onClick={() => {
                                        this.handleClick("7");
                                    }}>7</button>
                                </td>
                                <td >
                                    <button onClick={() => {
                                        this.handleClick("8");
                                    }}>8</button>
                                </td>
                                <td >
                                    <button onClick={() => {
                                        this.handleClick("9");
                                    }}>9</button>
                                </td>
                                <td >
                                    <button onClick={() => {
                                        this.handleClick("/");
                                    }}>/</button>
                                </td>
                                <td >
                                    <button onClick={() => {
                                        this.ClearText();
                                    }}>CE</button>
                                </td>
                            </tr>
                            <tr>
                                <td >
                                    <button onClick={() => {
                                        this.handleClick("4");
                                    }}>4</button>
                                </td>
                                <td >
                                    <button onClick={() => {
                                        this.handleClick("5");
                                    }}>5</button>
                                </td>
                                <td >
                                    <button onClick={() => {
                                        this.handleClick("6");
                                    }}>6</button>
                                </td>
                                <td >
                                    <button onClick={() => {
                                        this.handleClick("*");
                                    }}>*</button>
                                </td>
                                <td >
                                    <button onClick={() => {
                                        this.Clear();
                                    }}>C</button>
                                </td>
                            </tr>
                            <tr>
                                <td >
                                    <button onClick={() => {
                                        this.handleClick("1");
                                    }}>1</button>
                                </td>
                                <td >
                                    <button onClick={() => {
                                        this.handleClick("2");
                                    }}>2</button>
                                </td>
                                <td >
                                    <button onClick={() => {
                                        this.handleClick("3");
                                    }}>3</button>
                                </td>
                                <td >
                                    <button onClick={() => {
                                        this.handleClick("-");
                                    }}>-</button>
                                </td>
                                <td rowSpan='2'>
                                    <button className='space' onClick={() => {
                                        this.Calculate();
                                    }}>=</button>
                                </td>
                            </tr>
                            <tr>

                                <td colSpan='2'> <button>0</button>
                                </td>
                                <td >  <button onClick={() => {
                                    this.handleClick(".");
                                }}>.</button>
                                </td>
                                <td >  <button onClick={() => {
                                    this.handleClick("+");
                                }}>+</button>
                                </td>

                            </tr>
                        </tbody>
                    </table>

                </div>



            </div>

        );
    }
}
