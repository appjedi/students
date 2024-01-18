import java.util.Arrays;
import java.util.Scanner;

public class Hacker {
    public static void main(String[] args) {
        // utopianTree(2, 4);
        int[] a = { 1, 2, 3, 4, 5, 6, 7 };
        int n = 7;
        findZigZagSequence(a, n);
    }

    public static void main1(String[] args) throws java.lang.Exception {
        Scanner kb = new Scanner(System.in);
        int test_cases = kb.nextInt();
        for (int cs = 1; cs <= test_cases; cs++) {
            int n = kb.nextInt();
            int a[] = new int[n];
            for (int i = 0; i < n; i++) {
                a[i] = kb.nextInt();
            }
            findZigZagSequence(a, n);
        }
    }

    public static void main3(String[] args) {
        int[] array = { 1, 2, 3, 4, 5, 6, 7 }; // Example array

        // Step 1: Sort the array in ascending order
        Arrays.sort(array);

        // Step 2: Swap adjacent elements starting from the second element
        for (int i = 1; i < array.length - 1; i += 2) {
            int temp = array[i];
            array[i] = array[i + 1];
            array[i + 1] = temp;
        }

        // Display the lexicographically smallest zig-zag sequence
        System.out.println("Lexicographically smallest zig-zag sequence: " + Arrays.toString(array));
    }

    // 1 2 3 7 6 5 4
    //
    public static void findZigZagSequence(int[] a, int n) {
        Arrays.sort(a);
        int mid = (n) / 2; // 1
        int temp = a[mid];
        a[mid] = a[n - 1];
        a[n - 1] = temp;

        int st = mid + 1;
        int ed = n - 2;
        while (st <= ed) {
            temp = a[st];
            a[st] = a[ed];
            a[ed] = temp;
            st = st + 1;
            // ed = ed - 1;
        }
        for (int i = 0; i < n; i++) {
            if (i > 0)
                System.out.print(" ");
            System.out.print(a[i]);
        }
        System.out.println();
    }

    public static int letterCount(String str, char letter, int len) {
        char[] letters = str.toCharArray();
        int count = 0;
        for (int i = 0; i < len; i++) {
            if (letter == letters[i]) {
                ++count;
            }
        }
        return count;
    }

    public static int utopianTree(int start, int n) {
        System.out.println("H: " + Math.pow(start, n));

        return 1;
    }
}