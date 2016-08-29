# ionic-speed-dial

Sass based Animted Fly Menus for ionic platform.

## Features

* Multiple Submenus
* Mange the click events of submenus
* Dynamic ionic icons


## Usage

Get the files from github or install from bower:
```
bower install ionic-speed-dial
```


Include `speed-dial.js` in your index.html:

```html

<script src="lib/ionic-speed-dial/src/js/speed-dial.js"></script>
<link href="lib/ionic-speed-dial/src/scss/speed-dial.scss" rel="stylesheet">

```
Include `speed-dial.scss` in your ionic.app.scss:
```html
@import "www/lib/ionic-speed-dial/src/scss/speed-dial.scss"

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

Add the below directive to your template file. 
```
<speed-dial funhandler="speedHander(data);" config="speedDialConfig"></speed-dial>
```
#### Config
* __status__: Menu open or close status [true/false]
* __menuImage__: Icon name for main floating icon . e.g. ```ion-plus``` 
* __menuBackground__: Background color for main floating icon .  e.g. ```#ff1744``` 
* __menuColor__: Icon color for main floating icon . e.g. ```#ffffff```
* __subMenuBackground__: Default Background color for submenus floating icon .  e.g. `#ff1744` 
* __submenus__: Submenu objects separated by comma for sub items  . e.g`submenus:[{icon:'ion-bag',background :'#d500f9',color:''},{icon:'ion-map',background :'#64ffda',color:'#000000'}]`

Example of config and event override of menu and submenu in controller.
```
 $scope.speedDialConfig ={
	status:true,
	menuImage:'ion-plus',
	menuBackground :'#ff1744',
	menuColor:'#ffffff',
	subMenuBackground : '#ff1744',
	submenus:[{icon:'ion-bag',background :'#d500f9',color:''},{icon:'ion-map',background :'#64ffda',color:'#000000'}]
 }
 $scope.speedHander = function(subMenuindex){
	switch(subMenuindex){
		case 1: console.log('submenu1');break;
		case 2: console.log('submenu2');break;
		default : break;
	}
 }
})
```
