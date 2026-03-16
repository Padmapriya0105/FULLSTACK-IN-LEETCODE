/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
    if (!head || k === 1) return head;

    let dummy = new ListNode(0);
    dummy.next = head;
    let groupPrev = dummy;
    while (true) {
        let kth = groupPrev; 
        let count = 0;
        while (kth && count < k) {
            kth = kth.next;
            count++;
        }
        if (!kth) break;
        let groupNext = kth.next;
        let prev = kth.next; 
        let curr = groupPrev.next;
        for (let i = 0; i < k; i++) {
            let tmp = curr.next;
            curr.next = prev;
            prev = curr;
            curr = tmp;
        }
        let oldGroupHead = groupPrev.next;
        groupPrev.next = kth;
        groupPrev = oldGroupHead; 
    }

    return dummy.next;
};
