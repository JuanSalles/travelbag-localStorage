export default class memoria{
    

    salvar (array) {
        localStorage.setItem("mochila", JSON.stringify(array));
    }

    ler (){

        if (localStorage.mochila){

            return(JSON.parse(localStorage.mochila));
            
        }else{

            localStorage.setItem("mochila", "");
            return false
        }
    }

}