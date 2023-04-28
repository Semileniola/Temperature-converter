function RC4(seed) {

    this.s = new Array(256);

    this.i = 0;

    this.j = 0;

    for (var i = 0; i < 256; i++) {

        this.s[i] = i;

    }

    if (seed) {

        this.mix(seed);

    }

}

/**

 * Get the underlying bytes of a string.

 * @param {string} string

 * @returns {Array} An array of bytes

 */

RC4.getStringBytes = function(string) {

    var output = [];

    for (var i = 0; i < string.length; i++) {

        var c = string.charCodeAt(i);

        var bytes = [];

        do {

            bytes.push(c & 0xFF);

            c = c >> 8;

        } while (c > 0);

        output = output.concat(bytes.reverse());

    }

    return output;

};

RC4.prototype._swap = function(i, j) {

    var tmp = this.s[i];

    this.s[i] = this.s[j];

    this.s[j] = tmp;

};

/**

 * Mix additional entropy into this generator.

 * @param {String} seed

 */

RC4.prototype.mix = function(seed) {

    var input = RC4.getStringBytes(seed);

    var j = 0;

    for (var i = 0; i < this.s.length; i++) {

        j += this.s[i] + input[i % input.length];

        j %= 256;

        this._swap(i, j);

    }

};

/**

 * @returns {number} The next byte of output from the generator.

 */

RC4.prototype.next = function() {

    this.i = (this.i + 1) % 256;

    this.j = (this.j + this.s[this.i]) % 256;

    this._swap(this.i, this.j);

    return this.s[(this.s[this.i] + this.s[this.j]) % 256];

};

/**

 * Create a new random number generator with optional seed. If the

 * provided seed is a function (i.e. Math.random) it will be used as

 * the uniform number generator.

 * @param seed An arbitrary object used to seed the generator.

 * @constructor

 */

function RNG(seed) {

    if (seed == null) {

        seed = " " + Math.random() + Date.now();

    } else if (typeof seed === "function") {

        // Use it as a uniform number generator

        this.uniform = seed;

        this.nextByte = function() {

            return ~~(this.uniform() * 256);

        };

        seed = null;
    }
}
