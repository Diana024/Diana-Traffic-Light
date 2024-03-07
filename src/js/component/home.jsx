import React, {useState} from "react"; //  ojo importar el hooks useState

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	//funcionalidades

	// [espacio de memoria, funcion que actualiza el estado de memoria]
	const [ligthRed, setLigthRed] = useState("bg-danger bg-gradient");
	const [ligthYellow,setLigthYellow] = useState("bg-warning bg-gradient");
	const [ligthGreen,setLigthGreen] = useState("bg-success bg-gradient");	

	return (
		<>
		<div className="d-flex m-auto bg-dark bg-gradient d-inline-block" style={{width: "1em", height: "10em"}}>
		</div> 
		<div className="container row  bg-black bg-gradient p-4 rounded-4 m-auto" style={{width: "8em", height: "18em"}}>
			<div className={"btn rounded-circle " +ligthRed} onClick={onClickRed}></div>
			<div className={"btn rounded-circle " +ligthYellow} onClick={onClickYellow}></div>
			<div className={"btn rounded-circle " +ligthGreen} onClick={onClickGreen}></div>
		</div>
		</>
	);

	function onClickRed () {
		setLigthRed("bg-danger bg-gradient glow") 
		setLigthYellow("bg-warning bg-gradient");
		setLigthGreen("bg-success bg-gradient");
	}

	function onClickYellow () {
		setLigthRed("bg-danger bg-gradient");
		setLigthYellow("bg-warning bg-gradient glow");
		setLigthGreen("bg-success bg-gradient");
	}

	function onClickGreen () {
		setLigthRed("bg-danger bg-gradient");
		setLigthYellow("bg-warning bg-gradient");
		setLigthGreen("bg-success bg-gradient glow");
	}

	// function luzSemaforo(event) {
	// 	console.log(event);
	// 	console.log(ligthRed);

	// 	if (event.target.id === "btnRojo") {
	// 		setLigthYellow("btn-secondary");
	// 		setLigthGreen("btn-secondary");
	// 		setLigthRed("btn-danger selected");
	// 	} else if (event.target.id === "btnYellow") {
	// 		setLigthGreen("btn-success");
	// 	} else if (event.target.id === "btnRojo") {
	// 		setLigthRed("btn-secondary");
	// 		setLigthGreen("btn-secondary");
	// 	}
	// }

	
};
		
export default Home;




