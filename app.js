
        let app = Vue.createApp({
            data : function (){
                return {
                    greeting : 'Hello Veu 3!',
                    isVisible : false,
                }
            },
            methods: {
                toggleBox(){
                    this.isVisible = !this.isVisible
                },
                greet(greeting){
                    console.log(greeting)
                }
            }
        })
        app.component('login-form',{
            template : `
            <form @submit.prevent="handleSubmit">
                <h1>{{title}}</h1>
                <custom-input 
                v-for="(input,i) in inputs" :key="i"
                v-model="input.value" 
                :label="input.label"
                :type="input.type" />
                <button>Submit</button>
            </form>
            `,
            components: ['custom-input'],
            data(){
                return{
                    title : 'Login Form',
                    inputs : [
                        
                        {
                            label : 'Email',
                            value: '',
                            type: 'email',

                        },
                        {
                            label : 'Password',
                            value: '',
                            type: 'password',
                            
                        }
                    ]
                }

            },
            methods: {
                handleSubmit(){
                    console.log(this.inputs[0].value, this.inputs[1].value)
                }
            },
        })
        app.component('custom-input',{
            template : `
            <label>
                {{label}}
            </label>
            <input :type="type" v-model="inputValue">
            `,
            props: ['label', 'type', 'modelValue'],
            computed : {
                inputValue : {
                    get() {
                        return this.modelValue;
                    },
                    set(value) {
                        this.$emit('update:modelValue',value)

                    }
                }
            }
            // data(){
            //     return {
            //         inputValue : ''
            //     }
            // }
        })
        app.mount('#app')
