class Input {
    static activeKeys = []
    static KeyCode = {
        A: 65,
        S: 83,
        W: 87,
        D: 68,
        E: 69,
        R: 82,
        T: 84,
        Y: 89,
        U: 85,
        I: 73,
        O: 79,
        P: 80,
        F: 70,
        G: 71,
        H: 72,
        J: 74,
        K: 75,
        L: 76,
        Z: 90,
        C: 67,
        V: 86,
        B: 66,
        N: 78,
        M: 77,
        Zero: 48,
        One: 49,
        Two: 50,
        Three: 51,
        Four: 52,
        Five: 53,
        Six: 54,
        Seven: 55,
        Eight: 56,
        Nine: 57,
        Enter: 13,
        ArrowLeft: 37,
        ArrowUp: 38,
        ArrowRight: 39,
        ArrowDown: 40,
        Backspace: 8,
        Escape: 27,
        TAB: 20,
        Space: 32,
        Control: 17,
        Alt: 18,
        Shift: 16,
    }
    /**
     * Return key state
     * @param {Input.KeyCode} keycode 
     */
    static GetKeyDown(keycode) {
        if (Input.activeKeys[keycode]) {
            return true;
        }
        return false;
    }
}
document.addEventListener("keydown", function(e) {
    Input.activeKeys[e.which] = true;
});
document.addEventListener("keyup", function(e) {
    Input.activeKeys[e.which] = false;
});
module.exports = Input;