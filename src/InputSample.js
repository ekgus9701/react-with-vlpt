import React,{useState} from 'react'

export default function InputSample() {
    const[inputs,setInputs]=useState({
        name:'',
        nickname:''
    });

    const {name,nickname} =inputs; //비구조화 할당

    /*
        리액트 상태에서 객체를 수정해야할 때는 
        새로운 객체를 만들어서 새로운 객체에 변화를 주고, 
        이를 상태로 사용해주어야한다.
        setInputs({
        ...inputs,
        [name]: value
        });

        -> 불변성을 지킨다
        -> 리액트 컴포넌트에서 상태가 업데이트가 됐음을 감지
        -> 필요한 리렌더링이 진행

    */ 

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
          })
    };
  return (
    <div>
        <input name="name" placeholder="이름" onChange={onChange} value={name} />
        <input name="nickname" placeholder="닉네임" onChange={onChange} value={nickname}/>
       
        <button onClick={onReset}>초기화</button>
        <div>
            <b>값: </b>
            {name} ({nickname})
        </div>
    </div>
  );
}

