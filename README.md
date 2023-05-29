# BMI Calculator

So this is a simple BMI Calculator web application that allows users to calculate their BMI based on their height and weight inputs. Once the user enters their height and weight in the input fields and clicks the "Compute BMI" button, the application calculates the BMI using the formula (weight in kilograms divided by the square of height in meters).

The calculated BMI value is displayed on the output display with two decimal places. The application also displays the weight condition based on the calculated BMI value, which can be either underweight, normal weight, overweight, or obesity.

The application is built using HTML, CSS, and JavaScript. The HTML defines the structure of the page, including the input fields, button, and output display. The CSS sets the styling of the page, including the background color, font family, and positioning of the elements. The JavaScript is used to calculate the BMI and weight condition based on user input and display the results on the page.

Overall, this is a simple yet functional application that can help users quickly determine their BMI and weight condition.

## Demo

You can try out the application by visiting [this link](https://paribhandarkar.github.io/BMI-calculator/).

## Technologies Used

- HTML
- CSS
- JavaScript

## Getting Started

To get started with this project, clone the repository and open the `index.html` file in your preferred web browser.

## Challenges I faced

Throughout this project, I faced a few challenges that I had to overcome. The biggest one was realizing that the input function takes in strings and not numbers, which caused me to get "NaN" as the answer. Once I realized this, I was able to convert the input to a number, and the problem was solved.

I also encountered an issue with rounding the BMI value to two decimal places with the toFixed() method. Although I was familiar with its usage, I couldn't get it to work for some reason. This situation is typical in coding when everything appears correct, yet there's no output. Nevertheless, after some experimentation, it unexpectedly began functioning, and I was able to round the value to two decimal places.

![image](https://github.com/paribhandarkar/BMI-calculator/assets/76446574/3df932b5-84e3-442e-b9a2-437ee778a8f0)
