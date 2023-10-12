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
  std::cout << "The tree is" << std::endl;
  t.inOrder(t.root);
}

