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