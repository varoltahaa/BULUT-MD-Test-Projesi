//Express.js kütüphanesini import ediyoruz.
const express = require("express");

//Uygulama oluşturmak için bir Express.js uygulaması yaratılır.
const app = express();

//Dosya yollarını belirlemek için Node.js'in dahili "path" kütüphanesi kullanılır.
const path = require("path");

const flash = require('express-flash');
const session = require('express-session');

app.use(session({
  secret: 'mysecretkey',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 60000 }
}));

//Express.js kullanarak oturum ve flash mesajları oluşturmak için gerekli middleware'ler import edilir ve uygulamaya eklenir.
app.use(flash());

//View engine global methodyu kullanılarak Pug kullanılacağı belirtilir. Pug, HTML şablonları oluşturmak için kullanılan bir template engine'dir.
app.set('view engine','pug');


const bodyParser = require("body-parser");
//HTTP POST istekleri ile gelen verileri ayrıştırmak için gerekli olan middleware'ler import edilir ve uygulamaya eklenir.
app.use(bodyParser.urlencoded({extended:false}));


//Uygulamanın root dizininde "home-page" ve "add-movie" isimli router'lar oluşturulur ve uygulamaya eklenir.
const formRoutes = require("./routers/home-page");
const add_movieRouters = require("./routers/add-movie");
app.use(formRoutes);
app.use(add_movieRouters);


//Hata yönetimi için "error" isimli controller import edilir ve uygulamaya eklenir.
const errorController = require("./controllers/error");
app.use(errorController.get404Page)

//Uygulama belirtilen 3000 numaralı portu dinlemeye başlar. Uygulama çalıştırıldığında konsola "Listening Port 3000" yazısı yazdırılır.
app.listen(3000, ()=>{
    console.log("Listening Port 3000");
});

