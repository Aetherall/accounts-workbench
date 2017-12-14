/*
  >=> ========================= >=>
      ACCOUNTS-JS SETUP EXAMPLE
  >=> ========================= >=>
*/

// ============================= ==>
// >=> import Accounts-Js packages
// ============================= ==>



// =================================================
// Accounts Server => Core
// Permit to tie all packages together

import AccountsServer from '@accounts/server';


// =================================================
// Accounts Mongo => Database Interface
// Provides Access to a database

import MongoInterface from '@accounts/mongo';


//==================================================
// Transport Express => Network Interface
// Provides the Express middleware connecting your express application to Accounts-JS

import TransportExpress from '@accounts/express';


//==================================================
// Token Transport Express Headers => Token Storage
// Defines the way to store the tokens while sending them to the client 

import TokenTransportExpressHeaders from '@accounts/express-token-headers';   // Headers => Store in request headers
import TokenTransportExpressCookies from '@accounts/express-token-cookies'; // Cookies => Store in request cookies
import TokenTransportExpressBody from '@accounts/express-token-body';       // Body    => Store in request body


//==================================================
// Token Transport Manager => Token Storage 
// Allow multiple TokenTransport

import TokenTransportManager from '@accounts/token-transport-manager';


// =================================================
// Password Service => Authentication By Password

import PasswordService from '@accounts/password';


// =================================================
// Email Service => Email Sender Service
// Provide an Interface to send emails

import EmailService from '@accounts/email-debug';     // Email Debug   => console.log
//import EmailService from '@accounts/email-mailgun'; // Email Mailgun => mailgun sender



// =================================================
// Email Plugin Password => Email Notification Service Plugin for Password Authentication
// Provide a set of email templates to an Email Service

import EmailPluginPassword from '@accounts/email-plugin-password';


// =================================================
// TokenManager => JWT Management
// Generate and decode accessTokens and refreshTokens

import TokenManager from '@accounts/token';



// ================= ==>
// >=> instanciation
// ================= ==>



// >=> Database Interface

// Get a Mongo Database Object or a Promise returning one
import Connection from './connection';

// Create the Database Interface
const databaseInterface = new MongoInterface(Connection);




// >=> Transport

// Select a way to store tokens
const tokenTransportHeaders = new TokenTransportExpressHeaders()
const tokenTransportCookies = new TokenTransportExpressCookies({
  access:{
    secure: false,
    httpOnly: false,
    domain: 'localhost',
    sameSite: false,
  },
  refresh:{
    secure: false,
    httpOnly: false,
    domain: 'localhost',
    sameSite: false,
  }
})
const tokenTransportBody = new TokenTransportExpressBody()

// If multiple token transport selected, the Token Transport Manager must be used 
const tokenTransport = new TokenTransportManager(tokenTransportHeaders, tokenTransportCookies, tokenTransportBody)


// Build the transport 
const transport = new TransportExpress({

  tokenTransport,

})

// Extract the authentication middleware and export it to consume it on express
export const authMiddleware = transport.middleware;

//extract the accounts router and export it to consume it on express
export const accountsRouter = transport.router;

// >=> Authentication

// instanciate your authentication services
const passwordService = new PasswordService();




// >=> Notification

// instanciate the notification plugins needed to provide notification support to authentication services
const emailPluginPassword = new EmailPluginPassword();

// instanciate your notifications services
const emailService = new EmailService({

  notificationPlugins: [ emailPluginPassword ]

})




// >=> Token Manager

// instanciate the Token Manager
const tokenManager = new TokenManager({

  secret: 'e'

});


// ================= ==>
// >=> Accounts Server
// ================= ==>

const accountsServer = new AccountsServer({
  
    databaseInterface,
  
    transport,
  
    tokenManager,
  
    authenticationServices: [ passwordService ],
  
    notificationServices: [ emailService ]
  
})