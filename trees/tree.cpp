#include <iostream>

using namespace std;

template <class T>
class treeNode {
public:
    T data;
    treeNode<T> *left;
    treeNode<T> *right;
    treeNode(T data) {
        this->data = data;
        this->left = NULL;
        this->right = NULL;
    }
};

template <class T>
class tree {
  public:
    treeNode<T> *root;
    tree<T>() {
        root = NULL;
    }  
    void insert(T data){
              if(root == NULL) {
            root = new treeNode<T>(data);
        } else {
            treeNode<T> *current = root;
            treeNode<T> *parent = NULL;
            while(true) {
                parent = current;
                if(data < current->data) {
                    current = current->left;
                    if(current == NULL) {
                        parent->left = new treeNode<T>(data);
                        return;
                    }
                } else {
                    current = current->right;
                    if(current == NULL) {
                        parent->right = new treeNode<T>(data);
                        return;
                    }
                }
            }
        }
    }
    void inOrder(treeNode<T> *p) {
        if(p != NULL) {
            inOrder(p->left);
            cout << " " << p->data << " ";
            inOrder(p->right);
        }
    }
    void preOrder(treeNode<T> *p) {
        if(p != NULL) {
            cout << " " << p->data << " ";
            preOrder(p->left);
            preOrder(p->right);
        }
    }
    void postOrder(treeNode<T> *p) {
        if(p != NULL) {
            postOrder(p->left);
            postOrder(p->right);
            cout << " " << p->data << " ";
        }
    } 
    bool search(T data) {
        treeNode<T> *current = root;
        while(current->data != data) {
            if(data < current->data) {
                current = current->left;
            } else {
                current = current->right;
            }
            if(current == NULL) {
                return false;
            }
        }
        return true;
    }
};


int main()
{
  std::cout << "Enter the number of nodes" << std::endl;
  int n;
  std::cin >> n;
  tree<int> t;
  for(int i = 0; i < n; i++) {
      int x;
      std::cin >> x;
      t.insert(x);
  }
  std::cout << "The tree is in inorder" << std::endl;
  t.inOrder(t.root);
  std::cout << std::endl;
  std::cout << "The tree is in preorder" << std::endl;
  t.preOrder(t.root);
  std::cout << std::endl;
  std::cout << "The tree is in postorder" << std::endl;
  t.postOrder(t.root);
  std::cout << std::endl;
  std::cout << "Enter the number to be searched" << std::endl;
  int x;
  std::cin >> x;
  if(t.search(x)) {
      std::cout << "Found" << std::endl;
  } else {
      std::cout << "Not found" << std::endl;
  }
}

