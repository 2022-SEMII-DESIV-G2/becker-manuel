PRESENTACION GENERAL DEL ESTUDIANTE







Mi nombre es Manuel Becker , tengo 34 años , curse estudios secundarios hace unos años en el Instituto America, estudie Bachiller en Ciencias, laboro en empresas melo como estilista canino.
Por mi parte escogi esta carrera ya que tiene un amplio alcance a nivel laboral hoy en dia, dado a que al haber tanta tecnologia presente en el mundo, cada vez se hace mas evidente la necesidad de profesionales dedicados a la interpretacion e implementacion del uso de lenguajes de programacion, logica y diseño de entornos, entre otras muchas aplicaciones.



MI meta en el curso es aprender lo mas posible y mejorar mi comprension en los lenguajes impartidos en clase.


A continuacion parte de los temas aprendidos este semestre:


                                                      Github

uso de la plataforma github, ejemplo de comandos:

git branch   git commit -m  "Agregar"




                                                        HTML


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
</body>
</html>

                                                        CSS


body, html {
  background-color: white;
  min-height: 99vh;
  width: 99vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 5px 10px 0 0;
}


                                                      Javascript

function contar() {
  if (document.getElementById('text').value == "" || document.getElementById('text').value == " "){
    document.getElementById('subtitulo-dos').innerHTML = "No hay letras";
  }
  else{
    let cont = {};
    llamar().replace(/\S/g, function(p){
        cont[p] = (isNaN(cont[p]) ? 1 : cont[p]+1);
    });
    document.getElementById('resultado-llave').innerHTML = Object.keys(cont) + ",";
    document.getElementById('resultado-valor').innerHTML = Object.values(cont);
    iner();
    return cont;
  }
}





