import axios from "axios";

export const questionsList = [
    //axios.get('http://localhost:3001/forum/viewforum').then(),
    {
        id: 1,
        title: "Structured binding C++17",
        content: "Reading cppreference there is the following statement for structured bindings in C++17. Binds the specified names to subobjects or elements of the initializer. Like a reference, a structured binding is an alias to an existing object. Unlike a reference, a structured binding does not have to be of a reference type. How do I do this?",
    },

    {
        id: 2,
        title: "MariaDB query check plz",
        content: "when I run the below query in MariaDB, I get an error. error: You have an error in your SQL syntax; check the manual that corresponds to your MariaDB server version for the right syntax to use near 'AS new ON DUPLICATE KEY UPDATE end_price = NEW.end_price, volume = NEW.volume' at line 7 */ How can I get it to run without errors?",
    },

    {
        id: 3,
        title: "Describe Nested Data Types in Go",
        content: "My goal is to write a recursive Go function that goes through the entire data and converts it to JSONString. The issue is that the children of a node can be of many levels of many types. I am having hard time describing this as function argument. Of course the string to which I keep appending can be declared as strings.Builder but describing the actual data is the challenge. Any suggestions on how to go about this?"
    },

    {
        id: 4,
        title: "How to target tablets only with your Android app?",
        content: "I apologize in advance if it's a dumb question, but what's the current approach to target tablets only? I have an older app that is only suitable for tablets. I made some updates to it, so I want to deploy it to Google Play Store. The problem is that when I look at the list of supported devices, many popular newer tablets like Samsung Galaxy Tab S8 (various models), Xiaomi Pad 5, and such are marked as unsupported as they don't seem to fall into any category specified in the manifest."
    },
];