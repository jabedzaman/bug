#include <iostream>
#include <fstream>
#include <string>

int main()
{
  std::string line;
  std::getline(std::cin,line);

  std::ofstream myfile;
  myfile.open("example.txt");
  myfile << line;
  myfile.close();

}
