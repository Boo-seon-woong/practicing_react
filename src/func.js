import { useState } from "react";

function MyButton() {
  let [count, setCount] = useState(1);


  function handleclick(){
    setCount(count+1);

    if(count<3)alert(`${count}번 눌렀네 ㅎㅇ`);
    else(alert(`${count}번이나 눌렀네 ㄷㄷ`));
  }
    return (
      <button onClick={handleclick}>
        This button is imported from func.js file. What a OOP!
      </button>
    );
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
export {MyButton,ScreenMap};