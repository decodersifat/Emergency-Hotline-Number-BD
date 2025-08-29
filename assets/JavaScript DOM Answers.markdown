# Answering the questions below:

## 1. Difference between `getElementById`, `getElementsByClassName`, `querySelector`/`querySelectorAll`

- `getElementById`: Finds one element by its unique `id`. Returns element or `null`.\
  Ex: `document.getElementById("myId")`.
- `getElementsByClassName`: Finds all elements with a class. Returns live HTMLCollection.\
  Ex: `document.getElementsByClassName("myClass")`.
- `querySelector`: Finds the first element matching a CSS selector. Returns element or `null`.\
  Ex: `document.querySelector(".myClass")`.
- `querySelectorAll`: Finds all elements matching a CSS selector. Returns NodeList.\
  Ex: `document.querySelectorAll(".myClass")`.

## 2. Create and Insert Element into DOM

1. Create: `let newDiv = document.createElement("div");`
2. Add content: `newDiv.textContent = "Hello!";`
3. Insert: `document.getElementById("container").appendChild(newDiv);`

**Ex**:

```javascript
let newDiv = document.createElement("div");
newDiv.textContent = "Hello!";
document.getElementById("container").appendChild(newDiv);
```

## 3. Event Bubbling

When an event (e.g., click) triggers on an element, it bubbles up to its parents, up to the `document`.\
**Ex**: Clicking a `<button>` in a `<div>` triggers the button’s event, then the `<div>`’s event.

## 4. Event Delegation & Why It's Useful

Add one event listener to a parent to handle child events via bubbling.\
**Ex**:

```javascript
document.querySelector("ul").addEventListener("click", (e) => {
  if (e.target.tagName === "LI") alert(`Clicked ${e.target.textContent}`);
});
```

**Why**: Saves memory, supports dynamic elements, and simplifies code.

## 5. `preventDefault()` vs `stopPropagation()`

- `preventDefault()`: Stops default action (e.g., form submit, link navigation).\
  Ex: `e.preventDefault();` stops a link from navigating.
- `stopPropagation()`: Stops the event from bubbling to parents.\
  Ex: `e.stopPropagation();` prevents parent handlers from running.

**Ex**:

```javascript
form.addEventListener("submit", (e) => {
  e.preventDefault(); // Stops submit
  e.stopPropagation(); // Stops bubbling
});
```