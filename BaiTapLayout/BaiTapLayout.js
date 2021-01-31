import React from 'react'
import HeaderClass from '../components/HeaderClass'
import BTProduct from './BTProduct'
import BTProductList from './BTProductList'
import BTPromotion from './BTPromotion'
import BTSlider from './BTSlider'

export default function BaiTapLayout() {
    return (
        <div>
            <HeaderClass/>
            <BTSlider/>
            <BTProductList/>
            <BTPromotion/>

        </div>
    )
}
