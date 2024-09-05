---
title: Advanced Sorting
sidebar:
  order: 26
---
## Introduction

In Java, advanced sorting techniques can be used to efficiently sort arrays and collections. These techniques provide better performance compared to basic sorting algorithms like bubble sort or insertion sort.

## QuickSort

One of the most popular advanced sorting algorithms in Java is QuickSort. It is a divide-and-conquer algorithm that works by selecting a pivot element and partitioning the other elements into two sub-arrays, according to whether they are less than or greater than the pivot. The sub-arrays are then sorted recursively.

Here's an example of QuickSort implementation in Java:

```java
public class QuickSort {
    public static void sort(int[] arr, int low, int high) {
        if (low < high) {
            int pivotIndex = partition(arr, low, high);
            sort(arr, low, pivotIndex - 1);
            sort(arr, pivotIndex + 1, high);
        }
    }

    private static int partition(int[] arr, int low, int high) {
        int pivot = arr[high];
        int i = low - 1;
        for (int j = low; j < high; j++) {
            if (arr[j] < pivot) {
                i++;
                swap(arr, i, j);
            }
        }
        swap(arr, i + 1, high);
        return i + 1;
    }

    private static void swap(int[] arr, int i, int j) {
        int temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
}
```

## MergeSort

Another commonly used advanced sorting algorithm in Java is MergeSort. It is also a divide-and-conquer algorithm that works by dividing the unsorted list into n sub-lists, each containing one element, and then repeatedly merging sub-lists to produce new sorted sub-lists until there is only one sub-list remaining.

Here's an example of MergeSort implementation in Java:

```java
public class MergeSort {
    public static void sort(int[] arr, int low, int high) {
        if (low < high) {
            int mid = (low + high) / 2;
            sort(arr, low, mid);
            sort(arr, mid + 1, high);
            merge(arr, low, mid, high);
        }
    }

    private static void merge(int[] arr, int low, int mid, int high) {
        int[] temp = new int[high - low + 1];
        int i = low, j = mid + 1, k = 0;
        while (i <= mid && j <= high) {
            if (arr[i] <= arr[j]) {
                temp[k++] = arr[i++];
            } else {
                temp[k++] = arr[j++];
            }
        }
        while (i <= mid) {
            temp[k++] = arr[i++];
        }
        while (j <= high) {
            temp[k++] = arr[j++];
        }
        for (i = low; i <= high; i++) {
            arr[i] = temp[i - low];
        }
    }
}
```

## Conclusion

Advanced sorting algorithms like QuickSort and MergeSort are essential tools in Java programming. They provide efficient ways to sort arrays and collections, improving the performance of your code.
