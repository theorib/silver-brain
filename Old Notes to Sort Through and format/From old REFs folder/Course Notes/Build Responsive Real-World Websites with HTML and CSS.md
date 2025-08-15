##### 8\. Omnifood Project – Responsive Web Design | 131\. Responding to Small Laptops | 7:04

**rem** and **em** do **NOT** depend on **html font-size** in **media queries**!!

Instead, 1rem = 1em = 16px

---

##### 8\. Omnifood Project – Responsive Web Design | 131\. Responding to Small Laptops | 1:57

`<meta name="viewport" content="width=device-width,initial-scale=1.0" />` 

Essential meta tag for mobile experience to work instead of content being scaled on screen.

---

##### 7\. Omnifood Project – Setup and Desktop Version | 127\. Building the Footer - Part 2 | 24:55

Margin auto on any flex-box item makes it occupy remains space, very useful trick

---

##### 7\. Omnifood Project – Setup and Desktop Version | 126\. Building the Footer - Part 1 | 1:39

The html `<main>` element should only contain elements that don't repeat themselves in every page.

---

##### 7\. Omnifood Project – Setup and Desktop Version | 123\. Building the Call-To-Action Section - Part 1 | 19:05

To add an overlay to a background image we can use the gradient property as well as background like this: 

```css
background-image: 
linear-gradient(
      to right bottom,
      hsla(28, 80%, 61%, 0.35),
      hsla(28, 80%, 52%, 0.35)
    ),
    url('../img/eating.jpg');
```

by having the image after the gradient on the same property it means the image is overlayed by the gradient. If you want only one colour, not a gradient just use the same values for both colours and it will work.

---

##### 7\. Omnifood Project – Setup and Desktop Version | 119\. Building the Testimonials Section - Part 2 | 4:25

<img> tags are inline elements by default with a line-height that gives them an unwanted gap. we need to change them to a block element to get rid of it

---

##### 7\. Omnifood Project – Setup and Desktop Version | 104\. Responsive Design Principles | 2:05

Responsive Design Ingredients:

1. FLUID LAYOUTS  
   1. Ta allow webpage to adapt to the **current viewport** width (or even height)  
   2. Use % (or vh/vw) unit instead of px for elements that **should adapt to viewport (usually layout)**  
   3. Use max-width instead of width
2. RENSPONSIVE UNITS  
   1. Use rem unit instead of px for most legths  
   2. To make it easy to **scale the entire layout down** (or up) automatically  
   3. **Helpful trick:** setting 1rem to 10px for easy calculations
3. FLEXIBLE IMAGES  
   1. By default, images **don't scale automatically** as we change the viewport, so we need to fix that  
   2. Always use % for image dimensions, together with the max-width property
4. MEDIA QUERIES  
   1. Bring responsive sites to life!  
   2. To change CSS styles on **certain viewport widths** (called breakpoints)

---

##### 7\. Omnifood Project – Setup and Desktop Version | 100\. The 7 Steps to a Great Website | 11:00

Test and Optimize

* Make sure website works well in **all major browsers** (Chrome, Firefox, Safari, Edge, maybe even old IE)
* Test the website on **actual mobile devices**, not just in DevTools
* Optimize all **imaegs**, in terms of dimensions and file size
* Fix simple **accessibility** problems (e.g. color contrast issues)
* Run the **Lighthouse** performance test in Chrome DevTools and try to fix reported issues
* Think about **Search Engine Optimisation** (SEO)

---

##### 7\. Omnifood Project – Setup and Desktop Version | 100\. The 7 Steps to a Great Website | 11:24

Design and Build Website:

* Use decisions, content and ketches from Steps 1, 2 and 3 to **design and build the website with HTML and CSS** ("designing in the browser")
* You already have the **layout** and **components** that you selected in Step 3\. In this step, you need to design the actual **visual styles**
* Create the design based on selected **website personality,** the **design guidelines** I showed you, and **inspiration**
* Use the **client's branding** (if it exists already) for design decisions whenever possible: **colours, typography, icons,** etc.

---

##### 7\. Omnifood Project – Setup and Desktop Version | 100\. The 7 Steps to a Great Website | 8:45

