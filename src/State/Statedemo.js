import React, { Component } from 'react';

export default class Statedemo extends Component {
    //state: là thuộc tính có sãn của react classs component giúp định nghĩa  những nội dung có khả năng thay đổi khi người dùng thao tác sự kiện
    state = {
        status: false,
    };
    // setState là phương thức có sẵn của react component giúp thay đổi giá trị state và render lại giao diện

    userLogin = {
        username: 'phu',
        age: 20,
    };
    login = () => {
        //this.state.status = true; // không sét giá trị trực tiép trên state mà phải thông qua phương thức set status
        let newState = {
            status: true
        };
        //set state la phương thức bất đồng bộ
        this.setState(newState, () => {
            console.log(this.state);
        });


    };
    renderUserLogin = () => {
        if (this.state.status) {
            return <div className='text-success'>{this.userLogin.username}</div>;
        }
        return <button onClick={() => { this.login(); }}>Login</button>;
    };



    render() {
        return (
            <div>
                {this.renderUserLogin()}

            </div>
        );
    }
}
