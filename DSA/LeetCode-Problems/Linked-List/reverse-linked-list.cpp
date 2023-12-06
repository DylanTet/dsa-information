// Given the head of a singly linked list, reverse the list, and return the reversed list.

struct ListNode {
    int val;
    ListNode *next;
    ListNode() : val(0), next(nullptr) {}
    ListNode(int x) : val(x), next(nullptr) {}
    ListNode(int x, ListNode *next) : val(x), next(next) {}
};
 
class Solution {
public:
    ListNode* reverseList(ListNode* head) {

        if (head == NULL || head->next == NULL) return head;

        // We create pointers to both the starting previous node as well as copying the head Node
        ListNode* prev = NULL;
        ListNode* curr = head;
        
        // Simply loop through the Nodes while creating a temp variable to store the actual next node while we replace next
        while (curr != NULL) {
            ListNode* tmp = curr->next;
            curr->next = prev;
            prev = curr;
            curr = tmp;
        }
        return prev;
    }
};