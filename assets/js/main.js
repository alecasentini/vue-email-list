const { createApp } = Vue;

createApp({
  data() {
    return {
      emails: [],
      generating: false,
    };
  },
  methods: {
    attivaApi() {
      this.emails = [];
      this.generating = true;
      for (let i = 0; i < 10; i++) {
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then((response) => {
                const result = response.data.response;
                this.emails.push(result);
            if (this.emails.length === 10) {
                this.generating = false;
            }
          })
      }
    },
  },
}).mount('#app');
