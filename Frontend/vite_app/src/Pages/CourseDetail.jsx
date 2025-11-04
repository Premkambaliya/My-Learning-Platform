import { useParams, Link } from "react-router-dom";
import { useState } from "react";

const courseData = {

  1: {
  "id": 1,
  "title": "Python Programming",
  "description": "Master Python, a versatile, beginner-friendly programming language widely used in web development, data science, automation, and more.",
  "image": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  "overview": "Python is renowned for its simplicity, readability, and extensive ecosystem, making it a top choice for beginners and professionals. This course guides you from Python basics to advanced concepts like object-oriented programming, functional programming, concurrency, and data analysis with libraries like NumPy and Pandas. Through hands-on examples and a capstone project, you’ll build skills for real-world applications like web apps, data pipelines, automation scripts, and concurrent systems.",
  "playlistId": "PLktFju7xyBzRsX2T6lFHAC2aPacvkRDZt",
  "topics": [
    {
      "name": "Introduction to Python",
      "definition": "Python is a high-level, interpreted programming language known for its readability, versatility, and extensive standard library.",
      "details": "Explore Python’s history, features (e.g., dynamic typing, garbage collection), and use cases across web development, data science, and automation. Set up a Python environment using tools like Anaconda or VS Code, and write your first program. Learn about Python’s interpreter and how to run scripts in both interactive and script modes.",
      "example": `print("Hello, World!")
# Print a welcome message
name = input("Enter your name: ")
print(f"Welcome to Python, {name}!")`,
      "useCases": [
        "Writing quick scripts for automation",
        "Prototyping applications rapidly"
      ],
      "commonMistakes": [
        "Incorrectly installing Python or dependencies",
        "Mixing Python 2 and Python 3 syntax"
      ],
      "resources": [
        "Official Python Tutorial: https://docs.python.org/3/tutorial/",
        "Python Setup Guide: https://realpython.com/installing-python/"
      ]
    },
    {
      "name": "Variables and Data Types",
      "definition": "Variables store data, and data types define the kind of data (e.g., integers, strings, floats, booleans).",
      "details": "Learn to declare variables without explicit types due to Python’s dynamic typing. Explore built-in data types: int, float, str, bool, and NoneType. Understand type conversion (e.g., str() to int()) and best practices for variable naming (e.g., snake_case). This topic covers memory management and the id() function for object identity.",
      "example": `x = 5  # Integer
y = 3.14  # Float
name = "Alice"  # String
is_student = True  # Boolean

print(type(is_student))  # Output: <class 'bool'>`,
      "useCases": [
        "Storing user input for processing",
        "Performing calculations in scientific applications"
      ],
      "commonMistakes": [
        "Using reserved keywords as variable names",
        "Forgetting to convert types before operations"
      ],
      "resources": [
        "Python Data Types: https://www.w3schools.com/python/python_datatypes.asp",
        "Variable Naming: https://peps.python.org/pep-0008/#naming-conventions"
      ]
    },
    {
      "name": "Control Structures (Loops, Conditionals)",
      "definition": "Control structures manage program flow using conditionals (if-else) and loops (for, while).",
      "details": "Master if-else statements, nested conditionals, and logical operators (and, or, not). Learn for loops with range() and iterables, while loops for indefinite iteration, and control statements like break and continue. This topic emphasizes writing readable control structures and avoiding infinite loops.",
      "example": `numbers = [1, 2, 3, 4, 5]
for num in numbers:
    if num % 2 == 0:
        print(f"{num} is even")
    else:
        print(f"{num} is odd")
while num > 0:
    print(num)
    num -= 1`,
      "useCases": [
        "Filtering data in a dataset",
        "Implementing game loops"
      ],
      "commonMistakes": [
        "Indentation errors in control blocks",
        "Creating infinite loops by not updating loop conditions"
      ],
      "resources": [
        "Python Control Flow: https://realpython.com/python-conditional-statements/",
        "Loops in Python: https://www.programiz.com/python-programming/for-loop"
      ]
    },
    {
      "name": "Functions and Modules",
      "definition": "Functions are reusable blocks of code, and modules are files containing Python code for modularity.",
      "details": "Learn to define functions with def, use parameters (positional, keyword, default), and return values. Explore lambda functions for concise operations and importing standard modules (e.g., math, random). Understand scope (local vs. global) and how to create custom modules for code organization.",
      "example": `import random
def greet(name, greeting="Hello"):
    return f"{greeting}, {name}!"
def roll_dice():
    return random.randint(1, 6)
print(greet("Bob"))  # Output: Hello, Bob!
print(f"You rolled a {roll_dice()}")`,
      "useCases": [
        "Creating utility functions for repetitive tasks",
        "Organizing code in large projects"
      ],
      "commonMistakes": [
        "Forgetting to return values from functions",
        "Misusing global variables instead of parameters"
      ],
      "resources": [
        "Python Functions: https://docs.python.org/3/tutorial/controlflow.html#defining-functions",
        "Modules in Python: https://realpython.com/python-modules-packages/"
      ]
    },
    {
      "name": "Lists, Tuples, and Dictionaries",
      "definition": "Lists, tuples, and dictionaries are Python’s core data structures for storing and managing collections of data.",
      "details": "Explore mutable lists (append, pop, slicing), immutable tuples, and key-value dictionaries (get, update). Learn list comprehensions, dictionary methods, and nested data structures. This topic covers performance considerations and when to use each structure.",
      "example": `my_list = [1, 2, 3]
my_tuple = (4, 5, 6)
my_dict = {"name": "Alice", "age": 25}
my_list.append(4)
squares = [x**2 for x in my_list]
print(my_list, my_tuple[1], my_dict["name"])
print(f"Squares: {squares}")`,
      "useCases": [
        "Storing user records in a database-like structure",
        "Managing configuration settings with dictionaries"
      ],
      "commonMistakes": [
        "Modifying tuples (immutable) instead of lists",
        "Accessing non-existent dictionary keys without error handling"
      ],
      "resources": [
        "Python Data Structures: https://docs.python.org/3/tutorial/datastructures.html",
        "List Comprehensions: https://realpython.com/list-comprehension-python/"
      ]
    },
    {
      "name": "File Handling",
      "definition": "File handling involves reading from and writing to files for data persistence.",
      "details": "Learn to use the `open()` function with modes (r, w, a) and the `with` statement for safe file handling. Explore reading/writing text and CSV files, and handling file paths with the `os` module. Understand encoding and error handling for robust file operations.",
      "example": `import os
with open("example.txt", "w") as file:
    file.write("Hello, File!\n")
with open("example.txt", "r") as file:
    content = file.read()
print(content)
print(os.path.exists("example.txt"))`,
      "useCases": [
        "Logging application data",
        "Processing CSV files for data analysis"
      ],
      "commonMistakes": [
        "Not closing files properly without `with`",
        "Ignoring file encoding issues"
      ],
      "resources": [
        "Python File I/O: https://realpython.com/read-write-files-python/",
        "OS Module: https://docs.python.org/3/library/os.html"
      ]
    },
    {
      "name": "Object-Oriented Programming",
      "definition": "OOP is a programming paradigm that uses objects and classes to model real-world entities.",
      "details": "Understand classes, objects, attributes, and methods. Explore inheritance, polymorphism, encapsulation, and method overriding. Learn about special methods (e.g., `__str__`) and class design principles. This topic includes practical examples like modeling a library system.",
      "example": `class Dog:
    def __init__(self, name, breed):
        self.name = name
        self.breed = breed
    def bark(self):
        return f"{self.name} ({self.breed}) says Woof!"
    def __str__(self):
        return f"Dog: {self.name}"
dog = Dog("Max", "Labrador")
print(dog.bark())
print(dog)`,
      "useCases": [
        "Modeling entities in game development",
        "Structuring backend logic in web apps"
      ],
      "commonMistakes": [
        "Confusing instance vs. class variables",
        "Overusing inheritance instead of composition"
      ],
      "resources": [
        "Python OOP: https://realpython.com/python3-object-oriented-programming/",
        "Special Methods: https://docs.python.org/3/reference/datamodel.html#special-method-names"
      ]
    },
    {
      "name": "Error Handling",
      "definition": "Error handling manages runtime errors using try-except blocks to ensure robust programs.",
      "details": "Learn to handle exceptions with try, except, else, and finally blocks. Understand built-in exceptions (e.g., ValueError, FileNotFoundError) and how to raise custom exceptions. Explore best practices for logging errors and graceful error recovery.",
      "example": `try:
    number = int(input("Enter a number: "))
    result = 10 / number
except ValueError:
    print("Please enter a valid number")
except ZeroDivisionError:
    print("Cannot divide by zero")
else:
    print(f"Result: {result}")
finally:
    print("Operation complete")`,
      "useCases": [
        "Validating user inputs in forms",
        "Handling network errors in APIs"
      ],
      "commonMistakes": [
        "Catching overly broad exceptions (e.g., Exception)",
        "Not logging error details for debugging"
      ],
      "resources": [
        "Python Exceptions: https://docs.python.org/3/tutorial/errors.html",
        "Exception Handling Guide: https://realpython.com/python-exceptions/"
      ]
    },
    {
      "name": "Working with Libraries (NumPy, Pandas)",
      "definition": "Libraries like NumPy and Pandas provide powerful tools for numerical computations and data analysis.",
      "details": "Learn NumPy for array operations, vectorization, and mathematical functions. Explore Pandas for data manipulation with DataFrames, including filtering, grouping, and merging. This topic covers installing libraries with pip and practical data analysis workflows.",
      "example": `import numpy as np
import pandas as pd
arr = np.array([1, 2, 3])
data = pd.DataFrame({"name": ["Alice", "Bob"], "age": [25, 30]})
print(arr * 2)
print(data["name"])`,
      "useCases": [
        "Analyzing datasets in data science",
        "Performing matrix operations in machine learning"
      ],
      "commonMistakes": [
        "Not installing libraries before use",
        "Misusing DataFrame indexing methods"
      ],
      "resources": [
        "NumPy Documentation: https://numpy.org/doc/stable/",
        "Pandas Getting Started: https://pandas.pydata.org/docs/getting_started/"
      ]
    },
    {
      "name": "Lambda Functions and Functional Programming",
      "definition": "Lambda functions are anonymous, concise functions that enable functional programming paradigms in Python.",
      "details": "Introduced for short, throwaway functions, lambdas are used with higher-order functions like map(), filter(), and reduce() from functools. Understand functional programming concepts such as immutability and pure functions. This topic covers sorting with key lambdas, list comprehensions as alternatives, and when to use functional styles for cleaner code. Explore how lambdas simplify code in data processing and GUI event handling.",
      "example": `from functools import reduce
numbers = [1, 2, 3, 4, 5]
doubled = list(map(lambda x: x * 2, numbers))  # [2, 4, 6, 8, 10]
evens = list(filter(lambda x: x % 2 == 0, numbers))  # [2, 4]
product = reduce(lambda x, y: x * y, numbers)  # 120
people = [{'name': 'Bob', 'age': 30}, {'name': 'Alice', 'age': 25}]
sorted_people = sorted(people, key=lambda p: p['age'])  # Sorted by age
print(doubled, evens, product, sorted_people)`,
      "useCases": [
        "Transforming and filtering data in lists or streams",
        "Custom sorting objects in applications like inventory management"
      ],
      "commonMistakes": [
        "Using lambdas for complex logic, making code hard to read",
        "Forgetting to import reduce from functools"
      ],
      "resources": [
        "Python Lambda Functions: https://docs.python.org/3/tutorial/controlflow.html#lambda-expressions",
        "Functional Programming in Python: https://realpython.com/python-functional-programming/"
      ]
    },
    {
      "name": "Iterators and Generators",
      "definition": "Iterators provide a way to access elements sequentially, while generators are a simple mechanism to create iterators using yield for memory efficiency.",
      "details": "Learn to implement custom iterators with __iter__() and __next__() methods. Use generator functions with yield to pause and resume execution, and generator expressions for concise creation. This topic emphasizes memory-efficient processing of large datasets, infinite sequences, and pipelining generators. Understand the difference between lists and generators, and how to handle StopIteration.",
      "example": `def fibonacci(n):
    a, b = 0, 1
    for _ in range(n):
        yield a
        a, b = b, a + b
fib_seq = list(fibonacci(10))  # [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]

# Generator expression
squares = (x**2 for x in range(10))  # Generator for 0, 1, 4, ..., 81
print(next(squares))  # 0
print(list(squares))  # [1, 4, 9, 16, 25, 36, 49, 64, 81]

class Countdown:
    def __init__(self, start):
        self.current = start
    def __iter__(self):
        return self
    def __next__(self):
        if self.current <= 0:
            raise StopIteration
        self.current -= 1
        return self.current + 1
count = Countdown(5)
print(list(count))  # [5, 4, 3, 2, 1]`,
      "useCases": [
        "Processing large files or streams without loading everything into memory",
        "Creating infinite sequences for simulations or games"
      ],
      "commonMistakes": [
        "Trying to reuse an exhausted generator",
        "Confusing yield with return in functions"
      ],
      "resources": [
        "Python Iterators: https://docs.python.org/3/tutorial/classes.html#iterators",
        "Generators Guide: https://realpython.com/introduction-to-python-generators/"
      ]
    },
    {
      "name": "Decorators",
      "definition": "Decorators are functions that wrap and modify other functions or methods, adding functionality without changing the original code.",
      "details": "Understand how functions are first-class objects in Python. Learn to create decorators using nested functions and the @decorator syntax. Explore decorator arguments, chaining multiple decorators, and class decorators. This topic covers practical applications like timing functions, memoization, and access control, with emphasis on preserving metadata using functools.wraps.",
      "example": `import time
from functools import wraps

def timer(func):
    @wraps(func)
    def wrapper(*args, **kwargs):
        start = time.time()
        result = func(*args, **kwargs)
        end = time.time()
        print(f"{func.__name__} took {end - start:.4f} seconds")
        return result
    return wrapper

@timer
def slow_function(n):
    time.sleep(n)
    return "Done"

print(slow_function(2))  # Outputs timing and "Done"

def cache(func):
    memo = {}
    @wraps(func)
    def wrapper(*args):
        if args in memo:
            return memo[args]
        result = func(*args)
        memo[args] = result
        return result
    return wrapper

@cache
@timer
def fibonacci(n):
    if n < 2:
        return n
    return fibonacci(n-1) + fibonacci(n-2)

print(fibonacci(10))  # Uses cache and timer`,
      "useCases": [
        "Adding logging or authentication to web endpoints",
        "Memoizing expensive computations in algorithms"
      ],
      "commonMistakes": [
        "Forgetting @wraps, losing original function metadata",
        "Incorrectly handling arguments in the wrapper function"
      ],
      "resources": [
        "Python Decorators: https://realpython.com/primer-on-python-decorators/",
        "Functools Module: https://docs.python.org/3/library/functools.html"
      ]
    },
    {
      "name": "Concurrency in Python",
      "definition": "Concurrency allows running multiple tasks simultaneously, using threading for I/O-bound tasks, multiprocessing for CPU-bound, and asyncio for asynchronous I/O.",
      "details": "Explore the threading module with Thread and Lock for shared resources. Use multiprocessing for parallel execution bypassing the GIL. Learn async/await syntax with asyncio for non-blocking code. This topic covers futures, executors, and best practices for avoiding race conditions and deadlocks, with examples in web scraping and servers.",
      "example": `import threading
import time

def worker(num):
    print(f"Worker {num} starting")
    time.sleep(2)
    print(f"Worker {num} done")

threads = []
for i in range(3):
    t = threading.Thread(target=worker, args=(i,))
    threads.append(t)
    t.start()
for t in threads:
    t.join()
print("All workers done")

# Async example
import asyncio

async def fetch_data(delay):
    print(f"Fetching data with delay {delay}")
    await asyncio.sleep(delay)
    return f"Data after {delay} seconds"

async def main():
    tasks = [fetch_data(1), fetch_data(2), fetch_data(3)]
    results = await asyncio.gather(*tasks)
    print(results)

asyncio.run(main())`,
      "useCases": [
        "Handling multiple API requests concurrently in web apps",
        "Parallel processing of data in scientific computing"
      ],
      "commonMistakes": [
        "Not using locks, leading to race conditions",
        "Mixing threading and asyncio incorrectly"
      ],
      "resources": [
        "Python Threading: https://realpython.com/intro-to-python-threading/",
        "Asyncio Documentation: https://docs.python.org/3/library/asyncio.html"
      ]
    },
    {
      "name": "Project: Build a Simple App",
      "definition": "A capstone project integrates Python concepts to build a functional application, reinforcing learning through practical application.",
      "details": "Apply your knowledge to create a console-based app, such as a to-do list, expense tracker, or simple game. Use functions, data structures, file handling, error handling, lambdas, generators, decorators, and concurrency. Optionally, explore GUI development with Tkinter or web apps with Flask. This topic guides you through planning, coding, testing, and optimizing your application with advanced features like asynchronous data fetching.",
      "example": `# Enhanced To-Do List with Decorator and Generator
import time
from functools import wraps

def timer(func):
    @wraps(func)
    def wrapper(*args, **kwargs):
        start = time.time()
        result = func(*args, **kwargs)
        print(f"{func.__name__} took {time.time() - start:.4f} seconds")
        return result
    return wrapper

class TodoList:
    def __init__(self):
        self.tasks = []
    
    @timer
    def add_task(self, task):
        self.tasks.append(task)
        return f"Added: {task}"
    
    def task_generator(self):
        for i, task in enumerate(self.tasks):
            yield f"{i+1}. {task}"
    
    def show_tasks(self):
        return "\n".join(self.task_generator())

todo = TodoList()
todo.add_task("Buy groceries")
todo.add_task("Call Alice")
print(todo.show_tasks())`,
      "useCases": [
        "Building a personal task manager",
        "Creating a simple calculator or quiz app"
      ],
      "commonMistakes": [
        "Not validating user inputs",
        "Poor project organization, leading to unmaintainable code"
      ],
      "resources": [
        "Tkinter Tutorial: https://realpython.com/python-gui-tkinter/",
        "Flask Documentation: https://flask.palletsprojects.com/"
      ]
    }
  ]
},
  2: {
  "id": 2,
  "title": "Java Programming",
  "description": "Master Java, a robust, versatile, and widely-used programming language for enterprise applications, Android development, and large-scale systems.",
  "image": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  "overview": "Java is a platform-independent, object-oriented programming language known for its 'write once, run anywhere' philosophy. It powers everything from mobile apps and web servers to enterprise systems and big data technologies like Hadoop. This course covers Java fundamentals, object-oriented programming, advanced features like multithreading and streams, and practical application development. You'll learn through hands-on examples and a capstone project.",
  "playlistId": "PLS1QulWo1RIbfTjQvTdj8Y6yyq4R7g-Al", // Java playlist by Programming with Mosh (30+ videos)
  "topics": [
    {
      "name": "Java Basics and Syntax",
      "definition": "Java is a strongly-typed, object-oriented language with a C-like syntax, designed for portability and robustness.",
      "details": "Learn Java’s syntax, structure, and how to compile and run programs using the Java Development Kit (JDK). Understand the role of the Java Virtual Machine (JVM) in executing bytecode, and explore basic program structure, including packages, classes, and the main method. This topic covers setting up a development environment with tools like IntelliJ IDEA or Eclipse.",
      "example": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`,
      "useCases": [
        "Writing simple console applications",
        "Understanding the foundation for Android or enterprise app development"
      ],
      "commonMistakes": [
        "Forgetting to include the `public static void main` method",
        "Misconfiguring the JDK or classpath"
      ],
      "resources": [
        "Official Java Tutorials: https://docs.oracle.com/javase/tutorial/",
        "Java SE Documentation: https://docs.oracle.com/en/java/javase/17/"
      ]
    },
    {
      "name": "Variables and Operators",
      "definition": "Variables store data, and operators perform operations on them, forming the building blocks of Java programs.",
      "details": "Explore primitive types (e.g., int, double, boolean, char) and reference types (e.g., String, arrays). Learn arithmetic (+, -, *, /, %), relational (==, !=, >), and logical (&&, ||, !) operators. Understand variable scope, initialization, and type casting. This topic also covers best practices for naming conventions and memory management.",
      "example": `int x = 10;
double y = 5.5;
boolean isGreater = x > y;
System.out.println("Sum: " + (x + y));
System.out.println("Is x greater than y? " + isGreater);`,
      "useCases": [
        "Calculating values in financial applications",
        "Validating user input in forms"
      ],
      "commonMistakes": [
        "Using uninitialized variables",
        "Confusing = (assignment) with == (equality)"
      ],
      "resources": [
        "Java Variables: https://www.w3schools.com/java/java_variables.asp",
        "Operators in Java: https://www.geeksforgeeks.org/operators-in-java/"
      ]
    },
    {
      "name": "Control Flow Statements",
      "definition": "Control flow statements manage program execution using conditionals and loops to control the flow of logic.",
      "details": "Master if-else statements, switch-case constructs, and loops (for, while, do-while). Learn about break, continue, and nested loops. This topic emphasizes writing efficient and readable control structures and avoiding common pitfalls like infinite loops.",
      "example": `for (int i = 0; i < 5; i++) {
    if (i % 2 == 0) {
        System.out.println(i + " is even");
    } else {
        System.out.println(i + " is odd");
    }
}`,
      "useCases": [
        "Filtering data in a loop",
        "Implementing menu-driven programs"
      ],
      "commonMistakes": [
        "Off-by-one errors in loops",
        "Using switch without break statements"
      ],
      "resources": [
        "Java Control Flow: https://www.javatpoint.com/control-flow-in-java",
        "Oracle Tutorial on Control Flow: https://docs.oracle.com/javase/tutorial/java/nutsandbolts/flow.html"
      ]
    },
    {
      "name": "Methods and Classes",
      "definition": "Methods define behavior, and classes define objects, encapsulating data and functionality in Java’s object-oriented paradigm.",
      "details": "Learn to create methods with parameters and return types, understand access modifiers (public, private, protected), and define classes with fields and constructors. Explore the concept of encapsulation and how to use the `this` keyword. This topic includes practical examples of object creation and method invocation.",
      "example": `public class Car {
    String model;
    int speed;
    
    public Car(String model, int speed) {
        this.model = model;
        this.speed = speed;
    }
    
    public void drive() {
        System.out.println(model + " is driving at " + speed + " mph");
    }
}
Car myCar = new Car("Toyota", 60);
myCar.drive();`,
      "useCases": [
        "Modeling real-world entities like users or products",
        "Creating reusable utility functions"
      ],
      "commonMistakes": [
        "Forgetting to initialize fields in constructors",
        "Misusing `this` or access modifiers"
      ],
      "resources": [
        "Java Classes and Objects: https://www.programiz.com/java-programming/class-objects",
        "Methods in Java: https://www.baeldung.com/java-methods"
      ]
    },
    {
      "name": "Inheritance and Polymorphism",
      "definition": "Inheritance allows classes to inherit properties and methods, while polymorphism enables flexible behavior through method overriding and overloading.",
      "details": "Understand the `extends` keyword for inheritance, method overriding for runtime polymorphism, and method overloading for compile-time polymorphism. Learn about the `super` keyword and the limitations of Java’s single inheritance model. This topic includes real-world analogies like modeling vehicle hierarchies.",
      "example": `class Animal {
    void sound() {
        System.out.println("Some sound");
    }
}
class Dog extends Animal {
    void sound() {
        System.out.println("Woof");
    }
}
Animal myDog = new Dog();
myDog.sound(); // Outputs: Woof`,
      "useCases": [
        "Building extensible frameworks",
        "Modeling hierarchies like employee roles"
      ],
      "commonMistakes": [
        "Overriding methods without matching signatures",
        "Confusing `super` and `this`"
      ],
      "resources": [
        "Java Inheritance: https://www.tutorialspoint.com/java/java_inheritance.htm",
        "Polymorphism in Java: https://www.geeksforgeeks.org/polymorphism-in-java/"
      ]
    },
    {
      "name": "Interfaces and Abstract Classes",
      "definition": "Interfaces define contracts that classes must follow, while abstract classes provide partial implementations for shared functionality.",
      "details": "Learn to declare interfaces with abstract methods and implement them using the `implements` keyword. Understand abstract classes, their use with the `abstract` keyword, and when to use each. This topic covers default and static methods in interfaces (Java 8+) and practical design patterns like the Strategy pattern.",
      "example": `interface Animal {
    void sound();
    default void eat() {
        System.out.println("Eating food");
    }
}
class Dog implements Animal {
    public void sound() {
        System.out.println("Woof");
    }
}
Dog dog = new Dog();
dog.sound();
dog.eat();`,
      "useCases": [
        "Defining APIs for plugin systems",
        "Ensuring consistent behavior across classes"
      ],
      "commonMistakes": [
        "Forgetting to implement all interface methods",
        "Misusing abstract classes for unrelated hierarchies"
      ],
      "resources": [
        "Java Interfaces: https://www.baeldung.com/java-interfaces",
        "Abstract Classes: https://www.javatpoint.com/abstract-class-in-java"
      ]
    },
    {
      "name": "Exception Handling",
      "definition": "Exception handling manages runtime errors using try-catch blocks, ensuring robust and fault-tolerant programs.",
      "details": "Understand checked (e.g., IOException) and unchecked (e.g., NullPointerException) exceptions. Learn to use try-catch, throw, throws, and finally blocks. Explore custom exceptions and best practices for error handling in production code.",
      "example": `try {
    int[] arr = {1, 2, 3};
    System.out.println(arr[5]); // Out of bounds
} catch (ArrayIndexOutOfBoundsException e) {
    System.out.println("Error: " + e.getMessage());
} finally {
    System.out.println("Execution completed");
}`,
      "useCases": [
        "Handling file I/O errors",
        "Validating user inputs in web applications"
      ],
      "commonMistakes": [
        "Catching overly broad exceptions (e.g., Exception)",
        "Ignoring exceptions without proper logging"
      ],
      "resources": [
        "Java Exception Handling: https://www.oracle.com/java/technologies/javase/exception-handling.html",
        "Custom Exceptions: https://www.baeldung.com/java-new-custom-exception"
      ]
    },
    {
      "name": "Collections Framework",
      "definition": "The Collections Framework provides data structures to store, manipulate, and process groups of objects efficiently.",
      "details": "Explore key interfaces like List, Set, and Map, and their implementations (e.g., ArrayList, HashSet, HashMap). Learn about iterators, generics for type safety, and performance considerations for different collection types. This topic includes sorting and searching collections.",
      "example": `import java.util.HashMap;
HashMap<String, Integer> scores = new HashMap<>();
scores.put("Alice", 90);
scores.put("Bob", 85);
System.out.println("Alice's score: " + scores.get("Alice"));`,
      "useCases": [
        "Storing user data in a database-like structure",
        "Managing lists of items in e-commerce apps"
      ],
      "commonMistakes": [
        "Using non-synchronized collections in multithreaded environments",
        "Ignoring generics, leading to type errors"
      ],
      "resources": [
        "Java Collections: https://docs.oracle.com/javase/8/docs/technotes/guides/collections/overview.html",
        "Guide to Collections: https://www.baeldung.com/java-collections"
      ]
    },
    {
      "name": "Multithreading",
      "definition": "Multithreading enables concurrent execution of tasks, improving performance in applications requiring parallelism.",
      "details": "Learn to create threads using the Thread class and Runnable interface. Understand synchronization, thread safety, and the Executor framework. Explore concepts like deadlock, thread pools, and the volatile keyword. This topic includes practical examples like parallel task processing.",
      "example": `class MyThread extends Thread {
    public void run() {
        for (int i = 0; i < 3; i++) {
            System.out.println(Thread.currentThread().getName() + ": " + i);
        }
    }
}
MyThread t1 = new MyThread();
MyThread t2 = new MyThread();
t1.start();
t2.start();`,
      "useCases": [
        "Processing large datasets in parallel",
        "Handling multiple client requests in a server"
      ],
      "commonMistakes": [
        "Not synchronizing shared resources",
        "Creating too many threads, causing performance issues"
      ],
      "resources": [
        "Java Multithreading: https://www.javatpoint.com/multithreading-in-java",
        "Executor Framework: https://www.baeldung.com/java-executor-service-tutorial"
      ]
    },
    {
      "name": "Lambda Expressions and Functional Programming",
      "definition": "Lambda expressions enable functional programming in Java, allowing concise and expressive code for operations on collections and more.",
      "details": "Introduced in Java 8, lambda expressions provide a way to represent anonymous functions. Learn the syntax, functional interfaces (e.g., Predicate, Function), and their use with the Streams API. Understand how lambdas enhance code readability and support functional programming paradigms. This topic covers practical examples like filtering and mapping collections.",
      "example": `import java.util.Arrays;
import java.util.List;
List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5);
numbers.forEach(n -> System.out.println(n * 2)); // Lambda to double each number
List<Integer> evens = numbers.stream()
    .filter(n -> n % 2 == 0)
    .toList();
System.out.println("Even numbers: " + evens);`,
      "useCases": [
        "Simplifying event handling in GUI applications",
        "Processing data pipelines in big data applications"
      ],
      "commonMistakes": [
        "Misusing lambda expressions for complex logic",
        "Ignoring functional interface requirements"
      ],
      "resources": [
        "Java Lambda Expressions: https://www.baeldung.com/java-8-lambda-expressions-tips",
        "Oracle Lambda Tutorial: https://docs.oracle.com/javase/tutorial/java/javaOO/lambdaexpressions.html"
      ]
    },
    {
      "name": "Java Streams API",
      "definition": "The Streams API provides a functional approach to processing sequences of data, enabling efficient and readable data manipulation.",
      "details": "Learn to use the Streams API (introduced in Java 8) for operations like filtering, mapping, sorting, and reducing collections. Understand stream pipelines, lazy evaluation, and terminal vs. intermediate operations. This topic covers parallel streams for performance optimization and common stream operations like collect and reduce.",
      "example": `import java.util.Arrays;
import java.util.List;
List<String> names = Arrays.asList("Alice", "Bob", "Charlie");
List<String> filteredNames = names.stream()
    .filter(name -> name.length() > 3)
    .map(String::toUpperCase)
    .toList();
System.out.println("Filtered names: " + filteredNames);
int sum = Arrays.asList(1, 2, 3, 4).stream()
    .reduce(0, Integer::sum);
System.out.println("Sum: " + sum);`,
      "useCases": [
        "Processing large datasets in data analytics",
        "Transforming and filtering data in web applications"
      ],
      "commonMistakes": [
        "Reusing a stream after a terminal operation",
        "Overusing parallel streams without understanding performance impacts"
      ],
      "resources": [
        "Java Streams Tutorial: https://www.baeldung.com/java-8-streams",
        "Oracle Streams Guide: https://docs.oracle.com/javase/8/docs/api/java/util/stream/package-summary.html"
      ]
    },
    {
      "name": "File I/O",
      "definition": "File I/O (Input/Output) enables reading from and writing to files for data persistence and processing.",
      "details": "Learn to use classes like File, FileReader, FileWriter, and the NIO.2 API (e.g., Files, Path) for file operations. Understand reading/writing text files, binary files, and handling file paths. This topic covers try-with-resources for safe resource management and handling IOExceptions.",
      "example": `import java.nio.file.Files;
import java.nio.file.Paths;
import java.io.IOException;
try {
    Files.writeString(Paths.get("example.txt"), "Hello, File!\n");
    String content = Files.readString(Paths.get("example.txt"));
    System.out.println("File content: " + content);
} catch (IOException e) {
    System.out.println("Error: " + e.getMessage());
}`,
      "useCases": [
        "Logging application events to files",
        "Processing configuration files or CSV data"
      ],
      "commonMistakes": [
        "Not closing file resources properly",
        "Ignoring file encoding or path issues"
      ],
      "resources": [
        "Java File I/O: https://www.baeldung.com/java-file-io",
        "NIO.2 Guide: https://docs.oracle.com/javase/tutorial/essential/io/fileio.html"
      ]
    },
    {
      "name": "Project: Build a Java Application",
      "definition": "A capstone project integrates Java concepts to build a functional application, reinforcing learning through practical application.",
      "details": "Develop a console or GUI-based application, such as a banking system, task manager, or inventory system. Apply concepts like classes, inheritance, collections, exception handling, streams, and file I/O. Use Java Swing or JavaFX for GUI development if desired. This topic guides you through planning, coding, and testing your application.",
      "example": `public class BankAccount {
    private double balance;
    private String accountHolder;
    
    public BankAccount(String accountHolder, double initialBalance) {
        this.accountHolder = accountHolder;
        this.balance = initialBalance;
    }
    
    public void deposit(double amount) throws IllegalArgumentException {
        if (amount <= 0) throw new IllegalArgumentException("Amount must be positive");
        balance += amount;
        System.out.println("New balance for " + accountHolder + ": " + balance);
    }
}
BankAccount account = new BankAccount("Alice", 1000);
account.deposit(500);`,
      "useCases": [
        "Building a simple banking system",
        "Creating a task management tool"
      ],
      "commonMistakes": [
        "Not handling edge cases in user inputs",
        "Poorly structuring the project, leading to unmaintainable code"
      ],
      "resources": [
        "Java Swing Tutorial: https://docs.oracle.com/javase/tutorial/uiswing/",
        "JavaFX Documentation: https://openjfx.io/"
      ]
    }
  ]
},
  3: {
    id: 3,
    title: "JavaScript Essentials",
    description: "Build dynamic websites and web apps with JavaScript, the language of the web, covering core concepts to modern features and practical projects.",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    overview: "JavaScript is the backbone of interactive web experiences, enabling dynamic content, user interactions, and seamless integration with servers via APIs. This course starts with fundamentals like variables and functions, progresses to DOM manipulation, asynchronous programming, and ES6+ features, and culminates in building real-world web apps. You'll gain hands-on skills for frontend development, including event handling, data fetching, and error management, using tools like the browser console and modern bundlers.",
    playlistId: "PLDyQo7g0_nsX8_gZDyLnV9IcS8j5o03AF", // JavaScript playlist by freeCodeCamp (40+ videos)
    topics: [
      { 
        name: "JavaScript Fundamentals",
        definition: "JavaScript is a versatile, high-level scripting language primarily used for client-side web development, enabling interactive and dynamic content.",
        details: "Learn the basics of JavaScript syntax, including semicolons, comments, and the role of the browser's JavaScript engine (e.g., V8 in Chrome). Set up a development environment with browser dev tools or Node.js. Understand how JS runs in browsers vs. servers, and explore primitive types (string, number, boolean, undefined, null) and the console for debugging.",
        example: `console.log("Hello, World!");
// Multi-line comment
/* This is a block comment */
// Variable declaration and basic operations
let message = "Welcome to JS";
console.log(message.toUpperCase()); // Output: WELCOME TO JS`,
        useCases: [
          "Debugging scripts in browser consoles",
          "Creating simple interactive elements on webpages"
        ],
        commonMistakes: [
          "Forgetting semicolons in statements (though JS has ASI)",
          "Confusing null and undefined",
          "Running JS before the DOM loads"
        ],
        resources: [
          "MDN JavaScript Guide: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide",
          "freeCodeCamp JS Basics: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/"
        ]
      },
      {
        name: "Variables and Scope",
        definition: "Variables store data, and scope determines their accessibility and lifetime within the code.",
        details: "Understand the differences between var (function-scoped, hoisted), let (block-scoped), and const (block-scoped, immutable reference). Learn about global vs. local scope, lexical scoping, and best practices like preferring let/const over var to avoid hoisting issues. Explore variable hoisting and temporal dead zones.",
        example: `var globalVar = "I'm global"; // Function-scoped
let blockVar = 10;
const PI = 3.14159;
if (true) {
    let localVar = "Block-scoped";
    console.log(localVar); // Accessible here
}
console.log(blockVar, PI); // Outputs: 10 3.14159
// console.log(localVar); // ReferenceError: localVar is not defined`,
        useCases: [
          "Managing user session data",
          "Configuring constants in applications"
        ],
        commonMistakes: [
          "Re-declaring variables with var in the same scope",
          "Modifying const variables (though their contents can change if objects)",
          "Accessing let/const before declaration (temporal dead zone)"
        ],
        resources: [
          "MDN Variables: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#declaring_variables",
          "Scope Guide: https://www.javascript.info/closures#variables-and-functions"
        ]
      },
      {
        name: "Functions and Arrow Functions",
        definition: "Functions are reusable blocks of code, and arrow functions provide concise, ES6+ syntax with lexical this binding.",
        details: "Learn function declarations (hoisted), expressions, default parameters, and rest/spread operators. Arrow functions simplify callbacks but don't bind their own this, making them ideal for event handlers. Understand higher-order functions and callbacks for functional programming patterns.",
        example: `// Function declaration
function add(a, b = 0) {
    return a + b;
}
// Arrow function
const multiply = (x, y) => x * y;
// With rest parameters
const sumAll = (...numbers) => numbers.reduce((acc, num) => acc + num, 0);
console.log(add(5, 3)); // 8
console.log(multiply(4, 2)); // 8
console.log(sumAll(1, 2, 3, 4)); // 10`,
        useCases: [
          "Creating modular code for UI components",
          "Passing callbacks to event listeners or timers"
        ],
        commonMistakes: [
          "Using arrow functions in constructors (no 'this' binding)",
          "Forgetting to return values in non-arrow functions",
          "Overusing default parameters without validation"
        ],
        resources: [
          "MDN Functions: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions",
          "Arrow Functions: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions"
        ]
      },
      {
        name: "Control Flow and Data Structures",
        definition: "Control flow manages program execution with conditionals and loops, while arrays and objects store collections of data.",
        details: "Master if-else, switch, for/while loops, and for...of for iterables. Explore arrays (methods like push, map, filter) and objects (dot/bracket notation, keys/values). Learn destructuring for clean data extraction and template literals for string interpolation.",
        example: `const numbers = [1, 2, 3, 4, 5];
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
        sum += numbers[i];
    }
}
const evens = numbers.filter(n => n % 2 === 0);
const person = { name: "Alice", age: 25 };
const { name, age } = person;
console.log(\`Sum of evens: \${sum}, Name: \${name}\`); // Sum of evens: 6, Name: Alice`,
        useCases: [
          "Iterating over UI lists or API responses",
          "Conditional rendering in dynamic interfaces"
        ],
        commonMistakes: [
          "Off-by-one errors in loops",
          "Mutating arrays during iteration",
          "Forgetting to destructure nested objects"
        ],
        resources: [
          "MDN Control Flow: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling",
          "Arrays: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array"
        ]
      },
      {
        name: "DOM Manipulation",
        definition: "DOM manipulation allows JavaScript to interact with and modify HTML/CSS elements in the browser.",
        details: "Use methods like getElementById, querySelectorAll, createElement, and appendChild to build and update the page. Learn about node types, traversal (parentNode, children), and attribute manipulation (setAttribute, classList). Emphasize efficient selectors and avoiding direct innerHTML for security.",
        example: `const button = document.querySelector("button");
const paragraph = document.querySelector("p");
button.addEventListener("click", () => {
    paragraph.textContent = "Button clicked!";
    paragraph.classList.add("highlight");
    // Create new element
    const newDiv = document.createElement("div");
    newDiv.textContent = "New content";
    document.body.appendChild(newDiv);
});`,
        useCases: [
          "Updating form fields dynamically",
          "Building single-page application (SPA) interfaces"
        ],
        commonMistakes: [
          "Querying elements before DOM loads (use DOMContentLoaded)",
          "Using innerHTML without sanitization (XSS risk)",
          "Over-querying the DOM; cache references"
        ],
        resources: [
          "MDN DOM Intro: https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction",
          "DOM Traversal: https://developer.mozilla.org/en-US/docs/Web/API/Node"
        ]
      },
      {
        name: "Event Handling",
        definition: "Event handling responds to user interactions and browser events like clicks, keypresses, or page loads.",
        details: "Attach listeners with addEventListener (supports bubbling/capturing). Access event objects for properties like target, key, or preventDefault. Learn event delegation for efficient handling of dynamic elements and common events (submit, scroll, resize).",
        example: `document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    form.addEventListener("submit", (event) => {
        event.preventDefault(); // Stop default form submission
        const input = event.target.querySelector("input");
        console.log(\`Submitted: \${input.value}\`);
    });
});
document.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        console.log("Enter pressed!");
    }
});`,
        useCases: [
          "Form validation and submission",
          "Creating interactive menus or sliders"
        ],
        commonMistakes: [
          "Not preventing default behavior when needed",
          "Adding multiple listeners without removal (memory leaks)",
          "Ignoring event propagation phases"
        ],
        resources: [
          "MDN Events: https://developer.mozilla.org/en-US/docs/Web/Events",
          "Event Delegation: https://davidwalsh.name/event-delegate"
        ]
      },
      {
        name: "Asynchronous JavaScript (Promises, Async/Await)",
        definition: "Asynchronous JavaScript handles non-blocking operations like network requests using Promises and async/await.",
        details: "Promises represent eventual completion/failure with then/catch/finally. Async functions return Promises, and await pauses execution until resolved. Learn Promise.all for parallel operations and error handling in async code. Understand the event loop and microtasks.",
        example: `function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
async function fetchData() {
    try {
        await delay(1000); // Simulate API delay
        const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
        const data = await response.json();
        console.log(data.title);
    } catch (error) {
        console.error("Fetch error:", error);
    }
}
fetchData();`,
        useCases: [
          "Loading data without freezing the UI",
          "Chaining multiple API calls"
        ],
        commonMistakes: [
          "Not handling rejected Promises (use catch)",
          "Forgetting await in async functions",
          "Blocking the main thread with long-running sync code"
        ],
        resources: [
          "MDN Promises: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises",
          "Async/Await: https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Async_await"
        ]
      },
      {
        name: "Working with APIs",
        definition: "APIs enable JavaScript to communicate with external services for data exchange.",
        details: "Use the Fetch API for HTTP requests (GET, POST, etc.) and handle responses with JSON. Explore headers, query params, and authentication (e.g., Bearer tokens). Integrate third-party libraries like Axios for simpler syntax and interceptors.",
        example: `async function getUsers() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users", {
            method: "GET",
            headers: { "Content-Type": "application/json" }
        });
        if (!response.ok) throw new Error("Network error");
        const users = await response.json();
        console.log(users[0].name);
    } catch (error) {
        console.error("API error:", error);
    }
}
getUsers();`,
        useCases: [
          "Fetching user data for dashboards",
          "Submitting forms to backend servers"
        ],
        commonMistakes: [
          "Not checking response.ok before parsing",
          "CORS issues (test with proper origins)",
          "Exposing API keys in client-side code"
        ],
        resources: [
          "MDN Fetch: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API",
          "REST APIs Guide: https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Fetching_data"
        ]
      },
      {
        name: "ES6+ Features",
        definition: "ES6+ introduces modern JavaScript enhancements for cleaner, more efficient code.",
        details: "Cover template literals, destructuring (arrays/objects), spread/rest operators, modules (import/export), and classes. Learn optional chaining (?.) and nullish coalescing (??) for safer property access. These features improve readability and reduce boilerplate.",
        example: `// Destructuring and spread
const { name, age, ...rest } = { name: "Alice", age: 25, city: "NY" };
const arr = [1, 2, 3];
const newArr = [...arr, 4];
console.log(\`${name} is \${age}\`, newArr); // Alice is 25 [1,2,3,4]
// Modules (in separate file: math.js)
export const add = (a, b) => a + b;
// Import
import { add } from "./math.js";
console.log(add(5, 3)); // 8
// Optional chaining
const user = { profile: { email: "alice@example.com" } };
console.log(user?.profile?.email ?? "No email");`,
        useCases: [
          "Modularizing code for large apps",
          "Simplifying state management in React/Vue"
        ],
        commonMistakes: [
          "Using spread on non-iterables",
          "Forgetting default exports/imports",
          "Over-relying on optional chaining without validation"
        ],
        resources: [
          "MDN ES6: https://developer.mozilla.org/en-US/docs/Web/JavaScript/New_in_JavaScript/ECMAScript_2015_support_in_Mozilla",
          "Modern JS Cheat Sheet: https://github.com/denysdovhan/wtfjs"
        ]
      },
      {
        name: "Error Handling",
        definition: "Error handling manages runtime errors and exceptions to create robust applications.",
        details: "Use try-catch for synchronous code and .catch() for Promises. Throw custom errors with new Error(). Implement global error handlers (window.onerror) and console methods for logging. Focus on graceful degradation and user-friendly messages.",
        example: `try {
    const data = JSON.parse('{"invalid": }'); // Syntax error
    if (!data.id) throw new Error("Missing ID");
} catch (error) {
    if (error instanceof SyntaxError) {
        console.warn("JSON parse error:", error.message);
    } else {
        console.error("Custom error:", error.message);
    }
}
// Async error
fetch("https://api.example.com")
    .then(response => {
        if (!response.ok) throw new Error("Bad response");
        return response.json();
    })
    .catch(error => console.error("Fetch failed:", error));`,
        useCases: [
          "Validating API responses",
          "Debugging user inputs in forms"
        ],
        commonMistakes: [
          "Swallowing errors without logging",
          "Not distinguishing error types",
          "Forgetting to handle async errors"
        ],
        resources: [
          "MDN Errors: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error",
          "Try/Catch Guide: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch"
        ]
      },
      {
        name: "Browser Storage and JSON",
        definition: "Browser storage persists data client-side, and JSON handles data serialization for APIs and storage.",
        details: "Use localStorage (persistent) and sessionStorage (tab-specific) for key-value pairs. Parse/stringify JSON for complex data. Understand quotas (5MB per origin) and security (no sensitive data). Combine with async ops for offline apps.",
        example: `// Store data
const user = { name: "Alice", scores: [90, 85] };
localStorage.setItem("userData", JSON.stringify(user));
// Retrieve
const stored = localStorage.getItem("userData");
if (stored) {
    const parsed = JSON.parse(stored);

}
// Clear
localStorage.removeItem("userData");`,
        useCases: [
          "Saving user preferences or cart items",
          "Offline data caching for PWAs"
        ],
        commonMistakes: [
          "Storing large objects (quota exceeded)",
          "Not validating JSON.parse() (Reviver function for safety)",
          "Using storage for sensitive info (use HTTPS)"
        ],
        resources: [
          "MDN Storage API: https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API",
          "JSON: https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON"
        ]
      },
      {
        name: "Project: Build a Web App",
        definition: "A capstone project integrates JavaScript concepts to build a functional web application.",
        details: "Create an interactive app like a to-do list with localStorage, API integration for weather data, or a dynamic quiz. Incorporate DOM manipulation, events, async fetches, error handling, and ES6+ features. Use tools like Parcel or Vite for bundling, and test in multiple browsers.",
        example: `// Enhanced To-Do App
class TodoApp {
    constructor() {
        this.tasks = JSON.parse(localStorage.getItem("tasks")) || [];
        this.list = document.querySelector("#todo-list");
        this.form = document.querySelector("form");
        this.form.addEventListener("submit", (e) => this.addTask(e));
        this.render();
    }
    addTask(e) {
        e.preventDefault();
        const input = e.target.querySelector("input");
        if (!input.value) return;
        this.tasks.push({ text: input.value, completed: false });
        localStorage.setItem("tasks", JSON.stringify(this.tasks));
        input.value = "";
        this.render();
    }
    render() {
        this.list.innerHTML = this.tasks.map((task, i) => \`
            <li \${task.completed ? 'class="done"' : ''}>
                \${task.text}
                <button onclick="app.toggle(\${i})">Toggle</button>
                <button onclick="app.delete(\${i})">Delete</button>
            </li>
        \`).join("");
    }
    toggle(index) {
        this.tasks[index].completed = !this.tasks[index].completed;
        localStorage.setItem("tasks", JSON.stringify(this.tasks));
        this.render();
    }
    delete(index) {
        this.tasks.splice(index, 1);
        localStorage.setItem("tasks", JSON.stringify(this.tasks));
        this.render();
    }
}
const app = new TodoApp();`,
        useCases: [
          "Prototyping full-stack features client-side",
          "Building progressive web apps (PWAs)"
        ],
        commonMistakes: [
          "Not escaping user input in innerHTML",
          "Ignoring browser compatibility for storage",
          "Poor state management leading to bugs"
        ],
        resources: [
          "Build a To-Do App: https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Build_a_simple_block_editor",
          "Project Ideas: https://www.freecodecamp.org/news/javascript-projects-for-beginners/"
        ]
      }
    ]
  },
  4: {
  "id": 4,
  "title": "CSS Styling",
  "description": "Create stunning, responsive layouts and designs with CSS, the styling language of the web, mastering modern techniques for professional web development.",
  "image": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  "overview": "CSS (Cascading Style Sheets) is the cornerstone of web design, transforming HTML into visually appealing, responsive, and interactive experiences. This course covers CSS fundamentals, modern layout systems like Flexbox and Grid, advanced styling with animations, variables, and preprocessors like SASS, and techniques for accessibility and performance. Through hands-on examples and a capstone project, you’ll build skills to create professional-grade websites and web applications compatible across browsers and devices.",
  "playlistId": "PLr6-GrHUlVf8JIgLcu3sHslVqv4YApu8N", // CSS playlist by Traversy Media (20+ videos)
  "topics": [
    {
        name: "CSS Basics and Syntax",
        definition: "CSS defines styles for HTML elements using selectors and properties to control appearance and layout.",
        details: "Learn CSS syntax, including rulesets (selector { property: value; }), and ways to link CSS to HTML (inline, internal, external). Explore properties like color, font-family, font-size, and text-align. Understand the cascade, inheritance, and how to debug styles using browser developer tools (e.g., Chrome DevTools).",
        example: `/* External CSS file: styles.css */
p {
    color: blue;
    font-size: 16px;
    text-align: center;
}
h1 {
    font-family: Arial, sans-serif;
    margin-bottom: 20px;
}
/* HTML: <link rel="stylesheet" href="styles.css"> */`,
        useCases: [
          "Styling text and backgrounds for basic webpages",
          "Creating consistent typography across a site"
        ],
        commonMistakes: [
          "Using inline CSS, reducing maintainability",
          "Forgetting to close curly braces in rulesets",
          "Misspelling property names or values"
        ],
        resources: [
          "MDN CSS Basics: https://developer.mozilla.org/en-US/docs/Learn/CSS/First_steps",
          "W3Schools CSS Intro: https://www.w3schools.com/css/css_intro.asp"
        ]
      },
      {
        name: "Selectors and Specificity",
        definition: "Selectors target HTML elements for styling, and specificity determines which styles take precedence.",
        details: "Explore element (e.g., p), class (.class), ID (#id), attribute ([type='text']), and universal (*) selectors. Learn combinators (descendant, child, sibling) and specificity rules (ID > class > element). Understand !important and how to avoid specificity wars for maintainable code.",
        example: `.highlight {
    background-color: yellow;
}
#unique-id {
    color: red;
    font-weight: bold;
}
div p {
    font-size: 14px; /* Descendant selector */
}
input[type="submit"] {
    padding: 8px;
}`,
        useCases: [
          "Targeting specific elements in complex layouts",
          "Applying styles to form inputs or navigation menus"
        ],
        commonMistakes: [
          "Overusing !important, leading to hard-to-debug styles",
          "Writing overly specific selectors, reducing reusability",
          "Confusing class and ID selectors"
        ],
        resources: [
          "MDN Selectors: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors",
          "Specificity Guide: https://css-tricks.com/specifics-on-css-specificity/"
        ]
      },
      {
        name: "Box Model",
        definition: "The CSS box model defines an element’s structure, including content, padding, border, and margin.",
        details: "Understand content (width/height), padding (inner spacing), border (outline), and margin (outer spacing). Learn box-sizing (content-box vs. border-box) for predictable sizing. Explore shorthand properties (e.g., margin: 10px 20px) and how the box model affects layout calculations.",
        example: `div {
    width: 200px;
    padding: 15px;
    border: 2px solid black;
    margin: 20px auto;
    box-sizing: border-box; /* Includes padding and border in width */
}
.container {
    background-color: lightgray;
    padding: 10px 20px 30px 40px; /* Top, right, bottom, left */
}`,
        useCases: [
          "Creating card components with consistent spacing",
          "Designing layouts with precise element sizing"
        ],
        commonMistakes: [
          "Forgetting box-sizing, causing unexpected sizes",
          "Confusing margin with padding",
          "Collapsing margins in adjacent elements"
        ],
        resources: [
          "MDN Box Model: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model",
          "Box-Sizing Guide: https://css-tricks.com/box-sizing/"
        ]
      },
      {
        name: "Positioning and Layout Techniques",
        definition: "Positioning controls how elements are placed on a page, enabling precise layout control.",
        details: "Learn position properties: static (default), relative, absolute, fixed, and sticky. Understand z-index for stacking order, float for legacy layouts, and clear for float management. Explore when to use positioning vs. modern layouts like Flexbox/Grid for better responsiveness.",
        example: `.relative {
    position: relative;
    top: 10px;
    left: 20px;
}
.absolute {
    position: absolute;
    top: 0;
    right: 0;
    z-index: 10;
}
.sticky-nav {
    position: sticky;
    top: 0;
    background-color: white;
}`,
        useCases: [
          "Creating fixed navigation bars",
          "Positioning tooltips or modals"
        ],
        commonMistakes: [
          "Misusing absolute positioning without a positioned parent",
          "Overlapping elements due to incorrect z-index",
          "Using float for modern layouts instead of Flexbox/Grid"
        ],
        resources: [
          "MDN Positioning: https://developer.mozilla.org/en-US/docs/Web/CSS/position",
          "CSS Positioning Guide: https://www.joshwcomeau.com/css/understanding-positioning/"
        ]
      },
      {
        name: "Flexbox Layout",
        definition: "Flexbox is a one-dimensional layout model for arranging items in rows or columns with flexible sizing.",
        details: "Use display: flex to create flexible containers. Master properties like justify-content (e.g., space-between, center), align-items (e.g., stretch, baseline), flex-wrap, and flex (shorthand for grow, shrink, basis). Learn to create responsive layouts with minimal media queries.",
        example: `.container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 10px;
}
.item {
    flex: 1 1 200px; /* Grow, shrink, basis */
    background-color: lightblue;
    padding: 10px;
}`,
        useCases: [
          "Building navigation bars or card layouts",
          "Creating equal-height columns"
        ],
        commonMistakes: [
          "Not setting flex-wrap, causing overflow",
          "Confusing align-items with align-content",
          "Forgetting to define flex container properties"
        ],
        resources: [
          "MDN Flexbox: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout",
          "Flexbox Froggy: https://flexboxfroggy.com/"
        ]
      },
      {
        name: "CSS Grid",
        definition: "CSS Grid is a two-dimensional layout system for creating complex, responsive grid-based designs.",
        details: "Use display: grid with grid-template-columns/rows (e.g., repeat, minmax, fr units) and gap for spacing. Learn grid-area, grid-template-areas, and auto-placement for dynamic layouts. Understand explicit vs. implicit grids and responsive design with media queries.",
        example: `.grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 15px;
}
.grid-item {
    background-color: coral;
    padding: 20px;
}
.header {
    grid-column: 1 / -1; /* Span all columns */
}`,
        useCases: [
          "Designing magazine-style layouts",
          "Creating dashboard grids with varying content sizes"
        ],
        commonMistakes: [
          "Misusing auto-fit vs. auto-fill",
          "Not accounting for implicit grid tracks",
          "Overcomplicating layouts with excessive grid areas"
        ],
        resources: [
          "MDN CSS Grid: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout",
          "Grid Garden: https://cssgridgarden.com/"
        ]
      },
      {
        name: "Responsive Design",
        definition: "Responsive design ensures websites adapt seamlessly to different screen sizes and devices.",
        details: "Use relative units (%, vw, vh, rem, em) for fluid layouts, media queries (@media) for breakpoints, and mobile-first design principles. Learn to optimize images (srcset, picture) and use frameworks like Bootstrap sparingly. Test responsiveness with browser dev tools.",
        example: `:root {
    font-size: 16px;
}
.container {
    width: 90%;
    max-width: 1200px;
    margin: 0 auto;
}
@media (max-width: 768px) {
    .container {
        font-size: 0.9rem;
        flex-direction: column;
    }
    img {
        width: 100%;
        height: auto;
    }
}`,
        useCases: [
          "Building mobile-friendly e-commerce sites",
          "Creating adaptive dashboards"
        ],
        commonMistakes: [
          "Using fixed units (px) for responsive layouts",
          "Not testing multiple device sizes",
          "Overusing media queries instead of flexible layouts"
        ],
        resources: [
          "MDN Responsive Design: https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design",
          "Responsive Images: https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images"
        ]
      },
      {
        name: "Transitions and Animations",
        definition: "Transitions and animations add dynamic, interactive effects to elements for engaging user experiences.",
        details: "Use transition for smooth property changes (e.g., color, transform) with duration, timing-function, and delay. Create complex animations with @keyframes, animation properties (e.g., iteration-count, direction), and transform (rotate, scale). Optimize for performance using will-change.",
        example: `button {
    background-color: green;
    transition: background-color 0.3s ease, transform 0.2s;
}
button:hover {
    background-color: blue;
    transform: scale(1.1);
}
@keyframes slide {
    0% { transform: translateX(0); }
    100% { transform: translateX(100px); }
}
.animated {
    animation: slide 2s infinite alternate;
}`,
        useCases: [
          "Enhancing buttons with hover effects",
          "Creating loading spinners or slideshows"
        ],
        commonMistakes: [
          "Over-animating, causing performance issues",
          "Not specifying transition-property",
          "Using non-GPU-accelerated properties (e.g., width)"
        ],
        resources: [
          "MDN Transitions: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Transitions",
          "MDN Animations: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations"
        ]
      },
      {
        name: "Pseudo-Classes and Pseudo-Elements",
        definition: "Pseudo-classes and pseudo-elements target specific element states or parts for advanced styling.",
        details: "Use pseudo-classes (:hover, :focus, :nth-child) for state-based styling and pseudo-elements (::before, ::after) for adding content or styling parts of elements. Learn structural pseudo-classes (e.g., :first-child) and dynamic states (e.g., :checked).",
        example: `li:nth-child(odd) {
    background-color: lightgray;
}
a:hover {
    color: purple;
    text-decoration: underline;
}
p::before {
    content: "★ ";
    color: gold;
}
input:focus {
    outline: 2px solid blue;
}`,
        useCases: [
          "Styling alternating table rows",
          "Adding icons or decorations to elements"
        ],
        commonMistakes: [
          "Using :: instead of : for pseudo-classes",
          "Overusing complex :nth-child selectors",
          "Not ensuring accessibility for :focus states"
        ],
        resources: [
          "MDN Pseudo-Classes: https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes",
          "Pseudo-Elements: https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-elements"
        ]
      },
      {
        name: "CSS Variables",
        definition: "CSS custom properties (variables) store reusable values for consistent and maintainable styling.",
        details: "Define variables with --variable-name in :root or scoped selectors. Access with var(). Update dynamically with JavaScript for themes. Learn fallback values and inheritance for robust usage.",
        example: `:root {
    --primary-color: #007bff;
    --padding: 10px;
}
.card {
    background-color: var(--primary-color);
    padding: var(--padding, 5px); /* Fallback */
}
button {
    color: var(--primary-color);
}
@media (prefers-color-scheme: dark) {
    :root {
        --primary-color: #4dabf7;
    }
}`,
        useCases: [
          "Creating themeable designs (e.g., dark/light mode)",
          "Maintaining consistent spacing or colors"
        ],
        commonMistakes: [
          "Not defining variables in :root for global access",
          "Using invalid fallback values",
          "Overusing variables for one-off styles"
        ],
        resources: [
          "MDN CSS Variables: https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties",
          "CSS Variables Guide: https://css-tricks.com/a-complete-guide-to-custom-properties/"
        ]
      },
    {
      "name": "Preprocessing with SASS",
      "definition": "SASS (Syntactically Awesome Style Sheets) is a CSS preprocessor that enhances CSS with variables, nesting, and mixins.",
      "details": "Learn SASS syntax, including $variables, nested selectors, @mixins/@include for reusable code, and @extend for inheritance. Explore SCSS (CSS-like syntax) vs. indented SASS. Understand compilation to CSS using tools like node-sass or Dart Sass.",
      "example": `$primary-color: #007bff;
$base-padding: 10px;
@mixin flex-center {
    display: flex;
    justify-content: center;
    align-items: center;
}
.container {
    @include flex-center;
    background: $primary-color;
    padding: $base-padding;
    .item {
        &:hover {
            background: darken($primary-color, 10%);
        }
    }
}`,
      "useCases": [
        "Streamlining large-scale CSS projects",
        "Creating reusable component styles"
      ],
      "commonMistakes": [
        "Over-nesting, leading to bloated CSS",
        "Not compiling SASS to CSS before deployment",
        "Misusing @extend, causing specificity issues"
      ],
      "resources": [
        "SASS Official Docs: https://sass-lang.com/documentation/",
        "SASS Guide: https://css-tricks.com/the-sass-handbook/"
      ]
    },
    {
      "name": "Advanced Selectors and Combinators",
      "definition": "Advanced selectors and combinators target elements with precision for complex styling needs.",
      "details": "Use combinators (descendant ' ', child '>', adjacent sibling '+', general sibling '~') and attribute selectors ([attr=value]). Combine with pseudo-classes for dynamic targeting. Learn to optimize selector performance and maintain specificity balance.",
      "example": `/* Child combinator */
nav > ul {
    list-style: none;
}
/* Adjacent sibling */
h2 + p {
    margin-top: 5px;
}
/* Attribute selector */
input[type="email"] {
    border-color: blue;
}
/* Combined with pseudo-class */
div[class*="item"]:hover {
    background-color: lightcoral;
}`,
      "useCases": [
        "Styling nested navigation menus",
        "Targeting specific input types in forms"
      ],
      "commonMistakes": [
        "Writing overly complex selectors, reducing performance",
        "Confusing sibling combinators (+ vs. ~)",
        "Using attribute selectors without specificity planning"
      ],
      "resources": [
        "MDN Combinators: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors#Combinators",
        "Advanced Selectors: https://www.smashingmagazine.com/2016/03/advanced-css-selectors/"
      ]
    },
    {
      "name": "Project: Design a Landing Page",
      "definition": "A capstone project integrates CSS concepts to build a visually appealing, responsive landing page.",
      "details": "Create a professional landing page using Flexbox, Grid, animations, and SASS. Incorporate responsive design with media queries, accessibility (e.g., focus states), and semantic HTML. Test cross-browser compatibility and optimize for performance (e.g., minify CSS).",
      "example": `:root {
    --primary: #007bff;
}
.hero {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background: linear-gradient(135deg, var(--primary), purple);
    color: white;
    text-align: center;
}
@media (max-width: 600px) {
    .hero {
        flex-direction: column;
        padding: 20px;
    }
}
.hero h1 {
    font-size: 2.5rem;
    animation: fadeIn 1s ease-in;
}
@keyframes fadeIn {
    0% { opacity: 0; }
    100% { opacity: 1; }
}`,
      "useCases": [
        "Building marketing or portfolio pages",
        "Creating responsive product showcases"
      ],
      "commonMistakes": [
        "Not ensuring accessibility (e.g., low contrast)",
        "Overloading animations, harming performance",
        "Ignoring mobile-first design principles"
      ],
      "resources": [
        "MDN Building a Landing Page: https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Introduction",
        "CSS Project Ideas: https://www.freecodecamp.org/news/css-projects-to-build-your-skills/"
      ]
    }
  ]
},
  5: {
    id: 5,
    title: "C++ Programming",
    description: "Dive into C++, a powerful language for high-performance applications and game development.",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
    overview: "C++ is used in system programming, game development, and more. This course teaches you how to write efficient and scalable code, covering both basics and advanced concepts.",
    playlistId: "PLlrATfBNZ98dudnM48yfILi8YnegqOIrB", // C++ playlist by The Cherno (80+ videos)
    topics: [
      {
        name: "C++ Basics and Syntax",
        definition: "C++ is a general-purpose, compiled language with object-oriented and procedural features.",
        details: "Learn C++ syntax, structure, and how to compile and run programs using a compiler like g++.",
        example: `#include <iostream>
using namespace std;
int main() {
    cout << "Hello, World!" << endl;
    return 0;
}`,
      },
      {
        name: "Variables and Data Types",
        definition: "Variables store data, and data types define their nature (e.g., int, float, char).",
        details: "Understand basic data types, variable declaration, and scope in C++.",
        example: `int x = 10;
float y = 5.5;
char c = 'A';
cout << x << " " << y << " " << c << endl;`,
      },
      {
        name: "Control Structures",
        definition: "Control structures manage program flow using conditionals and loops.",
        details: "Learn if-else, switch, for, while, and do-while loops for program control.",
        example: `for (int i = 0; i < 5; i++) {
    if (i % 2 == 0) {
        cout << i << " is even" << endl;
    }
}`,
      },
      {
        name: "Functions and Pointers",
        definition: "Functions are reusable code blocks, and pointers store memory addresses.",
        details: "Explore function declarations, pass-by-value vs. pass-by-reference, and pointer basics.",
        example: `void swap(int* a, int* b) {
    int temp = *a;
    *a = *b;
    *b = temp;
}
int main() {
    int x = 5, y = 10;
    swap(&x, &y);
    cout << x << " " << y << endl;
}`,
      },
      {
        name: "Classes and Objects",
        definition: "Classes define blueprints for objects in object-oriented programming.",
        details: "Learn to create classes, objects, and member functions in C++.",
        example: `class Car {
public:
    string model;
    void drive() {
        cout << model << " is driving" << endl;
    }
};
int main() {
    Car car;
    car.model = "Toyota";
    car.drive();
}`,
      },
      {
        name: "Inheritance and Polymorphism",
        definition: "Inheritance allows classes to inherit properties, and polymorphism enables flexible behavior.",
        details: "Understand single and multiple inheritance, and virtual functions for polymorphism.",
        example: `class Animal {
public:
    virtual void sound() {
        cout << "Some sound" << endl;
    }
};
class Dog : public Animal {
public:
    void sound() override {
        cout << "Woof" << endl;
    }
};
int main() {
    Dog dog;
    dog.sound();
}`,
      },
      {
        name: "Templates",
        definition: "Templates enable generic programming for reusable code.",
        details: "Learn function templates and class templates for type-independent code.",
        example: `template <typename T>
T add(T a, T b) {
    return a + b;
}
int main() {
    cout << add(5, 3) << endl;
    cout << add(5.5, 3.3) << endl;
}`,
      },
      {
        name: "Standard Template Library (STL)",
        definition: "STL provides pre-built classes and functions for data structures and algorithms.",
        details: "Explore vectors, lists, maps, and algorithms like sort and find.",
        example: `#include <vector>
#include <algorithm>
int main() {
    vector<int> v = {5, 2, 9};
    sort(v.begin(), v.end());
    for (int x : v) cout << x << " ";
}`,
      },
      {
        name: "Memory Management",
        definition: "Memory management controls dynamic memory allocation and deallocation.",
        details: "Learn new/delete operators and smart pointers (unique_ptr, shared_ptr).",
        example: `#include <memory>
int main() {
    unique_ptr<int> ptr = make_unique<int>(10);
    cout << *ptr << endl;
}`,
      },
      {
        name: "Project: Build a C++ Application",
        definition: "A project integrates C++ concepts to build a functional application.",
        details: "Create a console-based app, like a student management system or game.",
        example: `class Student {
public:
    string name;
    int marks;
    void display() {
        cout << name << ": " << marks << endl;
    }
};
int main() {
    Student s;
    s.name = "Alice";
    s.marks = 95;
    s.display();
}`,
      },
    ],
  },
  6: {
    "id": 6,
    "title": "C Programming",
    "description": "Learn the fundamentals of C, the foundation for many modern languages.",
    "image": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
    "overview": "C is a low-level language that teaches you how computers work. This course covers core programming concepts, practical applications for system programming, and advanced topics for building robust applications.",
    "playlistId": "PLBlnK6fEyqRggZZgYpK7C3D6lW1n7NkGe",
    "topics": [
      {
        "name": "C Basics and Syntax",
        "definition": "C is a procedural, compiled language known for its performance and control.",
        "details": "Learn C syntax, program structure, and compilation with gcc. Understand the role of main(), header files, and basic input/output operations.",
        "example": `#include <stdio.h>
int main() {
    printf("Hello, World!\\n");
    return 0;
}`
      },
      {
        "name": "Variables and Operators",
        "definition": "Variables store data, and operators perform operations like arithmetic or logical.",
        "details": "Understand variable types (int, float, char, double), variable scope, and operators including arithmetic (+, -, *, /, %), relational (==, !=, >, <), and logical (&&, ||, !).",
        "example": `#include <stdio.h>
int main() {
    int x = 10;
    float y = 5.5;
    int sum = x + (int)y;
    printf("Sum: %d\\n", sum);
    printf("Is x greater than y? %d\\n", x > y);
    return 0;
}`
      },
      {
        "name": "Control Flow",
        "definition": "Control flow manages program execution using conditionals and loops.",
        "details": "Learn if-else, switch-case, for, while, and do-while loops. Understand break and continue statements for controlling loop execution.",
        "example": `#include <stdio.h>
int main() {
    for (int i = 0; i < 5; i++) {
        if (i % 2 == 0) {
            printf("%d is even\\n", i);
        } else {
            printf("%d is odd\\n", i);
        }
    }
    return 0;
}`
      },
      {
        "name": "Functions and Arrays",
        "definition": "Functions are reusable code blocks, and arrays store multiple values of the same type.",
        "details": "Learn function declarations, return types, parameter passing, and array operations including initialization, indexing, and multi-dimensional arrays.",
        "example": `#include <stdio.h>
int sum(int a, int b) {
    return a + b;
}
int main() {
    int arr[3] = {1, 2, 3};
    printf("Sum of arr[0] and arr[1]: %d\\n", sum(arr[0], arr[1]));
    return 0;
}`
      },
      {
        "name": "Pointers",
        "definition": "Pointers store memory addresses of variables.",
        "details": "Understand pointer declaration, dereferencing (*), address-of (&), pointer arithmetic, and pointers to arrays or functions.",
        "example": `#include <stdio.h>
int main() {
    int x = 10;
    int *p = &x;
    printf("Value at pointer: %d\\n", *p);
    *p = 20; // Modify value through pointer
    printf("New value of x: %d\\n", x);
    return 0;
}`
      },
      {
        "name": "Structures and Unions",
        "definition": "Structures group related data, and unions share memory for different types.",
        "details": "Learn to define and access structs, nested structures, and unions. Understand memory alignment and use cases for unions.",
        "example": `#include <stdio.h>
struct Student {
    char name[50];
    int marks;
};
union Data {
    int i;
    float f;
};
int main() {
    struct Student s = {"Alice", 95};
    union Data d;
    d.i = 10;
    printf("%s: %d\\n", s.name, s.marks);
    printf("Union int value: %d\\n", d.i);
    d.f = 3.14;
    printf("Union float value: %.2f\\n", d.f);
    return 0;
}`
      },
      {
        "name": "File Handling",
        "definition": "File handling enables reading from and writing to files.",
        "details": "Use fopen, fread, fwrite, fscanf, fprintf, and fclose. Learn file modes (r, w, a) and binary vs. text file operations.",
        "example": `#include <stdio.h>
int main() {
    FILE *fp = fopen("example.txt", "w");
    if (fp != NULL) {
        fprintf(fp, "Hello, File!");
        fclose(fp);
        printf("File written successfully\\n");
    } else {
        printf("Error opening file\\n");
    }
    return 0;
}`
      },
      {
        "name": "Dynamic Memory Allocation",
        "definition": "Dynamic memory allocation manages memory at runtime.",
        "details": "Learn malloc, calloc, realloc, and free. Understand memory leaks and proper memory management practices.",
        "example": `#include <stdio.h>
#include <stdlib.h>
int main() {
    int *arr = (int *)malloc(3 * sizeof(int));
    if (arr != NULL) {
        arr[0] = 1;
        arr[1] = 2;
        arr[2] = 3;
        printf("Second element: %d\\n", arr[1]);
        free(arr);
    } else {
        printf("Memory allocation failed\\n");
    }
    return 0;
}`
      },
      {
        "name": "Preprocessor Directives",
        "definition": "Preprocessor directives process code before compilation.",
        "details": "Understand #include, #define, #ifdef, #ifndef, and macros. Learn conditional compilation and macro functions.",
        "example": `#include <stdio.h>
#define PI 3.14
#define SQUARE(x) ((x) * (x))
int main() {
    printf("Value of PI: %.2f\\n", PI);
    printf("Square of 5: %d\\n", SQUARE(5));
    return 0;
}`
      },
      {
        "name": "Strings in C",
        "definition": "Strings are arrays of characters terminated by a null character (\\0).",
        "details": "Learn string manipulation using standard library functions like strlen, strcpy, strcat, and strcmp. Understand string literals and character arrays.",
        "example": `#include <stdio.h>
#include <string.h>
int main() {
    char str1[20] = "Hello";
    char str2[] = "World";
    strcat(str1, " ");
    strcat(str1, str2);
    printf("Concatenated string: %s\\n", str1);
    printf("Length of str1: %zu\\n", strlen(str1));
    return 0;
}`
      },
      {
        "name": "Bit Manipulation",
        "definition": "Bit manipulation involves operations on individual bits of data.",
        "details": "Learn bitwise operators (&, |, ^, ~, <<, >>) for tasks like setting, clearing, or toggling bits. Useful in system programming and optimization.",
        "example": `#include <stdio.h>
int main() {
    int a = 5; // Binary: 0101
    int b = 3; // Binary: 0011
    printf("a & b: %d\\n", a & b); // Bitwise AND
    printf("a | b: %d\\n", a | b); // Bitwise OR
    printf("a << 1: %d\\n", a << 1); // Left shift
    return 0;
}`
      },
      {
        "name": "Error Handling",
        "definition": "Error handling ensures robust programs by managing runtime errors.",
        "details": "Learn to use errno, perror, and return codes. Check for NULL pointers and file operation failures.",
        "example": `#include <stdio.h>
#include <errno.h>
int main() {
    FILE *fp = fopen("nonexistent.txt", "r");
    if (fp == NULL) {
        perror("Error opening file");
        printf("Error code: %d\\n", errno);
    } else {
        fclose(fp);
    }
    return 0;
}`
      },
      {
        "name": "Command-Line Arguments",
        "definition": "Command-line arguments allow passing data to a program at runtime.",
        "details": "Learn to use argc and argv in main() to process inputs from the command line.",
        "example": `#include <stdio.h>
int main(int argc, char *argv[]) {
    printf("Number of arguments: %d\\n", argc);
    for (int i = 0; i < argc; i++) {
        printf("Argument %d: %s\\n", i, argv[i]);
    }
    return 0;
}`
      },
      {
        "name": "Recursion",
        "definition": "Recursion is a technique where a function calls itself to solve problems.",
        "details": "Learn recursive functions, base cases, and stack overflow risks. Useful for algorithms like factorial or Fibonacci.",
        "example": `#include <stdio.h>
int factorial(int n) {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
}
int main() {
    printf("Factorial of 5: %d\\n", factorial(5));
    return 0;
}`
      },
      {
        "name": "Project: Build a C Program",
        "definition": "A project integrates C concepts to build a functional program.",
        "details": "Create a console application, such as a calculator, file parser, or simple game, combining multiple C concepts.",
        "example": `#include <stdio.h>
int main() {
    int a, b;
    char op;
    printf("Enter two numbers and an operator (+, -, *, /): ");
    scanf("%d %d %c", &a, &b, &op);
    switch (op) {
        case '+': printf("Result: %d\\n", a + b); break;
        case '-': printf("Result: %d\\n", a - b); break;
        case '*': printf("Result: %d\\n", a * b); break;
        case '/': printf("Result: %.2f\\n", (float)a / b); break;
        default: printf("Invalid operator\\n");
    }
    return 0;
}`
      }
    ]
},
  7:{
    "id": 7,
    "title": "HTML Basics",
    "description": "Build web pages from scratch with HTML, the backbone of the web.",
    "image": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    "overview": "HTML is the structure of every website. This course teaches you how to create semantic, accessible, and modern web pages using HTML5, with practical applications for real-world web development.",
    "playlistId": "PLr6-GrHUlVf_U5sP87ZVG_9v7kx3T4MnB",
    "topics": [
      {
        "name": "HTML Fundamentals",
        "definition": "HTML is a markup language for structuring content on the web.",
        "details": "Learn the basic structure of an HTML document, including the DOCTYPE declaration, <html>, <head>, and <body> tags. Understand how tags and attributes work to create web content.",
        "example": `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>My First Page</title>
</head>
<body>
    <h1>Hello, World!</h1>
    <p>Welcome to HTML learning.</p>
</body>
</html>`
      },
      {
        "name": "Tags and Attributes",
        "definition": "Tags define elements, and attributes provide additional information or behavior.",
        "details": "Explore common tags like <p>, <div>, <a>, <span>, and attributes such as id, class, href, and style. Learn global attributes applicable to all elements.",
        "example": `<div class="container">
    <a href="https://example.com" id="main-link" target="_blank">Visit Example</a>
    <p style="color: blue;">Styled text</p>
</div>`
      },
      {
        "name": "Semantic HTML",
        "definition": "Semantic HTML uses meaningful tags to enhance accessibility, SEO, and code readability.",
        "details": "Use tags like <header>, <nav>, <main>, <article>, <section>, <aside>, and <footer> to structure content logically and improve search engine understanding.",
        "example": `<header>
    <h1>My Website</h1>
    <nav>
        <a href="/home">Home</a>
        <a href="/about">About</a>
    </nav>
</header>
<main>
    <section>
        <article>Blog post content here</article>
    </section>
</main>
<footer>
    <p>&copy; 2025 My Website</p>
</footer>`
      },
      {
        "name": "Forms and Inputs",
        "definition": "Forms collect user input through interactive elements.",
        "details": "Learn to create forms with <form>, <input>, <select>, <textarea>, <label>, and attributes like type, name, placeholder, and required. Understand form submission methods (GET, POST).",
        "example": `<form action="/submit" method="POST">
    <label for="username">Username:</label>
    <input type="text" id="username" name="username" placeholder="Enter username" required>
    <label for="role">Role:</label>
    <select id="role" name="role">
        <option value="user">User</option>
        <option value="admin">Admin</option>
    </select>
    <input type="submit" value="Submit">
</form>`
      },
      {
        "name": "Tables and Lists",
        "definition": "Tables organize data in rows and columns, and lists structure sequential content.",
        "details": "Use <table>, <tr>, <th>, <td> for tables, and <ul>, <ol>, <dl> for unordered, ordered, and description lists. Learn attributes like colspan and rowspan for tables.",
        "example": `<table border="1">
    <tr>
        <th>Name</th>
        <th>Age</th>
    </tr>
    <tr>
        <td>Alice</td>
        <td>25</td>
    </tr>
</table>
<ul>
    <li>Apple</li>
    <li>Banana</li>
</ul>
<ol>
    <li>First</li>
    <li>Second</li>
</ol>`
      },
      {
        "name": "Multimedia (Images, Videos, Audio)",
        "definition": "Multimedia elements embed images, videos, and audio in web pages.",
        "details": "Use <img> for images, <video> for videos, and <audio> for sound. Learn attributes like src, alt, controls, autoplay, and responsive techniques with width or srcset.",
        "example": `<img src="image.jpg" alt="Nature landscape" width="300">
<video src="video.mp4" controls width="400"></video>
<audio src="audio.mp3" controls></audio>`
      },
      {
        "name": "HTML5 APIs",
        "definition": "HTML5 APIs extend functionality for dynamic and interactive web applications.",
        "details": "Explore Canvas for 2D graphics, Geolocation for location data, and Web Storage (localStorage, sessionStorage) for client-side data. Learn basic API usage with JavaScript.",
        "example": `<canvas id="myCanvas" width="200" height="100" style="border:1px solid #000;"></canvas>
<script>
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    ctx.fillStyle = "blue";
    ctx.fillRect(20, 20, 150, 60);
</script>
<p id="location"></p>
<script>
    navigator.geolocation.getCurrentPosition(pos => {
        document.getElementById("location").innerText = 
            "Latitude: " + pos.coords.latitude + ", Longitude: " + pos.coords.longitude;
    });
</script>`
      },
      {
        "name": "Accessibility Best Practices",
        "definition": "Accessibility ensures web content is usable by everyone, including people with disabilities.",
        "details": "Learn ARIA roles, alt text for images, keyboard navigation, and semantic landmarks. Use tools like screen readers to test accessibility.",
        "example": `<button aria-label="Close dialog" onclick="closeDialog()">X</button>
<img src="photo.jpg" alt="A sunset over the ocean">
<nav aria-label="Main navigation">
    <a href="/home">Home</a>
</nav>`
      },
      {
        "name": "SEO Basics",
        "definition": "SEO optimizes web pages for better search engine rankings.",
        "details": "Use meta tags (description, keywords), semantic structure, proper headings (<h1> to <h6>), and clean URLs. Learn the importance of mobile-friendly design.",
        "example": `<head>
    <meta charset="UTF-8">
    <meta name="description" content="Learn HTML basics for web development">
    <meta name="keywords" content="HTML, web development, tutorial">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>HTML Tutorial</title>
</head>`
      },
      {
        "name": "Linking and Navigation",
        "definition": "Linking and navigation connect web pages and resources.",
        "details": "Use <a> tags for hyperlinks, relative and absolute URLs, and anchor links for in-page navigation. Learn about target attributes and navigation menus.",
        "example": `<nav>
    <a href="/home">Home</a>
    <a href="/about">About</a>
    <a href="#section1">Go to Section 1</a>
</nav>
<section id="section1">
    <h2>Section 1</h2>
    <p>Content here</p>
</section>`
      },
      {
        "name": "Responsive Design with HTML",
        "definition": "Responsive design ensures web pages adapt to different screen sizes.",
        "details": "Use meta viewport tag, relative units (%, vw, vh), and semantic structure to support responsive layouts. Learn how HTML integrates with CSS for responsiveness.",
        "example": `<head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>
    <div style="width: 100%; max-width: 1200px; margin: 0 auto;">
        <h1>Responsive Content</h1>
        <img src="image.jpg" alt="Responsive image" style="width: 100%; height: auto;">
    </div>
</body>`
      },
      {
        "name": "Embedding External Content",
        "definition": "Embedding external content integrates third-party resources like videos or maps.",
        "details": "Use <iframe> to embed YouTube videos, Google Maps, or other external content. Learn attributes like src, frameborder, and allowfullscreen.",
        "example": `<iframe width="560" height="315" src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
    title="YouTube video" frameborder="0" allowfullscreen></iframe>
<iframe src="https://www.google.com/maps/embed?pb=..." width="600" height="450" 
    style="border:0;" allowfullscreen></iframe>`
      },
      {
        "name": "Data Attributes and Microdata",
        "definition": "Data attributes and microdata enhance HTML with custom metadata.",
        "details": "Use data-* attributes for custom data and schema.org microdata for search engine optimization. Learn how JavaScript can access data attributes.",
        "example": `<div data-product-id="123" itemscope itemtype="http://schema.org/Product">
    <span itemprop="name">Cool Gadget</span>
    <span itemprop="price">29.99</span>
</div>
<script>
    const div = document.querySelector("[data-product-id]");
    console.log(div.dataset.productId); // Outputs: 123
</script>`
      },
      {
        "name": "Project: Build a Website",
        "definition": "A project integrates HTML concepts to build a complete, functional website.",
        "details": "Create a multi-page website with navigation, forms, multimedia, semantic structure, and accessibility features. Include SEO and responsive design principles.",
        "example": `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="My personal portfolio">
    <title>My Portfolio</title>
</head>
<body>
    <header>
        <h1>My Portfolio</h1>
        <nav>
            <a href="/home">Home</a>
            <a href="/projects">Projects</a>
        </nav>
    </header>
    <main>
        <section>
            <h2>About Me</h2>
            <p>Welcome to my portfolio website!</p>
            <img src="profile.jpg" alt="Profile picture" width="200">
        </section>
        <form>
            <label for="contact">Contact Me:</label>
            <input type="email" id="contact" name="email" required>
            <input type="submit" value="Send">
        </form>
    </main>
    <footer>
        <p>&copy; 2025 My Portfolio</p>
    </footer>
</body>
</html>`
      }
    ]
},
  8: {
    "id": 8,
    "title": "Node.js Development",
    "description": "Create scalable backend applications with Node.js, a JavaScript runtime.",
    "image": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    "overview": "Node.js allows you to build fast and scalable servers using JavaScript. This course covers core concepts, modern frameworks, and advanced techniques for building robust APIs and real-time applications.",
    "playlistId": "PL4cUxeGkcC9jsz4LDYc6kv3ymONOKxwBU",
    "topics": [
      {
        "name": "Introduction to Node.js",
        "definition": "Node.js is a runtime for executing JavaScript outside the browser.",
        "details": "Learn Node.js architecture, installation, REPL, and running basic scripts. Understand the role of V8 engine and single-threaded, non-blocking I/O model.",
        "example": `// Simple Node.js script
console.log("Hello, Node.js!");
console.log("Node version: " + process.version);
`
      },
      {
        "name": "Modules and NPM",
        "definition": "Modules are reusable code blocks, and NPM is Node’s package manager.",
        "details": "Explore CommonJS modules with require and module.exports. Learn to install, manage, and use third-party packages with npm, including package.json configuration.",
        "example": `// example.js
const fs = require("fs");
fs.writeFileSync("example.txt", "Hello, Node!");
console.log("File created successfully!");
// package.json
{
    "name": "my-app",
    "version": "1.0.0",
    "dependencies": {
        "fs": "0.0.1-security"
    }
}`
      },
      {
        "name": "Event Loop",
        "definition": "The event loop enables non-blocking I/O operations in Node.js.",
        "details": "Understand the event loop phases (timers, I/O callbacks, idle, poll, check, close). Learn how Node.js handles asynchronous tasks with callbacks, promises, and async/await.",
        "example": `console.log("Start");
setTimeout(() => {
    console.log("Timer callback after 2 seconds");
}, 2000);
setImmediate(() => {
    console.log("Immediate callback");
});
console.log("End");
`
      },
      {
        "name": "File System Operations",
        "definition": "File system operations enable reading and writing files in Node.js.",
        "details": "Use the fs module for synchronous and asynchronous operations like readFile, writeFile, appendFile, and unlink. Learn error handling for file operations.",
        "example": `const fs = require("fs");
fs.writeFile("example.txt", "Hello, Node!", (err) => {
    if (err) {
        console.error("Error writing file:", err);
        return;
    }
    fs.readFile("example.txt", "utf8", (err, data) => {
        if (err) {
            console.error("Error reading file:", err);
            return;
        }
        console.log("File content:", data);
    });
});
`
      },
      {
        "name": "Building REST APIs",
        "definition": "REST APIs provide endpoints for client-server communication using HTTP methods.",
        "details": "Learn HTTP methods (GET, POST, PUT, DELETE), status codes, and building basic APIs with Node.js core http module. Understand JSON for data exchange.",
        "example": `const http = require("http");
const server = http.createServer((req, res) => {
    if (req.url === "/api" && req.method === "GET") {
        res.writeHead(200, { "Content-Type": "application/json" });
        res.write(JSON.stringify({ message: "Hello, API!" }));
    } else {
        res.writeHead(404);
        res.write("Not Found");
    }
    res.end();
});
server.listen(3000, () => console.log("Server running on port 3000"));
`
      },
      {
        "name": "Express Framework",
        "definition": "Express is a minimal and flexible framework for building Node.js web apps.",
        "details": "Learn Express routing, middleware, request/response handling, and serving static files. Use Express to simplify API development and handle complex routes.",
        "example": `const express = require("express");
const app = express();
app.use(express.json());
app.get("/", (req, res) => {
    res.send("Welcome to Express!");
});
app.post("/data", (req, res) => {
    res.json({ received: req.body });
});
app.listen(3000, () => console.log("Server running on port 3000"));
`
      },
      {
        "name": "Authentication",
        "definition": "Authentication verifies user identity in web applications.",
        "details": "Implement JSON Web Tokens (JWT) for stateless authentication. Learn middleware for protecting routes and handling user sessions with Express.",
        "example": `const express = require("express");
const jwt = require("jsonwebtoken");
const app = express();
app.use(express.json());
const SECRET = "my-secret-key";
app.post("/login", (req, res) => {
    const token = jwt.sign({ userId: 1 }, SECRET, { expiresIn: "1h" });
    res.json({ token });
});
app.get("/protected", (req, res) => {
    const token = req.headers.authorization?.split(" ")[1];
    try {
        jwt.verify(token, SECRET);
        res.json({ message: "Access granted" });
    } catch (err) {
        res.status(401).json({ message: "Unauthorized" });
    }
});
app.listen(3000);
`
      },
      {
        "name": "WebSockets",
        "definition": "WebSockets enable real-time, two-way communication between client and server.",
        "details": "Use the ws library or Socket.IO for real-time applications like chat or live notifications. Learn connection handling and broadcasting messages.",
        "example": `const WebSocket = require("ws");
const wss = new WebSocket.Server({ port: 8080 });
wss.on("connection", (ws) => {
    ws.on("message", (message) => {
        console.log("Received:", message.toString());
        ws.send("Server: " + message);
    });
    ws.send("Welcome to WebSocket server!");
});
console.log("WebSocket server running on port 8080");
`
      },
      {
        "name": "Database Integration",
        "definition": "Database integration allows Node.js apps to store and retrieve data.",
        "details": "Learn to connect to databases like MongoDB or MySQL using drivers or ORMs (e.g., Mongoose, Sequelize). Understand CRUD operations with async/await.",
        "example": `const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/mydb", { useNewUrlParser: true });
const UserSchema = new mongoose.Schema({ name: String });
const User = mongoose.model("User", UserSchema);
async function addUser() {
    const user = new User({ name: "Alice" });
    await user.save();
    console.log("User saved:", user);
}
addUser();
`
      },
      {
        "name": "Error Handling",
        "definition": "Error handling ensures robust applications by managing runtime errors.",
        "details": "Learn try-catch, Express error-handling middleware, and custom error responses. Understand logging and debugging techniques.",
        "example": `const express = require("express");
const app = express();
app.get("/error", (req, res, next) => {
    try {
        throw new Error("Something went wrong");
    } catch (err) {
        next(err);
    }
});
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: "Internal Server Error" });
});
app.listen(3000);
`
      },
      {
        "name": "Environment Variables",
        "definition": "Environment variables configure application settings securely.",
        "details": "Use process.env and the dotenv package to manage configuration like API keys, ports, and database URLs.",
        "example": `require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
app.get("/", (req, res) => {
    res.send("Running on port: " + PORT);
});
app.listen(PORT, () => console.log("Server running on port " + PORT));
// .env file
PORT=4000
`
      },
      {
        "name": "Testing Node.js Applications",
        "definition": "Testing ensures code reliability and functionality.",
        "details": "Learn unit testing with Mocha/Chai or Jest. Test APIs and middleware, and use tools like supertest for HTTP testing.",
        "example": `const chai = require("chai");
const chaiHttp = require("chai-http");
const express = require("express");
const app = express();
app.get("/test", (req, res) => res.json({ message: "Test" }));
chai.use(chaiHttp);
const expect = chai.expect;
describe("API Test", () => {
    it("should return Test message", (done) => {
        chai.request(app)
            .get("/test")
            .end((err, res) => {
                expect(res).to.have.status(200);
                expect(res.body.message).to.equal("Test");
                done();
            });
    });
});
`
      },
      {
        "name": "Deployment",
        "definition": "Deployment makes Node.js apps available on production servers.",
        "details": "Learn to deploy on platforms like Heroku, AWS, or Vercel. Understand PM2 for process management and environment setup.",
        "example": `// index.js
const express = require("express");
const app = express();
app.get("/", (req, res) => res.send("Hello, World!"));
app.listen(process.env.PORT || 3000);
// package.json
{
    "name": "my-app",
    "version": "1.0.0",
    "scripts": {
        "start": "node index.js"
    },
    "dependencies": {
        "express": "^4.17.1"
    }
}`
      },
      {
        "name": "Project: Build a Backend API",
        "definition": "A project integrates Node.js concepts to build a RESTful API.",
        "details": "Create a CRUD API with Express, including routes for creating, reading, updating, and deleting resources. Use file-based or database storage.",
        "example": `const express = require("express");
const app = express();
app.use(express.json());
let users = [];
app.post("/users", (req, res) => {
    const user = { id: users.length + 1, name: req.body.name };
    users.push(user);
    res.status(201).json(user);
});
app.get("/users", (req, res) => {
    res.json(users);
});
app.put("/users/:id", (req, res) => {
    const user = users.find(u => u.id === parseInt(req.params.id));
    if (!user) return res.status(404).json({ error: "User not found" });
    user.name = req.body.name;
    res.json(user);
});
app.delete("/users/:id", (req, res) => {
    users = users.filter(u => u.id !== parseInt(req.params.id));
    res.status(204).send();
});
app.listen(3000, () => console.log("API running on port 3000"));
`
      }
    ]
},
  9: {
    "id": 9,
    "title": "MongoDB Database",
    "description": "Master MongoDB, a NoSQL database for modern applications.",
    "image": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    "overview": "MongoDB is a flexible, document-based NoSQL database. This course covers CRUD operations, indexing, aggregation, scalability, and integration with Node.js for building robust, data-driven applications.",
    "playlistId": "PL4cUxeGkcC9h77dJ-QJlwHHIi5elxCww-",
    "topics": [
      {
        "name": "Introduction to MongoDB",
        "definition": "MongoDB is a NoSQL database that stores data as JSON-like documents.",
        "details": "Learn MongoDB’s architecture, installation, Mongo Shell, and basic commands. Understand databases, collections, and documents compared to relational databases.",
        "example": `// Mongo Shell
use myDB
db.createCollection("users")
show collections
db.users.insertOne({ name: "Alice", age: 25 })
`
      },
      {
        "name": "CRUD Operations",
        "definition": "CRUD operations manage data: Create, Read, Update, Delete.",
        "details": "Use insertOne, insertMany, find, findOne, updateOne, updateMany, deleteOne, and deleteMany. Learn query operators like $eq, $gt, $in.",
        "example": `// Mongo Shell
db.users.insertOne({ name: "Bob", age: 30 })
db.users.find({ age: { $gt: 25 } }).pretty()
db.users.updateOne({ name: "Bob" }, { $set: { age: 31 } })
db.users.deleteOne({ name: "Bob" })
`
      },
      {
        "name": "Schema Design",
        "definition": "Schema design defines the structure of MongoDB collections for efficient data storage.",
        "details": "Learn embedded vs. referenced data models, trade-offs for performance, and designing schemas for scalability and flexibility.",
        "example": `// Embedded document
db.users.insertOne({
    name: "Alice",
    address: { city: "New York", zip: "10001", country: "USA" }
})
// Referenced document
db.users.insertOne({ name: "Bob", order_ids: [ObjectId("507f1f77bcf86cd799439011")] })
db.orders.insertOne({ _id: ObjectId("507f1f77bcf86cd799439011"), item: "Book" })
`
      },
      {
        "name": "Indexing and Performance",
        "definition": "Indexes improve query performance by optimizing data retrieval.",
        "details": "Create single-field, compound, and text indexes. Use explain() to analyze query performance and optimize execution time.",
        "example": `// Mongo Shell
db.users.createIndex({ name: 1 }) // Ascending index
db.users.createIndex({ name: 1, age: -1 }) // Compound index
db.users.find({ name: "Alice" }).explain("executionStats")
`
      },
      {
        "name": "Aggregation Framework",
        "definition": "The aggregation framework processes data for analytics and transformations.",
        "details": "Use pipeline stages like $match, $group, $sort, $project, and $lookup. Learn aggregation for grouping, filtering, and joining data.",
        "example": `// Mongo Shell
db.users.aggregate([
    { $match: { age: { $gt: 20 } } },
    { $group: { _id: "$address.city", totalUsers: { $sum: 1 }, avgAge: { $avg: "$age" } } },
    { $sort: { totalUsers: -1 } }
])
`
      },
      {
        "name": "Data Modeling",
        "definition": "Data modeling optimizes MongoDB for specific application use cases.",
        "details": "Learn one-to-one, one-to-many, and many-to-many relationships. Understand when to embed or reference data based on query patterns.",
        "example": `// One-to-many with embedding
db.users.insertOne({
    name: "Alice",
    orders: [
        { id: 1, item: "Book", price: 20 },
        { id: 2, item: "Pen", price: 5 }
    ]
})
// Many-to-many with references
db.students.insertOne({ name: "Bob", course_ids: [ObjectId("507f1f77bcf86cd799439011")] })
db.courses.insertOne({ _id: ObjectId("507f1f77bcf86cd799439011"), title: "Math" })
`
      },
      {
        "name": "MongoDB Atlas",
        "definition": "MongoDB Atlas is a fully-managed cloud database service.",
        "details": "Set up clusters, configure backups, and manage databases in the cloud. Learn connection strings, user management, and monitoring tools.",
        "example": `// Connection string for MongoDB Atlas
mongodb+srv://admin:password@cluster0.mongodb.net/myDB?retryWrites=true&w=majority
// Mongo Shell to verify connection
use myDB
db.users.find().pretty()
`
      },
      {
        "name": "Integration with Node.js",
        "definition": "Node.js integrates MongoDB for building data-driven backend applications.",
        "details": "Use the MongoDB Node.js driver or Mongoose ORM for database operations. Learn async/await for handling connections and queries.",
        "example": `const { MongoClient } = require("mongodb");
const uri = "mongodb://localhost:27017";
async function run() {
    const client = new MongoClient(uri);
    try {
        await client.connect();
        const db = client.db("myDB");
        await db.collection("users").insertOne({ name: "Alice", age: 25 });
        const users = await db.collection("users").find().toArray();
        console.log(users);
    } finally {
        await client.close();
    }
}
run().catch(console.error);
`
      },
      {
        "name": "Security Best Practices",
        "definition": "Security ensures safe data storage and access in MongoDB.",
        "details": "Implement authentication, role-based authorization, TLS/SSL encryption, and IP whitelisting. Learn to secure Atlas clusters and local deployments.",
        "example": `// Mongo Shell
db.createUser({
    user: "appUser",
    pwd: "securePassword",
    roles: [{ role: "readWrite", db: "myDB" }]
})
// Enable authentication in mongod.conf
security:
  authorization: "enabled"
`
      },
      {
        "name": "Replication and Sharding",
        "definition": "Replication and sharding enhance MongoDB’s availability and scalability.",
        "details": "Set up replica sets for high availability and sharding for horizontal scaling. Learn primary-secondary replication and shard key selection.",
        "example": `// Initiate a replica set in Mongo Shell
rs.initiate({
    _id: "rs0",
    members: [
        { _id: 0, host: "localhost:27017" },
        { _id: 1, host: "localhost:27018" }
    ]
})
// Create a sharded collection
sh.enableSharding("myDB")
db.users.createIndex({ country: 1 })
sh.shardCollection("myDB.users", { country: 1 })
`
      },
      {
        "name": "Backup and Recovery",
        "definition": "Backup and recovery ensure data protection and restoration.",
        "details": "Use mongodump and mongorestore for backups. Learn Atlas automated backups and point-in-time recovery options.",
        "example": `// Terminal commands
mongodump --db myDB --out /backup/myDB_backup
mongorestore --db myDB /backup/myDB_backup
// Verify restored data in Mongo Shell
use myDB
db.users.find().pretty()
`
      },
      {
        "name": "Change Streams",
        "definition": "Change streams enable real-time tracking of database changes.",
        "details": "Use change streams to monitor insert, update, and delete operations. Learn to integrate with Node.js for real-time applications.",
        "example": `const { MongoClient } = require("mongodb");
async function watchChanges() {
    const client = new MongoClient("mongodb://localhost:27017");
    await client.connect();
    const db = client.db("myDB");
    const changeStream = db.collection("users").watch();
    changeStream.on("change", (change) => {
        console.log("Change detected:", change);
    });
}
watchChanges().catch(console.error);
`
      },
      {
        "name": "Transactions",
        "definition": "Transactions ensure atomic operations across multiple documents.",
        "details": "Learn multi-document transactions in replica sets or sharded clusters. Use sessions for consistent operations.",
        "example": `const { MongoClient } = require("mongodb");
async function transferFunds() {
    const client = new MongoClient("mongodb://localhost:27017");
    await client.connect();
    const db = client.db("myDB");
    const session = client.startSession();
    try {
        await session.withTransaction(async () => {
            await db.collection("accounts").updateOne(
                { accountId: "A1" },
                { $inc: { balance: -100 } },
                { session }
            );
            await db.collection("accounts").updateOne(
                { accountId: "A2" },
                { $inc: { balance: 100 } },
                { session }
            );
        });
        console.log("Transaction completed");
    } finally {
        await session.endSession();
        await client.close();
    }
}
transferFunds().catch(console.error);
`
      },
      {
        "name": "Project: Build a Database App",
        "definition": "A project integrates MongoDB concepts to build a data-driven application.",
        "details": "Create a Node.js application with Express and MongoDB, implementing CRUD operations, authentication, and aggregation for a real-world use case like a blog or e-commerce API.",
        "example": `const express = require("express");
const { MongoClient } = require("mongodb");
const app = express();
app.use(express.json());
const uri = "mongodb://localhost:27017";
app.post("/users", async (req, res) => {
    const client = new MongoClient(uri);
    try {
        await client.connect();
        const db = client.db("myDB");
        const result = await db.collection("users").insertOne({
            name: req.body.name,
            email: req.body.email
        });
        res.status(201).json({ id: result.insertedId, name: req.body.name });
    } catch (err) {
        res.status(500).json({ error: "Server error" });
    } finally {
        await client.close();
    }
});
app.get("/users", async (req, res) => {
    const client = new MongoClient(uri);
    try {
        await client.connect();
        const db = client.db("myDB");
        const users = await db.collection("users").find().toArray();
        res.json(users);
    } finally {
        await client.close();
    }
});
app.listen(3000, () => console.log("Server running on port 3000"));
`
      }
    ]
},
  10: {
    "id": 10,
    "title": "Redis for Caching",
    "description": "Boost app performance with Redis, an in-memory data store.",
    "image": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg",
    "overview": "Redis is a high-performance, in-memory key-value store used for caching, real-time applications, and more. This course covers core Redis operations, advanced data structures, caching strategies, and integration with Node.js for scalable systems.",
    "playlistId": "PL4cUxeGkcC9h9gBxAf66w8Ja9aCZc7GlU",
    "topics": [
      {
        "name": "Introduction to Redis",
        "definition": "Redis is an in-memory key-value store known for speed and versatility.",
        "details": "Learn Redis installation, architecture, use cases (caching, session storage, leaderboards), and basic interaction via redis-cli. Understand its single-threaded, non-blocking model.",
        "example": `// redis-cli
SET welcome "Hello, Redis!"
GET welcome
INFO SERVER
`
      },
      {
        "name": "Basic Commands",
        "definition": "Basic commands manipulate key-value pairs in Redis.",
        "details": "Use SET, GET, DEL, EXPIRE, TTL, and INCR/DECR for simple operations. Learn key naming conventions and expiration for efficient data management.",
        "example": `// redis-cli
SET user:1:name "Alice"
EXPIRE user:1:name 3600
TTL user:1:name
GET user:1:name
INCR counter
`
      },
      {
        "name": "Data Types",
        "definition": "Redis supports advanced data types like strings, lists, sets, sorted sets, and hashes.",
        "details": "Learn to use lists (LPUSH, RPOP), sets (SADD, SMEMBERS), sorted sets (ZADD, ZRANGE), and hashes (HSET, HGETALL) for complex data structures.",
        "example": `// redis-cli
LPUSH tasks "task1"
LPUSH tasks "task2"
LRANGE tasks 0 -1
SADD users "Alice" "Bob"
SMEMBERS users
ZADD leaderboard 100 "Alice" 200 "Bob"
ZRANGE leaderboard 0 -1 WITHSCORES
HSET user:1 name "Alice" age 25
HGETALL user:1
`
      },
      {
        "name": "Caching Strategies",
        "definition": "Caching strategies improve performance by storing frequently accessed data.",
        "details": "Implement cache-aside (lazy loading), write-through, and cache eviction policies (LRU, TTL). Learn to balance cache hits and database load.",
        "example": `// redis-cli
SET cache:user:1 "{\"name\": \"Alice\", \"age\": 25}" EXPIRE cache:user:1 60
GET cache:user:1
EXISTS cache:user:1
`
      },
      {
        "name": "Pub/Sub System",
        "definition": "Pub/Sub enables real-time messaging with publish and subscribe patterns.",
        "details": "Use PUBLISH, SUBSCRIBE, and PSUBSCRIBE for event-driven applications like chat or notifications. Learn channel-based messaging and pattern matching.",
        "example": `// redis-cli (Terminal 1)
SUBSCRIBE notifications
// redis-cli (Terminal 2)
PUBLISH notifications "New message received!"
PSUBSCRIBE user:*
PUBLISH user:1 "Update for user 1"
`
      },
      {
        "name": "Persistence",
        "definition": "Persistence saves Redis data to disk for durability and recovery.",
        "details": "Learn RDB snapshots for point-in-time backups and Append-Only File (AOF) for incremental logging. Understand trade-offs between performance and durability.",
        "example": `// redis-cli
CONFIG SET save "900 1 300 10 60 10000" // Save after 900s/1 change, 300s/10 changes, etc.
CONFIG SET appendonly yes
SAVE
BGREWRITEAOF
`
      },
      {
        "name": "Clustering",
        "definition": "Clustering distributes Redis data across multiple nodes for scalability.",
        "details": "Set up Redis Cluster for horizontal scaling and high availability. Learn about slots, replication, and failover in a cluster environment.",
        "example": `// Terminal
redis-cli --cluster create 127.0.0.1:7000 127.0.0.1:7001 127.0.0.1:7002 \
127.0.0.1:7003 127.0.0.1:7004 127.0.0.1:7005 --cluster-replicas 1
// redis-cli
CLUSTER INFO
SET key1 "value" --cluster
`
      },
      {
        "name": "Integration with Node.js",
        "definition": "Node.js integrates Redis for caching, session management, and real-time apps.",
        "details": "Use the redis package or ioredis for connecting to Redis, performing operations, and handling errors. Learn async/await for efficient integration.",
        "example": `const redis = require("redis");
const client = redis.createClient({ url: "redis://localhost:6379" });
(async () => {
    await client.connect();
    await client.set("user:1", "Alice");
    await client.expire("user:1", 3600);
    const value = await client.get("user:1");
    console.log("Value:", value);
    await client.quit();
})();
`
      },
      {
        "name": "Performance Tuning",
        "definition": "Performance tuning optimizes Redis for high throughput and low latency.",
        "details": "Learn memory management (maxmemory, eviction policies), command optimization, and pipelining for batch operations. Monitor with INFO and MONITOR commands.",
        "example": `// redis-cli
CONFIG SET maxmemory 2gb
CONFIG SET maxmemory-policy allkeys-lru
PIPELINE
SET key1 "value1"
SET key2 "value2"
EXEC
INFO MEMORY
MONITOR
`
      },
      {
        "name": "Security Best Practices",
        "definition": "Security ensures safe data access and protection in Redis.",
        "details": "Learn to enable authentication, use ACLs (Access Control Lists), enable TLS, and bind to specific interfaces. Understand firewall and network security for Redis.",
        "example": `// redis.conf
requirepass mySecurePassword
bind 127.0.0.1
// redis-cli
AUTH mySecurePassword
ACL SETUSER appuser on >apppassword ~user:* +get +set
ACL LIST
`
      },
      {
        "name": "Redis Streams",
        "definition": "Redis Streams provide a log-like data structure for event streaming.",
        "details": "Use XADD, XREAD, and consumer groups for processing streams. Learn to build event-driven systems like message queues or activity logs.",
        "example": `// redis-cli
XADD mystream * event "user_login" user_id "1"
XREAD COUNT 2 STREAMS mystream 0
XGROUP CREATE mystream mygroup $ MKSTREAM
XREADGROUP GROUP mygroup consumer1 COUNT 1 STREAMS mystream >
`
      },
      {
        "name": "Redis Transactions",
        "definition": "Transactions ensure atomic execution of multiple Redis commands.",
        "details": "Use MULTI, EXEC, and WATCH for atomic operations. Learn optimistic locking and handling concurrent updates.",
        "example": `// redis-cli
MULTI
SET balance:1 100
INCRBY balance:1 -20
EXEC
// With WATCH for concurrency
WATCH balance:1
MULTI
SET balance:1 80
EXEC
`
      },
      {
        "name": "Monitoring and Debugging",
        "definition": "Monitoring and debugging ensure Redis performance and reliability.",
        "details": "Use commands like INFO, SLOWLOG, and MONITOR to track performance and debug issues. Learn to analyze memory usage and query bottlenecks.",
        "example": `// redis-cli
INFO ALL
SLOWLOG GET 10
MONITOR
CONFIG SET slowlog-log-slower-than 10000
CONFIG SET slowlog-max-len 128
`
      },
      {
        "name": "Project: Build a Caching System",
        "definition": "A project integrates Redis concepts to build a caching layer for a web application.",
        "details": "Create a Node.js application with Express and Redis to cache API responses, implement Pub/Sub for real-time updates, and use Redis Streams for event logging.",
        "example": `const express = require("redis");
const redis = require("redis");
const app = express();
app.use(express.json());
const client = redis.createClient({ url: "redis://localhost:6379" });
(async () => {
    await client.connect();
})();
app.get("/user/:id", async (req, res) => {
    const cacheKey = "user":"${"req.params.id"}";
    const cached = await client.get(cacheKey);
    if (cached) {
        console.log("Cache hit");
        return res.json(JSON.parse(cached));
    }
    const data = { id: req.params.id, name: "Alice", age: 25 }; // Simulated DB fetch
    await client.setEx(cacheKey, 60, JSON.stringify(data));
    await client.xAdd("user:events", "*", { event: "fetch", userId: req.params.id });
    res.json(data);
});
app.listen(3000, () => console.log("Server running on port 3000"));
// redis-cli for stream monitoring
XREAD COUNT 1 STREAMS user:events 0
`
      },
    ]
},
  11: {
    "id": 11,
    "title": "Redux State Management",
    "description": "Manage complex app states with Redux, a predictable state container.",
    "image": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
    "overview": "Redux simplifies state management in React applications by providing a predictable, centralized state container. This course covers core Redux principles, modern tools like Redux Toolkit, integration with React, and advanced patterns for building scalable, maintainable front-end applications.",
    "playlistId": "PL4cUxeGkcC9i2v2ZqJgydXIcRq_ZXI0BF",
    "topics": [
      {
        "name": "Introduction to Redux",
        "definition": "Redux is a predictable state container for JavaScript apps.",
        "details": "Learn Redux principles (single source of truth, state is read-only, changes via pure functions), store setup, and basic workflow with actions and reducers.",
        "example": `const { createStore } = require("redux");
const reducer = (state = 0, action) => state;
const store = createStore(reducer);
console.log(store.getState());`,
        "explanation": "Redux is a state management library that centralizes an application’s state, making it predictable and easier to debug, especially for complex React apps. Its three core principles are: 1) Single source of truth (one state object), 2) State is read-only (changed only via actions), and 3) Changes are made with pure reducers (deterministic functions). The example creates a minimal Redux store using createStore, passing a reducer that returns the initial state (0) unchanged. store.getState() retrieves the current state. This topic covers installing Redux (npm install redux), setting up a basic store, and understanding the flow: dispatch actions → reducer updates state → UI re-renders. Use cases include managing user data or UI states in large apps like dashboards or e-commerce platforms."
      },
      {
        "name": "Actions and Reducers",
        "definition": "Actions describe changes, and reducers update state.",
        "details": "Create action creators to produce action objects and pure reducer functions to compute new state based on actions.",
        "example": `const INCREMENT = "INCREMENT";
const increment = () => ({ type: INCREMENT });
const reducer = (state = 0, action) => {
    if (action.type === INCREMENT) return state + 1;
    return state;
};`,
        "explanation": "Actions are payloads (objects with a 'type' and optional data) that describe what happened (e.g., user clicked a button). Action creators are functions that return action objects for consistency. Reducers are pure functions (same input → same output, no side effects) that take the current state and action, returning a new state. In the example, INCREMENT is an action type constant (best practice to avoid typos), increment() creates an action { type: 'INCREMENT' }, and the reducer checks action.type to increment the state (a counter) or return it unchanged. Use switch statements for multiple actions and avoid mutating state directly (e.g., don’t use state++). This topic teaches defining actions for events like form submissions and writing reducers to update state predictably, foundational for apps like to-do lists or shopping carts."
      },
      {
        "name": "Store Configuration",
        "definition": "The store holds the app’s state and dispatches actions.",
        "details": "Set up a Redux store with combineReducers to split state into slices and applyMiddleware to extend functionality.",
        "example": `const { createStore, combineReducers } = require("redux");
const rootReducer = combineReducers({ counter: reducer });
const store = createStore(rootReducer);`,
        "explanation": "The Redux store is a single object holding the entire app state, created with createStore(reducer). combineReducers merges multiple reducers into a single rootReducer, where each key (e.g., counter) manages a slice of state. This modularizes state management: counter reducer handles state.counter. The example combines a counter reducer into rootReducer, creating a store with a state like { counter: 0 }. applyMiddleware (not shown here but introduced later) adds functionality like async handling. The store provides methods: getState() (read state), dispatch(action) (send actions), and subscribe(listener) (react to changes). This topic covers structuring large apps (e.g., state with user, cart, ui slices) and debugging with store.getState() in dev tools, critical for scaling Redux in production."
      },
      {
        "name": "React-Redux Integration",
        "definition": "React-Redux connects Redux to React components.",
        "details": "Use Provider to pass the store to components and useSelector/useDispatch hooks for accessing state and dispatching actions.",
        "example": `import { Provider } from "react-redux";
import { createStore } from "redux";
const store = createStore(reducer);
function App() {
    return (
        <Provider store={store}>
            <Counter />
        </Provider>
    );
}`,
        "explanation": "React-Redux (npm install react-redux) bridges Redux and React. The Provider component wraps the app, making the store available to all components via context. useSelector(state => state.slice) reads state (e.g., state.counter), re-rendering on changes, and useDispatch() returns a dispatch function to send actions. The example wraps a Counter component in Provider, passing a store created with createStore. A Counter component might use: const count = useSelector(state => state.counter); const dispatch = useDispatch(); to read state and dispatch actions like dispatch({ type: 'INCREMENT' }). Avoid overusing useSelector to prevent performance issues (select only needed data). This topic teaches integrating Redux with React for dynamic UIs, like counters or user profiles, with older connect() API as an alternative."
      },
      {
        "name": "Middleware (Thunk, Saga)",
        "definition": "Middleware extends Redux with custom functionality.",
        "details": "Use redux-thunk for async actions or redux-saga for complex flows like sagas for side effects.",
        "example": `import thunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
const store = createStore(reducer, applyMiddleware(thunk));
const fetchData = () => async (dispatch) => {
    dispatch({ type: "FETCH_DATA", payload: "data" });
};`,
        "explanation": "Middleware intercepts actions before they reach reducers, enabling async logic or logging. redux-thunk (npm install redux-thunk) allows action creators to return functions instead of objects, receiving dispatch and getState as arguments. The example applies thunk middleware to the store, enabling fetchData to dispatch actions asynchronously. fetchData could fetch API data, dispatching FETCH_DATA with results. redux-saga (more advanced) uses generator functions for complex flows (e.g., chaining API calls, cancellations). Middleware is chained: applyMiddleware(thunk, logger). This topic covers choosing middleware (thunk for simple async, saga for orchestration) and debugging middleware issues (e.g., action not dispatched), vital for API-driven apps like dashboards."
      },
      {
        "name": "Async Actions",
        "definition": "Async actions handle asynchronous operations like API calls.",
        "details": "Use redux-thunk to dispatch actions after async tasks, managing loading states and errors.",
        "example": `const fetchUser = () => async (dispatch) => {
    const response = await fetch("/api/user");
    const user = await response.json();
    dispatch({ type: "SET_USER", payload: user });
};`,
        "explanation": "Async actions handle operations like API calls, file reads, or timeouts, which don’t fit in synchronous reducers. With redux-thunk, action creators return async functions that can dispatch multiple actions (e.g., loading, success, error). The example fetchUser fetches user data from an API, parses JSON, and dispatches SET_USER with the payload. In practice, you’d dispatch a LOADING action first, then SUCCESS or ERROR based on response.ok. Use try-catch for errors (covered later). State might update to { user: { id: 1, name: 'Alice' }, loading: false }. This topic teaches managing async flows (e.g., fetching posts for a blog), structuring actions (request/pending/success/failure pattern), and avoiding race conditions in apps like social media platforms."
      },
      {
        "name": "Redux Toolkit",
        "definition": "Redux Toolkit simplifies Redux setup and best practices.",
        "details": "Use createSlice and configureStore for modern Redux, reducing boilerplate with built-in immutability and thunk support.",
        "example": `import { createSlice, configureStore } from "@reduxjs/toolkit";
const counterSlice = createSlice({
    name: "counter",
    initialState: 0,
    reducers: {
        increment: (state) => state + 1,
    },
});
const store = configureStore({ reducer: counterSlice.reducer });`,
        "explanation": "Redux Toolkit (npm install @reduxjs/toolkit) simplifies Redux with utilities like createSlice, which combines action types, creators, and reducers. The example defines a counter slice: name scopes actions (e.g., counter/increment), initialState sets the default (0), and reducers define updates (increment returns state + 1). createSlice auto-generates action creators (counterSlice.actions.increment()) and handles immutability (uses Immer internally, so state++ is safe). configureStore sets up the store with thunk and DevTools by default. Benefits: less boilerplate, built-in best practices. This topic covers migrating from vanilla Redux, using createAsyncThunk for async, and structuring slices for apps like task managers, making Redux development faster and safer."
      },
      {
        "name": "State Normalization",
        "definition": "State normalization organizes state for efficient updates.",
        "details": "Store data in a flat structure with IDs for scalability, inspired by database normalization, to avoid nested updates and duplication.",
        "example": `const state = {
    users: {
        byId: { 1: { id: 1, name: "Alice" } },
        allIds: [1],
    },
};`,
        "explanation": "Normalized state flattens data to reduce redundancy and simplify updates, especially for lists (e.g., users, posts). Instead of [{ id: 1, name: 'Alice' }], store { byId: { 1: { id: 1, name: 'Alice' } }, allIds: [1] }. byId maps IDs to objects for O(1) lookups; allIds maintains order for rendering. Updates (e.g., change name) only touch byId[1]. The example shows a normalized users state, scalable for thousands of records. Use with reselect for efficient selectors (e.g., get user by ID). This topic teaches normalizing API responses (use normalizr library), avoiding deep nesting (hard to update), and optimizing for apps like social feeds or CRMs."
      },
      {
        "name": "Testing Redux",
        "definition": "Testing ensures Redux logic is reliable.",
        "details": "Test reducers, actions, and async flows with Jest, ensuring pure functions and predictable outcomes.",
        "example": `test("increment reducer", () => {
    const state = 0;
    const newState = reducer(state, { type: "INCREMENT" });
    expect(newState).toBe(1);
});`,
        "explanation": "Testing Redux ensures reducers (pure functions) and async actions behave correctly. Jest (npm install jest) tests reducers by passing state and actions, checking outputs. The example tests an increment reducer: initial state 0, action { type: 'INCREMENT' }, expect output 1. Test action creators for correct type/payload, and async thunks with mock fetch (use jest-fetch-mock). For sagas, use redux-saga-test-plan. Common cases: test edge cases (undefined state), async success/failure, and middleware effects. This topic covers setting up Jest, mocking APIs, and ensuring 80%+ test coverage for reliable apps like e-commerce carts or dashboards."
      },
      {
        "name": "Immutable State Updates",
        "definition": "Immutable updates ensure state changes without mutating the original state.",
        "details": "Use spread operators or libraries like Immer to create new state objects, maintaining predictability in reducers and preventing bugs.",
        "example": `const reducer = (state = { count: 0, items: [] }, action) => {
    switch (action.type) {
        case "ADD_ITEM":
            return { ...state, items: [...state.items, action.payload] };
        default:
            return state;
    }
};`,
        "explanation": "Immutable updates prevent direct state mutations (e.g., state.items.push()), which break Redux’s predictability and cause React to miss re-renders. The spread operator (...) creates shallow copies: in the example, ADD_ITEM adds a new item to items array without mutating it, returning a new state object. For deep nesting, use Immer (included in Redux Toolkit) to write 'mutating' code safely (Immer creates copies under the hood). Pitfalls: avoid mutating nested objects (e.g., state.user.name = 'Bob'). The example adds an item to a list, typical for to-do apps or carts. This topic teaches immutability patterns, debugging mutation bugs (use redux-immutable-state-invariant), and scaling for complex states in apps like forms or editors."
      },
      {
        "name": "Selectors and Reselect",
        "definition": "Selectors extract and compute derived data from the state.",
        "details": "Use createSelector from reselect for memoized selectors to optimize performance by avoiding unnecessary computations and re-renders.",
        "example": `import { createSelector } from "reselect";
const getUsers = (state) => state.users;
const getActiveUsers = createSelector(getUsers, (users) => users.filter((u) => u.active));`,
        "explanation": "Selectors are functions that extract state slices (e.g., state.users) or compute derived data (e.g., filtered users). reselect’s createSelector (npm install reselect) memoizes results, recomputing only if inputs change, reducing React re-renders. The example defines getUsers to access state.users and getActiveUsers to filter active users, memoizing to skip recomputation if users array is unchanged. Use with useSelector for efficient rendering: const activeUsers = useSelector(getActiveUsers). Common patterns: combine selectors for complex logic (e.g., filter + sort). This topic covers optimizing selectors for performance (avoid heavy computations), composing selectors, and using in apps like dashboards or analytics with large datasets."
      },
      {
        "name": "Redux DevTools",
        "definition": "Redux DevTools provide debugging tools for Redux applications.",
        "details": "Integrate Redux DevTools Extension for time-travel debugging, action replay, and state inspection in browsers like Chrome or Firefox.",
        "example": `import { createStore } from "redux";
const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);`,
        "explanation": "Redux DevTools (browser extension or npm install redux-devtools-extension) visualizes state changes, action history, and diffs. The example enables DevTools by passing window.__REDUX_DEVTOOLS_EXTENSION__() as an enhancer to createStore. Features: inspect state/action at any time, 'time travel' by reverting actions, export/import state for testing. Configure with { trace: true } for action stack traces. In Redux Toolkit, configureStore enables DevTools automatically. This topic teaches setup, debugging workflows (e.g., find action causing bug), and securing DevTools (disable in production with process.env.NODE_ENV). Essential for debugging complex apps like CRMs or real-time editors."
      },
      {
        "name": "Redux Persist",
        "definition": "Redux Persist enables state persistence across sessions.",
        "details": "Use redux-persist to save and rehydrate state from storage like localStorage or AsyncStorage for React Native, preserving user data on refresh.",
        "example": `import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
const persistConfig = { key: "root", storage };
const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(persistedReducer);
const persistor = persistStore(store);`,
        "explanation": "Redux Persist (npm install redux-persist) saves state to storage (e.g., localStorage for web, AsyncStorage for mobile), rehydrating on app load to restore data like user settings or form inputs. The example configures persistReducer with a key ('root') and storage, wrapping rootReducer to persist state. persistStore creates a persistor for React’s PersistGate to delay rendering until rehydration. Common configs: blacklist/whitelist keys (e.g., persist only user slice), transforms (encrypt data). This topic covers setup, handling migrations (versioned state), and use cases like offline-first apps or preserving login sessions in e-commerce platforms."
      },
      {
        "name": "Error Handling in Redux",
        "definition": "Error handling manages failures in async operations.",
        "details": "Dispatch error actions in thunk or saga to update state with error messages and handle retries or user feedback.",
        "example": `const fetchUser = () => async (dispatch) => {
    try {
        const response = await fetch("/api/user");
        if (!response.ok) throw new Error("Failed to fetch");
        const user = await response.json();
        dispatch({ type: "SET_USER", payload: user });
    } catch (error) {
        dispatch({ type: "SET_ERROR", payload: error.message });
    }
};`,
        "explanation": "Error handling in async actions ensures robust apps by catching failures (e.g., API errors) and updating state for UI feedback (e.g., show error toast). The example fetchUser tries an API call, checks response.ok, and dispatches SET_USER on success or SET_ERROR on failure. State might update to { user: null, error: 'Failed to fetch' }. Use patterns: LOADING/SUCCESS/ERROR actions, retry logic (e.g., retry 3 times), or saga’s try/catch effects. Combine with normalized state for error logs. This topic teaches structuring error flows, displaying errors (useSelector(state.error)), and recovering (clear error action), critical for reliable apps like payment systems."
      },
      {
        "name": "Performance Optimization",
        "definition": "Performance optimization reduces unnecessary renders and computations.",
        "details": "Use memoization (reselect), batched updates, and normalized state to improve app efficiency, minimizing re-renders and CPU usage.",
        "example": `import { batch } from "react-redux";
batch(() => {
    dispatch({ type: "ACTION1" });
    dispatch({ type: "ACTION2" });
});`,
        "explanation": "Redux apps can suffer from excessive re-renders or computations with large state or frequent actions. The example uses batch from react-redux to group multiple dispatches (ACTION1, ACTION2) into one re-render, reducing overhead. Other techniques: normalized state (avoid deep nesting), memoized selectors (reselect), and shallow equality checks in useSelector (use lodash.isEqual for deep checks). Avoid large payloads in actions and heavy reducer logic. Redux Toolkit’s createSlice optimizes updates with Immer. This topic covers profiling with React DevTools, optimizing selectors (cache hits >90%), and scaling for apps with thousands of components, like analytics dashboards or real-time feeds."
      },
      {
        "name": "Project: Build a Redux App",
        "definition": "A project integrates Redux concepts to build a state-managed app.",
        "details": "Create a React-Redux app, like a to-do list with async API calls, using Redux Toolkit, normalized state, and error handling.",
        "example": `import { createSlice } from "@reduxjs/toolkit";
const todoSlice = createSlice({
    name: "todos",
    initialState: [],
    reducers: {
        addTodo: (state, action) => {
            state.push(action.payload);
        },
    },
});`,
        "explanation": "This project builds a to-do list app, integrating Redux Toolkit for simplicity. The example creates a todoSlice with an initial empty array and addTodo reducer to append todos (e.g., { id: 1, text: 'Buy milk', done: false }). In a full app, add async actions (createAsyncThunk to fetch/save todos), normalized state (todos.byId, todos.allIds), selectors (get completed todos), and error handling (API failures). Use React-Redux hooks to render todos and dispatch addTodo. Extend with persistence (redux-persist), DevTools, and tests. This topic teaches structuring a real app, covering UI (React components), state (normalized todos), and async flows (API sync), applicable to task managers or collaborative apps."
      }
    ]
},
  12: {
    "id": 12,
    "title": "React",
    "description": "Build modern user interfaces with React, a popular JavaScript library.",
    "image": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    "overview": "React is a powerful library for building fast, interactive, and scalable user interfaces. This course covers core concepts like components and hooks, advanced patterns, state management, routing, and testing to create dynamic, production-ready web applications.",
    "playlistId": "PL4cUxeGkcC9gZD-Tvwfod2gaISzfRiP9d",
    "topics": [
      {
        "name": "React Basics and JSX",
        "definition": "React is a library for building UI components, and JSX is its syntax extension.",
        "details": "Learn component creation, JSX syntax for declarative UI, and how React renders elements to the DOM efficiently.",
        "example": `function App() {
    return <h1>Hello, React!</h1>;
}`,
        "explanation": "React is a JavaScript library for building user interfaces using reusable components. JSX, a syntax extension, allows writing HTML-like code in JavaScript, compiled by tools like Babel into React.createElement calls. The example defines a functional component App that returns a <h1> element, rendered to the DOM via ReactDOM.render(<App />, document.getElementById('root')). JSX supports expressions (e.g., {2 + 2}) and attributes (className, not class). This topic covers setting up React (npx create-react-app), understanding virtual DOM for efficient updates (diffing algorithm), and writing declarative UI for simple apps like landing pages. Key points: avoid inline styles for large apps, use fragments (<></>) for multiple elements, and ensure unique keys for lists."
      },
      {
        "name": "Components and Props",
        "definition": "Components are reusable UI pieces, and props pass data to them.",
        "details": "Create functional and class components, pass props for customization, and ensure one-way data flow.",
        "example": `function Greeting({ name }) {
    return <p>Hello, {name}!</p>;
}
<Greeting name="Alice" />`,
        "explanation": "Components are the building blocks of React apps, encapsulating UI logic. Functional components (like Greeting) are simple functions returning JSX, while class components (less common now) use this.props. Props are read-only inputs passed to components (e.g., name='Alice'), enabling reusability. The example renders 'Hello, Alice!' by passing name as a prop. Use destructuring ({ name }) for cleaner code and defaultProps for fallbacks. This topic teaches component composition (nesting components), prop types (via PropTypes library for validation), and avoiding prop drilling (passing props through many layers). Practical for building reusable UI like buttons or cards in blogs or dashboards."
      },
      {
        "name": "State and Lifecycle",
        "definition": "State manages component data, and lifecycle methods handle updates.",
        "details": "Use useState for state management and useEffect for side effects like data fetching or subscriptions.",
        "example": `import { useState } from "react";
function Counter() {
    const [count, setCount] = useState(0);
    return <button onClick={() => setCount(count + 1)}>{count}</button>;
}`,
        "explanation": "State holds dynamic data in components, triggering re-renders on change. useState(initialValue) returns a state variable and setter (e.g., [count, setCount]). The example creates a counter: clicking the button calls setCount, updating count and re-rendering. State updates are batched for performance, and useState preserves state across renders. Lifecycle is managed with useEffect (covered next) in functional components, replacing class-based componentDidMount/Update/Unmount. This topic covers state best practices (avoid direct mutations, use functional updates setCount(prev => prev + 1) for async), managing complex state (objects/arrays), and use cases like forms or counters in e-commerce apps."
      },
      {
        "name": "Hooks (useState, useEffect)",
        "definition": "Hooks add state and lifecycle features to functional components.",
        "details": "Learn useState for state management and useEffect for side effects like timers, API calls, or cleanup.",
        "example": `import { useEffect } from "react";
function Timer() {
    useEffect(() => {
        const timer = setInterval(() => console.log("Tick"), 1000);
        return () => clearInterval(timer);
    }, []);
    return <p>Timer running</p>;
}`,
        "explanation": "Hooks, introduced in React 16.8, let functional components manage state and lifecycle. useState (previous topic) handles local state. useEffect runs side effects after render: the example sets a 1-second interval logging 'Tick', with a cleanup function (return) to clear it on unmount, preventing memory leaks. The empty dependency array ([]) ensures useEffect runs once (like componentDidMount). Add dependencies (e.g., [count]) to re-run on changes. This topic covers hook rules (call at top level, only in components), common hooks (useRef for DOM refs), and use cases like fetching data or subscribing to events in real-time apps like chat or analytics dashboards."
      },
      {
        "name": "Routing with React Router",
        "definition": "React Router enables client-side routing in React apps.",
        "details": "Use BrowserRouter, Route, and Link for navigation, and useParams for dynamic routes.",
        "example": `import { BrowserRouter, Route, Link } from "react-router-dom";
function App() {
    return (
        <BrowserRouter>
            <Link to="/">Home</Link>
            <Route path="/" component={() => <h1>Home</h1>} />
        </BrowserRouter>
    );
}`,
        "explanation": "React Router (npm install react-router-dom) handles client-side navigation without full page reloads. BrowserRouter uses HTML5 history API for clean URLs. Link creates navigable links, and Route renders components based on URL path. The example sets up a Home route, rendering <h1>Home</h1> at '/'. Use exact for precise matches, Switch for exclusive routing, and useParams for dynamic segments (e.g., /user/:id). This topic covers nested routes, programmatic navigation (useHistory), and query params (useLocation), essential for multi-page apps like blogs or e-commerce sites with product pages."
      },
      {
        "name": "Context API",
        "definition": "Context API provides a way to share data without prop drilling.",
        "details": "Use createContext and useContext for global state like themes or user data, avoiding passing props through multiple layers.",
        "example": `import { createContext, useContext } from "react";
const ThemeContext = createContext("light");
function App() {
    return (
        <ThemeContext.Provider value="dark">
            <Component />
        </ThemeContext.Provider>
    );
}
function Component() {
    const theme = useContext(ThemeContext);
    return <p>Theme: {theme}</p>;
}`,
        "explanation": "Context API avoids prop drilling by providing global data access. createContext('light') sets a default value. Provider passes a value (e.g., 'dark') to descendants, and useContext(ThemeContext) retrieves it. The example renders 'Theme: dark' in Component. Use for small-scale state (e.g., theme, auth user) but avoid for complex state (use Redux). Update context with state: <Provider value={{ theme, setTheme }}>. This topic covers context pitfalls (frequent re-renders), combining with useReducer for local state, and use cases like theming or internationalization in dashboards or user settings."
      },
      {
        "name": "Performance Optimization",
        "definition": "Performance optimization reduces unnecessary renders in React.",
        "details": "Use memo, useCallback, and useMemo to prevent re-renders and optimize expensive computations.",
        "example": `import { memo } from "react";
const Child = memo(({ value }) => {
    return <p>{value}</p>;
});`,
        "explanation": "React apps can suffer from excessive re-renders, slowing performance. memo wraps components to prevent re-renders unless props change (shallow comparison). The example memoizes Child, skipping re-renders if value prop is unchanged. useCallback memoizes functions (e.g., callbacks passed to children), and useMemo memoizes values (e.g., expensive calculations like sorting). Use React DevTools to profile renders. This topic covers optimization techniques (split large components, use keys in lists), avoiding premature optimization, and scaling for apps with hundreds of components, like data grids or real-time feeds."
      },
      {
        "name": "Testing React Apps",
        "definition": "Testing ensures React components work as expected.",
        "details": "Use Jest and React Testing Library for unit and integration testing, focusing on user interactions.",
        "example": `import { render, screen } from "@testing-library/react";
test("renders text", () => {
    render(<App />);
    expect(screen.getByText("Hello")).toBeInTheDocument();
});`,
        "explanation": "Testing verifies component behavior. Jest (bundled with create-react-app) runs tests, and React Testing Library (npm install @testing-library/react) renders components and queries DOM (e.g., getByText). The example renders App and checks for 'Hello' text. Test user interactions (fireEvent.click), async behavior (waitFor), and snapshots for UI consistency. Avoid testing implementation details (e.g., state); focus on user-visible outcomes. This topic covers mocking APIs (jest-fetch-mock), testing hooks (Testing Library’s hooks package), and achieving >80% coverage for reliable apps like forms or e-commerce UIs."
      },
      {
        "name": "Redux Integration",
        "definition": "Redux manages global state in React apps.",
        "details": "Integrate Redux with React using react-redux for centralized state management in complex applications.",
        "example": `import { useSelector, useDispatch } from "react-redux";
function Counter() {
    const count = useSelector((state) => state.count);
    const dispatch = useDispatch();
    return <button onClick={() => dispatch({ type: "INCREMENT" })}>{count}</button>;
}`,
        "explanation": "Redux (npm install redux react-redux) centralizes state for complex apps. react-redux’s Provider passes the store, useSelector reads state slices (e.g., state.count), and useDispatch dispatches actions. The example renders a counter button that increments state.count via an INCREMENT action. Combine with Redux Toolkit for less boilerplate (createSlice). This topic covers structuring Redux (actions/reducers), avoiding overuse (use Context for simple cases), and debugging with Redux DevTools, ideal for apps like dashboards or multi-user platforms requiring consistent state."
      },
      {
        "name": "Error Boundaries",
        "definition": "Error boundaries catch JavaScript errors in component trees to prevent app crashes.",
        "details": "Use class components with componentDidCatch or static getDerivedStateFromError to handle errors gracefully.",
        "example": `import { Component } from "react";
class ErrorBoundary extends Component {
    state = { hasError: false };
    static getDerivedStateFromError(error) {
        return { hasError: true };
    }
    render() {
        if (this.state.hasError) return <h1>Something went wrong</h1>;
        return this.props.children;
    }
}
function App() {
    return (
        <ErrorBoundary>
            <FaultyComponent />
        </ErrorBoundary>
    );
}`,
        "explanation": "Error boundaries catch errors in child components (e.g., undefined prop access) to prevent full app crashes, improving UX. Only class components support error boundaries via componentDidCatch (log errors) or getDerivedStateFromError (update state). The example wraps FaultyComponent in ErrorBoundary, showing an error message if it fails. Use in production for critical sections (e.g., checkout forms). This topic covers logging errors (send to Sentry), recovery strategies (reset state), and limitations (no hook equivalent, doesn’t catch event handler errors), vital for robust apps like e-commerce or editors."
      },
      {
        "name": "Server-Side Rendering (SSR)",
        "definition": "Server-side rendering generates HTML on the server for faster initial loads and SEO.",
        "details": "Use Next.js or ReactDOMServer for SSR, hydrating client-side for interactivity.",
        "example": `import { renderToString } from "react-dom/server";
const html = renderToString(<App />);
console.log(html);`,
        "explanation": "SSR renders React components on the server, sending HTML to browsers for faster first paint and better SEO (search engines see content). Next.js (npm install next) simplifies SSR, or use ReactDOMServer’s renderToString for custom setups. The example generates HTML from App on the server, which is hydrated client-side with ReactDOM.hydrate. Challenges: server-client state sync, performance (server load). This topic covers Next.js setup (pages directory, getServerSideProps), data fetching, and use cases like blogs or e-commerce product pages where SEO or load time is critical."
      },
      {
        "name": "Custom Hooks",
        "definition": "Custom hooks encapsulate reusable logic in React functional components.",
        "details": "Create custom hooks to share stateful logic like form handling or data fetching across components.",
        "example": `import { useState, useEffect } from "react";
function useFetch(url) {
    const [data, setData] = useState(null);
    useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then(setData);
    }, [url]);
    return data;
}
function App() {
    const data = useFetch("/api/data");
    return <p>{data ? data.name : "Loading..."}</p>;
}`,
        "explanation": "Custom hooks are functions starting with 'use', combining built-in hooks (useState, useEffect) to share logic. The example useFetch fetches data from a URL, storing it in state, and re-fetches if url changes. Use in components to avoid duplicating fetch logic. Rules: follow hook rules, keep pure. This topic covers patterns (form hooks, window size trackers), testing (use @testing-library/react-hooks), and use cases like API calls or window events in apps like dashboards or real-time trackers."
      },
      {
        "name": "Component Patterns",
        "definition": "Component patterns structure React code for reusability and maintainability.",
        "details": "Learn patterns like compound components, render props, and higher-order components (HOCs) for flexible UI design.",
        "example": `function Toggle({ children }) {
    const [on, setOn] = useState(false);
    return children({ on, toggle: () => setOn(!on) });
}
function App() {
    return (
        <Toggle>
            {({ on, toggle }) => (
                <button onClick={toggle}>{on ? "On" : "Off"}</button>
            )}
        </Toggle>
    );
}`,
        "explanation": "Component patterns improve code reuse. Render props (example) pass render functions to share state/logic: Toggle provides on/toggle to children. Compound components (e.g., <Select><Option/></Select>) use context for implicit state sharing. HOCs wrap components for added functionality (e.g., withAuth). The example toggles a button’s state via render props. This topic covers choosing patterns (render props for flexibility, hooks for simplicity), avoiding complexity, and use cases like forms or modals in complex UIs."
      },
      {
        "name": "Project: Build a React App",
        "definition": "A project integrates React concepts to build a dynamic app.",
        "details": "Create a to-do list or e-commerce app with routing, state management, and API integration using hooks and context.",
        "example": `import { useState } from "react";
function TodoApp() {
    const [todos, setTodos] = useState([]);
    const addTodo = (text) => setTodos([...todos, { id: Date.now(), text, done: false }]);
    return (
        <div>
            <input onChange={(e) => addTodo(e.target.value)} />
            <ul>{todos.map((todo) => <li key={todo.id}>{todo.text}</li>)}</ul>
        </div>
    );
}`,
        "explanation": "This project builds a to-do list app, integrating useState for local state, routing (React Router for pages), and context for global state (e.g., theme). The example manages todos in state, adding new ones with addTodo. Extend with: async API calls (fetch todos), Redux for complex state, error boundaries, and tests. Use keys in lists for efficient rendering. This topic covers structuring apps (components, hooks, routes), integrating APIs (e.g., save todos), and deploying (Vercel/Netlify), applicable to real-world apps like task trackers or e-commerce platforms."
      }
    ]
},
  13: {
    "id": 13,
    "title": "Angular Framework",
    "description": "Develop robust applications with Angular, a full-fledged framework.",
    "image": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg",
    "overview": "Angular is a comprehensive platform for building scalable, single-page applications. This course covers components, services, routing, forms, RxJS, state management with NgRx, and advanced techniques for building dynamic, production-ready web applications.",
    "playlistId": "PL4cUxeGkcC9gsJS5QgFT2xv40X9ABIZ_k",
    "topics": [
      {
        "name": "Introduction to Angular",
        "definition": "Angular is a platform for building single-page applications.",
        "details": "Learn Angular CLI, project setup, and core concepts like modules, components, and TypeScript integration.",
        "example": `ng new my-app
ng serve`,
        "explanation": "Angular is a TypeScript-based framework for single-page applications (SPAs), offering a structured approach with built-in tools for routing, forms, and state management. The Angular CLI (npm install -g @angular/cli) simplifies development with commands like ng new to scaffold a project (creates src/app with AppModule) and ng serve to run a dev server with live reload at localhost:4200. The example sets up a new app and starts it. Angular uses TypeScript for type safety, modules (NgModule) to organize code, and components for UI. This topic covers CLI commands (ng generate component), project structure (src/app, angular.json), and SPAs' benefits (fast client-side rendering) for apps like dashboards or enterprise CRMs."
      },
      {
        "name": "Components and Templates",
        "definition": "Components are UI building blocks, and templates define their view.",
        "details": "Create components with Angular CLI, use templates with data binding (interpolation, property, event), and apply TypeScript for logic.",
        "example": `import { Component } from "@angular/core";
@Component({
    selector: "app-root",
    template: "<h1>Hello, {{title}}!</h1>",
})
export class AppComponent {
    title = "Angular";
}`,
        "explanation": "Components encapsulate UI and logic, defined with @Component decorator specifying selector (HTML tag), template (HTML), and styles. The example creates AppComponent, rendering 'Hello, Angular!' via interpolation ({{title}}). Data binding includes: interpolation ({{value}}), property ([disabled]=’false’), event ((click)=’onClick()’), and two-way ([(ngModel)]). Generate components with ng g c my-component. This topic covers component lifecycle (ngOnInit), input/output decorators for parent-child communication, and use cases like rendering product cards or user profiles in e-commerce apps. Avoid inline templates for large apps; use templateUrl for separate HTML files."
      },
      {
        "name": "Directives and Pipes",
        "definition": "Directives add behavior, and pipes transform data in templates.",
        "details": "Use structural directives (*ngIf, *ngFor) to modify DOM and pipes (date, uppercase, json) to format data.",
        "example": `<ul>
    <li *ngFor="let item of items">{{ item | uppercase }}</li>
</ul>`,
        "explanation": "Directives manipulate DOM: structural (*ngIf, *ngFor) change layout (show/hide, iterate), while attribute directives (ngClass, ngStyle) modify appearance/behavior. Pipes transform data in templates without altering it. The example uses *ngFor to loop over items array, rendering each as uppercase via the uppercase pipe. Built-in pipes include date ({{ date | date:'short' }}), currency, and json (debugging). Chain pipes ({{ value | uppercase | slice:0:3 }}). This topic covers custom directives (ng g directive), custom pipes (ng g pipe), and use cases like dynamic lists or formatted tables in dashboards or blogs."
      },
      {
        "name": "Services and Dependency Injection",
        "definition": "Services provide reusable logic, and DI manages dependencies.",
        "details": "Create services with Angular CLI, inject them into components using DI, and manage shared logic like API calls.",
        "example": `import { Injectable } from "@angular/core";
@Injectable({
    providedIn: "root",
})
export class DataService {
    getData() {
        return ["Item1", "Item2"];
    }
}`,
        "explanation": "Services are singleton classes for shared logic (e.g., HTTP requests, data processing). @Injectable({ providedIn: 'root' }) makes them globally available via Angular’s dependency injection (DI) system, injecting into components via constructor (constructor(private service: DataService)). The example defines DataService with a getData method, injectable app-wide. Use ng g s data to generate. DI ensures single instances and modularity. This topic covers service scopes (root vs. module), mocking for tests, and use cases like fetching user data or logging in enterprise apps. Avoid bloating services with unrelated logic."
      },
      {
        "name": "Routing",
        "definition": "Routing enables navigation between views in Angular apps.",
        "details": "Use RouterModule, routerLink for navigation, and route parameters for dynamic URLs.",
        "example": `import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
const routes: Routes = [{ path: "", component: HomeComponent }];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}`,
        "explanation": "Angular’s RouterModule enables client-side navigation, mapping URLs to components. The example defines a route for '/' to HomeComponent using RouterModule.forRoot (app-level routing). Use routerLink='<path>' for links and <router-outlet> to render routed components. Support dynamic routes (path: 'user/:id'), query params (?key=value), and guards (canActivate). Generate with ng g module app-routing --module app. This topic covers nested routes, lazy loading (below), and use cases like multi-page apps (e.g., /home, /profile) in e-commerce or admin panels. Ensure unique paths to avoid conflicts."
      },
      {
        "name": "Forms (Template, Reactive)",
        "definition": "Forms handle user input in Angular apps.",
        "details": "Use template-driven forms for simple cases and reactive forms for complex, dynamic forms with validation.",
        "example": `import { FormGroup, FormControl } from "@angular/forms";
export class FormComponent {
    form = new FormGroup({
        name: new FormControl(""),
    });
}`,
        "explanation": "Angular supports two form types: template-driven (ngModel, simpler) and reactive (FormGroup/FormControl, programmatic). The example creates a reactive form with a name field, binding to template with [formGroup]=’form’ and formControlName=’name’. Reactive forms offer better control, validation (Validators.required), and async updates. Template-driven uses [(ngModel)] for two-way binding. Add FormsModule/ReactiveFormsModule to NgModule. This topic covers form validation (e.g., Validators.email), dynamic controls (FormArray), and use cases like user registration or checkout forms in booking systems. Test forms to ensure valid submissions."
      },
      {
        "name": "RxJS and Observables",
        "definition": "RxJS manages asynchronous data with Observables.",
        "details": "Use Observables for async operations (e.g., HTTP, events) and operators (map, filter, switchMap) for data transformation.",
        "example": `import { of } from "rxjs";
import { map } from "rxjs/operators";
of(1, 2, 3)
    .pipe(map(x => x * 2))
    .subscribe(x => console.log(x));`,
        "explanation": "RxJS (included in Angular) uses Observables to handle async data streams (e.g., API responses, user input). The example creates an Observable with of(1, 2, 3), transforms values (x * 2) using map, and logs results (2, 4, 6) via subscribe. Operators like filter, switchMap, or mergeMap handle complex flows. Use async pipe ({{ data | async }}) in templates to subscribe/unsubscribe automatically. This topic covers Observable lifecycle (complete, error), error handling (catchError), and use cases like search-as-you-type or live data feeds in analytics apps. Avoid memory leaks by unsubscribing or using async pipe."
      },
      {
        "name": "State Management (NgRx)",
        "definition": "NgRx provides Redux-like state management for Angular.",
        "details": "Use actions, reducers, and effects for predictable state management, integrating with Angular’s DI.",
        "example": `import { createAction, createReducer, on } from "@ngrx/store";
export const increment = createAction("increment");
export const counterReducer = createReducer(0, on(increment, state => state + 1));`,
        "explanation": "NgRx (npm install @ngrx/store) implements Redux principles for Angular. Actions (createAction) describe events, reducers (createReducer) update state, and effects handle side effects (e.g., API calls). The example defines an increment action and a reducer to increment a counter. Use StoreModule.forRoot({ counter: counterReducer }) and inject Store to dispatch/select state. Effects (ng add @ngrx/effects) manage async tasks. This topic covers NgRx setup, selectors (createSelector), debugging with NgRx DevTools, and use cases like managing cart state or user sessions in complex apps. Avoid overuse for simple state (use services)."
      },
      {
        "name": "Testing Angular Apps",
        "definition": "Testing ensures Angular components and services work correctly.",
        "details": "Use Jasmine and Karma for unit testing components, services, and pipes, with TestBed for Angular-specific testing.",
        "example": `describe("AppComponent", () => {
    it("should have title", () => {
        const fixture = TestBed.createComponent(AppComponent);
        expect(fixture.componentInstance.title).toEqual("my-app");
    });
});`,
        "explanation": "Angular uses Jasmine (assertion library) and Karma (test runner) for testing, included in CLI projects. TestBed creates a testing module, compiling components for testing. The example tests AppComponent’s title property. Use fixture.debugElement to query DOM, mock services (TestBed.inject), and test async behavior (async/await). Test pipes, directives, and HTTP (HttpClientTestingModule). This topic covers unit tests, integration tests, mocking APIs, and achieving >80% coverage for reliable apps like CRMs or e-commerce platforms. Debug with ng test --code-coverage."
      },
      {
        "name": "Lazy Loading Modules",
        "definition": "Lazy loading defers module loading to improve performance.",
        "details": "Use Angular’s router to load feature modules on-demand, reducing initial bundle size.",
        "example": `import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
const routes: Routes = [
    { path: "feature", loadChildren: () => import("./feature/feature.module").then(m => m.FeatureModule) }
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}`,
        "explanation": "Lazy loading splits apps into feature modules, loading them only when routed to, reducing initial load time (e.g., from 2MB to 500KB). The example defines a route that loads FeatureModule dynamically using import(). Generate with ng g module feature --route feature --module app-routing. Use loadChildren for async loading, not imports. This topic covers module organization, preloading strategies (PreloadAllModules), and use cases like admin panels or large apps with distinct sections (e.g., user vs. admin). Monitor bundle size with ng build --prod --source-map."
      },
      {
        "name": "Angular Universal (SSR)",
        "definition": "Angular Universal enables server-side rendering for better SEO and performance.",
        "details": "Use Universal to pre-render Angular apps on the server, hydrating client-side for interactivity.",
        "example": `import { platformServer } from "@angular/platform-server";
import { AppModule } from "./app.module";
platformServer().bootstrapModule(AppModule);`,
        "explanation": "Angular Universal renders HTML on the server for faster first paint and SEO (search engines index content). Add with ng add @nguniversal/express-engine, creating server.ts and AppModule tweaks. The example bootstraps AppModule on the server. Client hydrates with transferState to avoid duplicate API calls. Challenges: server-compatible code (avoid window), performance (cache renders). This topic covers setup, state transfer, and use cases like blogs or product pages needing SEO. Deploy with Node/Express or serverless (Vercel). Test with ng run my-app:server."
      },
      {
        "name": "Custom Directives",
        "definition": "Custom directives add reusable behavior to DOM elements.",
        "details": "Create attribute or structural directives to enhance templates, like highlighting or conditional rendering.",
        "example": `import { Directive, ElementRef } from "@angular/core";
@Directive({
    selector: "[appHighlight]",
})
export class HighlightDirective {
    constructor(el: ElementRef) {
        el.nativeElement.style.backgroundColor = "yellow";
    }
}`,
        "explanation": "Custom directives extend DOM behavior. The example creates HighlightDirective (ng g directive highlight), applying a yellow background to elements with [appHighlight]. Use ElementRef for DOM access, Renderer2 for safer manipulation, or HostListener for events (e.g., click). Structural directives (*appCustomIf) modify DOM like *ngIf. This topic covers directive types, input bindings ([appHighlight]=’color’), and use cases like tooltips, drag-drop, or form validation in interactive UIs. Avoid direct DOM manipulation for server-side compatibility."
      },
      {
        "name": "Change Detection Optimization",
        "definition": "Change detection optimization reduces unnecessary checks in Angular.",
        "details": "Use OnPush strategy and immutable data to minimize change detection cycles, improving performance.",
        "example": `import { Component, ChangeDetectionStrategy } from "@angular/core";
@Component({
    selector: "app-item",
    template: "<p>{{ item.name }}</p>",
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ItemComponent {
    @Input() item: any;
}`,
        "explanation": "Angular’s change detection checks component state for updates, which can slow large apps. OnPush strategy (example) only checks when @Input references change or events occur, reducing checks. Use immutable data (new objects via spread operator) or ChangeDetectorRef.markForCheck() for manual updates. Combine with NgZone.runOutsideAngular for non-Angular events (e.g., third-party libs). This topic covers profiling with Chrome DevTools, optimizing large lists (trackBy in *ngFor), and use cases like data grids or real-time dashboards with frequent updates."
      },
      {
        "name": "Project: Build an Angular App",
        "definition": "A project integrates Angular concepts to build a dynamic app.",
        "details": "Create a CRUD app with routing, reactive forms, NgRx for state, and API integration, such as a task manager or e-commerce dashboard.",
        "example": `import { Component } from "@angular/core";
@Component({
    selector: "app-root",
    template: "<h1>Welcome to {{title}}!</h1>",
})
export class AppComponent {
    title = "Angular App";
}`,
        "explanation": "This project builds a CRUD app (e.g., task manager), integrating components, routing (navigate /tasks, /tasks/:id), reactive forms (task creation), NgRx (manage tasks state), and HTTP (fetch/save via HttpClient). The example is a starting AppComponent; extend with <router-outlet>, services for API calls, and NgRx actions/reducers for tasks. Add lazy loading for modules, error handling, and tests (ng test). This topic covers app structure (feature modules), deployment (ng build --prod), and use cases like project management tools or e-commerce platforms. Ensure accessibility (ARIA) and performance (lazy load, OnPush)."
      }
    ]
},
  14: {
    "id": 14,
    "title": "TypeScript Programming",
    "description": "Enhance JavaScript with TypeScript’s type safety and modern features.",
    "image": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    "overview": "TypeScript is a superset of JavaScript that adds static typing for improved code quality and maintainability. This course covers core TypeScript features, advanced types, integration with frameworks like React, and best practices for building robust, scalable applications.",
    "playlistId": "PL4cUxeGkcC9gU8F6NqNW2PQnvF6Ws3RBF",
    "topics": [
      {
        "name": "Introduction to TypeScript",
        "definition": "TypeScript is a superset of JavaScript with static typing.",
        "details": "Learn TypeScript setup, compilation, and basic types like string, number, and boolean.",
        "example": `let message: string = "Hello, TypeScript!";
console.log(message);`,
        "explanation": "TypeScript extends JavaScript by adding static types, catching errors at compile time (e.g., assigning a number to a string variable). It compiles to plain JavaScript via the TypeScript compiler (tsc). Setup involves installing TypeScript (npm install -g typescript) and creating a tsconfig.json for project configuration. The example declares a variable message with type string, ensuring type safety (e.g., message = 42 would error). Run with tsc file.ts and node file.js. This topic covers initializing projects (tsc --init), TypeScript’s benefits (better tooling, IntelliSense), and use cases like reducing runtime errors in web or Node.js apps."
      },
      {
        "name": "Basic Types",
        "definition": "Basic types enforce type safety for variables.",
        "details": "Use string, number, boolean, array, tuple, any, void, and never types to define variables and function signatures.",
        "example": `let age: number = 25;
let names: string[] = ["Alice", "Bob"];
let tuple: [string, number] = ["Alice", 25];`,
        "explanation": "TypeScript’s basic types ensure variables hold expected values. The example declares age as number, names as an array of strings, and tuple as a fixed-length array with specific types ([string, number]). Other types include: boolean (true/false), any (bypasses type checking, use sparingly), void (functions returning nothing), and never (functions that never return, e.g., throw errors). Use Array<string> or string[] for arrays. Type errors (e.g., names.push(42)) are caught by tsc. This topic covers type annotations, explicit vs. implicit typing, and use cases like form data or API responses in apps requiring strict data structures."
      },
      {
        "name": "Interfaces and Classes",
        "definition": "Interfaces define contracts, and classes implement them.",
        "details": "Learn interfaces for object shapes, classes for object-oriented programming, and inheritance with implements/extends.",
        "example": `interface User {
    name: string;
}
class Person implements User {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
}
let user: User = new Person("Alice");`,
        "explanation": "Interfaces define object structures (e.g., User requires a name property). Classes create objects with properties and methods, using implements to adhere to interfaces. The example defines a User interface and a Person class implementing it, ensuring name exists. TypeScript supports class features: access modifiers (public, private, protected), inheritance (extends), and abstract classes. Use interfaces for props or API responses, classes for business logic (e.g., UserService). This topic covers optional properties (name?: string), readonly properties, and use cases like modeling user entities or services in enterprise apps."
      },
      {
        "name": "Generics",
        "definition": "Generics create reusable components with type safety.",
        "details": "Use generics in functions, classes, and interfaces to handle multiple types while preserving type information.",
        "example": `function identity<T>(value: T): T {
    return value;
}
let result = identity<string>("Hello");`,
        "explanation": "Generics allow reusable code that works with any type while maintaining type safety. The example defines an identity function with a generic type T, returning the input value with the same type. identity<string>('Hello') ensures result is a string; TypeScript catches errors like identity<number>('Hello'). Use generics in arrays (Array<T>), promises (Promise<string>), or custom types (class Queue<T>). This topic covers constraints (T extends string), default types, and use cases like type-safe data structures or API utilities in libraries or frameworks."
      },
      {
        "name": "Modules",
        "definition": "Modules organize code into reusable units.",
        "details": "Use ES modules (import/export) and TypeScript’s module resolution to manage dependencies and encapsulate code.",
        "example": `// math.ts
export function add(a: number, b: number): number {
    return a + b;
}
// main.ts
import { add } from "./math";
console.log(add(5, 3));`,
        "explanation": "TypeScript supports ES modules for code organization. The example exports an add function from math.ts and imports it in main.ts, ensuring type safety (e.g., add('a', 'b') errors). Configure module resolution in tsconfig.json ('module': 'esnext' or 'commonjs'). Use default exports, named exports, or barrel files (index.ts). This topic covers namespace (legacy), path aliases (@app/math), and use cases like modularizing large Node.js or Angular apps to improve maintainability and reduce bundle size."
      },
      {
        "name": "Type Inference",
        "definition": "Type inference automatically assigns types when not specified.",
        "details": "Understand how TypeScript infers types for variables, functions, and return values to reduce explicit annotations.",
        "example": `let x = 10; // TypeScript infers number
function add(a: number, b: number) {
    return a + b; // Infers number return type
}`,
        "explanation": "TypeScript infers types when not explicitly declared, reducing boilerplate. In the example, x is inferred as number from its value (10), and add’s return type is inferred as number. Inference works for literals, arrays, and objects (e.g., { name: 'Alice' } infers { name: string }). Explicit types override inference when needed (e.g., let x: number). This topic covers inference limits (e.g., any for uninitialized variables), best practices (annotate complex types), and use cases like simplifying code in scripts or small apps while maintaining safety."
      },
      {
        "name": "Advanced Types",
        "definition": "Advanced types enhance type safety with unions and intersections.",
        "details": "Use union types (A | B), intersection types (A & B), type aliases, and literal types for complex scenarios.",
        "example": `type ID = string | number;
let userId: ID = "abc123";
type User = { name: string } & { id: number };
let user: User = { name: "Alice", id: 1 };`,
        "explanation": "Advanced types model complex data. Union types (ID) allow multiple types (string or number), useful for flexible IDs. Intersection types (User) combine types, requiring all properties. The example assigns 'abc123' to userId and creates a User with name and id. Type aliases simplify reusable types; literal types (type Role = 'admin' | 'user') restrict values. This topic covers discriminated unions (e.g., { type: 'error', message: string }), conditional types, and use cases like API payloads or form validation in complex apps."
      },
      {
        "name": "TypeScript with React",
        "definition": "TypeScript enhances React with type-safe components.",
        "details": "Use TypeScript for props, state, and hooks in React, ensuring type-safe components and reducing runtime errors.",
        "example": `import React, { FC } from "react";
interface Props {
    name: string;
}
const Greeting: FC<Props> = ({ name }) => {
    return <p>Hello, {name}!</p>;
};`,
        "explanation": "TypeScript in React (npx create-react-app my-app --template typescript) types props, state, and hooks. The example uses FC (FunctionComponent) to type a Greeting component, with Props interface defining name. TypeScript catches errors (e.g., missing name prop). Use interfaces for props, React.useState<number>(0) for state, and event types (React.MouseEvent). This topic covers typing hooks (useEffect, useRef), defaultProps, and use cases like type-safe forms or data grids in React apps. Add @types/react for library support."
      },
      {
        "name": "Tooling and Configuration",
        "definition": "Tooling configures TypeScript for projects.",
        "details": "Learn tsconfig.json, compiler options (strict, target, module), and integration with build tools like Webpack or Vite.",
        "example": `{
    "compilerOptions": {
        "target": "es5",
        "module": "commonjs",
        "strict": true
    }
}`,
        "explanation": "tsconfig.json configures TypeScript compilation. The example sets target to ES5 (for older browsers), module to commonjs (Node.js), and strict for maximum type safety (enables strictNullChecks, noImplicitAny, etc.). Other options: outDir (output folder), esModuleInterop (better module imports), and paths (aliases). Use tsc --watch for development. This topic covers integrating with Webpack/Vite, linting (ESLint with typescript-eslint), and use cases like configuring large-scale Node.js or Angular projects for consistent builds."
      },
      {
        "name": "Type Narrowing",
        "definition": "Type narrowing refines types within code blocks for safer operations.",
        "details": "Use type guards, typeof, instanceof, and in operator to narrow types in unions or dynamic data.",
        "example": `function printId(id: string | number) {
    if (typeof id === "string") {
        console.log(id.toUpperCase()); // id is string here
    } else {
        console.log(id.toFixed(2)); // id is number
    }
}`,
        "explanation": "Type narrowing reduces a broader type (e.g., string | number) to a specific one within a block. The example uses typeof to narrow id: in the if block, id is string (safe to call toUpperCase); else, it’s number (toFixed). Other methods: instanceof for classes, in operator (e.g., 'name' in obj), or custom type guards (isString(value)). This topic covers discriminated unions (e.g., { type: 'error' }), narrowing with assertions (as string), and use cases like handling API responses or form inputs in dynamic apps."
      },
      {
        "name": "Utility Types",
        "definition": "Utility types transform existing types for common patterns.",
        "details": "Use built-in types like Partial, Pick, Omit, and Record to manipulate interfaces and types efficiently.",
        "example": `interface User {
    id: number;
    name: string;
}
type PartialUser = Partial<User>;
type UserId = Pick<User, "id">;
let user: PartialUser = { name: "Alice" }; // id optional
let id: UserId = { id: 1 };`,
        "explanation": "Utility types simplify type manipulation. Partial<User> makes all User properties optional; Pick<User, 'id'> selects only id. The example creates a PartialUser (id optional) and UserId (only id). Other utilities: Omit (exclude keys), Record (key-value type), and ReturnType (function return type). Use for form states (Partial for optional fields) or API responses (Pick for subsets). This topic covers combining utilities, custom utilities, and use cases like simplifying complex interfaces in large-scale apps."
      },
      {
        "name": "Error Handling and Type Safety",
        "definition": "Error handling ensures robust code with type-safe error management.",
        "details": "Use try-catch with typed errors, custom error types, and assertions to handle runtime errors safely.",
        "example": `interface ApiError {
    message: string;
    code: number;
}
async function fetchData(): Promise<string> {
    try {
        const response = await fetch("/api/data");
        if (!response.ok) throw { message: "Fetch failed", code: response.status } as ApiError;
        return response.json();
    } catch (error: unknown) {
        const apiError = error as ApiError;
        throw new Error(\`API Error: \${apiError.message} (Code: \${apiError.code})\`);
    }
}`,
        "explanation": "TypeScript enhances error handling by typing errors. The example defines an ApiError interface and uses it in a try-catch block. fetchData throws a typed error on failure, caught as unknown (safest for catch). The error is asserted as ApiError to access properties. Use custom error classes (extends Error) or union types for multiple error shapes. This topic covers asserting non-null (value!), error boundaries in React, and use cases like API calls or file operations in robust apps."
      },
      {
        "name": "Project: Build a TypeScript App",
        "definition": "A project integrates TypeScript concepts to build a type-safe app.",
        "details": "Create a React or Node.js app with TypeScript, using interfaces, generics, and advanced types for a task manager or API client.",
        "example": `interface Todo {
    id: number;
    text: string;
}
const todos: Todo[] = [{ id: 1, text: "Learn TypeScript" }];
console.log(todos);`,
        "explanation": "This project builds a type-safe app, like a task manager, using TypeScript with React or Node.js. The example defines a Todo interface and creates a todos array, ensuring type safety. Extend with: generics for reusable components (e.g., List<Todo>), services for API calls (typed responses), and NgRx/Redux for state. Add error handling (ApiError), utility types (Partial<Todo> for updates), and tests (Jest with ts-jest). This topic covers structuring apps (modules, services), typing APIs (fetch with interfaces), and deploying (tsc or Vite), ideal for real-world apps like to-do lists or dashboards."
      }
    ]
},
  15:{
    "id": 15,
    "title": "Tailwind CSS Styling",
    "description": "Style apps efficiently with Tailwind CSS, a utility-first framework.",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/768px-Tailwind_CSS_Logo.svg.png?20230715030042",
    "overview": "Tailwind CSS is a utility-first CSS framework that streamlines styling with pre-built classes. This course covers utility classes, responsive design, customization, advanced features, and integration with modern frameworks to create responsive, maintainable, and visually appealing web applications.",
    "playlistId": "PL4cUxeGkcC9gpXORlEHjc5bgnIi5MDS2m",
    "topics": [
      {
        "name": "Introduction to Tailwind CSS",
        "definition": "Tailwind CSS is a utility-first CSS framework for rapid styling.",
        "details": "Learn Tailwind setup, utility classes, and basic styling for quick prototyping and production-ready designs.",
        "example": `<div class="bg-blue-500 text-white p-4">
    Hello, Tailwind!
</div>`,
        "explanation": "Tailwind CSS provides low-level utility classes (e.g., bg-blue-500 for background color) to style directly in HTML, reducing custom CSS. Setup involves installing Tailwind (npm install tailwindcss), adding it to a project via CDN or build tools (npx tailwindcss init), and including @tailwind directives in CSS (@tailwind base; @tailwind components; @tailwind utilities;). The example applies a blue background (bg-blue-500), white text (text-white), and padding (p-4). This topic covers Tailwind’s philosophy (utility-first vs. component-based), benefits (faster prototyping, consistent design), and use cases like landing pages or dashboards."
      },
      {
        "name": "Utility Classes",
        "definition": "Utility classes provide low-level styling for elements.",
        "details": "Use classes for margin (m-), padding (p-), colors (bg-, text-), typography (text-, font-), and more for fine-grained control.",
        "example": `<p class="text-lg font-bold text-gray-800">
    Styled text
</p>`,
        "explanation": "Utility classes map directly to CSS properties (e.g., text-lg for font-size: 1.125rem, font-bold for font-weight: 700, text-gray-800 for color: #1f2937). The example styles a paragraph with large text, bold weight, and dark gray color. Tailwind’s naming follows a pattern (property-value, e.g., m-4 for margin: 1rem), with scales for customization (e.g., text-sm to text-9xl). Combine classes for complex styles without custom CSS. This topic covers utilities for borders, shadows, and flexbox, best practices (avoid overuse in single elements), and use cases like styling forms or cards in blogs or e-commerce apps."
      },
      {
        "name": "Responsive Design",
        "definition": "Responsive design adapts layouts to different screen sizes.",
        "details": "Use responsive prefixes (sm:, md:, lg:, xl:, 2xl:) to apply styles at specific breakpoints for mobile-first design.",
        "example": `<div class="w-full md:w-1/2 lg:w-1/3">
    Responsive div
</div>`,
        "explanation": "Tailwind’s responsive prefixes apply styles conditionally based on breakpoints (e.g., sm: for ≥640px, md: for ≥768px). The example sets a div’s width to 100% (w-full) by default, 50% (w-1/2) on medium screens, and 33.33% (w-1/3) on large screens. Mobile-first means base styles apply to all screens, overridden by prefixes. Define custom breakpoints in tailwind.config.js. This topic covers responsive utilities (e.g., flex, grid, text), media queries, and use cases like responsive grids or navigation bars in portfolios or dashboards."
      },
      {
        "name": "Flexbox and Grid",
        "definition": "Flexbox and Grid utilities create flexible layouts.",
        "details": "Use flex (flexbox) and grid classes, with justify (justify-content) and align (align-items) for layout control.",
        "example": `<div class="flex justify-between items-center">
    <div>Item 1</div>
    <div>Item 2</div>
</div>`,
        "explanation": "Tailwind simplifies Flexbox and CSS Grid with utilities. The example uses flex to create a flex container, justify-between to space items evenly, and items-center to align vertically. Flexbox utilities include flex-row, flex-col, flex-wrap; Grid includes grid-cols-2, gap-4. Combine with responsive prefixes (e.g., md:grid-cols-3). This topic covers layout patterns (e.g., card grids, navigation), debugging alignment issues, and use cases like product listings or dashboards requiring complex layouts. Avoid nesting too deeply to maintain performance."
      },
      {
        "name": "Customizing Tailwind",
        "definition": "Customizing Tailwind extends its default configuration.",
        "details": "Modify tailwind.config.js to add custom colors, spacing, fonts, or breakpoints for project-specific needs.",
        "example": `module.exports = {
    theme: {
        extend: {
            colors: {
                custom: "#123456",
            },
        },
    },
};`,
        "explanation": "tailwind.config.js customizes Tailwind’s theme. The example adds a custom color (custom: #123456), usable as bg-custom or text-custom. Use extend to preserve defaults or override theme entirely (e.g., colors: { primary: '#123456' }). Customize spacing (spacing: { '10': '2.5rem' }), fonts, or breakpoints (screens: { 'xs': '400px' }). Regenerate CSS with npx tailwindcss -i input.css -o output.css. This topic covers theming for branding, custom utilities, and use cases like matching design systems in enterprise apps or startups."
      },
      {
        "name": "Pseudo-Classes and Transitions",
        "definition": "Pseudo-classes and transitions add dynamic styles.",
        "details": "Use hover:, focus:, active:, and transition classes for interactive effects like animations or state changes.",
        "example": `<button class="bg-blue-500 hover:bg-blue-700 transition duration-300">
    Hover me
</button>`,
        "explanation": "Pseudo-class utilities (hover:, focus:) apply styles on user interaction. The example changes a button’s background from blue-500 to blue-700 on hover, with a smooth 300ms transition (transition and duration-300). Other pseudo-classes: focus-visible, disabled. Transition utilities include transition-colors, transition-transform. Combine with responsive prefixes (e.g., md:hover:bg-blue-700). This topic covers animation utilities (animate-pulse), custom transitions, and use cases like interactive buttons or modals in forms or e-commerce UIs."
      },
      {
        "name": "Directives and Plugins",
        "definition": "Directives and plugins extend Tailwind’s functionality.",
        "details": "Use @apply to reuse utility combinations and plugins to add custom utilities or components.",
        "example": `.my-button {
    @apply bg-blue-500 text-white p-4 rounded;
}`,
        "explanation": "@apply combines utilities into custom CSS classes, reducing repetition. The example creates a my-button class with Tailwind utilities for reuse. Plugins (npm install tailwindcss/plugin) add custom utilities or components (e.g., plugin for custom gradients). Install community plugins (e.g., @tailwindcss/typography). Include in tailwind.config.js (plugins: []). This topic covers creating component classes (e.g., buttons, cards), debugging @apply issues, and use cases like reusable UI kits in large projects or design systems."
      },
      {
        "name": "Optimizing for Production",
        "definition": "Optimization reduces Tailwind’s CSS bundle size.",
        "details": "Use PurgeCSS (now built-in) to remove unused styles and minify CSS for production builds.",
        "example": `module.exports = {
    purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
    theme: {},
    variants: {},
    plugins: [],
};`,
        "explanation": "Tailwind’s full CSS is large (>2MB); purging removes unused classes. The example configures purge to scan JavaScript and HTML files, keeping only used classes (e.g., bg-blue-500 if present). Enable with mode: 'jit' or purge in tailwind.config.js. Minify with cssnano or PostCSS. Reduces bundle size to <100KB for typical apps. This topic covers production builds (NODE_ENV=production), analyzing bundles (Webpack Bundle Analyzer), and use cases like optimizing large apps for faster load times in e-commerce or blogs."
      },
      {
        "name": "Tailwind with Frameworks",
        "definition": "Tailwind integrates with frameworks like React and Angular.",
        "details": "Use Tailwind’s className in React, Angular, or Vue components for consistent styling across frameworks.",
        "example": `function Button() {
    return <button className="bg-blue-500 text-white p-4 rounded">
        Click me
    </button>;
}`,
        "explanation": "Tailwind works seamlessly with component-based frameworks. In React, use className (example) to apply Tailwind classes. In Angular/Vue, use class or [class]. Setup: add Tailwind to build process (e.g., CRA, Vite, Angular CLI with ng add @ng-tailwind/ngx-tailwind). The example styles a React button. Ensure purging includes framework files. This topic covers setup for React (postcss.config.js), Angular (styles.css), debugging class conflicts, and use cases like styled components in dashboards or SPAs."
      },
      {
        "name": "Just-In-Time (JIT) Mode",
        "definition": "JIT mode generates Tailwind styles on-demand for faster development.",
        "details": "Enable JIT to reduce build times and support arbitrary values (e.g., bg-[#123456]).",
        "example": `module.exports = {
    mode: "jit",
    purge: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {},
    plugins: [],
};`,
        "explanation": "JIT mode (Tailwind v2.1+) generates CSS on-demand, improving dev speed and enabling arbitrary values (e.g., w-[200px], bg-[#123456]). The example enables JIT in tailwind.config.js, scanning source files for classes. JIT reduces build times (seconds to milliseconds) and bundle size. Requires PostCSS setup. This topic covers enabling JIT, using arbitrary values (e.g., text-[1.5rem]), and use cases like rapid prototyping or dynamic styles in design-heavy apps."
      },
      {
        "name": "Accessibility with Tailwind",
        "definition": "Accessibility ensures Tailwind apps are usable by all.",
        "details": "Use ARIA utilities and semantic HTML with Tailwind to meet WCAG standards.",
        "example": `<button class="bg-blue-500 text-white p-4 rounded" aria-label="Submit form">
    Submit
</button>`,
        "explanation": "Tailwind supports accessibility with utilities like sr-only (screen-reader-only) and focus-visible. The example adds aria-label to a button for screen readers. Use semantic HTML (<nav>, <main>) and utilities like focus:ring for keyboard navigation. Test with tools like Lighthouse or axe. This topic covers ARIA attributes, ensuring contrast (text-gray-800 vs. bg-white), and use cases like accessible forms or navigation in public-facing apps like government portals or e-commerce."
      },
      {
        "name": "Component Libraries with Tailwind",
        "definition": "Component libraries provide pre-styled components using Tailwind.",
        "details": "Use libraries like Tailwind UI, Headless UI, or DaisyUI for reusable components.",
        "example": `import { Disclosure } from "@headlessui/react";
function Accordion() {
    return (
        <Disclosure>
            <Disclosure.Button className="bg-blue-500 text-white p-4">
                Toggle
            </Disclosure.Button>
            <Disclosure.Panel className="p-4">
                Content
            </Disclosure.Panel>
        </Disclosure>
    );
}`,
        "explanation": "Libraries like Headless UI (npm install @headlessui/react) provide unstyled, accessible components styled with Tailwind. The example uses Headless UI’s Disclosure for an accordion, applying Tailwind classes for styling. Tailwind UI (paid) offers pre-built components; DaisyUI (free) adds component classes. Combine with @apply for custom styles. This topic covers choosing libraries, integrating with React/Angular, and use cases like modals, dropdowns, or tabs in complex UIs."
      },
      {
        "name": "Project: Build a Tailwind App",
        "definition": "A project integrates Tailwind concepts to build a styled app.",
        "details": "Create a responsive landing page or dashboard with Tailwind, incorporating responsive design, custom themes, and framework integration.",
        "example": `<div class="min-h-screen bg-gray-100 flex items-center justify-center">
    <div class="bg-white p-6 rounded shadow-md">
        <h1 class="text-2xl font-bold">Welcome</h1>
    </div>
</div>`,
        "explanation": "This project builds a responsive landing page or dashboard using Tailwind. The example creates a centered card with a gray background, white container, padding, rounded corners, and a bold heading. Extend with: responsive grids (grid-cols-2 md:grid-cols-4), custom colors (tailwind.config.js), interactive buttons (hover, transition), and Headless UI components. Integrate with React/Angular, optimize with JIT/purge, and ensure accessibility (ARIA, contrast). This topic covers project structure, deployment (Vite, Vercel), and use cases like marketing sites or admin panels requiring polished, responsive UIs."
      }
    ]
},

};

 
function CourseDetail() {
  const { id } = useParams();
  const course = courseData[id];

  const [expandedTopics, setExpandedTopics] = useState({});

  const toggleTopic = (index) => {
    setExpandedTopics((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  if (!course) {
    return (
      <div className="min-h-screen bg-gray-100 text-gray-800 flex items-center justify-center">
        <h2 className="text-2xl font-semibold">Course not found!</h2>
      </div>
    );
  }

  return (

    <div className="min-h-screen bg-gray-100 text-gray-800">
      {/* Back Link */}
      <div className="p-4">
        <Link
          to="/"
          className="text-blue-600 hover:text-blue-800 transition-colors"
        >
          &larr; Back to Home
        </Link>
      </div>

      {/* Course Header */}
      <div className="container mx-auto p-4 md:p-8">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
          <img
            src={course.image}
            alt={course.title}
            className="w-full md:w-1/3 rounded-lg shadow-md"
          />
          <div className="md:w-2/3">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              {course.title}
            </h1>
            <p className="text-lg mb-4 text-gray-700">{course.description}</p>
            <p className="text-gray-600">{course.overview}</p>
          </div>
        </div>

        {/* Topics Section */}
        <div className="mt-12">
          <h2 className="text-2xl font-semibold mb-6 text-gray-900">
            Course Topics
          </h2>
          <div className="space-y-4">
            {course.topics.map((topic, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-lg shadow hover:bg-gray-100 transition-colors"
              >
                <div
                  className="flex justify-between items-center cursor-pointer"
                  onClick={() => toggleTopic(index)}
                >
                  <h3 className="text-lg font-medium text-blue-600">
                    {topic.name}
                  </h3>
                  <span className="text-gray-600">
                    {expandedTopics[index] ? "▲" : "▼"}
                  </span>
                </div>
                {expandedTopics[index] && (
                  <div className="mt-4 text-gray-700">
                    <p>
                      <strong>Definition:</strong> {topic.definition}
                    </p>
                    <p className="mt-2">
                      <strong>Details:</strong> {topic.details}
                    </p>
                    <p className="mt-2">
                      <strong>Example:</strong>
                    </p>
                    <pre className="bg-gray-100 p-4 rounded-md mt-2 text-sm overflow-x-auto border border-gray-300">
                      {topic.example}
                    </pre>
                    {topic.explanation && (
                      <p className="mt-2">
                        <strong>Explanation:</strong> {topic.explanation}
                      </p>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Videos Section */}
        <div className="mt-12">
          <h2 className="text-2xl font-semibold mb-6 text-gray-900">
            Course Videos
          </h2>
          <div className="bg-white p-4 rounded-lg shadow max-w-3xl mx-auto">
            <iframe
              className="w-full aspect-video rounded-md border-2 border-blue-500"
              src={`https://www.youtube.com/embed/videoseries?list=${course.playlistId}`}
              title={`${course.title} YouTube Playlist`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseDetail;