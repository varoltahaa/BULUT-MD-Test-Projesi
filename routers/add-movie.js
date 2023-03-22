//"express" modülü yükleniyor ve "express.Router()" yöntemi kullanılarak "router" nesnesi oluşturuluyor.
const express = require("express");
const router = express.Router();

//"moviesController" adında bir modül de yükleniyor ve bu modülde "getAddMoviePage" ve "AddMovie" adında iki yöntem tanımlanmış.
const moviesController = require("../controllers/movies");

//"router.get" yöntemi kullanılarak "/add" URL'sine GET isteği geldiğinde "getAddMoviePage" yöntemi çağrılıyor.
// Bu yöntem, bir HTML sayfası döndürerek kullanıcıya yeni bir film eklemek için bir form sunuyor.
router.get("/add",moviesController.getAddMoviePage);


//"router.post" yöntemi kullanılarak "/add" URL'sine POST isteği geldiğinde "AddMovie" yöntemi çağrılıyor.
// Bu yöntem kullanıcının gönderdiği film bilgilerini alarak bir yeni film nesnesi oluşturuyor ve kaydediyor.
router.post("/add",moviesController.AddMovie)

//"router" nesnesi dışa aktarılıyor ve diğer modüller tarafından kullanılabilir hale getiriliyor.
module.exports = router;


