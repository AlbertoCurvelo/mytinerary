## Demo
If you want to see the demo of this project displayed, you can visit [MyTinerary Demo](https://curvelo-mytinerary.herokuapp.com/)

## How to clone
After cloning, you will need to create the .env file which should have the variables MONGOURL, PORT, HOST, SECRET_KEY.
 
Reference:
* Create an account in [MongoDB](https://account.mongodb.com/account/register) or use one that you have, and obtain the code of the application of the closter, which we are going to save in a variable called "MONGOURL" in our .env.
* PORT, within the local job use 4000.
* HOST, you can use localhost or 127.0.0.1.
* SECRET_KEY, you can use the one of your preference.
* Important: 
  - Change all routes "https://curvelo-mytinerary.herokuapp.com/api" for yours direction backend.
  - Change the content the variable "idClientGoogle" ubicated "/frontend/src/components/Login.js" and in"/frontend/src/components/Register.js" for yours, from Google credentials OAuth 2.0.

## Installation
To install and run this project just type and run:
```bash 
npm install
```

## Preview
When you make the .env and open the server you will start with this screen.

![](/preview.png)

### Notes
If you have any questions about the implementation of the code, you can contact me at [linkedin](https://www.linkedin.com/in/alberto-curvelo/).