const stateDefault = {
    cart: [{
        maSP:1,tenSP:"IPhone",giaBan:"1000",hinhAnh:'./img1/applephone.jpg',soLuong:1}
        
    ]
}


export const gioHangReducer = (state = stateDefault,action) =>{

    switch(action.type){
        case'THEM_GIO_HANG':{
            // resolve changing state.cart tren redux
            //step1: copy gio hang ra array moi
            const gioHangUpdate = [...state.cart];
            //step2: check action.spGioHang gui len tu component co trong state.gioHang chua?
            let index = gioHangUpdate.findIndex(spGH =>spGH.maSP === action.spGioHang.maSP);
            if(index!==-1){
                gioHangUpdate[index].soLuong +=1;

            }else{
                gioHangUpdate.push(action.spGioHang);
            }
            //cap nhat lai state.cart
            state.cart = gioHangUpdate;

            return {...state}


        }break;
        case'THAY_DOI_SO_LUONG':{
            const gioHangUpdate =[...state.cart];
            let index = gioHangUpdate.findIndex(spGH =>spGH.maSP ===action.maSP);
            if(index!==-1){
                gioHangUpdate[index].soLuong += action.soLuong;
                if(gioHangUpdate[index].soLuong<=0){
                    alert(' The Number of the product is not allowed!')
                    gioHangUpdate[index].soLuong -= action.soLuong;
                }

            }
            state.cart= gioHangUpdate;
            return {...state};
        }break;
        case'XOA_SAN_PHAM':{
            const gioHangUpdate=[...state.cart];
            let index = gioHangUpdate.findIndex(spGH =>spGH.maSP ===action.maSP);
            gioHangUpdate.splice(index,1);
            state.cart=gioHangUpdate;
            return{...state};
        }
        
    }
    return{...state}
}