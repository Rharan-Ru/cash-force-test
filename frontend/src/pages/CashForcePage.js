import React, { useEffect } from 'react';
import api from '../services/api';

const CashForcePage = () => {
    useEffect(() => {
        const getOrders = async () => {
            const {data} = await api.get("/order")
            console.log(data)
        }
        getOrders()
    })
    return (
        <div>
            <img src="https://cashforce.com.br/wp-content/themes/cashforce/assets/images/logo-cashforce.svg" alt=""></img>
        </div>
    );
};

export default CashForcePage;