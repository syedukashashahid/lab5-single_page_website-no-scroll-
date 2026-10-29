## Syed Ukasha Shahid - Portfolio website
======================================


## Folder structure
----------------
portfolio/
  index.html                        page structure and all six sections
  style.css                         colours, layout, animations, responsive rules
  script.js                         section switching, keyboard, swipe, copy buttons
  assets/
    profile.jpg                     profile photo 
    profile.webp                    same photo, smaller file 
    Syed_Ukasha_Shahid_CV.pdf       CV used by "View My CV" / "Download CV"

## Prompt
# Prompt: Create a Premium No-Scroll Interactive CV Portfolio Website

Act as a senior UI/UX designer and expert front-end developer. Create a **premium, modern, interactive CV portfolio website** for **Syed Ukasha Shahid**, using the CV information provided below.

The website must be a **single-page, full-screen portfolio experience**. It must NOT be a traditional scrolling website or a multipage website. All portfolio sections must appear inside one fixed viewport, and users must navigate between them using the navbar. Clicking a navbar item should smoothly transition the content in the central hero area, like switching slides in an interactive presentation.

Use your full creativity to produce a visually impressive, professional, memorable website suitable for internship applications, entry-level software developer jobs, and professional networking.

## 1. Technical Requirements

Use only:

- HTML5
- CSS3
- Vanilla JavaScript

Do not use React, JSX, TypeScript, Bootstrap, Tailwind CSS, or any front-end framework.

Create exactly three files:

- `index.html`
- `style.css`
- `script.js`

The website must run locally by opening `index.html` in a browser.

## 2. Core Website Concept: No Scrolling, Only Slide Navigation

This is the most important requirement.

- The entire website must fit inside the browser viewport at all times.
- Disable vertical and horizontal page scrolling using CSS.
- Do not use a conventional long-page layout.
- Do not create separate HTML pages for About, Skills, Projects, Education, or Contact.
- All sections must exist inside the same HTML document.
- Clicking a navbar item must change the active content panel inside the main display area.
- Use smooth slide, fade, or reveal transitions when switching sections.
- Only one content panel should be active and visible at a time.
- Keep the navbar and persistent interface elements in fixed positions.
- The content must never cause the page to overflow horizontally or vertically.
- Make the design responsive for desktop, laptop, tablet, and mobile screens.
- Use internal panel scrolling only as an absolute last resort; instead, redesign and condense content to fit the viewport.
- Ensure text, buttons, project details, and navigation remain accessible on smaller screens.

Use CSS such as `height: 100dvh`, `width: 100%`, `overflow: hidden`, and `box-sizing: border-box` where appropriate. Avoid rigid dimensions that break on smaller screens.

**Expected interaction:** When the user clicks “Projects,” the current panel transitions away and the Projects panel appears in the same space. The browser page itself must not move or scroll.

## 3. Visual Direction and Color Theme

Create a bold, premium visual identity using a sophisticated black, white, and vibrant orange palette.

- Rich Black: `#191919`
- Pure White: `#FFFFFF`
- Vibrant Orange: `#FF9F0A`
- Warm Ivory: `#F5F3E8`
- Sand Beige: `#E8E4D8`
- Muted Gray: `#77766F`

Use rich black as the primary background, warm ivory or white for readable content, and vibrant orange for important accents, active navigation, buttons, indicators, and selected details.

The design should feel like a combination of a high-end creative portfolio, a modern software developer's personal brand, and an editorial presentation.

Avoid a generic template appearance. Use strong typography, elegant spacing, subtle borders, layered surfaces, tasteful gradients, and carefully controlled animations.

Do not overuse glassmorphism, excessive shadows, gradients, or decorative effects.

## 4. Overall Layout

Create a full-screen application-like interface with three main areas:

### A. Top navigation bar

Keep a compact navbar at the top of the viewport.

On the left:
- A custom `US` monogram designed using HTML and CSS.
- Text label: `UKASHA.SHahID` or a similarly polished personal-brand wordmark.

In the center or right:
- Home
- About
- Skills
- Projects
- Education
- Contact

Navigation requirements:

- Clicking any item changes the active content panel.
- Highlight the active item with orange text, a small orange indicator, or an animated underline.
- Include hover and focus states.
- Show a compact menu on mobile without causing overflow.
- Keep the navbar visible when switching panels.
- The Home item must return to the introductory hero panel.

### B. Main content stage

The main area should occupy all available space between the navbar and the bottom status/footer area.

Every section must render inside this same stage.

Create a reusable panel structure with an active class and JavaScript-controlled transitions. Use CSS transforms and opacity for smooth slide changes.

Make the transitions polished but quick. Respect the user's reduced-motion preferences.

### C. Minimal bottom status bar

At the bottom, add a subtle footer that remains visible across all panels.

Possible content:

`BS COMPUTER SCIENCE · QARSHI UNIVERSITY`

On the opposite side:

