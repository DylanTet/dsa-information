/*
You are given the heads of two sorted linked lists list1 and list2.

Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.

Return the head of the merged linked list.
*/

class ListNode {
    val: number | undefined
    next: ListNode | undefined
}
 
var mergeTwoLists = function(list1, list2) {
    let mergedList = new ListNode();
    let dummyNode = mergedList;
    let curr1 = list1;
    let curr2 = list2;

    while (curr1 && curr2) {
        if (curr1.val > curr2.val) {
            mergedList.next = curr2;
            mergedList = mergedList.next!;
            curr2 = curr2.next;
        } else {
            mergedList.next = curr1;
            mergedList = mergedList.next!;
            curr1 = curr1.next;
        }
    }

    if (curr1) {
        mergedList.next = curr1;
    } else if (curr2) {
        mergedList.next = curr2;
    }

    return dummyNode.next;
};