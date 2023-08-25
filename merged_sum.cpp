#include <algorithm>
#include <iostream>
#include <vector>

int main()
{
  int s1;
  std::cin >> s1;
  std::vector<int> v1(s1);

  for(int i = 0; i <s1 ; i++)
  {
    std::cin >> v1[i];
  }

 int s2;
  std::cin >> s2;
  std::vector<int> v2(s2);

  for(int i = 0; i <s2 ; i++)
  {
    std::cin >> v2[i];
  }

  int n =  std::max(s1,s2);

  for(int i = 0; i < n; i++)
  {
    int sum = 0;
    if(i < s1){
      sum+=v1[i];
    }
    if(i < s2){
      sum+=v2[i];
    }
    std::cout << sum << " ";
  }
}
