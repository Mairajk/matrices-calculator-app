function start()  {

    let matGen1 = document.querySelector("#matGen1").value ;
    let matGen2 = document.querySelector("#matGen2").value ;
   
    let mat1 = document.querySelector("#mat1");
    let mat2 = document.querySelector("#mat2");
   
    let result = document.querySelector(`#result`) ;
 
        mat1.innerHTML = "";
        mat2.innerHTML = ""; 
        result.innerHTML = "" ;

    if (matGen1 !== matGen2) {
        alert("Please enter equal value for dimension ") ;
    }

    if ( matGen1 < 2 || matGen2 < 2)  {
        alert("Please enter a valid number for dimension") ;
        return;
    }
    if (isNaN(matGen1) || isNaN(matGen2)) {
        alert("Please enter a number ")
    }

       

    for (let i = 0; i < matGen1; i++) {
        for (let j = 0; j < matGen2; j++) {
       
            mat1.innerHTML += `<input placeholder="0"  id="fMat1${i}_${j}"
             class="1iB" required type="number" min="0" max="100" value="0"> ` ;
            console.log(i+1)
           
            mat2.innerHTML += `<input placeholder="0"  id="fMat2${i}_${j}"
             class="2iB" required type="number" min="0" max="100" value="0"> ` ;
                    console.log(i+1)
           
            result.innerHTML +=  `<input type="number" disabled required min="0"
             max="100"  id="result${i}_${j}"  value="0" >`;        
        
       }
        mat1.innerHTML += "<br>";
        mat2.innerHTML += "<br>"; 
        result.innerHTML += "<br>" ;
       
    }

    let checksign = document.querySelector("#checksign").value ;
    let dropDown = document.querySelector("#dropDown") ;
    dropDown.innerHTML = checksign ; 
    document.querySelector("#equal").innerHTML = "=" ;  
    document.querySelector("#calculate").innerHTML = `<button type="submit"> Calculate </button> ` ; 
  

}


function cal() {
    // let checksign = document.querySelector("#checksign").value ;
    // let dropDown = document.querySelector("#dropDown") ;
    // dropDown.innerHTML = checksign ; 
    
    let matGen1 = document.querySelector("#matGen1").value ;
    let matGen2 = document.querySelector("#matGen2").value ;
   
    
    for (let i = 0; i < matGen1 ; i++) {
        
        for (let j = 0; j < matGen2; j++) {
            
     checksign = document.querySelector("#checksign").value ;
    

    if (checksign == `+`) {
      
        document.querySelector(`#result${i}_${j}`).value =
        +document.querySelector(`#fMat1${i}_${j}`).value  + 
        +document.querySelector(`#fMat2${i}_${j}`).value ;  
    } 
    else if (checksign == `-` ) {
        
        document.querySelector(`#result${i}_${j}`).value =
        +document.querySelector(`#fMat1${i}_${j}`).value  - 
        +document.querySelector(`#fMat2${i}_${j}`).value ;  
    }
    else {
        alert("Please select an operation")
    }
        }
        
    }

}










//<------------Wastage--------------->



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








    
    // for (let i = 0; i < matGen1; i++) {
    //     for (let j = 0; j < matGen2; j++) {
           
    //         mat2.innerHTML += `<input size="1"  placeholder="0"  id = fMat2${i}_${j} class="2iB"> ` ;
    //         console.log(i+1)
    //     }
    //     mat2.innerHTML += "<br>";
    // }







     
    // for (let i = 0; i < matGen1 ; i++) {
    //     for (let j = 0; j < matGen2; j++) {
    //        fMat
    //         result = 
            
    //     }
        
    // }