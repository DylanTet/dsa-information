#include <iostream>

class Node {

public:
  int value;
  Node* next;

  Node(int value) : value(value), next(nullptr) {}
};

class LinkedList {

public:
  Node* head;
  int length;
  Node* tail;

  LinkedList() : head(nullptr), tail(nullptr), length(0) {}

  void push(int value) {
    Node* node = new Node(value); 
    length++;
    
    if (tail) {
      tail->next = node;
    } else {
      head = tail = node;
    }
    tail = node;
  }
  
  int deleteNode(int index) {
    if (index == 0) {
      Node* oldHead = head;
      if (oldHead) {
        head = oldHead->next;
      } else {
        head = nullptr;
        tail = nullptr;
      }

      length--;
      return oldHead->value;
    }

    Node* nodeBefore = find(index - 1);
    Node* nodeToDelete = nodeBefore->next;

    if (!nodeToDelete) return -1;

    nodeBefore->next = nodeToDelete->next;
    if (!nodeBefore->next) tail = nodeBefore->next;
    length--;
    return nodeToDelete->value;
  }

  Node pop() {
    if (tail) {
      return deleteNode(length - 1);
    }
  }

private:

  Node* find(int index) {
    if (index > length) return nullptr;

    Node* current = head;
    if (current) {
      for (int i = 0; i < index; i++) {
        current = current->next;
      }
    } else {
      return nullptr;
    }

    return current;
  }
};

int main (int argc, char *argv[]) {
  LinkedList myList;

  myList.push(10);
  myList.push(49);
  myList.push(69);
  myList.push(216);
  myList.push(47);
  myList.push(59);
  myList.push(16);
  myList.push(98);
  myList.push(47);
  myList.push(84);
  myList.push(18);
  myList.push(7);
  
  Node* totalList = myList.head;
  while (totalList) {
    std::cout << totalList->value << std::endl;
    totalList = totalList->next;
  };
  
  myList.deleteNode(1);
  Node* head = myList.head;

  while (head) {
    std::cout << head->value << std::endl;
    head = head->next;
  };

  return 0;
}

