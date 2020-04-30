**Nikhith_Nalla MICROSERVICE**

# SingleStone_Nikhith Nalla
This is the Nikhith Nalla microservice built to handle the ETL process of stroing and processing data.


# How to launch
Running this microservice on your local environment is easy.  You will need to install npm first, which you can download from here:  https://www.npmjs.com/get-npm.

Once you have npm installed:

1. Open a terminal at the project location.
2. Enter "npm install" - this will install all project dependencies (initially done during generation).
3. Enter "npm start".
4. Navigate to localhost:8080/healthcheck - you'll see the "Success" response.

# App Structure
- SingleStone_Nikhith_Nalla
  - app
    - dataSource   - DB coordinator
    - models        - LOKI models
    - routes        - API routes
    - services
      - dataBaseServices  - DB function handler
    - test
  - dist            - built source

# How to start server
1. npm run build
2. npm run start:server


# ContactList EndPoints
1. Post - localhost:8080/api/contact
   body example
{
    "name": {
        "first": "Nikhith",
        "middle": "Raj",
        "last": "nalla"
    },
    "address": {
        "street": "waters ave",
        "city": "tampa",
        "state": "FL",
        "zip": "33614"
    },
    "phone": [
        {
            "number": "xxxxxx",
            "type": "home"
        },
        {
            "number": "xxxxxx",
            "type": "home"
        }
    ],
    "email": "nikhith@gmail.com"
}

2. Get - localhost:8080/api/contact

3. Get by Id - localhost:8080/api/contact/{:id}

4. update - localhost:8080/api/contact/1
    body example
    {
    "name": {
        "first": "Rakesh",
        "middle": "singh",
        "last": "nalla"
    },
    "address": {
        "street": "waters ave",
        "city": "tampa",
        "state": "FL",
        "zip": "33614"
    },
    "phone": [
        {
            "number": "xxxxxx",
            "type": "home"
        },
        {
            "number": "xxxxxx",
            "type": "home"
        }
    ],
    "email": "nikhith@gmail.com"
}

5. delete - localhost:8080/api/contact/{:id}

############### END ###############################

**********  Feel free to reach out to me raj11.nalla@gmail.com **************