`LAHORE, PAKISTAN` and a small orange status indicator with the text `OPEN TO OPPORTUNITIES`.

Keep it compact so it never pushes the page beyond the viewport.

## 5. Panel 1 — Home / Hero

This is the first panel shown when the website loads.

Design a visually striking two-column composition.

**Left side:**

A small uppercase label:

`COMPUTER SCIENCE STUDENT · ASPIRING SOFTWARE DEVELOPER`

A large headline:

**Building practical ideas into digital experiences.**

Below it, a short introduction:

“I'm Syed Ukasha Shahid, a BS Computer Science student at Qarshi University, Lahore. I enjoy exploring software development, programming, and web technologies while building practical projects that strengthen my technical skills.”

Add two buttons:

- `Explore My Work` — switches to the Projects panel.
- `View My CV` — downloads the provided CV PDF.

Also include a small text link or button that switches to the Contact panel.

**Right side:**

Display my actual profile picture, which I will provide separately.

- Use a polished portrait frame with rounded or asymmetrical geometry.
- Add a thin orange outline or a small orange decorative element.
- Use a subtle background shape or grid.
- Include a small floating label such as `BSCS · CLASS OF 2028`.
- Keep the image professional and prominent.
- Do not replace my real photo with an unrelated stock image.
- Do not distort the photo or use excessive filters.

If my photo has not yet been supplied, create a graceful placeholder that can easily be replaced later.

Add a small slide counter, such as `01 / 06`, and a subtle animated cue suggesting that users can explore the sections through the navbar.

Do not add a vertical scroll indicator because scrolling is not part of the experience.

## 6. Panel 2 — About Me

Create a visually balanced panel with an editorial layout.

Heading:

**A little about me.**

Content:

“I'm a BS Computer Science student at Qarshi University with a foundation in programming, object-oriented programming, data structures, and database systems. I'm interested in building practical software and web applications, learning modern development techniques, and strengthening my problem-solving abilities through hands-on projects.”

Add three compact information cards or visual facts:

- **Degree:** BS Computer Science
- **University:** Qarshi University
- **Expected Graduation:** 2028

Add a short personal statement:

“My goal is to grow into a capable software developer by combining strong fundamentals with real-world project experience.”

Use concise content, typography, and visual elements rather than long paragraphs. Everything must fit within the main stage without scrolling.

## 7. Panel 3 — Technical Skills

Create a visually engaging technical-skills dashboard.

Group the skills into clear categories.

**Programming Languages**
- C
- C++
- Java
- Python
- SQL

**Web Development**
- HTML5
- CSS3

**Core Computer Science**
- Object-Oriented Programming (OOP)
- Data Structures and Algorithms
- Database Management Systems (DBMS)
- Operating Systems

**Tools and Technologies**
- Java Swing
- NetBeans
- MySQL
- Microsoft Office

Use a clean grid, compact skill cards, typographic labels, or minimal visual indicators.

Requirements:

- Do not invent skill proficiency percentages.
- Do not describe me as an expert in technologies without evidence.
- Do not add technologies that are not included in my CV.
- Do not make the skill cards too large.
- Ensure all categories fit in the viewport.
- Use orange accents to highlight category names or selected skills.

The result should look like a well-organized developer skills dashboard rather than a generic list of progress bars.

## 8. Panel 4 — Projects

Create a portfolio-style project showcase.

Display the two projects from my CV in an attractive two-card layout.

### Project A: Bus Management System

**Technologies:** Java, Java Swing, OOP, NetBeans

Description:

“A desktop application designed to support bus management operations, including route scheduling, ticket booking, digital passes, bus allocation, staff management, and feedback management.”

Use a custom CSS-generated illustration of a desktop management interface, dashboard widgets, route lines, or ticket cards.

Do not claim that the project includes features that are not stated in my CV.

### Project B: Shineo — Maid Finder Website

**Technologies:** HTML5, CSS3

Description:

“A website concept that connects users with nearby domestic service providers, helping users explore and find suitable household services.”

Create an original CSS-based conceptual website preview with clean service cards and a modern layout.

Because I do not have project screenshots available, use original CSS-built mockups rather than fabricated screenshots or unrelated stock images.

Each project card should contain:

- Project title
- Short description
- Technology tags
- A custom visual preview
- A subtle hover or reveal animation

If project links are not provided, do not invent live URLs, GitHub repositories, or demo links. Instead, display a simple label such as `ACADEMIC PROJECT` or `WEB DEVELOPMENT PROJECT`.

The two cards must fit comfortably within the viewport.

## 9. Panel 5 — Education

Present my education history as a compact visual timeline or a polished academic-history layout.

### Current Degree

**BS Computer Science**

Qarshi University, Lahore, Pakistan

- Current semester: 5th
- Expected graduation: 2028

### Intermediate

**Intermediate — ICS / Pre-Engineering**

Punjab Group of Colleges

- Completed: 2024

