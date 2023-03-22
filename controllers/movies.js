const Movie = require("../models/movies");
const Category = require("../models/category");


// Bu fonksiyon tüm filmleri "Movie" modelinden alır ve "index" Pug şablonunu render ederek tüm filmleri şablon içinde kullanılabilir hale getirir.
module.exports.getMovies = (req,res,next)=>{
    const movie = Movie.getAll();
    res.render("index",{movie:movie});
}


//Bu fonksiyon tüm kategorileri "Category" modelinden alır ve "home-page" Pug şablonunu render ederek tüm kategorileri şablon içinde kullanılabilir hale getirir.
module.exports.getCategory = (req,res,next)=>{
    const category = Category.getAll();
    res.render("home-page",{category:category});
}

//Bu fonksiyon belirli bir kategoriye ait filmleri "Movie" modelinden alır, kategori adını "Category" modelinden alır ve
// "index" Pug şablonunu render ederek sadece belirtilen kategoriye ait filmleri ve kategori adını şablon içinde kullanılabilir hale getirir.
module.exports.getMovieCategoryId = (req,res,next)=>{
    const category = req.params.categoryId;
    const movie = Movie.getMovieCategoryId(category);
    const name = Category.getById(category)
    const titleName = name.name
    res.render("index",{title: titleName,movie:movie.slice(0,18)});
}

//Bu fonksiyon, belirli bir filmi "Movie" modelinden alır ve "details" Pug şablonunu render ederek filmin detay şablonu içinde kullanılabilir hale getirir.
module.exports.getMovie = (req,res,next)=>{
    const movie = Movie.getById(req.params.movieid);
    res.render("details", {
        movie:movie
    });
}
// Bu fonksiyon "Category" modelinden alır "add-movies" Pug şablonundan render ederek add işlemi yaparken category seçeneklerini listeler.
module.exports.getAddMoviePage = (req,res,next)=>{
    const categories = Category.getAll();
    res.render("add-movie",{category:categories});
}


//Bu method film eklemek için kullanılır. "req": objesi, HTTP isteği hakkındaki bilgileri içerir. "res": objesi, HTTP yanıtı hakkındaki bilgileri içerir.
//"next" fonksiyonu, sonraki middleware veya yönlendirme işlevine geçmek için kullanılır.
//"Movie" bir sınıftır ve bir film oluşturmak için kullanılır.
//"req.body" nesnesi, HTTP isteğinin gövdesi içindeki verileri içerir.
//"movies" nesnesi, yeni bir "Movie" örneğidir.
//"movies.saveMovie()" ifadesi, "movies" nesnesini veritabanına kaydeder.
//"res.redirect("/")" ifadesi, kullanıcıyı ana sayfaya yönlendirir.
module.exports.AddMovie = (req,res,next)=>{
    const movies = new Movie(req.body.name,req.body.image,req.body.description,req.body.categoryId);
    movies.saveMovie();
    res.redirect("/");
}

module.exports.getDropdown = (req,res,next)=>{
    res.render('index', { data });
}

module.exports.postDropdown = (req,res,next)=>{
    const sortBy = req.query.date;
    let sortedData;
    if (sortBy == 'newest'){
        sortedData = data.sort((a, b) => new Date(b.date) - new Date(a.date));
    }
    else if (sortBy == 'oldest') {
        sortedData = data.sort((a, b) => new Date(a.date) - new Date(b.date));
    } else {
        sortedData = data;
    }
    console.log(sortedData);
    res.send(sortedData);
}

module.exports.Search = (req,res,next)=>{
    //"name" adında bir değişken tanımlanıyor ve bu değişkene "req.query.name" değeri atanıyor. Bu, HTTP sorgusuyla gönderilen "name" parametresini içerir.
    const name = req.query.name;
    if (name.length < 3) {
        req.session.error = 'You cannot enter less than 3 characters.';
        res.redirect('/');
      } else {
        const movie = Movie.getAll().filter(movie => {
          return movie.name.toLowerCase().includes(name.toLowerCase());
        });
        res.render('index', {movie, name, session:req.session});
      }

}






