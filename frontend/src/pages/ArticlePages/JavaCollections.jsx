import React from "react";
import ArticleHeader from "../../components/ArticleHeader";
import Post from "../../components/Post";

/**
 * this page is an article for java collections
 * there are more data structures covered, each with
 * it's dedicated block and code example
 */

function JavaCollections() {
  return (
    <div style={{ marginBottom: "70px" }}>
      <ArticleHeader
        title="Java Collections: A Comprehensive Guide"
        subtitle="Learn how to use collections in Java to manage and manipulate data"
      ></ArticleHeader>
      <Post
        title="Andrada Duluman"
        content="Collections are an essential aspect of Java programming, providing a way to manage groups of objects efficiently and easily. Java collections framework provides a set of interfaces and classes that allow developers to manipulate collections of objects, such as lists, maps, and sets. In this Java collections tutorial, we will explore the basics of collections in Java, including creating and manipulating lists, sets, and maps, and how to use different collection types to suit specific programming requirements. We will also cover the common operations and algorithms associated with collections, such as sorting, searching, and filtering. Whether you are new to Java programming or an experienced developer looking to improve your skills, this tutorial will provide a comprehensive overview of Java collections and their applications."
      ></Post>
      <Post
        title="ArrayList"
        content={`An ArrayList is a dynamic array implementation in Java. It provides random access to elements based on their index and supports adding and removing elements at any position. Here are some key features of ArrayList:

        1. Dynamic resizing: Unlike arrays, ArrayLists can grow or shrink dynamically. When the number of elements in the ArrayList exceeds its capacity, the ArrayList automatically increases its size to accommodate new elements.
        
        2. Random access: ArrayLists provide constant-time access to elements based on their index. This makes it easy to retrieve, update, or delete elements from an ArrayList.
        
        3. Ordered elements: Elements in an ArrayList are ordered, which means they are stored in the order in which they were added to the ArrayList. This makes it easy to maintain a list of elements in a specific order.
        
        4. Null elements and duplicates: ArrayLists can store null elements and duplicate elements. This can be useful when you need to represent a collection of values that may contain null or duplicate elements.
        
        5. Iteration: ArrayLists can be iterated using a for-each loop or an iterator. This makes it easy to perform operations on each element in the ArrayList.
        
        6. Generics: ArrayLists use generics to ensure type safety. This means that you can specify the type of elements that an ArrayList can contain, and the compiler will ensure that only elements of that type are added to the ArrayList.
        
        Overall, ArrayList is a very useful data structure in Java. It provides a lot of flexibility and functionality that can be used in a wide variety of applications.`}
        code={`import java.util.ArrayList;

public class ArrayListExample {
  public static void main(String[] args) {
      // Create an ArrayList of integers
      ArrayList<Integer> numbers = new ArrayList<Integer>();

      // Add elements to the ArrayList
      numbers.add(1);
      numbers.add(2);
      numbers.add(3);
      numbers.add(4);
      numbers.add(5);

      // Print the ArrayList
      System.out.println("ArrayList: " + numbers);

      // Access an element using its index
      int first = numbers.get(0);
      System.out.println("First element: " + first);

      // Remove an element from the ArrayList
      numbers.remove(2);
      System.out.println("ArrayList after removing the third element: " + numbers);

      // Insert an element at a specific position
      numbers.add(2, 10);
      System.out.println("ArrayList after inserting 10 at index 2: " + numbers);

      // Update an element at a specific position
      numbers.set(3, 20);
      System.out.println("ArrayList after updating the element at index 3 to 20: " + numbers);

      // Get the size of the ArrayList
      int size = numbers.size();
      System.out.println("Size of the ArrayList: " + size);
  }
}
        `}
        language="java"
        result={`ArrayList: [1, 2, 3, 4, 5]
        First element: 1
        ArrayList after removing the third element: [1, 2, 4, 5]
        ArrayList after inserting 10 at index 2: [1, 2, 10, 4, 5]
        ArrayList after updating the element at index 3 to 20: [1, 2, 10, 20, 5]
        Size of the ArrayList: 5
        `}
      />
      <Post
        title="LinkedList"
        content={`A LinkedList is a data structure in Java that consists of a sequence of nodes, where each node contains a data element and a reference to the next node in the list. Here are some key features of LinkedList:

1. Dynamic size: LinkedList is a dynamic data structure, meaning that it can grow or shrink as elements are added or removed.

2. Insertion and deletion: LinkedList provides constant-time insertion and deletion of elements at the beginning and end of the list. However, inserting or deleting elements in the middle of the list may require traversing the list and can take linear time.

3. Random access: LinkedList does not provide constant-time random access to elements based on their index. Instead, accessing elements in a LinkedList requires traversing the list from the beginning or end, which can take linear time.

4. Memory efficiency: LinkedList is a memory-efficient data structure since it does not require contiguous memory allocation. Each node in the list only needs to store a reference to the next node, which makes LinkedList a good choice when memory is a concern.

Here's an example of how to create and manipulate a LinkedList in Java:`}
        code={`import java.util.LinkedList;

public class LinkedListExample {
    public static void main(String[] args) {
        LinkedList<String> linkedList = new LinkedList<>();

        // Add elements to the LinkedList
        linkedList.add("Apple");
        linkedList.add("Banana");
        linkedList.add("Cherry");

        // Print the LinkedList
        System.out.println(linkedList);

        // Add an element at the beginning of the LinkedList
        linkedList.addFirst("Orange");
        System.out.println(linkedList);

        // Add an element at the end of the LinkedList
        linkedList.addLast("Grape");
        System.out.println(linkedList);

        // Remove the first element of the LinkedList
        linkedList.removeFirst();
        System.out.println(linkedList);

        // Remove the last element of the LinkedList
        linkedList.removeLast();
        System.out.println(linkedList);

        // Get the first element of the LinkedList
        String first = linkedList.getFirst();
        System.out.println("First element: " + first);

        // Get the last element of the LinkedList
        String last = linkedList.getLast();
        System.out.println("Last element: " + last);
    }
}
`}
        language={"java"}
        result={`[Orange, Apple, Banana, Cherry, Grape]
[Apple, Banana, Cherry, Grape]
[Apple, Banana, Cherry]
[Apple, Banana]
[First element: Apple
Last element: Banana]
`}
      />
      <Post
        title={"Stack"}
        content={`In Java, a Stack is a data structure that represents a collection of objects arranged in a last-in-first-out (LIFO) order. Here are some key features of Stack:

1. Push and pop operations: A Stack provides two main operations: push and pop. The push operation adds an element to the top of the Stack, while the pop operation removes and returns the element at the top of the Stack.

2. Peek operation: In addition to push and pop, a Stack also provides a peek operation, which returns the element at the top of the Stack without removing it.

3. Size limit: Unlike some other data structures, such as LinkedList and ArrayList, Stack has a fixed size limit. If you try to push an element onto a full Stack, it will throw a StackOverflowException.

Here's an example of how to create and manipulate a Stack in Java:`}
        code={`import java.util.Stack;

public class StackExample {
    public static void main(String[] args) {
        Stack<String> stack = new Stack<>();

        // Push elements onto the stack
        stack.push("Apple");
        stack.push("Banana");
        stack.push("Cherry");

        // Print the stack
        System.out.println(stack);

        // Pop an element from the stack
        String popped = stack.pop();
        System.out.println("Popped element: " + popped);

        // Print the stack again
        System.out.println(stack);

        // Peek at the top element of the stack
        String top = stack.peek();
        System.out.println("Top element: " + top);

        // Print the size of the stack
        System.out.println("Size of stack: " + stack.size());
    }
}
`}
        language={"java"}
        result={`[Apple, Banana, Cherry]
Popped element: Cherry
[Apple, Banana]
Top element: Banana
Size of stack: 2
`}
      />
      <Post
        title={"Queue"}
        content={`In Java, a Queue is a data structure that represents a collection of elements arranged in a first-in-first-out (FIFO) order. Here are some key features of Queue:

1. Enqueue and dequeue operations: A Queue provides two main operations: enqueue and dequeue. The enqueue operation adds an element to the end of the Queue, while the dequeue operation removes and returns the element at the front of the Queue.

2. Peek operation: In addition to enqueue and dequeue, a Queue also provides a peek operation, which returns the element at the front of the Queue without removing it.

3. Size limit: Like Stack, Queue has a fixed size limit. If you try to enqueue an element onto a full Queue, it will throw a QueueOverflowException.

Here's an example of how to create and manipulate a Queue in Java:`}
        code={`import java.util.LinkedList;
import java.util.Queue;

public class QueueExample {
    public static void main(String[] args) {
        Queue<String> queue = new LinkedList<>();

        // Enqueue elements into the queue
        queue.add("Apple");
        queue.add("Banana");
        queue.add("Cherry");

        // Print the queue
        System.out.println(queue);

        // Dequeue an element from the queue
        String dequeued = queue.remove();
        System.out.println("Dequeued element: " + dequeued);

        // Print the queue again
        System.out.println(queue);

        // Peek at the front element of the queue
        String front = queue.peek();
        System.out.println("Front element: " + front);

        // Print the size of the queue
        System.out.println("Size of queue: " + queue.size());
    }
}
`}
        language={"java"}
        result={`[Apple, Banana, Cherry]
Dequeued element: Apple
[Banana, Cherry]
Front element: Banana
Size of queue: 2
`}
      />
      <Post
        title={"HashSet"}
        content={`In Java, a HashSet is a data structure that represents a collection of unique elements. Here are some key features of HashSet:

1. Unordered: A HashSet does not maintain any order among its elements.

2. No duplicates: A HashSet ensures that it contains no duplicate elements. If you try to add a duplicate element, the HashSet will simply ignore the addition.

3. Constant-time performance: HashSet provides constant-time performance for basic operations, such as adding or removing an element, on average.

Here's an example of how to create and manipulate a HashSet in Java:`}
        code={`import java.util.HashSet;

public class HashSetExample {
    public static void main(String[] args) {
        HashSet<String> set = new HashSet<>();

        // Add elements to the set
        set.add("Apple");
        set.add("Banana");
        set.add("Cherry");

        // Print the set
        System.out.println(set);

        // Add a duplicate element to the set
        set.add("Apple");

        // Print the set again
        System.out.println(set);

        // Remove an element from the set
        set.remove("Banana");

        // Print the set again
        System.out.println(set);

        // Check if an element is in the set
        boolean contains = set.contains("Cherry");
        System.out.println("Contains Cherry? " + contains);

        // Get the size of the set
        int size = set.size();
        System.out.println("Size of set: " + size);
    }
}
`}
        language={"java"}
        result={`[Apple, Banana, Cherry]
[Apple, Banana, Cherry]
[Apple, Cherry]
Contains Cherry? true
Size of set: 2
`}
      />
      <Post
        title={"HashMap"}
        content={`In Java, a HashMap is a data structure that allows you to store and retrieve key-value pairs efficiently. Here are some key features of HashMap:

1. Unordered: A HashMap does not maintain any order among its key-value pairs.

2. No duplicate keys: A HashMap ensures that it contains no duplicate keys. If you try to add a key that already exists, the HashMap will simply overwrite the old value with the new one.

3. Constant-time performance: HashMap provides constant-time performance for basic operations, such as adding or retrieving a key-value pair, on average.

Here's an example of how to create and manipulate a HashMap in Java:`}
        code={`import java.util.HashMap;

public class HashMapExample {
    public static void main(String[] args) {
        HashMap<String, Integer> map = new HashMap<>();

        // Add key-value pairs to the map
        map.put("Apple", 1);
        map.put("Banana", 2);
        map.put("Cherry", 3);

        // Print the map
        System.out.println(map);

        // Retrieve the value associated with a key
        int value = map.get("Banana");
        System.out.println("Value for Banana: " + value);

        // Check if a key is in the map
        boolean containsKey = map.containsKey("Cherry");
        System.out.println("Contains key Cherry? " + containsKey);

        // Remove a key-value pair from the map
        map.remove("Apple");

        // Print the map again
        System.out.println(map);

        // Get the size of the map
        int size = map.size();
        System.out.println("Size of map: " + size);
    }
}
`}
        language={"java"}
        result={`{Apple=1, Banana=2, Cherry=3}
Value for Banana: 2
Contains key Cherry? true
{Banana=2, Cherry=3}
Size of map: 2
`}
      />
    </div>
  );
}

export default JavaCollections;