### Matriculation

**Matriculation**

Nishat Boys High School

- Completed: 2022

Use orange timeline markers, subtle connecting lines, and concise descriptions.

Make the current degree the most prominent entry.

Do not invent grades, achievements, awards, certifications, or academic distinctions.

## 10. Panel 6 — Contact

Create a polished contact panel with a strong headline:

**Let's build something meaningful.**

Supporting text:

“I'm interested in internship opportunities, entry-level software development roles, and opportunities to learn through practical projects.”

Display my contact information:

- **Email:** syedukashashahid@gmail.com
- **Phone:** +92 309 5236098
- **Location:** Lahore, Pakistan

Add clean buttons or links:

- `Send an Email` — opens a `mailto:` link using my email address.
- `Call Me` — opens a `tel:` link using my phone number.
- `Download CV` — downloads my CV PDF.

If no LinkedIn, GitHub, or other profile URLs have been supplied, do not invent them. Make it easy to add those links later.

Keep the design minimal, clear, and professional.

## 11. CV Download Functionality

Provide a functional CV download button.

Use this expected file path:

`assets/Syed_Ukasha_Shahid_CV.pdf`

The button should link to the PDF using HTML, with an appropriate `download` attribute.

Do not create a fake download interaction or claim that the PDF exists if it has not been placed in the project directory. Add a clear code comment explaining where I should place my CV file.

## 12. Navigation and JavaScript Behavior

Implement the panel-switching functionality in vanilla JavaScript.

Requirements:

1. Load the Home panel by default.
2. When a navbar item is clicked, identify the matching panel.
3. Animate the outgoing panel and incoming panel using CSS transitions.
4. Update the active navbar item.
5. Update the slide counter, such as `03 / 06`.
6. Support keyboard navigation where practical.
7. Support the browser's left and right arrow keys to switch between panels when focus is not inside an input or another interactive control.
8. Prevent unwanted page scrolling.
9. Keep all navigation within the same HTML document.
10. Ensure buttons such as `Explore My Work` switch to the correct panel.
11. Do not use `window.location` to navigate to separate section pages.
12. Do not use JavaScript to force the browser to reload between panels.

Use clear, beginner-friendly JavaScript with comments. Do not use unnecessary libraries.

## 13. Responsive Design

The no-scroll rule must also be considered on smaller screens.

**Desktop and laptop:**
- Use a full-screen two-column layout where appropriate.
- Keep the navigation compact.
- Display the profile photo and content side by side.
- Use generous but controlled spacing.

**Tablet:**
- Reduce gaps and font sizes as needed.
- Preserve the visual hierarchy.
- Keep all content inside the viewport.

**Mobile:**
- Use a compact navbar or menu.
- Stack content only when it fits within the available height.
- Scale down images and headings intelligently.
- Use compact cards and concise descriptions.
- Do not allow horizontal overflow.
- Do not introduce vertical page scrolling.
- Ensure buttons remain usable and text remains readable.

If a mobile screen cannot comfortably fit a panel's content, simplify the visual layout and condense the presentation instead of enabling page scrolling.

Test the design at several viewport sizes, including approximately 1440×900, 1366×768, 1024×768, 768×1024, and 390×844.

## 14. Accessibility and Code Quality

- Use semantic HTML5 elements.
- Add descriptive alternative text to the profile image.
- Ensure sufficient contrast between text and background.
- Provide visible keyboard focus states.
- Use accessible button labels.
- Respect `prefers-reduced-motion`.
- Avoid flashing or overly fast animations.
- Keep JavaScript separate from HTML.
- Use CSS custom properties for colors.
- Keep the code organized, readable, and commented.
- Avoid console errors.
- Avoid unnecessary external dependencies.
- Use no horizontal or vertical page scrolling.
- Ensure inactive panels cannot accidentally receive keyboard focus.
- Use proper ARIA attributes where needed for navigation and panel states.

## 15. Final Deliverables

Generate the complete source code for:

1. `index.html`
2. `style.css`
3. `script.js`

Also explain the project folder structure, including:

- `assets/profile.jpg` — my profile picture
- `assets/Syed_Ukasha_Shahid_CV.pdf` — my CV PDF

Use placeholder paths only for assets that I have not supplied.

Make sure the files work together without requiring a framework or build process.

Before finishing, verify the following:

- The website opens successfully.
- The Home panel appears first.
- Clicking each navbar item changes the content inside the same viewport.
- No separate page is loaded.
- The browser page does not scroll vertically or horizontally.
- The design remains usable at desktop and mobile sizes.
- The profile image can be replaced easily.
- The CV download path is clearly documented.
- No fake project URLs, certifications, or achievements have been added.

**Final creative direction:** Build a premium, interactive developer portfolio that feels like a fullscreen digital presentation, not a traditional website. Make it visually distinctive, professional, and memorable while keeping the implementation simple enough for a BS Computer Science student to understand and maintain.

