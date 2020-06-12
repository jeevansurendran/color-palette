## Color - palette
This react project helps you store colors locally all the time. it uses local storage. This project uses [react-color](https://casesandberg.github.io/react-color/) to help with color picking and uses css modules to style the components.

### Question Statment

### Task
A color palette that allows users to select colors.

### Basics
The application should be a single page app with no need for navigation or routing.  On clicking the add (+) button, the user should be presented with a color picker interface to add color to a palette.

The color must be shown as a plain box with the Hex code, RGB and CMYK representations displayed below the box, as shown in the following mockup. Each color must have a label that can be edited by clicking on it. Each color box should display edit and delete controls upon mouse hover. The edit control will re-open the color picker interface while the delete control will remove the color from the palette.  

Whenever a new color is added to the palette or a change is made to one of the existing colors, the data needs to be stored in the browser’s local storage, and must persist on refreshing the page.

### Checkpoints for reference

1.	Clicking on add button opens color picker
2.	Selecting a color in picker adds it to palette
3.	Color information displayed
4.	Edit and Delete controls on hover
5.	Edit and delete works as specified
6.	Color data persist locally
7.	(Optional) Color data pushed to Firebase
 Optional Task
The app is connected to Firebase and the color data is stored in Cloud Firestore along with local storage. 



