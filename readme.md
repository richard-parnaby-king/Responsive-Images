Responsive Pictures
===================

# Introduction

Making images responsive has become the next biggest headache of web designers and developers.

A proposal for the HTML5 specification was the <picture> element:

<picture>
    <source media="(min-width: 60em)" src="/images/banner-1024.jpg" />
    <source media="(min-width: 35em)" src="/images/banner-600.jpg" />
    <source src="/images/banner-320.jpg" />
    <img src="/images/banner-320.jpg" alt="SEO text here"/>
</picture>

As no browser supports the picture element, the above code will not be rendered except for the img element.

This jQuery plugin self-executes to replace picture elements with an img pointing to the appropriate image source.

# Usage

<script type="text/javascript" src="/path/to/jquery.html5pictures.js"></script>

This plugin self-executes so there is no need to call any init functions.