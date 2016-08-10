# ionic-spped-dial

Fly icons for ionic platform.

## Features

* Multiple Submenus
* Mange the click events of submenus
* Dynamic ionic icons


## Usage

Get the files from github or install from bower:
```
bower ionic-spped-dial
```


Include `ispeed-dial.js`  in your index.html:

```html

<script src="lib/ionic-speed-dial/src/js/speed-dial.js"></script>

```


Add the module `ionic-speed-dial` to your application dependencies:

```javascript

angular.module('starter', ['ionic', 'ionic-speed-dial'])

```

And you're ready to go.


## Directives

### speed-dial

This directive will transform the element into a fly or floating menu . By clicking the main fly icon sub items of fly menu will be opened . You can also handle the click of sub items.
For this to work the following conditions must apply:

* The element you use this directive must be clickable.
* The directive requires an inner attribute "funhandler" to be set on the element to manage the submenus click events.
* The directive expects an inner attribute "config" to define the basic configuration .
`


