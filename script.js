var container = new Vue({
    el:"#container",
    data:{
        "email": []
    },
    mounted(){
        let self = this;
        
        for(let i =0; i < 10; i++){
            axios
            .get("https://flynn.boolean.careers/exercises/api/random/mail")
            .then(function (result){
                self.email.push(result.data.response);
            })
        }
        
    }
});