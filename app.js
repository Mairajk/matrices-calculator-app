function start()  {

    let matGen1 = document.querySelector("#matGen1").value ;
    let matGen2 = document.querySelector("#matGen2").value ;
    let mat1 = document.querySelector("#mat1");
    let mat2 = document.querySelector("#mat2");

    for (let i = 0; i < matGen1; i++) {
        for (let j = 0; j < matGen2; j++) {
       
            mat1.innerHTML += `<input size="1"  placeholder="0"  id = fMat1${i}_${j} class="1iB"> ` ;
            console.log(i+1)
        }
        mat1.innerHTML += "<br>";
    }

    for (let i = 0; i < matGen1; i++) {
        for (let j = 0; j < matGen2; j++) {
           
            mat2.innerHTML += `<input size="1"  placeholder="0"  id = fMat2${i}_${j} class="2iB"> ` ;
            console.log(i+1)
        }
        mat2.innerHTML += "<br>";
    }

    let checksign = document.querySelector("#checksign").value ;
    let dropDown = document.querySelector("#dropDown") ;
    dropDown.innerHTML = checksign ; 
   
    // for (let i = 0; i < matGen1 ; i++) {
    //     for (let j = 0; j < matGen2; j++) {
    //        fMat
    //         result = 
            
    //     }
        
    // }

}


function cal() {
    


    let checksign = document.querySelector("#checksign").value ;
    let dropDown = document.querySelector("#dropDown") ;
    dropDown.innerHTML = checksign ; 
 
    let matGen1 = document.querySelector("#matGen1").value ;
    let matGen2 = document.querySelector("#matGen2").value ;

    let fMat1 = document.querySelector(`#fmat1${i}_${j}`).value  ;
    let fMat2 = document.querySelector(`#fMat2${i}_${j}`).value ;
      
    let result = Number(fMat1) + Number(fMat2);

    let gResult = document.querySelector(`#result`) ;
 
    for (let i = 0; i < matGen1 ; i++) {
        
        for (let j = 0; j < matGen2; j++) {
      
        
        gResult.innerHTML += ` <h1> ${result} </h1> ` ;   
        
        console.log(gResult); 
        
        }
        
        gResult.innerHTML += `<br>`
    }


}



    // if ( checksign == `+`) {
    //     dropDown = `+`
    // }
    // else if (checksign == `-`) {
    //     dropDown = 
    // } else {
        
    // }

    // for (let i = 0; i < 1  ; i++) {
    //     var target = document.querySelector("#dropdown") ;
      
    //     target.innerHTML = ` <select name="" id="checksign" required>
    //     <option value="select"> Select an operation sign </option>
    //     <option value="addition"> + </option>
    //     <option value="subtraction"> - </option>
    //     </select>` ;

        

    // }


    // for (let i = 0; i < matGen1; i++) {
    //     for (let j = 0; j < matGen2; j++) {
    //         target = document.querySelector("#mat2");
    //         target.innerHTML = `<input size="1"  placeholder="0"  id = "sMat${i}_${j}" class="iB" > ` ;
    //         console.log(i+1)
    //     }
    //     target.innerHTML += "<br>";
    // }

