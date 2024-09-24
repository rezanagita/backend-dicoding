class Wolf {
    constructor() {
        this.strenght = Math.floor(Math.random() * 100);
    }

    howl() {
        console.log('OwoWooo!')
    }
}

module.exports = Wolf