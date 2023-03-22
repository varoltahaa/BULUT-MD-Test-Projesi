const movie = [
    {id:1234,name:"The Road Trick",image:"https://github.com/carlosavilae/Netflix-Clone/blob/master/img/p1.PNG?raw=true",description:"Harika Film",categoryId:1,date:"18.2.2023",score:5},
    {id:1235,name:"Cooking on High",image:"https://github.com/carlosavilae/Netflix-Clone/blob/master/img/o1.PNG?raw=true",description:"Güzel Film",categoryId:2,date:"19.2.2023",score:7},
    {id:1236,name:"The Road Trick",image:"https://github.com/carlosavilae/Netflix-Clone/blob/master/img/p1.PNG?raw=true",description:"Fena Değil Film",categoryId:2,date:"15.2.2023",score:6},
    {id:1237,name:"Brain on Fire",image:"https://github.com/carlosavilae/Netflix-Clone/blob/master/img/o4.PNG?raw=true",description:"Fena Değil Film",categoryId:1,date:"12.3.2023",score:2},
    {id:1238,name:"Guardians of The Galaxy",image:"https://github.com/carlosavilae/Netflix-Clone/blob/master/img/m3.PNG?raw=true",description:"Fena Değil Film",categoryId:2,date:"10.1.2023",score:9},
    {id:1239,name:"Jessica Jones",image:"https://github.com/carlosavilae/Netflix-Clone/blob/master/img/o3.PNG?raw=true",description:"Fena Değil Film",categoryId:1,date:"3.2.2023",score:10},
    {id:1241,name:"The Bourne Ultimatium",image:"https://github.com/carlosavilae/Netflix-Clone/blob/master/img/m2.PNG?raw=true",description:"Fena Değil Film",categoryId:2,date:"20.3.2023",score:5},
    {id:1242,name:"The Bourne Ultimatium",image:"https://github.com/carlosavilae/Netflix-Clone/blob/master/img/m2.PNG?raw=true",description:"Fena Değil Film",categoryId:2,date:"20.3.2023",score:5},
    {id:1243,name:"The Bourne Ultimatium",image:"https://github.com/carlosavilae/Netflix-Clone/blob/master/img/m2.PNG?raw=true",description:"Fena Değil Film",categoryId:2,date:"20.3.2023",score:5},
    {id:1244,name:"The Bourne Ultimatium",image:"https://github.com/carlosavilae/Netflix-Clone/blob/master/img/m2.PNG?raw=true",description:"Fena Değil Film",categoryId:2,date:"20.3.2023",score:5},
    {id:1245,name:"The Bourne Ultimatium",image:"https://github.com/carlosavilae/Netflix-Clone/blob/master/img/m2.PNG?raw=true",description:"Fena Değil Film",categoryId:2,date:"20.3.2023",score:5},
    {id:1246,name:"The Bourne Ultimatium",image:"https://github.com/carlosavilae/Netflix-Clone/blob/master/img/m2.PNG?raw=true",description:"Fena Değil Film",categoryId:2,date:"20.3.2023",score:5},
    {id:1247,name:"The Bourne Ultimatium",image:"https://github.com/carlosavilae/Netflix-Clone/blob/master/img/m2.PNG?raw=true",description:"Fena Değil Film",categoryId:2,date:"20.3.2023",score:5},
    {id:1248,name:"The Bourne Ultimatium",image:"https://github.com/carlosavilae/Netflix-Clone/blob/master/img/m2.PNG?raw=true",description:"Fena Değil Film",categoryId:2,date:"20.3.2023",score:5},
    {id:1249,name:"The Bourne Ultimatium",image:"https://github.com/carlosavilae/Netflix-Clone/blob/master/img/m2.PNG?raw=true",description:"Fena Değil Film",categoryId:2,date:"20.3.2023",score:5},
    {id:1250,name:"The Bourne Ultimatium",image:"https://github.com/carlosavilae/Netflix-Clone/blob/master/img/m2.PNG?raw=true",description:"Fena Değil Film",categoryId:2,date:"20.3.2023",score:5},
    {id:1251,name:"The Bourne Ultimatium",image:"https://github.com/carlosavilae/Netflix-Clone/blob/master/img/m2.PNG?raw=true",description:"Fena Değil Film",categoryId:2,date:"20.3.2023",score:5},
    {id:1252,name:"The Bourne Ultimatium",image:"https://github.com/carlosavilae/Netflix-Clone/blob/master/img/m2.PNG?raw=true",description:"Fena Değil Film",categoryId:2,date:"20.3.2023",score:5},
    {id:1253,name:"The Bourne Ultimatium",image:"https://github.com/carlosavilae/Netflix-Clone/blob/master/img/m2.PNG?raw=true",description:"Fena Değil Film",categoryId:2,date:"20.3.2023",score:5},
    {id:1254,name:"The Bourne Ultimatium",image:"https://github.com/carlosavilae/Netflix-Clone/blob/master/img/m2.PNG?raw=true",description:"Fena Değil Film",categoryId:2,date:"20.3.2023",score:5},
    {id:1255,name:"The Bourne Ultimatium",image:"https://github.com/carlosavilae/Netflix-Clone/blob/master/img/m2.PNG?raw=true",description:"Fena Değil Film",categoryId:2,date:"20.3.2023",score:5},
    {id:1256,name:"The Bourne Ultimatium",image:"https://github.com/carlosavilae/Netflix-Clone/blob/master/img/m2.PNG?raw=true",description:"Fena Değil Film",categoryId:2,date:"20.3.2023",score:5},
    {id:1257,name:"The Bourne Ultimatium",image:"https://github.com/carlosavilae/Netflix-Clone/blob/master/img/m2.PNG?raw=true",description:"Fena Değil Film",categoryId:2,date:"20.3.2023",score:5},
    {id:1258,name:"The Bourne Ultimatium",image:"https://github.com/carlosavilae/Netflix-Clone/blob/master/img/m2.PNG?raw=true",description:"Fena Değil Film",categoryId:2,date:"20.3.2023",score:5},
    {id:1259,name:"The Bourne Ultimatium",image:"https://github.com/carlosavilae/Netflix-Clone/blob/master/img/m2.PNG?raw=true",description:"Fena Değil Film",categoryId:2,date:"20.3.2023",score:5},
    {id:1260,name:"The Bourne Ultimatium",image:"https://github.com/carlosavilae/Netflix-Clone/blob/master/img/m2.PNG?raw=true",description:"Fena Değil Film",categoryId:2,date:"20.3.2023",score:5},
]

