Boolzapp
===
## **Milestone 1**  
- I start by creating the background using 'linear-gradient'

- I continue by creating the two containers for contacts and chat and add as I go all the static elements
- After placing the static elements in the side container, I dynamically placed the elements that make up the contact, through a v-for loop in order to individually take the saved elements on the script and print them on the page
```
v-for="(contact, i) in contacts">

          /------------/

<img :src="contact.avatar" alt="user">
              <div>
                <h4>{{contact.name}}</h3>
                <p>Ultimo messaggio inviato</p>
              </div>
```



## **Milestone 2**  
-  I recreate the static elements as well for the other container, on clicking one of the contacts the function starts that takes me to the chat equivalent to the contact. i create on Vue the ''variable ''name'' and ''src'' which initially will be empty and will take the value of the selected element, then i transform the img icon and name dynamically according to the selected contact
```
nowChat(contact,i){
      this.nome = contact.name
      this.src = contact.avatar
      console.log(contact.avatar);
    }
```
- for the visualization of the chats related to the contacts I created in data the element 'currentMessages:[],' that on the click of the related contact will assume the value of 'contact.messages' that I got in the previous v-for
```
currentMessages:[],

/-----/

methods:{
        nowChat(contact,i){
        contact.click = !contact.click
        
        this.currentMessages = contact.messages
        this.nome = contact.name;
        this.src = contact.avatar;
        console.log(contact.click);
        },
```

- on the HTML I call another function v--for to be able to take each of the chat related messages and then print them inside the container div message
```
 <div class="message"
            v-for="chatMsg in currentMessages">
              <span :class="{sent: chatMsg.status === 'sent'}">
                {{chatMsg.message}}
```

- I make the last changes in css to make the chat more like the original

## **Milestone 3** 
- On the input bar I put an 
v-model="newMessage" '@keyup.enter="add()"' with the following function that creates me a message object similar to the initial contacts object that will be later pushed inside the empty array currentMessages
```
add(){
            const message = {
                date: '10/01/2020 15:51:00',
                message: this.newMessage,
                status: 'sent'
            };
            this.currentMessages.push(message);
            this.newMessage = '';
            this.autoMsg;
```
- for the automatic response I created on computed: a function that as soon as it notices a difference in the length of currentMessages it also creates an object with a pre-set message that will be pushed always inside currentMessages
```
computed:{
        autoMsg(){
            for (let i = 0; i < this.autoAnswer.length; i++) {
                if (this.currentMessages.length +1 ) {
                    const message ={
                        date: '10/01/2020 15:51:00',
                        message: this.autoAnswer[0],
                        status: 'received',
                    };
                    return this.currentMessages.push(message);
                }
            } 
        }
    },
```

## **Milestone 4**
- for the operation of the search bar I created a ```v-model="search"``` where "search" will initially be = ' ' then 
a function placed on computed: which initially cycles me with a for each contacts and checks via a function if the cycled element is included inside "search" (after the user has entered) so as to push it inside ```searchBox:[],```
```
searchbox(){
            this.searchBox=[];
            this.contacts.forEach(element => {
                if (element.name.toLowerCase().includes(this.search.toLowerCase())) {
                    this.searchBox.push(element)
                }
            });
```
- I create ```filteredContacts: []``` which on mounted() when the page starts will be equal to ```this.filteredContacts = this.contacts``` , then always inside the searchbox function inside computed: I create another condition that if ```searchBox.length != 0 ```so if it is full ```then ```filteredContacts = searchBox ```else ```filteredContacts = contacts

```
if(this.searchBox.length != 0){
                
                this.filteredContacts = this.searchBox;
            }
            else{
                this.filteredContacts = this.contacts;
            }
```