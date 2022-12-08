const form = document.getElementById("form"); 

form.addEventListener('submit', handleForm);

function handleForm(event) { 
    event.preventDefault(); 
} 

function contar() {
     
    var str = document.getElementById('word').value.toLowerCase();
      str = str.replace(/\s/g, "");
        final = {} 
            for(let char in str){ 
            
                if(str[char] in final) { 
                    final[str[char]] = final[str[char]] + 1
                } else { 
                    final[str[char]] = 1
                }
    }
    
    tmp = `<h2>Letras:</h2>`
    Object.keys(final).forEach(function(letra){
      tmp += `<strong>${letra}</strong>: <strong>${final[letra]}</strong> <br>`;
    })

     document.getElementById("respuesta").innerHTML = tmp
     document.getElementById('limp').style.visibility = 'visible'
}
function limpiar(){
    form.reset();
    document.getElementById("respuesta").innerHTML = ""
    document.getElementById('limp').style.visibility = 'hidden'
}