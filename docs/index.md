# MarkDoc 

## A simple, lightweight Markdown static site generator using Express.

MarkDoc is made using Express and the package [`markdown-folder-to-html`](https://www.npmjs.com/package/markdown-folder-to-html). 

### Writing

*All the files in `_docs` directory is treated as separate HTML pages.*
**The `docs` directory is where all the `.md` files are located and `_docs` is where all the HTML files of the converted markdown files are located.**

To write a new page, create a `.md` file in the `docs` folder. Once you type in all the markdown text in the file, in the console run 
```
npm run docs
```

That will convert the md files into `.html`, which is stored in the `_docs` folder. The URL of that page goes by the file name. 

In the `_docs` folder, which can be edited using the `index.md` file in the `docs` folder, there is a `index.html` file which is the main page of your website. 

### Default template

The basic HTML structure of your webpage is located in the `template.html` file in the `docs` folder. 
```
<!DOCTYPE html>
<html>
  <head>
    <link rel="stylesheet" href="/style.css" />
    <title>Blog Post</title>
  </head>
  <body>
    <div id="layout">
      
      
      <nav id = "menu">
        <!--NAV-->
      </nav>

      <article id = "main" class = "content">
        <!--CONTENT-->
      </article>
    </div>

    <script>
      // FROM http://purecss.io/js/ui.js
      (function(window, document) {
        var layout = document.getElementById("layout"),
          menu = document.getElementById("menu"),
          menuLink = document.getElementById("menuLink");

        function toggleClass(element, className) {
          var classes = element.className.split(/\s+/),
            length = classes.length,
            i = 0;

          for (; i < length; i++) {
            if (classes[i] === className) {
              classes.splice(i, 1);
              break;
            }
          }
          // The className is not found
          if (length === classes.length) {
            classes.push(className);
          }

          element.className = classes.join(" ");
        }

        menuLink.onclick = function(e) {
          var active = "active";

          e.preventDefault();
          toggleClass(layout, active);
          toggleClass(menu, active);
          toggleClass(menuLink, active);
        };
      })(this, this.document);
    </script>
  </body>
</html>

```

You can edit the template however you like, but remember to add `<!--NAV-->` to wherever you want the navigation bar should be and add `<!--BODY-->` to where the page content should be. Also, you can modify the structure of each of the HTML files in the `_docs` folder.

### Custom Styles

All the styles are located in `public/style.css`. These styles are applied to all the pages. You can also modify 

### Creating subdivisions

You can add a folder in `docs` and add files, and this will act as subdivisions for pages!

**When adding folders to act as subdivisions, make sure to add it in the `docs` folder and not `_docs` folder as the folders will not be shown!**

By Khaleel Gibran