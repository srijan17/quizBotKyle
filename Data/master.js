let master = undefined;

module.exports = {
    set: (newMaster) => {
        master = newMaster
    },
    get: () => {
        return master
    }
}