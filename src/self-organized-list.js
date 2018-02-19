class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}

class SelfOrganizedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    insert(data) {
        sol.insert('Game of thrones');
            sol.insert('Supernatural');
            sol.insert('Breaking Bad');
       // sol.insert('Pike');
        //sol.insert('Bass');
        //sol.insert('Roach');
    }

    size() {
        sol.size()
    }

    at(index) {
        sol.at(1);
        sol.at(2);
        sol.at(0);
    }

    findNode(data) {
        sol.findNode('Pike');
    }

    toArray() {
        sol.toArray();
    }

    removeAt(index) {
        sol.removeAt(2)
    }

    moveToFront(node) {
        sol.moveToFront('Roach')
    }

    reorganize(data) {
        sol.reorganize('Bass');
    }

}

module.exports = {
    SelfOrganizedList,
    Node
};
