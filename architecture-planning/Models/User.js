// User data
//     _id                   Not input - hidden
//     username:             string
//     name:                 string
//     email:                email
//     password:             password
//     type:"owner"          string (default: owner; other options: caretaker)
//     ZIP:                  string
//     phone:                string
//     dogsOwned: [          Not input - hidden
//          {
//              "_id":"fjfjfjjf"
//          }
//      ]
//     dogsFavorited: [          Not input - hidden
//          {
//              "_id":"fjfjfjjf"
//          }
//      ]
//      friends: [
//          {
//              "_id":"012390129309132",        ObjectId
//              "permissions": "view"           string (default:"view"; other options include "message", "care")
//          }
//      ],
//      "messages": [
//          {
//              "_id":"5118916351"              ObjectId
//          }
//      ],
//      settings: [ 
//          {
//      "privateSwitch":true                     boolean
//      "ownerNameSwitch":"",                    boolean
//      "ownerAddressSwitch":"",                 boolean
//      "ownerPhoneSwitch": "" 
//          }
//      ]
//      "ownerMap":"www.google.com/maps/..."     string
//      "contactVetName":"PAC Animal Hospital",  string
//      "contactVetAddress":"123 Test Street",   string
//      "contactVetPhone": "4101234567",         number
//      "contactEVetName":"Emergency Animal Hospital",  string
//      "contactEVetAddress":"456 Test Street",   string
//      "contactEVetPhone": "4109876543",        number
//     ]

export const USERS = [
    {
    "_id":"1",
    "name":"dan",
    "email":"dan.z.haas@gmail.com",
    "password":"password",
    "ZIP":21202,
    "phone":4109372073,
    "dogsOwned": [
        {
            "dogId":"suede"
        }
    ],
    "dogsFavorited": [
        {
            "dogId":"boh"
        },
        {
            "dogId":"cato"
        }
    ],
    "contactOwnerNameSwitch":"true",
    "contactOwnerAddressSwitch":"true",
    "contactOwnerPhoneSwitch": "true",
    "contactVetName":"PAC Animal Hospital",
    "contactVetAddress":"123 Test Street",
    "contactVetPhone": "4101234567",
    "contactEVetName":"Emergency Animal Hospital",
    "contactEVetAddress":"456 Test Street",
    "contactEVetPhone": "4109876543",
    }
]