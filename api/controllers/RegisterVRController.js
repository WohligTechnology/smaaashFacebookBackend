module.exports = _.cloneDeep(require("sails-wohlig-controller"));
var controller = {

    saveVRegisteration: function (req, res) {
        if (req.body) {
            console.log("CNTRL", req.body);
            RegisterVR.saveVRegisteration(req.body, res.callback);
        } else {
            res.json({
                value: false,
                data: "Invalid Request"
            });
        }
    },
     searchVR: function (req, res) {
        RegisterVR.searchVR(req.body, res.callback);
    },
};

module.exports = _.assign(module.exports, controller);