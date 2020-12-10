export default class App {
    factorial(numero){
        let resultado=1;
        for(let i=1;i<=numero;i++){
            resultado*=i;
        }
        return resultado;
    }
  





}

let app = new App();
console.log(app.factorial(5))
console.log(app.convertirAString(5));