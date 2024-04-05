import {createStore} from 'redux';



const INITIAL_VAL={
  counter:0,
  privacy:false
}

const counterReducer=(counterStore=INITIAL_VAL,counterAction)=>{
  let newCounterStore =counterStore
  if(counterAction.type==='INCREMENT')
{
  newCounterStore={...counterStore,counter:counterStore.counter+1}
}  
else if(counterAction.type==='DECREMENT')
{
  newCounterStore={...counterStore,counter:counterStore.counter-1}
} 
else if(counterAction.type==='ADDITION')
{
  newCounterStore={...counterStore,counter:counterStore.counter + Number(counterAction.payload.num)}
}  
else if(counterAction.type==='SUBTRACTION')
{
  newCounterStore={...counterStore,counter:counterStore.counter-Number(counterAction.payload.num)}
}  
else if(counterAction.type==='PRIVACY')
{
  return {...counterStore,privacy:!counterStore.privacy}
}  




return newCounterStore;
}

const counterStore=createStore(counterReducer)



export default counterStore