Sketch

* Think about what **components** you need, and how you can use them in **layout patterns** (get inspiration)
* **Get ideas out of your head**: sketch them with **pen and paper** or with some design software (e.g. Figma)
* This is an **iterative process:** experiment with different components and layouts, until you arrive at a first good solution
* You don't need to sketch everything, and **don't make it perfect.** At some point you are ready to jump into HTML and CSS

---

##### 7\. Omnifood Project – Setup and Desktop Version | 100\. The 7 Steps to a Great Website | 5:40

Plan the Project

* Plan and gather **website content:** copy (text), images, videos, etc.
* Content is usually **provided by the client,** but you also can help them produce and find some content (simply finding free images is easiest but if they want copy, charge them extra
* For bigger sites, plan out the **sitemap**: what pages the site needs and how are they related to one another (content hierarchy)
* Based on the content, plan what **sections** each page needs in order to convey the content's message, and in which order
* Define the **website personality**

---

##### 7\. Omnifood Project – Setup and Desktop Version | 100\. The 7 Steps to a Great Website | 5:10

Define the Project:

* Define **WHO the website is for.** Is it for yourself? For a client of your agency of your freelancing business?
* Define **WHAT the website is for.** In other words, define **business and user goals** of your website project  
   * **Business goal example:** Selling premium dog food  
   * **User goal example**: Finding high-quality dog food for a good price
* Define a **Target audience.** Be really specific if possible and if it makes sense for your website (this can come from your client)  
   * **Example:** "Women, 20 to 40 year old, living in Europe, earning over 2000€/month, with a passion for dogs"

---

##### 6\. Components and Layout Patterns | 97\. Building a Web Application Layout - Part 1 | 0:36

The Process behind building a website:

1. Define
2. Plan
3. Sketch
4. Design and Build
5. Test and Optimize
6. Launch
7. Maintain and Update

---

##### 6\. Components and Layout Patterns | 86\. Web Design Rules #10 - Part 1: Elements and Components | 5:24

* **Layout Patterns**  
   * Row of boxes or cards  
   * Grid of boxes or cards  
   * Z-Pattern  
   * F-Pattern  
   * Single Column  
   * Sidebar  
   * Multi-column/Magazine  
   * Asymmetry/Experimental

---

##### 6\. Components and Layout Patterns | 86\. Web Design Rules #10 - Part 1: Elements and Components | 5:23

* **Section Components**  
   * Navigation  
   * Hero Section  
   * Footer  
   * Call-to-action Section  
   * Feature row

---

##### 6\. Components and Layout Patterns | 86\. Web Design Rules #10 - Part 1: Elements and Components | 5:21

* **Components**  
   * Breadcrumbs  
   * Pagination  
   * Alert and Status bars  
   * Statistics  
   * Gallery  
   * Feature Box  
   * Preview and profile cards  
   * Accordion  
   * Tabs  
   * Carousel  
   * Customer testimonials  
   * Custumer logos  
   * Featured-in logos  
   * Steps  
   * Forms  
   * Tables  
   * Pricing Tables  
   * Modal Windows

---

##### 6\. Components and Layout Patterns | 86\. Web Design Rules #10 - Part 1: Elements and Components | 4:23

* **Elements**  
   * Text  
   * Buttons  
   * Images  
   * Input elements  
   * Tags

---

##### 6\. Components and Layout Patterns | 86\. Web Design Rules #10 - Part 1: Elements and Components | 2:20

Design process:

1. Elements
2. Components
3. Layouts
4. Webpage

---

##### 5\. Web Design Rules and Framework | 82\. Web Design Rules #9: User Experience (UX) | 16:45

* Use a **descriptive, keyword-focused headline** on your main page. Don't be vague or fancy!
* Only include **"relevant information,** efficiently! **Cut out fluff** and make the content 100% clear
* Use **simple words**! Avoid technical jargon and "smart-sounding" words
* Break up ling text with **sub-headings, images, block quotes, bullet points,** etc.

  

eg. headlines:

"The AI assistant that grows your money."

"Automate banner production in minutes"

"Greenlight makes it easy to leave feedback on any website"

"The All-In-One Toolkit for Working Remotely.


---

##### 5\. Web Design Rules and Framework | 82\. Web Design Rules #9: User Experience (UX) | 10:08

UX

* Don't design complicated layouts. Don't reinvent the wheel. **Use patterns that users know**
* Make your call-to-action the **most prominent element**, and make the **text descriptive**
* Use **blue text** and **underline text** only for **links!**
* Animations should have a **purpose** and be **fast:** between 200 and 500ms
* In forms, align labels and fields in a **single vertical line**, to make the form **easier to scan**
* In forms, offer users **good feedback** for all actions: form errors, form success, etc.
* Place action buttons where they will create **an effect** (law of locality)

---

##### 5\. Web Design Rules and Framework | 82\. Web Design Rules #9: User Experience (UX) | 2:53

UX design goals:

* A website or application **exists for a reason:** a **user** has a goal for **visiting** it, and a **business** has a goal for **creating** it
* Good UX design **aligns** the **user's goals** with the **business' goals**

---

##### 5\. Web Design Rules and Framework | 82\. Web Design Rules #9: User Experience (UX) | 0:57

"Design is not just what is **looks like and feels like.** Design is   **how it works.**"

* **User interface (UI)** is the visual presentation of a product. It's how the graphical interface looks and feels like  
   * Layout  
   * "Personality"  
   * Typography, colours, icons, etc.
* **User Experience (UX)** is the overall experience the user has while interacting with the product  
   * Does the app feel **logical** and well thought out?  
   * Does the navigation work **intuitivelly**  
   * Are users **reaching their goals?**

---

##### 5\. Web Design Rules and Framework | 80\. Web Design Rules #8: Visual Hierarchy | 18:20

Visual hierarchy for components


* emphasise an important component using **background color**, **shadow,** or **border** (or multiple)
* **De-emphasize** component B over A will effectively emphasise component A
* What components to emphasise? **Testimonials, call-to-action sections, highlight sections, preview cards, forms, pricing tables, important rows/columns in tables,** etc.

---

##### 5\. Web Design Rules and Framework | 80\. Web Design Rules #8: Visual Hierarchy | 8:22

* For text elements, use **font size, font weight, colour**, and **whitespace** to convey importance
* What elements to emphasise? **Titles, subtitles, links, buttons, data points, icons**
* You can also **de-emphasize** less important text, like **labels** or **secondary/additional information**

---

##### 5\. Web Design Rules and Framework | 80\. Web Design Rules #8: Visual Hierarchy | 5:05

* Position important elements **closer to the top of the page**, where they get more attention
* Use images mindfully, as they draw **a lot of attention** (larger images get more attention)
* Whitespace creates separation, so **use whitespaces strategically** to emphasise elemtents

---

##### 5\. Web Design Rules and Framework | 80\. Web Design Rules #8: Visual Hierarchy | 0:25

* Visual hierarchy is about **establishing which elements** of a design **are the most important ones**
* Visual hierarchy is about **drawing attention** to these most important elements
* Visual hierarchy is about **defining a "path" for users**, to **guide** them through the page

---

##### 5\. Web Design Rules and Framework | 79\. Web Design Rules #7: Whitespace | 7:28

* **The more some elements** (or groups of elements) **belong together, the closer they should be!**
* Start with **too much** whitespace then **remove whitespace**
* Match **other design choices**. If you have big text or big icons, you need more whitespace

---

##### 5\. Web Design Rules and Framework | 79\. Web Design Rules #7: Whitespace | 1:36

* Whitespace communicates how different pieces of information are **related to one another**
* Whitespace implies **invisible relationships between elements** of a layout

---

##### 5\. Web Design Rules and Framework | 78\. Implementing Border-radius | 6:02

Big values for border radius in pixels make the border completely round as long as the value is bigger than the height of the element

---

##### 5\. Web Design Rules and Framework | 77\. Web Design Rules #6: Border-radius | 1:02

With border radius, the more serious/elegant a design is, the less border-radius it has and the more playful/fun the design, the more border radios it uses.

---

##### 5\. Web Design Rules and Framework | 76\. Implementing Shadows | 9:47

Box shadow takes up to 5 parameters:

* horizontal size
* vertical size
* blur
* spread
* colour

---

##### 5\. Web Design Rules and Framework | 75\. Web Design Rules #5: Shadows | 10:57

* Use **small shadows** for small elements that should stand out
* Use **medium-sized shadows** for larger areas that should stand out a bit more
* Use **large shadows** for elements that should really float above the interface like modal windows
* Experiment with **changing shadows** on hover
* Experiment with **glows**

---

##### 5\. Web Design Rules and Framework | 75\. Web Design Rules #5: Shadows | 5:12

The more serious/elegant the design, the less shadows you will use. On the other hand the more playful/fun the design the more shadows you will end up using.

---

##### 5\. Web Design Rules and Framework | 75\. Web Design Rules #5: Shadows | 2:28

The more shadow we add to a design the **further away from the interface the element will seem to be**

---

##### 5\. Web Design Rules and Framework | 74\. Implementing Icons | 19:49

On VSCode CMD click multiple lines to select, copy and paste

---

##### 5\. Web Design Rules and Framework | 74\. Implementing Icons | 6:05

`stroke` css property defines an icon line colour and the `fill` property the

---

##### 5\. Web Design Rules and Framework | 70\. Web Design Rules #2: Colors | 8:24

* Use the main colour to **draw attention** to the most important element of a page
* On dark coloured backgrounds, try to **use a tint of the background** ("lighter version") for text
* Text should usually not be completely black. **Lighten it up** if it looks heavy and uninviting

---

##### 5\. Web Design Rules and Framework | 68\. Web Design Rules #1: Typography | 11:39

* Less than 75 characters per line
* For normal sized text use a line height between 1.5 and 2
* For be text go below 1.5
* The **smaller** or **longer** the text the **larger** the line height needs to be
* Decrease letter spacing for headlines, if it looks unnatural
* Experiment with **all caps** for **short titles**. Make them **small** and **bold** and **increase letter-spacing**
* Usually don't justify text
* Don't centre ling text blocks. Small blocks are fine

---

##### 5\. Web Design Rules and Framework | 68\. Web Design Rules #1: Typography | 0:46

Typography is the art and technique of arranging type to make written language **legible, readable** and **appealing** when displayed

---

##### 4\. Layouts: Floats, Flexbox, and CSS Grid Fundamentals | 61\. Placing and Spanning Grid Items | 7:43

```css
        /* grid-column: 1/ 4; */
        grid-column: 1 / span 3;
```

These two ways of writing an item to span 3 cells have the same effect

To have one element to span all the way to the end we can write:

```css
        grid-column: 1 / -1;
```

---

##### 4\. Layouts: Floats, Flexbox, and CSS Grid Fundamentals | 59\. A CSS Grid Overview | 1:56

For grid elements we can use the new fr unit or auto. We can also use the repeat function like repeat(4, 1fr) to create 4 columns with 1fr

---

##### 4\. Layouts: Floats, Flexbox, and CSS Grid Fundamentals | 59\. A CSS Grid Overview | 0:29

* CSS grid is a set of **CSS properties** for **building 2-dimentional layouts**
* The main idea behind CSS grid is to **divide a container element into rows and columns** that can be filled with it's child elements
* In two-dimensional contexts, CSS Grid allows us to write **less nested HTML** and **easier-to-read CSS**
* CSS grid is **not meant to replace flex box!** Instead, they work perfectly together. Need a **1D** layout? Use flex box. Need a **2D** layout? Use CSS Grid

---

##### 4\. Layouts: Floats, Flexbox, and CSS Grid Fundamentals | 58\. Introduction to CSS Grid | 5:59

in CSS grid, the `grid-template-columns` can take any number of widths and then a column will be created with that width.

---

##### 4\. Layouts: Floats, Flexbox, and CSS Grid Fundamentals | 54\. The flex Property | 10:44

flex: _flex-grow flex-shrink flex-basis_

If only one element is declared it will be assumed it's flex-grow

---

##### 4\. Layouts: Floats, Flexbox, and CSS Grid Fundamentals | 54\. The flex Property | 4:52

**Flex-grow** will allow the element(s) to grow to fill the rest of the container or not. A flex-grow of 1 will allow elements to grow to fill the container.


If all elements have flex-grow: 1 and one element has flex-grow: 2 means that the element with flex-grow:2 can have double the size of the **available space** but not double the actual size of the elements.

---

##### 4\. Layouts: Floats, Flexbox, and CSS Grid Fundamentals | 54\. The flex Property | 2:50

**Flex-basis** is a **recommendation** for the **size** of the element but it's not really rigid if there's not enough space in the container, flex box will shrink the container by default.


Flex-shrink will control wether the element is allowed to shrinks to fit the container (default) despite the flex-basic size. if flex-shrink is set to zero then the elements won't shrink.

---

##### 4\. Layouts: Floats, Flexbox, and CSS Grid Fundamentals | 53\. Spacing and Aligning Flex Items | 5:32

The **order** of each flex element by **default** is **0**

---

##### 4\. Layouts: Floats, Flexbox, and CSS Grid Fundamentals | 52\. A Flexbox Overview | 2:55

* **Flex Container**  
   * display: flex
* **Flex Items**  
   * The direction in which flex item are layed out is called **main axis**  
   * The perpendicular axis is called **cross axis**

---

##### 4\. Layouts: Floats, Flexbox, and CSS Grid Fundamentals | 52\. A Flexbox Overview | 0:32

* **Flexbox** is a set of related **CSS properties** for **building 1-dimensional layouts**
* The main idea behind flex box is that empty space inside a container element can be **automatically divided** by its child elements
* Flexbox makes it easy to automatically **align items to another** inside a parent container, both horizontally and vertically
* Flexbox solves common problems such as **vertical centering** and creating **equal-heights columns**
* Flexbox is perfect for **replacing floats**, allowing us to write fewer and cleaner HTML and CSS code

---

##### 4\. Layouts: Floats, Flexbox, and CSS Grid Fundamentals | 47\. Clearing Floats | 6:36

```css
.cleafix::after {
  content: '';
  display: block;
  clear: both;
}
```

Hack applied to the parent element to fix the collapsing height issue without adding empty HTML elements to the document for that purpose

---

##### 4\. Layouts: Floats, Flexbox, and CSS Grid Fundamentals | 46\. Using Floats | 16:30

**Floats**

* Element is removed from the normal **flow**: "**out of** flow"
* Text and inline elements will wrap around the floated elements
* The container element will **not** adjust it's height to the floated element

---

##### 4\. Layouts: Floats, Flexbox, and CSS Grid Fundamentals | 46\. Using Floats | 14:20

If a container only has floated elements, it's height will be essentially 0, as if there was nothing inside it so unless the container has a height or padding set it will disappear from the page.

This phenomenon is called **collapsing heights**

---

##### 4\. Layouts: Floats, Flexbox, and CSS Grid Fundamentals | 46\. Using Floats | 7:28

Floating an element takes that element completely out of the page flow.

The margin and padding of an element that follows a floated element, are set in relation to their surrounding non-floated elements or container since the floated element is completely out of the flow.

---

##### 4\. Layouts: Floats, Flexbox, and CSS Grid Fundamentals | 45\. The 3 Ways of Building Layouts | 1:05

Layout gives the page a visual structure into which we place our content

* **Page Layout**
* **Component Layout**

---

##### 3\. CSS Fundamentals | 43\. CHALLENGE #3 | 18:00

On inline elements **top and bottom margins** **do not apply**, just left and right

---

##### 3\. CSS Fundamentals | 40\. Pseudo-elements | 8:52

the `::before` and `::after` pseudo elements need a `content: "";` property, even if it's only an empty string

---

##### 3\. CSS Fundamentals | 40\. Pseudo-elements | 5:40

Adjacent sibling selector selects the first sibling element that comes after the element itself. We use the + sign like this: `h3 + p` will select the first sibling p element that comes after an h3 element

---

##### 3\. CSS Fundamentals | 39\. CSS Theory #5: Absolute Positioning | 12:35

An absolutely positioned element will position itself in relation to **the first parent element up the chain that has had** `**position: relative;**` explicitly declared. If no elements had `position: relative;` it will position itself in relation to the **viewport**

---

##### 3\. CSS Fundamentals | 38\. CSS Theory #4: Types of Boxes | 21:12

Images are Inline blocks by default

---

##### 3\. CSS Fundamentals | 38\. CSS Theory #4: Types of Boxes | 15:36

**Inline Block Elements**

* Looks like inline from the **outside**, behaves like Block Level on the **_inside_**
* Occupies only content's space
* Causes no line-breaks

`display: inline-block;` 

---

##### 3\. CSS Fundamentals | 38\. CSS Theory #4: Types of Boxes | 4:22

**Inline Elements**

* Occupies only the space **necessary for it's content**
* Causes **no line-breaks** after or before the element
* Box model applies in a different way: **heights and widths do not apply**
* **Paddings and margins** are applied **only horizontally** (left and right)

**Default elements:** `a`, `img`, `strong`, `em`, `button`, etc.

**With CSS:** `display: inline;` 

---

##### 3\. CSS Fundamentals | 38\. CSS Theory #4: Types of Boxes | 2:07

**Block Level Elements:**

* Elements are formatted visually as **blocks**
* Elements occupy **100% of parent element's width**, no matter their content
* Elements are **stacked vertically** by default, one after another
* The box-model **applies as shown** earlier

Default elements: `body`, `main`, `header`, `footer`, `section`, `nav`, `aside`, `div`, `h1`\-`h6`, `p` , `ul`, `ol`, `li`, etc

**With CSS:** `display: block;` 

---

##### 3\. CSS Fundamentals | 35\. Adding Dimensions | 6:00

if an image height was specified on HTML and we want to reset it we can declare the image height to `auto` in css

---

##### 3\. CSS Fundamentals | 34\. Using Margins and Paddings | 19:23

collapsing margins fenomena: when two margins occupy the same space, they don't get added up, only one value applies (the bigger value)

---

##### 3\. CSS Fundamentals | 31\. CSS Theory #2: Inheritance and the Universal Selector | 13:02

The universal selector can be used to pass on a property that doesn't get inherited. it applies to all the elements and there is no inheritance at all

---

##### 3\. CSS Fundamentals | 30\. CSS Theory #1: Conflicts Between Selectors | 3:54

All css rules applied to an element apply but the one that has priority depends on the priority scale:

* Declarations marked !important
* Inline Styles
* ID (#) Selector
* Class (.) Selector or pseudo-class (:) selector
* Element Selector (p, div, li, etc)
* Universal selector (\*)

---

##### 3\. CSS Fundamentals | 28\. Styling Hyperlinks | 8:41

The link states are always defined in this specific order:

1. link

2. visited

3. hover

4. active

---

##### 3\. CSS Fundamentals | 28\. Styling Hyperlinks | 7:52

`a:active` is when an element is actually being clicked

---

##### 3\. CSS Fundamentals | 28\. Styling Hyperlinks | 2:22

`a:link` will target actually links which have an href attribute, selecting only "a" will not necessarily work

---

##### 3\. CSS Fundamentals | 28\. Styling Hyperlinks | 0:36

`article p:first-child {}` will look for the first child of article and if it's not a p element it won't work!

---

##### 3\. CSS Fundamentals | 27\. Pseudo-classes | 5:10

nth-child we can use some keywords like: odd, even

---

##### 3\. CSS Fundamentals | 27\. Pseudo-classes | 2:50

pseudo-classes: li:first-child

---

##### 3\. CSS Fundamentals | 26\. Working With Colors | 20:23

border is a shorthand property in which you can describe several properties

---

##### 3\. CSS Fundamentals | 24\. Combining Selectors | 5:38

```css
footer p {
}
```

Descendant selector

---

##### 3\. CSS Fundamentals | 21\. Introduction to CSS | 3:39

CSS Rule:

* Selector  
   * Declaration Block  
         * Declaration/Style  
                  * Property and Value

---

##### 3\. CSS Fundamentals | 21\. Introduction to CSS | 0:33

CSS = **C**ascading **S**tyle **S**heets

CSS describes the **visual style and presentation** of the **content written in HTML**

---

##### 2\. HTML Fundamentals | 18\. CHALLENGE #1 | 3:58

The <aside> element is used for secondary information that complements the information in the main part of the page

---

##### 2\. HTML Fundamentals | 16\. A Note on Semantic HTML | 5:37

Writing semantic HTML is important for:

* SEO
* Accessibility

---

##### 2\. HTML Fundamentals | 16\. A Note on Semantic HTML | 3:21

With HTML5 we should only use `<div>` when we **explicitly don't want to attach any meaning** to an element 

---

##### 2\. HTML Fundamentals | 15\. Structuring our Page | 4:53

the `<article>` element doesn't need to be a written article it can be anything we want to represent like a computer, a pen

---

##### 2\. HTML Fundamentals | 14\. Hyperlinks | 6:27

On `<a>` elements we need to specify an` href=""` attribute with the URL. The element doesn't work as expected without the href but we can specify an empty link with `href="#"` and we can also specify other attributes such as `target="_blank"` for opening on a new tab for example

---

##### 2\. HTML Fundamentals | 13\. Images and Attributes | 12:04

We should also always specify a `<meta charset="UTF-8" />` attribute inside the `<head>` tag

---

##### 2\. HTML Fundamentals | 13\. Images and Attributes | 10:57

`<html>` elements should always have a `lang=""` attribute with the language

---

##### 2\. HTML Fundamentals | 13\. Images and Attributes | 2:49

* `<img/>` tags need a source attribute `src=""`
* they should also always have an `alt=""` attribute for accessibility and SEO
* They can have a `width=""` and `height=""` attribute too

---

##### 2\. HTML Fundamentals | 12\. More Text Elements: Lists | 2:59

* `<ol>` Ordered List
* `<li>` List Item
* `<ul>` Unordered List

---

##### 2\. HTML Fundamentals | 11\. Text Elements | 12:56

Italic elements:

* `<i>` element that should not be used as it doesn't have any semantic meaning
* `<em>` the current element for creating italic text

---

##### 2\. HTML Fundamentals | 11\. Text Elements | 11:01

Bold elements:

* `<b>` an older element that should not be used as it doesn't have any semantic meaning
* `<strong> `the current element for creating bold text

---

##### 2\. HTML Fundamentals | 11\. Text Elements | 0:48

* There are six different headings, `<h1>` to `<h6>`
* Only use one `<h1>` element per page

---

##### 2\. HTML Fundamentals | 10\. HTML Document Structure | 6:56

1. Every HTML should start with a `<!DOCTYPE html>` tag: this lets the browser know that we are using html and that it should use the HTML5 specification
2. Next we always need to have an `<html>` element with a `<head>` and a `<body>` tag inside it
3. The `<head>`element is for things that are not visible in a browser window
4. The `<body>` will hold the content that we want to be rendered by the browser to the final user


---

##### 2\. HTML Fundamentals | 10\. HTML Document Structure | 3:27

Shortcut to create basic HTML structure: "!"

---

##### 2\. HTML Fundamentals | 9\. Introduction to HTML | 3:00

Anatomy of an HTML Element:

* Opening Tag
* Content (text, a child element)
* Closing Tag (When an element has no content it's omitted

---

##### 2\. HTML Fundamentals | 9\. Introduction to HTML | 0:19

HTML - **H**yper**T**ext **M**arkup **L**anguage

HYML is used to **structure and describe content** (not a programming language)

HTML consists of **elements** like paragraphs, links, headings, images, videos, etc

---

##### 1\. Welcome and First Steps | 3\. A High-Level Overview of Web Development | 9:35

HTML: Content (nouns)

CSS: Presentation (Adjectives)

JavaScript: Programming language (verbs)

---

##### 1\. Welcome and First Steps | 3\. A High-Level Overview of Web Development | 7:15

Dynamic website: website files are "assembled" on the server by an application using a database. This application will use backend languages such as Node.js, PHP, Python, etc running on the server

---

##### 1\. Welcome and First Steps | 3\. A High-Level Overview of Web Development | 4:21

Static website: Where files are simply sent to the browser as they are

---

##### 1\. Welcome and First Steps | 3\. A High-Level Overview of Web Development | 3:42

Front end development is developers writing the code that is displayed in the browser.

---