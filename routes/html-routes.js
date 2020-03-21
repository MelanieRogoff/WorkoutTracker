const path = require('path');

module.exports = function(app) {
app.get("/", (req, res) => { //INDEX ROUTE
    res.sendFile(path.join(__dirname, "../Develop/public/index.html"))
})

app.get('/stats', function(req, res) { //STATS ROUTE
    res.sendFile(path.join(__dirname, "../Develop/public/stats.html"))

});
app.get('/exercise', function(req, res) { //EXERCISES ROUTE
    res.sendFile(path.join(__dirname, "../Develop/public/exercise.html"))

})
}
