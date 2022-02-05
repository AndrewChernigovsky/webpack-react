var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Post = function () {
    function Post(title, img) {
        _classCallCheck(this, Post);

        this.title = title, this.img = img, this.date = new Date();
    }

    _createClass(Post, [{
        key: "toString",
        value: function toString() {
            return JSON.stringify({
                title: this.title,
                date: this.date.toJSON(),
                img: this.img
            }, null, 2);
        }
    }, {
        key: "uppercaseTitle",
        get: function get() {
            return this.title.toUpperCase();
        }
    }]);

    return Post;
}();

export default Post;