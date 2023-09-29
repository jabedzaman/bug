#include <iostream>
#include <fstream>
#include <string>

int main()
{
  std::string line;
  std::getline(std::cin,line);

  // std::ofstream myfile;
  // myfile.open("example.txt");
  // myfile << line;
  // myfile.close();
  //
  // std::string hell;
  // myfile.open("example.txt");
  //
  // std::cout << "The contents were: \n";
  // while (std::getline(myfile, line))
  // {
  //   std::cout << line << '\n';
  // }

  /*
   * read contents from example.txt
   */
  std::ifstream myfile("example.txt");
  std::cout << "The contents were: \n";
  while (std::getline(myfile, line))
  {
    std::cout << line << '\n';
  }
  myfile.close();
}

