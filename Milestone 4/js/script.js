

const {createApp} = Vue;

createApp({
    data(){
    return{
        contacts: [
        {
            name: 'Michele',
            avatar: '/img/avatar_1.jpg',
            visible: false,
            click: false,
            messages: [
                {
                    date: '15:30',
                    message: 'Hai portato a spasso il cane?',
                    status: 'sent'
                },
                {
                    date: '15:50',
                    message: 'Ricordati di stendere i panni',
                    status: 'sent'
                },
                {
                    date: '16:15',
                    message: 'Tutto fatto!',
                    status: 'received',
                    flag:false,
                    cancFlag :false,
                }
            ],
        },
        {
            name: 'Fabio',
            avatar: '/img/avatar_2.jpg',
            visible: false,
            click: false,
            messages: [
                {
                    date: '16:30',
                    message: 'Ciao come stai?',
                    status: 'sent'
                },
                {
                    date: '16:30',
                    message: 'Bene grazie! Stasera ci vediamo?',
                    status: 'received',
                    flag:false,
                    cancFlag :false,
                },
                {
                    date: '16:35',
                    message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                    status: 'sent'
                }
            ],
        },
        {
            name: 'Samuele',
            avatar: '/img/avatar_3.jpg',
            visible: false,
            click: false,
            messages: [
                {
                    date: '10:10',
                    message: 'La Marianna va in campagna',
                    status: 'received',
                    flag:false,
                    cancFlag :false,
                },
                {
                    date: '10:20',
                    message: 'Sicuro di non aver sbagliato chat?',
                    status: 'sent'
                },
                {
                    date: '16:15',
                    message: 'Ah scusa!',
                    status: 'received',
                    flag:false,
                    cancFlag :false,
                }
            ],
        },
        {
            name: 'Alessandro B.',
            avatar: '/img/avatar_4.jpg',
            visible: false,
            click: false,
            messages: [
                {
                    date: '15:30',
                    message: 'Lo sai che ha aperto una nuova pizzeria?',
                    status: 'sent'
                },
                {
                    date: '15:50',
                    message: 'Si, ma preferirei andare al cinema',
                    status: 'received',
                    flag:false,
                    cancFlag :false,
                }
            ],
        },
        {
            name: 'Alessandro L.',
            avatar: '/img/avatar_5.jpg',
            visible: false,
            click: false,
            messages: [
                {
                    date: '15:30',
                    message: 'Ricordati di chiamare la nonna',
                    status: 'sent'
                },
                {
                    date: '15:50',
                    message: 'Va bene, stasera la sento',
                    status: 'received',
                    flag:false,
                    cancFlag :false,
                }
            ],
        },
        {
            name: 'Claudia',
            avatar: '/img/avatar_6.jpg',
            visible: false,
            click: false,
            messages: [
                {
                    date: '15:30',
                    message: 'Ciao Claudia, hai novità?',
                    status: 'sent'
                },
                {
                    date: '15:50',
                    message: 'Non ancora',
                    status: 'received',
                    flag:false,
                    cancFlag :false,
                },
                {
                    date: '15:51',
                    message: 'Nessuna nuova, buona nuova',
                    status: 'sent'
                }
            ],
        },
        {
            name: 'Federico',
            avatar: '/img/avatar_7.jpg',
            visible: false,
            click: false,
            messages: [
                {
                    date: '15:30',
                    message: 'Fai gli auguri a Martina che è il suo compleanno!',
                    status: 'sent'
                },
                {
                    date: '15:50',
                    message: 'Grazie per avermelo ricordato, le scrivo subito!',
                    status: 'received',
                    flag:false,
                    cancFlag :false,
                }
            ],
        },
        {
            name: 'Davide',
            avatar: '/img/avatar_8.jpg',
            visible: false,
            click: false,
            messages: [
                {
                    date: '15:30',
                    message: 'Ciao, andiamo a mangiare la pizza stasera?',
                    status: 'received',
                    flag:false,
                    cancFlag :false,
                },
                {
                    date: '15:50',
                    message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                    status: 'sent'
                },
                {
                    date: '15:51',
                    message: 'OK!!',
                    status: 'received',
                    flag:false,
                    cancFlag :'false',
                }
            ],
        }
    ],
    deletedBox:[],
    filteredContacts: [],
    search:'',
    searchBox:[],
    nome:'',
    src:'',
    currentMessages:[],
    newMessage: '',
    autoAnswer:['ok','scusami ma al momento non posso rispondere', 'che fai?', 'come stai?','ti chiamo dopo ok?'],
    }
    },
    methods:{
        nowChat(contact,i){
            /* TO FIX */
        contact.click = !contact.click
            /* FIX */
        this.currentMessages = contact.messages
        this.nome = contact.name;
        this.src = contact.avatar;
        console.log(contact.click);
        console.log('visible',this.contacts.visible);
        },

        add(){
            const message = {
                date: '15:51',
                message: this.newMessage,
                status: 'sent'
            };
            this.currentMessages.push(message);
            this.newMessage = '';
            this.autoMsg;
            
        },
        randomNum(){
          let random =  Math.floor(Math.random() * (4-1+1) +1);
        return random
        },

        visible(chatMsg){
            chatMsg.flag = !chatMsg.flag;
        },
        canc(chatMsg){
            chatMsg.cancFlag = true
            console.log( this.cancFlag)
        },
    },

    computed:{
        autoMsg(){
            for (let i = 0; i < this.autoAnswer.length; i++) {
                if (this.currentMessages.length +1 ) {
                    const message ={
                        date: '15:51',
                        message: this.autoAnswer[this.randomNum()],
                        status: 'received',
                        flag:false,
                        cancFlag :false,
                    };
                    setTimeout(() => {
                        this.currentMessages.push(message);
                    }, 1000);
                    return this.currentMessages
                }
            } 
        },
        
        searchbox(){
            this.searchBox=[];
            this.contacts.forEach(element => {
                if (element.name.toLowerCase().includes(this.search.toLowerCase())) {
                    this.searchBox.push(element)
                }
            });
            
            
            if(this.searchBox.length != 0){
                
                this.filteredContacts = this.searchBox;
            }
            else{
                this.filteredContacts = this.contacts;
            }
            console.log(this.filteredContacts);
        },
    },
    

    mounted(){
        this.filteredContacts = this.contacts
        /*  PROVA*/
        this.nowChat(this.contacts[0], 0)
        this.nome = this.contacts[0].name
        this.src = this.contacts[0].avatar
        /*  PROVA*/
    }
}).mount('#app');
