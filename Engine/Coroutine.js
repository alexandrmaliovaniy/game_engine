function WaitForSeconds(sec = 0) {
    return new Promise(function(res, rej) {
        setTimeout(function() {
            res();
        }, sec);
    });
}
function StartCoroutine(cor = function(){}) {
    if (cor.next) {
        let list = cor.next();
        if (!list.done) {
            list.value.then(function() {
                StartCoroutine(cor);
            });
        }
    }
}

module.exports = {
    WaitForSeconds: WaitForSeconds,
    StartCoroutine: StartCoroutine
}