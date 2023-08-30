import java.util.Scanner;
import java.util.Vector;

public class LinearSearh {
    public static int linearSearch(Vector<Integer> vector, int target) {
        for (int i = 0; i < vector.size(); i++) {
            if (vector.get(i) == target) {
                return i; // Return the index where the target is found
            }
        }
        return -1; // Return -1 if target is not found
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        Vector<Integer> vector = new Vector<>();

        System.out.print("Enter the size of the vector: ");
        int size = scanner.nextInt();

        System.out.println("Enter the elements of the vector:");
        for (int i = 0; i < size; i++) {
            vector.add(scanner.nextInt());
        }

        System.out.print("Enter the target element to search for: ");
        int target = scanner.nextInt();

        scanner.close();

        int index = linearSearch(vector, target);

        if (index != -1) {
            System.out.println("Element found at index " + index);
        } else {
            System.out.println("Element not found");
        }
    }
}