const now = new Date();
const gun = now.getDate();
const ay = now.getMonth() + 1; // JavaScript'te ay sayıları 0-11 arasında olduğu için 1 ekliyoruz.
const yil = now.getFullYear();
const date =`${gun}.${ay}.${yil}` 

module.exports = class Movie {

    constructor (name,image,description,categoryId){
        this.id = Math.floor(Math.random()*9999)+1;
        this.name = name;
        this.image = image;
        this.description = description;
        this.categoryId = categoryId;
        this.date =date
    }

    //"saveMovie" yöntemi, oluşturulan kategori nesnesini "movie" dizisine ekliyor.
    saveMovie() {
        movie.push(this);
    }

    //"getAll" yöntemi, mevcut tüm kategorileri içeren "movie" dizisini döndürüyor.
    static getAll() {
        return movie;
    }

    //"getById" yöntemi, belirtilen "id" parametresine sahip bir kategori nesnesini "movie" dizisinden buluyor ve döndürüyor.
    static getById(id){
        return movie.find(i=>i.id == id);;
    }

    //"getMovieCategoryId" yöntemi, belirtilen "categoryId" parametresine sahip bir kategori nesnesini "movie" dizisinden buluyor ve döndürüyor.
    static getMovieCategoryId(categoryId){
        return movie.filter(i=>i.categoryId == categoryId);
    }
}