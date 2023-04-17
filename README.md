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

- I recreate the static elements as well for the other container, on clicking one of the contacts the function starts that takes me to the chat equivalent to the contact. i create on Vue the ''variable ''name'' and ''src'' which initially will be empty and will take the value of the selected element, then i transform the img icon and name dynamically according to the selected contact
```
nowChat(contact,i){
      this.nome = contact.name
      this.src = contact.avatar
      console.log(contact.avatar);
    }
```