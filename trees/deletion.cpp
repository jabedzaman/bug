#include <iostream>
using namespace std;

class Node{
  public: 
  int data;
  Node *left;
  Node *right;

  Node(int data){
    this->data = data;
    this->left = NULL;
    this->right = NULL;
  }
};

class tree{
  public:
  Node *root;
  tree(){
    root = NULL;
  }

  void addNode(int data){
    Node *newNode = new Node(data);
    if(root == NULL){
      root = newNode;
      return;
    }
    Node *temp = root;
    while(temp != NULL){
      if(temp->data > data){
        if(temp->left == NULL){
          temp->left = newNode;
          return;
        }
        temp = temp->left;
      }
      else{
        if(temp->right == NULL){
          temp->right = newNode;
          return;
        }
        temp = temp->right;
      }
    }
  }

  bool search(int data){
    Node *temp = root;
    while(temp != NULL){
      if(temp->data == data){
        return true;
      }
      else if(temp->data > data){
        temp = temp->left;
      }
      else{
        temp = temp->right;
      }
    }
    return false;
  }

  void display(Node *root){
    if(root == NULL){
      return;
    }
    display(root->left);
    std::cout << root->data << " ";
    display(root->right);
  }

  void inorder(Node *root){
    if(root == NULL){
      return;
    }
    inorder(root->left);
    std::cout << root->data << " ";
    inorder(root->right);
  }

  void preorder(Node *root){
    if(root == NULL){
      return;
    }
    std::cout << root->data << " ";
    preorder(root->left);
    preorder(root->right);
  }

  void postorder(Node *root){
    if(root == NULL){
      return;
    }
    postorder(root->left);
    postorder(root->right);
    std::cout << root->data << " ";
  }

};

int main()
{
  std::cout << "Enter the number of nodes:" << std::endl;
  int n;
  std::cin >> n;
  tree t;
  for(int i = 0; i < n; i++){
    int data;
    std::cin >> data;
    t.addNode(data);
  }
  std::cout << "The tree is:" << std::endl;
  t.display(t.root);
}
