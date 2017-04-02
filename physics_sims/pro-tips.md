# Sim UI

  For a full page sim, relocating the controls everytime a sim's size is changed becomes tedious quickly. Leveraging the power of CSS, we can make this much easier by anchoring our sliders and buttons to the side of the page rather than a specific location on canvas.
  
  ```
<div id="sketch-holder" style="position: relative;">  
  	<div id="controls-container" style="position:absolute"> 
  		<div id="slider-holder" style="position: fixed;"></div> 
      <div id="button-holder" style="position: fixed;"></div>
  	</div>
</div>
  ```
  Basic HTML. 
  
  The sketch holder holds our sketch. The controls container will control our various user interface controls. Each For example, we will create a button-holder to hold a rack of buttons.
  
  Buttons can be declared in HTML, but as we will be working in Javascript to create our p5 sketch, I have chosen to initialize them all in one place in our Javascript. 
  

# Buttons

```
// define buttons
function spawnButtons() {
  button1 = createButton("I'm a button!");
  button1.parent('button-holder'); 
  button2 = createButton("I'm another button!"); 
  button2.parent('button-holder');
  button3 = createButton("I'm ANOTHER button!"); 
  button3.parent('button-holder');
  }
  

  //create the buttons!
  spawnButtons();
  ```

These buttons will all live in the button-holder div. The position for all the buttons can then be managed by changing a line or two of css for either the parent div or the rules governing all child elements rather than altering each individually. Here, I have chosen to affix our buttons to the side of the page: 


```css
#button-holder {
  right: 20px;
  bottom: 20px;
}
#button-holder > * {
  display: block;
  margin-top: 20px
}
```
The #button-holder > * targets all child elements inside the button-holder div and displays them in a block format (vertical stack). We can also set the space between the buttons with margin. Since this button collection rests on the bottom corner of the page, I have set the margin-top to 20px. 

However, there's a nicer way to scale up your fonts. Define the font-size in the body like so, and you can use rem units to scale them relative to that size. 

```css
body {
  font-size: 16px;
}
#button-holder {
  right: 2rem;
  bottom: 2rem;
}
#button-holder > * {
  display: block;
  margin-top: 2rem;
}
```
We can also customize the buttons themselves. 

```
//in javascript file
function spawnButtons(){
 button1.class("sim-slider gray");
 button2.class("sim-slider gray");
 . . .
 }
 
 //in our css file
 .sim-slider {
 	// change text size for all sliders
 	font-size: 2rem;
 }
 .sim-slider .gray {
 //make this particular slider grey
 font-color: grey;
}
 
 ```
 
 We can change the style of our buttons by giving it a class with javascript that refers to a css class. Note that in CSS, our classes are prefixed with a dot, as in ```(".sim-slider")```, but in js, it is absent ```(.class("sim-slider")```. Multiple classes can be assigned at once, separated by a space ```(.class("sim-slider grey")```. 
 
 
 ```
 function spawnButtons(){
  // put a default function directly in it
  button1.mousePressed(alert("You clicked me! I'm button 1."));
  // define an "anonymous" function within it
  button2.mousePressed(function(){ 
  	alert("An anonymous function goes here! I'm button 2.")
    });
  // refer to a function defined elsewhere
  button3.mousePressed(buttonThreeClicked)
 }  
 // function to be run when button 3 is clicked
 function buttonThreeClicked(){
  alert("You clicked me! I'm button 3.")  
  }
```

# Sliders

```
inputinput[type="range"] {
font-size: 1.5rem;
}
```

```input[type="range"]``` will select all the range sliders in your sim. 

Starting from the top, you can use the ```:nth-child(n)``` to select a specific selector inside of a div. This is convenient, since it allows us to peg a label to a slider that will follow it wherever it goes. Add a text description of the slider with ```content``` and then position it with css. 

The CSS pseudo-selector ```::before``` acts like a coat hanger that you can hang a small HTML coat on. Anything you put here will stay attached to the hanger, and you can easily shove it back and forth on the closet rod. 



```
input[type="range"]:nth-child(1)::before {
  content: "mass";
  position: fixed;
  margin-top: 1.5rem;
}

input[type="range"]:nth-child(2)::before {
  content: "distance";
  position: fixed;
  margin-top: 1.5rem;
}

input[type="range"]:nth-child(3)::before {
  content: "angle";
  position: fixed;
  margin-top: 1.5rem;
  
}

```

If another description is needed, there is also a ::after pseudoselector. 

```javascript

function spawnControls() {
  massSlider = createSlider(1, 50, 25);
  massSlider.parent('slider-holder');
  massSlider.class("sim-slider gray ");
  shoveSlider = createSlider(-80, 80, 0);
  shoveSlider.parent('slider-holder');
  shoveSlider.class("sim-slider gray");
  rampSlider = createSlider(0, 30, 15);
  rampSlider.parent('slider-holder');
  rampSlider.class("sim-slider gray ");
  }
  ```
  
  ```mySlider = createSlider(smallestValue, largestValue, startingValue)``` will create a slider, which we assign to a variable named mySlider.
  
  We can add classes to our slider by ```mySlider.class("random-css-class")``` and defining ```.random-css-class``` in our css file:
  
  ```
  .random-css-class {
  	font-size: 1rem;
    font-color: green;
  }
  ```
  
  
  
  
