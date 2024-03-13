import { useState } from "react";

 function CombinedMyButton(){
   let [count, setCount] = useState(1);
   function handleclick(){
    setCount(count+1);
  
    if(count<3)alert(`${count}번 눌렀네 ㅎㅇ`);
    else if(count<5)(alert(`${count}번이나 눌렀네 ㄷㄷ`));
    else if(count<10)(alert(`여기서 더 누른다고 뭐 특별한 문구가 나올것 같다고 생각했다면 정답임\n 이제 ${count}번임;;;`));
    else if(count<1000)(alert(`그럼에도 누르는 당신, 의지를 가져라\n이제 ${count}번임`));
    else(alert(`you dirty hacker`));
  }
  
  function MyButton({count,onclick}) {
    return (
       <button onClick={handleclick}>
         This button is imported from func.js file. What a OOP!
       </button>
    );
  }

  return(
   <>
   <p>qwer</p>
   <h1>count={count-1}</h1>
   <MyButton count={count} onClick={handleclick}/>
   <MyButton count={count} onclick={handleclick}/>
   </>
   )
 }
/*
  const ScreenMap = (props) => {
    return (
        <div>
			<h3>{props.id}({props.title})</h3>
        </div>
    );
};
*/
  function ScreenMap(props){
    return (
      <div>
        <h1>id:{props.id} | {props.title}</h1>
      </div>
    )
  }
export {ScreenMap,CombinedMyButton};