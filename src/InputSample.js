import React,{useState} from 'react'

export default function InputSample() {
    const[text,setText]=useState('');

    //이벤트 객체 e를 파라미터로 받아와서 사용
    //e.target은 이벤트가 발생한 DOM인 input DOM을 가르킴
    //e.target.value는 현재 input에 입력한 값
    const onChange=(e) =>{
        setText(e.target.value);
    };

    const onReset=()=>{
        setText("");
    };
  return (
    <div>
        <input onChange={onChange} value={text}/>
        <button onClick={onReset}>초기화</button>
        <div>
            <b>값: {text}</b>
        </div>
    </div>
  )
}

