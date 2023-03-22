//"express" modülü yükleniyor ve "express.Router()" yöntemi kullanılarak "router" nesnesi oluşturuluyor.
const express = require("express");
const router = express.Router();

//"moviesController" adında bir modül de yükleniyor ve bu modülde farklı amaçlar için birkaç yöntem tanımlanmış.
const moviesController = require("../controllers/movies");


//"router.get" yöntemi kullanılarak "/" URL'sine GET isteği geldiğinde "getCategory" yöntemi çağrılıyor. Bu yöntem, tüm kategorileri ve kategori adlarına sahip filmleri listeleyen bir HTML sayfası döndürüyor.
router.get("/",moviesController.getCategory);

//"router.get" yöntemi kullanılarak "/category/:categoryId" URL'sine GET isteği geldiğinde "getMovieCategoryId" yöntemi çağrılıyor.
// Bu yöntem, belirli bir kategoriye ait filmleri listeleyen bir HTML sayfası döndürüyor.
router.get("/category/:categoryId",moviesController.getMovieCategoryId);

//"router.get" yöntemi kullanılarak "/search" URL'sine GET isteği geldiğinde "Search" yöntemi çağrılıyor.
// Bu yöntem, kullanıcının arama terimlerini alarak bu terimlere göre filmleri filtreleyen bir HTML sayfası döndürüyor.
router.get("/search",moviesController.Search);

router.get('/getDropdown',moviesController.getDropdown);

router.get("/postDropdown",moviesController.postDropdown);

//"router.get" yöntemi kullanılarak "/movie/:movieid" URL'sine GET isteği geldiğinde "getMovie" yöntemi çağrılıyor.
// Bu yöntem, belirli bir film hakkında ayrıntılı bilgi içeren bir HTML sayfası döndürüyor.
router.get("/movie/:movieid",moviesController.getMovie);

module.exports = router;

