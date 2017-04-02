# Sim UI

  We have several choices of HTML elements when building the controls for our sim: 
  
  * checkboxes (radio buttons)
  * buttons 
  * switches 
  * sliders 
  
  Relocating the controls everytime a sim's size is changed becomes tedious quickly. Leveraging the power of CSS, we can make this much easier by anchoring our sliders and buttons to the side of the page rather than a specific location on canvas. Rather than move each element individually, we will put each group in a box, arranging them how we like within it, and then move the box rather than the individual elements. Elements inside the div will retain their positions inside the box. 
  
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
  
# Creating Elements

## Buttons

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



### Customizing elements with css classes
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
Other useful features are :hover and the :active selectors. 

## Stats

Say we would like to create at the bottom left corner of our screen a small bank of stats that display the current state of the sim. We can use css to position the statistics and javascript to interact with our sim and fetch the numbers. 

```
// dummy data to stand in for data fetched from sim
var distance = 1354.34687956789;
var velocity = 154.2687;
var mass = 100;
var degrees = 45;
var stats = calculateStats();

function calculateStats() {
  var dist = "distance: " +  distance.toFixed(1) + " m <br>";
  var vel =  "velocity: " +  velocity.toFixed(2) + " m/s <br>";
  var m = "mass: " + mass + " kg <br>" ;
  var theta = "angle: " + degrees + " &theta; <br>";
  var newStats = (dist + vel + m + theta)
  return newStats;
}

```
The <br>s will create a line break. &theta; is a special html char that will display a theta symbol. (More are here.) whateverVariable.toFixed(1) will round the number in whateverVariable to the requested number of decimal places. However, our display isn't very nice. Let's wrap all our numbers in the variables in span tags so we can align them to the right: 

```
// in our css file
.nums {
  float: right;
}

// in our js file
function calculateStats() {
  var dist = "distance: <span class=\"nums\">" + distance.toFixed(1) + " m</span><br>";
  var vel =  "velocity: <span class=\"nums\">" + velocity.toFixed(2) + " m/s </span><br>";
  var m = "mass: <span class=\"nums\">" + mass + " kg</span><br>" ;
  var theta = "angle: <span class=\"nums\">" + degrees + " &theta;</span><br>";
  var newStats = (dist + vel + m + theta)
  return newStats;
}
```

Now we just need to insert the stats into our webpage. 

```
function setup() {
  //create an empty div for the stats to live in
  myDiv = createDiv('');
  // add the stats as html into myDiv
  myDiv.html(stats);
  // myDiv will live now in its parent, stats-holder
  myDiv.parent('stats-holder');
}
```

And relocate our stats-holder div to the bottom left of our webpage:

```
// in our css file

#stats-holder > * {
  position: fixed;
  min-width: 8.5em;
  left: 20px;
  bottom: 20px;
}

```


## Sliders

```
input[type="range"] {
  font-size: 1.5rem;
  position: fixed;
  margin-top: 1.5rem;
}
```

```input[type="range"]``` will select all the range sliders in your sim. 

Starting from the top, you can use the ```:nth-child(n)``` to select a specific selector inside of a div. This is convenient, since it allows us to peg a label to a slider that will follow it wherever it goes. Add a text description of the slider with ```content``` and then position it with css. 

The CSS pseudo-selector ```::before``` acts like a coat hanger that you can hang a small HTML coat on. Anything you put here will stay attached to the hanger, and you can easily shove it back and forth on the closet rod. 



```
input[type="range"]:nth-child(1)::before {
  content: "mass";
}

input[type="range"]:nth-child(2)::before {
  content: "distance";
}

input[type="range"]:nth-child(3)::before {
  content: "angle";  
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
  
 As with the buttons, we can add classes to our slider by ```mySlider.class("random-css-class")``` and defining ```.random-css-class``` in our css file:
  
  ```
  .random-css-class {
  	font-size: 1rem;
    font-color: green;
  }
  ```
  # Responsive Sims
  
  When designing a sim, it is important to keep in mind that it may be viewed at any number of screen sizes and resolutions. For this reason, it is often useful to define dimensions in relative units rather than pixels. Rems, ems, and %s are all widely used to maintain proportions across screen sizes. 
  
  ## Making a responsive canvas
  
  In your setup function, instead of using: 
  
  ```
  createCanvas(400, 400)
  ```
  
  Try using: 
  
  ```
  createCanvas(windowWidth, windowHeight)
  ```
  If you want to store the dimensions at the time of page load for later calculations, just save them in a variable: 
  
  ```
  var w = windowWidth;
  var h = windowHeight;
  ```
  
  ## Centering a sim object
  
  You can center an object by shifting the canvas origin:
  
  ```
  push();
   translate(windowWidth / 2, windowHeight / 2);
   pop();
   ```
  Anything between the push pops will be affected by the translate. Items outside it will be unaffected. See the p5 docs for more information on how to use translate(). (Or here for another illustration)
  
  ## Resizing a canvas
  
  p5.js has a handy function built in for this:
  
  ```
  function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  }
  ```
  When the window is resized, the canvas will be rescaled. If elements of your sketch are based on percentage width or height, be sure to update w and h as well or recalculate their values in a function after resizeCanvas is called. 
  
  ## windowWidth vs width
  
  windowWidth will always give you the width of the entire browser window. 
  width will give you the width of your p5.canvas. 
  
  These can be the same thing--but not always!
  
  ## Font-scaling

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

This way, if you decide your sim needs a slightly bigger font-size, you can change it in one place and all the other values will update themselves proportionately. 
  
  
