new Vue({
   el: "#convert",
   data: {
       name: "test name",
       myJson: null,
       loading: false,

   },
    mounted(){
       axios.get("assets/json/api.json").then((res)=> {
           this.myJson = res.data
        //    console.log(this.myJson)
       }).catch((e)=>console.warn(e)).finally(()=>{
           this.loading = true
       });
        // console.log(this.myJson)
    }
});
