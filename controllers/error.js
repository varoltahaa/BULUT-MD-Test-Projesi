module.exports.get404Page = (req,res)=>{
    // res.status(404) kodu ile HTTP yanıtının durum kodu 404 olarak ayarlanır. Bu sayede, tarayıcıya bu isteğin başarısız olduğu bildirilir.
    res.status(404);
    res.render("404-not-found");
}