const stateDefault ={
    yourChoice:'Tai',
    winGame:0,
    rounds:0,
    arr:[
        {point:1,photo:'./img1/1.png'},
        {point:2,photo:'./img1/2.png'},
        {point:1,photo:'./img1/1.png'}
    ]
}
export const BTGameReducer = (state=stateDefault,action)=>{
    switch(action.type){

        case'YOUR_CHOICE':{
            state.yourChoice=action.giaTri
            return {...state};
        }

        case'PLAY_GAME':{
            //resolve random 

            let arrDice = [];
            for (let i=0;i< 3;i++){
                let randomNumber=(Math.floor(Math.random() * 6)+1)
                let randomDice = {point:randomNumber, photo:`./img1/${randomNumber}.png`}
                arrDice.push(randomDice)

            }
            state.arr=arrDice


            //resolve result 
            let total = arrDice.reduce((totalpoint,dice,index)=>
            {
                return totalpoint+=dice.point
            },0)
            if((total >=11 && state.yourChoice ==='Tai') || (total<11 &&state.yourChoice ==='Xiu')){
                state.winGame +=1;

            }
            state.rounds +=1;

            return {...state}
        }


        //default nếu không có xảy ra action nào thì trả về State mậc định
        default: return{...state}
    }
}