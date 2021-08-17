import React, { Component } from 'react';

export default class RenderLoop extends Component {
    productList = [
        { id: 1, name: "black car", price: 200, img: './carbasic/products/black-car.jpg' },
        { id: 2, name: "red car", price: 500, img: './carbasic/products/red-car.jpg' },
        { id: 3, name: "silver car", price: 800, img: './carbasic/products/silver-car.jpg' },
        { id: 4, name: "steel car", price: 1000, img: './carbasic/products/steel-car.jpg' }
    ];
    renderLoop = () => {
        // let mangTrcomponent = [];

        // CACH 1
        // for (let index = 0; index < this.productList.length; index++) {
        //     const product = this.productList[ index ];
        //     let jsxTr = (
        //         <tr key={index}>
        //             <td>{product.id}</td>
        //             <td>{product.name}</td>
        //             <td>{product.price}</td>
        //             <td>   <img src={product.img} style={{ width: "100px" }} /> </td>
        //         </tr>
        //     );
        //     mangTrcomponent.push(jsxTr);

        // }
        let mangTrcomponent = this.productList.map((product, index) => {
            return <tr key={index}>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>   <img src={product.img} style={{ width: "100px" }} /> </td>
            </tr>;
        });

        return mangTrcomponent;

    };
    render() {
        return (
            <div className='container'>
                <table className="table">
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>name</th>
                            <th>price</th>
                            <th>img</th>
                        </tr>
                    </thead>
                    <tbody>

                        {this.renderLoop()}


                    </tbody>
                </table>
            </div>
        );
    }
}
