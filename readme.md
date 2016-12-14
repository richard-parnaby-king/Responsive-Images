Responsive Pictures
===================

# Introduction

Making images responsive has become the next biggest headache of web designers and developers.

A proposal for the HTML5 specification was the <picture> element:
```html
<picture>
    <source media="(min-width: 60em)" srcset="/images/banner-1024.jpg" />
    <source media="(min-width: 35em)" srcset="/images/banner-600.jpg" />
    <source src="/images/banner-320.jpg" />
    <img src="/images/banner-320.jpg" alt="SEO text here"/>
</picture>
```
As no browser supports the picture element, the above code will not be rendered except for the img element.

This jQuery plugin self-executes to replace picture elements with an img pointing to the appropriate image source. It will use the first picture source with a valid media query, so it is strongly recommended to place the largest image source first. If the picture source does not have a media attribute, the plugin shall set it as having min-width:0 (show on all browser sizes).

# Usage
```html
<script type="text/javascript" src="/path/to/jquery.html5pictures.js"></script>
```

**Do not include the script directly from GitHub (http://raw.github.com/...).** The file is being served as text/plain and as such being blocked in Internet Explorer on Windows 7 for instance (because of the wrong MIME type). Bottom line: GitHub is not a CDN.

Use the above html with the largest image first scaling down.

This plugin self-executes so there is no need to call any init functions.
