# Assignment1
Excersises 1.1, 1.2, 1.3

# Assignment1
Excersises 1.1

# How a Browser Works

When you enter a URL in a browser, the browser's job is to fetch and display the webpage you requested. Here’s a simple breakdown of how this process works:

## 1. Find the Address
The browser first looks up the website's address (IP address) by converting the domain name (like `example.com`) into a number that computers use to communicate.

## 2. Connect to the Website
The browser then connects to the website's server using this IP address.

## 3. Request the Page
Once connected, the browser asks the server for the webpage you want to see.

## 4. Download the Page
The server sends back the HTML (the structure of the page), along with CSS (the styling) and JavaScript (for interactivity).

## 5. Build the Page
The browser takes this HTML, CSS, and JavaScript, and builds a visual representation of the page:

- **HTML** is turned into a structure called the DOM (Document Object Model).
- **CSS** is applied to style the page.
- **JavaScript** is executed to make the page interactive.

## 6. Display the Page
Finally, the browser combines everything and paints it on your screen so you can see and interact with the webpage.
![image](https://github.com/user-attachments/assets/3d1ee7a5-b6d5-458b-a434-d0e64f1f0b99)


# High-Level Components of a Web Browser

A web browser is composed of several key components that work together to fetch, process, and display web content. Below is a breakdown of these high-level components:

## 1. User Interface (UI)
The User Interface includes elements like the address bar, back/forward buttons, bookmarking options, and other parts of the browser window that interact with the user. It excludes the content displayed from the website.

## 2. Browser Engine
The Browser Engine acts as a bridge between the User Interface and the Rendering Engine. It manages actions and render requests made by the UI.

## 3. Rendering Engine
The Rendering Engine is responsible for displaying the content on the screen. It interprets HTML, CSS, and JavaScript to render the webpage.

## 4. Networking
The Networking component handles network calls, such as HTTP requests, using various protocols. It fetches the necessary content from the web server.

## 5. JavaScript Engine
The JavaScript Engine executes JavaScript code, enabling dynamic content and interaction on the webpage. Each browser has its own JavaScript engine (e.g., V8 in Chrome, SpiderMonkey in Firefox).

## 6. UI Backend
The UI Backend is used for drawing basic widgets like combo boxes and windows. It exposes a generic interface that is not platform-specific.

## 7. Data Storage
The Data Storage component manages local storage, such as cookies, local storage, IndexedDB, and other types of persistence that save data locally on the user's device.


## Rendering Engine

The Rendering Engine is a core component of a web browser responsible for displaying the content of a webpage on the screen. It takes the HTML, CSS, and JavaScript from a webpage, interprets them, and then paints the visual elements (text, images, layouts) on the screen.
In short, the rendering engine's primary use is to transform the code of a webpage into the interactive visual experience you see and interact with in your browser.

## Parsers, Script Processing, and Tree Construction

### Parsers
Parsers are components in a browser that read and interpret the code of a webpage, like HTML, CSS, and JavaScript. They break down the code into a structure that the browser can use to build and render the page.

- **HTML Parser:** Converts the HTML content into a **DOM Tree** (Document Object Model), representing the structure of the webpage.
- **CSS Parser:** Converts CSS into a CSSOM (CSS Object Model), which defines the styling rules to be applied to the elements in the DOM.

### Script Processing
Script processing refers to how the browser handles and executes JavaScript code.

- When the HTML parser encounters a `<script>` tag, it pauses the DOM construction, downloads the JavaScript, and sends it to the **JavaScript Engine**.
- The JavaScript Engine executes the code, which can modify the DOM and CSSOM, change the page's content or style dynamically, and even interact with the server.

### Tree Construction
Tree construction is the process where the browser builds internal representations of the webpage structure and styles:

1. **DOM Tree Construction:**
   - As the HTML parser processes the HTML, it creates a tree-like structure called the **DOM Tree**. Each node in the tree represents an element or a piece of content in the HTML document.
   - The DOM Tree allows the browser to understand the hierarchical structure of the webpage.

2. **CSSOM Construction:**
   - Alongside the DOM Tree, the CSS parser builds a **CSSOM** (CSS Object Model), a tree structure representing the styles applied to the elements.
   - The CSSOM is then combined with the DOM Tree to create the **Render Tree**, which the browser uses to layout and paint the visual content.


## Order of Script Processing
  ![image](https://github.com/user-attachments/assets/4df9cee1-b05e-48d6-9b15-c7f80ee6718b)

## Layout and Painting

### Layout
- The layout phase involves calculating the position and size of each element on the page.
- The **Render Tree**, which combines the DOM and CSSOM, is used to determine where elements will appear on the screen.
- The **Layout Engine** calculates these positions and sizes, ensuring that elements are properly arranged based on CSS rules.

### Painting
- After layout, the browser moves to the painting phase, where the visual elements are drawn on the screen.
- The **Painting Engine** fills in the pixels, drawing text, images, colors, and other visual styles as defined in the Render Tree.
- **Display Layers** may be used for complex elements, allowing for efficient rendering and smooth animations.






