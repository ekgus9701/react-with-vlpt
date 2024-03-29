import React,{useState, useRef} from 'react'

//useRef로 특정 DOM 선택하기

export default function InputSample() {
    const[inputs,setInputs]=useState({
        name:'',
        nickname:''
    });

    const nameInput=useRef();

    const {name,nickname} =inputs; //비구조화 할당

    const onChange=(e) =>{
        const {value,name}=e.target;
        console.log(e.target);
        setInputs({
            ...inputs, // 기존의 input 객체를 복사한 뒤
        [name]: value //  name 키를 가진 값을 value 로 설정
        });
    };

    const onReset=()=>{
        setInputs({
            name: '',
            nickname: '',
          });
          nameInput.current.focus();
    };
  return (
    <div>
        <input name="name" placeholder="이름" onChange={onChange} value={name} ref={nameInput} />
        <input name="nickname" placeholder="닉네임" onChange={onChange} value={nickname}/>
       
        <button onClick={onReset}>초기화</button>
        <div>
            <b>값: </b>
            {name} ({nickname})
        </div>
    </div>
  );
}

