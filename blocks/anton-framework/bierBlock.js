var BaseBlock = require("../default/baseBlock");

/**
 * IndexBlock: This class is used to get data used by the IndexController to render the template.
 * It is supposed to give orders to models to get Data, and create the object to pass to the template.
 * NOTE: It should NEVER be used to post data in any way, the IndexController is supposed to do This.
 */
class BierBlock extends BaseBlock {
    constructor() {
        super();
        this.setTitle();
    }

    setTitle() {
        this._data.title = "Bier";
    }

    getData(req) {
        this._data.isLoggedIn = (typeof(req.session.user)!=="undefined");
        return this._data;
    }
}

module.exports = BierBlock;