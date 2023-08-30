import java.util.Scanner;

public class InputExample {
  public static void main(String[] args) {
    // Create a Scanner object to read input
    Scanner scanner = new Scanner(System.in);

    // Prompt the user for input
    System.out.print("Enter your name: ");

    // Read a line of text from the user's input
    String name = scanner.nextLine();

    // Prompt the user for a number
    System.out.print("Enter your age: ");

    // Read an integer from the user's input
    int age = scanner.nextInt();

    // Close the Scanner
    scanner.close();

    // Print out the user's input
    System.out.println("Hello, " + name + "! You are " + age + " years old.");
  }
}
