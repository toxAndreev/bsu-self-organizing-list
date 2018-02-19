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

        var qwe = new Node(data);
        if (this.head == null)
        {
            this.head = qwe;
            this.tail = qwe;

        } else {
            this.tail.next = qwe;
            qwe.next = null;
            qwe.prev = this.tail;
            this.tail = qwe;
        }
    }

    size() {
        if (this.head == null)
        {
            return 0;
        }
        var i = 1;
         var val = this.head;

        while (val.next != null)
        {
            val = val.next;
            i++;
        }
        return i;
    }

    at(index) {
        var arr2 = this.toArray();
               if ( index >= arr2.length || arr2.length === 0)
                {
                   return null;
               }
               else
               {
               return arr2[index];
    }
}
    findNode(data) {

        if (!this.size())
        {
            return null;
        }
        var node = this.head;
        while (node != null)
        {
            if (node.data === data)
            {
                return node;
            }
            node = node.next;
        }
        return null;
    }

    toArray() {
       if (!this.size())
       {
                  return [];
              }
              let arr = [];
              var node = this.head;
              while (node)
               {
                  arr.push(node.data);
                  node = node.next;
              }
              return arr;
    }

    removeAt(index) {
       console.log('==================this')
       console.log(this)
       console.log('====================index')
       console.log(index)
    }
    moveToFront(node) {
        if(!this.size())
        {
                    return 0;
        }

                var node2 = this.head;
                while(node2 != null){
                    if(node2 == node)
                    {
                        while(node2 != this.head)
                        {
                            var qwe = node2.data;
                            node2.data = node2.prev.data;
                            node2.prev.data = qwe;
                            node2 = node2.prev;
                        }
                        return 0;
                    }
                    node2 = node2.next;
                }
    }
    reorganize(data) {
        if(!this.size())
        {
                    return false;

        }
                var node =this.head;
                for(var i=0;i<this.size();i++)
                {
                    if(node.data==data)
                    {
                        this.moveToFront(node);
                        return true;
                    }
                    node=node.next;
                }

                return false;
            }

}

module.exports = {
    SelfOrganizedList,
    Node
};
