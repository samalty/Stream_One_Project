# Testing for Stream One project

## Manual testing

### User Experience

A key part of the brief was to ensure that the site was responsive to different screen sizes and browsers, therefore contributing towards a positive user experience. By downloading a screen resolution tester as a Google Chrome extension, I was able to see how the site would appear on various platforms.

Though most of the features were designed so that they would comfortably make the transition from larger browsers to smaller screens, one recurring issue was that buttons throughout the site would retain their original width when viewed on smaller screens, leaving them disproportionately large. Changing the unit of measurement from px to % was an effective solution to this problem.

### Lightbox (media page)

I expected the images in my image gallery to expand when clicked on, and revert back to their thumbnail format when the user clicks again. However, I encountered initial problems collapsing my lightbox and therefore achieving the latter.

I eventually achieved this by displaying thumbnails of each image, which were themselves nested inside anchor tags. Clicking on one of these links would open a lightbox spanning the entire page, featuring an expanded version of the image, all contained within a separate anchor tag. This anchor tag link would be undefined, meaning clicking anywhere on the lightbox would collapse it and bring the page back to its original format.

### Toggle buttons & image carousel (events page)

A key feature of this site is an image carousel which is responsive to interaction with a separate set of toggle buttons, which each expand and collapse to reveal text which the adjacent image is intended to accompany. For example, a user will click the 'line-up' button. This button will expand to reveal details of the artists who will be performing, whilst the image carousel slides to an image of one of the performing acts. 

Being more of an aesthetic feature, the JavaScript logic behind this isn't particularly well suited to unit testing. However, I was able to make sure that the code was behaving exactly as intended by opening developer tools in the browser and examining changes to the code as I toggled between buttons. Most importantly, the active div in the image carousel would change when the corresponding button was clicked, which itself would change from 'none' to 'block' display.

## Testing with Jasmine

### Contact form with validation

Automated tests were conducted through Jasmine to ensure that the JS code designed to add valdiation to the contact form was fully functional. Evidence of this testing can be found...

Notes:

Part of testing is creating a checklist of things that you manually tested as a human. I.e. ‘Initially, when I would shrink the screen, the image in my jumbotron carousel would fail to fill out the frame, so I did X, Y and Z.’

Bullet point list in a README file, listing tests conducted.

‘As a website user, when I view to site on my mobile phone, I expect to be able to see all of the information.’

Explain what you expected to do, and how you achieved it.

Lightbox e.g.:

I expect the images in the gallery to expand when clicked on, whilst enabling the user to return to the page in its original format when clicking away from the expanded image.

Test logic for form. Is it a valid email address? This can be tested in Jasmine relatively easily.
