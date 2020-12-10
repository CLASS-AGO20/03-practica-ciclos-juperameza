export default class App {
    factorial(numero){
        let resultado=1;
        for(let i=1;i<=numero;i++){
            resultado*=i;
        }
        return resultado;
    }
    convertirAString(numero){
        let i=1;
        let resultado="";
        while(i<=numero){
            resultado+="*";
           i++; 
           
        }
        return resultado;
    }
    obtenerDivisibles(numero){
        let i=0;
        let contador=0;
        do{
            if(numero%i==0){
                contador++;
            }

            i++;
        }while(i<=numero);
        return contador;
    }






}

let app = new App();
console.log(app.factorial(5))
console.log(app.convertirAString(5));
console.log(app.obtenerDivisibles(6));