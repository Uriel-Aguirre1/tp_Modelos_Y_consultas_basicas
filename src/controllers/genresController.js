const {Genre} = require('../database/models');
module.exports = {
    list: (req,res) => {
        Genre.findAll()
        .then(genres => res.render('genreslist',{genres}))
        .catch(error => console.log(error));
    },
    detail : (req,res) =>{
        Genre.findByPk(req.params.id)
        .then(genres => res.render('genresDetail',{genres}))
        .catch(error => console.log(error));
    }
}