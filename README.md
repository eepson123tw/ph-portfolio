# Ph-Portfolio

I am attempting to build a fancy web portfolio using React Three Fiber. The centerpiece of the webpage is a phone, which can be scrolled or moved around interactively.

![Phone Portfolio](https://github.com/eepson123tw/ph-portfolio/assets/75103330/4340a9c8-f165-4e99-969a-9e8f5badd52d)

## Models
Phone and a little man (or spirit?)

## Features
1. When the width is less than 600, a little man will appear, suggesting the use of computer mode for a better viewing experience and improved performance. The little man will also perform a dancing animation.

   ![Little Man Animation](https://github.com/eepson123tw/ph-portfolio/assets/75103330/140ed3dc-b364-4341-b843-8eb4139a628a)

2. Floating text displaying the creator's name.

3. Inside the iframe, I am building a portfolio showcasing my skillset and work experience. However, this part is still a work in progress.

   ![Portfolio Showcase](https://github.com/eepson123tw/ph-portfolio/assets/75103330/7502799d-959b-46b7-964e-fcc21b22961f)

4. Finally, there is a "Contact Me" page where you can get in touch with me.It is a real feature which you can send me some message.
   
![image](https://github.com/eepson123tw/ph-portfolio/assets/75103330/7acd076e-6d74-4ba5-8d62-fba9dba78f1a)


## Issues
- I encountered an error due to the GPU limit of the browser. It restricted me to render only 16 contexts, which made it necessary to remove some features. I hope that in the future, browsers will allow more contexts. [Link to Issue](https://stackoverflow.com/questions/59140439/allowing-more-webgl-contexts)

### Based on
- I used an iframe to insert another portfolio inside the phone, inspired by a tutorial on [YouTube](https://www.youtube.com/watch?v=0fYi8SGA20k&t=3486s&ab_channel=JavaScriptMastery). However, I made some changes to the canvas and render settings and fixed some CSS errors. It has been a great project for practicing React Three Fiber and other exciting packages. I am truly grateful for this opportunity.

- I highly recommend visiting [this page](https://threejs-journey.com/) to learn more about Three.js.

