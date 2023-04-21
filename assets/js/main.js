const { createApp } = Vue

  createApp({
    data() {
      return {
        emails: []
        
      }
    },
    methods:{
        attivaApi(){
            for (let i = 0; i < 10; i++) {
                this.emails = [];
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                    .then( response=> {
                        const result = response.data.response;
                        this.emails.push(result);
                    })
            }
        }  
    }
  }).mount('#app')
