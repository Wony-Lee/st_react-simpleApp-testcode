import React, { useState, useEffect, useContext } from 'react'
import axios from 'axios'

import { OrderContext } from '../../contexts/OrderContext';
import ErrorBanner from '../../components/ErrorBanner';
import { useCallback } from 'react';

const CompletePage = ({ setStep }) => {

    const [orderDatas, , resetOrderDatas] = useContext(OrderContext)
    const [orderHistory, setOrderHistory] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    useEffect(() => {
        orderCompleted(orderDatas)
    }, [])

    const orderCompleted = async (orderDatas) => {
        try {
            let response = await axios.post('http://localhost:3333/order', orderDatas)
            setOrderHistory(response.data);
            setLoading(false)
        } catch (e) {
            setError(true)
            console.error(e)
        }
    }
    const handleLocation = useCallback(() => {
        resetOrderDatas();
        setStep(0)
    }, [])
    if (error) {
        return <ErrorBanner message="에러가 발생했습니다." />
    }

    const orderTable = orderHistory.map((item) => (
        <tr key={item.orderNumber}>
            <td>{item.orderNumber}</td>
            <td>{item.orderPrice}</td>
        </tr>
    ))
    if (loading) {
        return <div>loading</div>
    }
    if (!loading) {
        return (
            <div style={{ textAlign: "center" }}>
                <h2>주문이 성공했습니다.</h2>
                <h3>지금까지 모든 주문</h3>

                <table>
                    <tbody>
                        <tr>
                            <th>주문 번호</th>
                            <th>주문 가격</th>
                        </tr>
                        {
                            orderTable
                        }
                    </tbody>
                </table>

                <button onClick={handleLocation}>
                    첫페이지로
                </button>
            </div>
        )
    }
}

export default CompletePage
