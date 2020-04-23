var BaseController = require("../default/baseController");

/**
 * IndexController: This class is supposed to perform most logic functions, as well as render the template.
 * It is supposed to give orders to Model classes to get and set Data,
 * and use the Block class to get information to render the template.
 * NOTE: It is NEVER supposed to pass its own information to the template, this information should always be received by calling _block.getData().
 */
class BierController extends BaseController {
    
    constructor() {
        super();
        var BierBlock = require("../../blocks/" + this._sitename + "/bierBlock");
        this._block = new BierBlock();
    }

    executeGet(req, res) {
        res.render(this._pagesPath + "bier", this._block.getData(req));
    }

    executePost(req, res) {

    }
}

module.exports = BierController;