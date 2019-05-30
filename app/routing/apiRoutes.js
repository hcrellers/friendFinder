const friendsArray = require("../data/friends");


function apiRoutes(app) {

    app.get("/api/friends", function (req, res) {
        return res.json(friends);
    });



    app.post("/api/friends", function (req, res) {
        var newFriend = req.body;
        console.log(newFriend);
        characters.push(newFriend);
    });

}

module.exports = apiRoutes;