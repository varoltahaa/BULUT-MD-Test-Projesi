const categories = [
    {id:1,name:"Cinema Series",image:"https://github.com/carlosavilae/Netflix-Clone/blob/master/img/tv6.PNG?raw=true"},
    {id:2,name:"Movies",image:"https://github.com/carlosavilae/Netflix-Clone/blob/master/img/tv5.PNG?raw=true"}
]


module.exports = class Category{

    constructor(name,image){
        this.id = categories.length+1;
        this.name = name;
        this.image = image;
    }

    //"saveCategories" yöntemi, oluşturulan kategori nesnesini "categories" dizisine ekliyor.
    saveCategories(){
            categories.push(this);
    }

    //"getAll" yöntemi, mevcut tüm kategorileri içeren "categories" dizisini döndürüyor.
    static getAll(){
        return categories;
    }

    //"getById" yöntemi, belirtilen "id" parametresine sahip bir kategori nesnesini "categories" dizisinden buluyor ve döndürüyor.
    static getById(id){
        const category = categories.find(i=>i.id == id);
        return category
    }
}
