function MyButton() {
    return (
      <button>
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