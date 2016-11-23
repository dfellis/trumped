var l = require('lambda-js');

function trumped(fn) {
    var fnSrc = l.serialize(fn);
    fnSrc.expression = fnSrc.expression.split(';').map(function(snippet) {
        return "try { " + snippet + "; } catch(e) { this.trumped++; }";
    }).join(" ");
    return function makeFnGreatAgain() {
        try {
            var trumped = { trumped: 0 };
            var trumpedFn = l.deserialize(fnSrc);
            var bestValue = trumpedFn.apply(trumped, arguments);
            if (!trumped.trumped) throw 'CSS';
            for (var i = 0; i < trumped.trumped; i++) {
                bestValue = bestValue + bestValue;
            }
            return bestValue;
        } catch(e) {
            return "We're going to make " + e.toString() + " pay for this!";
        }
    };
}

module.exports = trumped;
