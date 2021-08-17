import React, { Component } from 'react';

export default class RenderingConditions extends Component {

    login = false;
    name = "Phu";
    renderCondition = () => {
        if (this.login === true) {
            return <p className='text-success'>Thanh cong</p>;
        } else {
            alert('Thất bại');
        }
    };
    render() {
        return (
            <div>
                {/* {this.login === true ? <h1>Thành công bạn là {this.name}</h1> : <h1 className='text-danger'>Thất bại</h1>} */}
                {this.renderCondition()}
            </div>
        );
    }
}
