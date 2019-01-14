# Project for Stream One

This is a static website built to help promote Blasé Music Club and its activities. The primary aim of this website is to 
promote an upcoming event hosted by Blasé Music Club. Users can access this website to familiarise themselves with Blasé 
Music Club, and stay up-to-date with the latest goings on. The website shares information about the club, details about 
upcoming events, and relevant media. It also provides links to sites where users can purchase tickets for upcoming events, 
as well as sharing links to Blasé Music Club's various social media platforms. The website also includes a contact page 
containing a form with validation.

## UX

The aim of this project was to provide a visually appealing and easy-to-use platform by which followers of Blasé Music 
Club can keep abreast of the latest goings on, and specifically to promote an upcoming event.

- As an end user, I want to access the club's website, so that I can learn more about it
- As an end user, I want to access the club's website, to find out about upcoming events
- As an end user, I want to access the club's website, to view images and videos from previous events
- As an end user, I want to access the club's website, to find out where to purchase tickets
- As an end user, I want to access the club's website, to reach out to its organisers about future events
- As an end user, I want to find links to relevant social media, to help keep me informed of the latest news
- As an end user, I want to find links to relevant social media, to share content

Mockups created for this project can be found in the 'planning' folder.

## Features

- Information accordion buttons which expand on-click incorporating jQuery logic
- A jQuery-powered image carousel which toggles images in response to the aforementioned accordion buttons
- Incorporation of audio and video, as well as an image gallery
- Lightbox enabling users to expand and exit images within the gallery
- Contact form with custom validation

## Technologies Used

- Bootstrap
	- The **Bootstrap** front-end framework was used to help give the project a simple, responsive, and mobile-friendly layout
- JavaScript
	- **JavaScript** was to introduce interactive components to the website, namely a custom validation function for the contact form
- jQuery
	- In many instances, the Javascript code was simplified using **jQuery**, the custom logic being available within 'static/js' 
- HTML
    - **HTML** was used to structure the website
- CSS
    - The appearance of the website was enhanced using **CSS**, the stylesheet for which is available within 'static/css'

## Testing

### UX & cross-browser

A key part of the brief was to ensure that the site was responsive to different screen sizes and browsers, therefore 
contributing towards a positive user experience. By downloading a screen resolution tester as a Google Chrome extension, 
I was able to see how the site would appear on various platforms.

Though most of the features were designed so that they would comfortably make the transition from larger browsers to smaller 
screens, one recurring issue was that buttons throughout the site would retain their original width when viewed on smaller 
screens, leaving them disproportionately large. Changing the unit of measurement from px to % was an effective solution to 
this problem.

The app was extensively tested across a range of browsers on both Windows and Mac operating systems, including Chrome, IE, 
Firefox, Microsoft Edge, and Opera, using CrossBrowserTesting.com's free service.

### Lightbox (media page)

I expected the images in my image gallery to expand when clicked on, and revert back to their thumbnail format when the user 
were to click again. However, I encountered initial problems collapsing my lightbox and therefore achieving the latter. I 
eventually achieved this by displaying thumbnails of each image, which were themselves nested inside anchor tags. Clicking on 
one of these links would open a lightbox spanning the entire page, featuring an expanded version of the image, all contained 
within a separate anchor tag. This anchor tag link would be undefined, meaning clicking anywhere on the lightbox would collapse 
it and bring the page back to its original format.

### Toggle buttons & image carousel (events page)

A key feature of this site is an image carousel which is responsive to interaction with a separate set of toggle buttons, each 
of which expand and collapse to reveal text which the adjacent image is intended to accompany. For example, a user will click the 
'line-up' button. This button will expand to reveal details of the artists who will be performing, whilst the image carousel slides 
to an image of one of the performing acts. 

Being more of an aesthetic feature, the JavaScript logic behind this isn't particularly well suited to unit testing. However, I was 
able to make sure that the code was behaving exactly as intended by opening developer tools in the browser and examining changes to 
the code as I toggled between buttons. Most importantly, the active div in the image carousel would change when the corresponding 
button was clicked, which itself would change from 'none' to 'block' display.

### Jasmine testing

Testing of the form validation logic was conducted using the Jasmine framework, with testing being documented within the 'jasmine' 
folder. The specs test the function's response to instances where the name field is left blank, where the email field is left blank, 
where the email address is invalid, and where the form has been completed with valid credentials. Further tests were added to ensure 
that the correct alerts were retrieved in each instance. There were initial issues, as it appeared the customSpec.js file was unable 
to identify the validateForm function within the custom.js file. Ultimately, I replicated the validateForm function within the 
customSpec.js file to overcome this problem. 

## Deployment

To launch this project:

1. Click the 'clone or download' button near the top of the page and copy the link
2. Go into Cloud9 and create a new workspace
3. Within this workspace, paste the link in the space labelled 'clone from Git or Mercurial URL', before selecting a blank template
4. Once the project has been cloned, open any of the HTML files in the workspace and press the 'run' button at the top of the page
5. Click the hyperlink that will appear in the bash terminal upon running the project

This website is also live at: https://samalty.github.io/Stream_One_Project/

## Credits

### Content

Some of the copy used to on the website has been lifted from Blasé Music Club's social media page, with full permission from the owner.

### Media

All images, video and audio used on the site were provided courtesy of Blasé Music Club and were used with full permission.