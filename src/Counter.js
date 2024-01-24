import React,{useState} from 'react';

function Counter() {
    const [number,setNumber] = useState(0);
    //상태의 기본값(0)을 파라미터로 넣어서 호출
    //첫번째 원소는 현재 상태, 두번째 원소는 Setter 함수

const onIncrease=()=>{
    //setNumber(number+1);
    setNumber(prev=>prev+1); //함수형 업데이트 //이전값에 1을 추가한다
}

const onDecrease=()=>{
    //setNumber(number-1);
    setNumber(prev=>prev-1);
}
  return (
    <div>
      <h1>{number}</h1>
      <button onClick={onIncrease}>+1</button>
      <button onClick={onDecrease}>-1</button>
    </div>
  );
}

export default Counter;