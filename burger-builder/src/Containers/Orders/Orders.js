import React, { Component } from "react";
import axios from '../../axios-orders';

import Order from '../../Components/Order/Order';
import withErrorHandler from '../../HOC/withErrorHandler/withErrorHandler';

class Orders extends Component {

    state = {
        orders: [],
        loading: true
    }

    componentDidMount() {
        // Retrieve orders from the database
        axios.get('/orders.json')
            .then(res => {
                const fetchedOrders = [];
                // push orders onto the fetchedOrders array
                for (let key in res.data) {
                    fetchedOrders.push({
                        id: key,
                        ...res.data[key]
                    });
                }
                this.setState({loading: false, orders: fetchedOrders});
            })
            .catch(err => {
                this.setState({loading: false});
            });
    }

    render() {
        return (
            <div>
                <Order />
                <Order />
            </div>
        );
    }
}

export default withErrorHandler(Orders, axios);
