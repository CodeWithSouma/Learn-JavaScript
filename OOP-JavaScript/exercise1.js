// function extend(child,parent) {
//     child.prototype = Object.create(parent.prototype);
//     child.prototype.constructor = child;
// }

// *********************PARENT OBJECT****************** //

function HtmlElement() {
    this.click = function () {//instence member
        console.log('Clicked');
    }
}

// prototypical member
HtmlElement.prototype.focus = function(){
    console.log('Focused');
}

// ************************CHILD OBJECT********************* //

function HtmlSelectElement(...elements) {
    this.items = [...elements];
    this.addItem = function (item) {
        this.items.push(item);
    }
    this.removeItem = function (item) {
        const index = this.items.indexOf(item);
        this.items.splice(index,1);
    }
}

// *********************************************************//

// do not use it because click method present instance of HtmlElement
// extend(HtmlSelectElement,HtmlElement); 

HtmlSelectElement.prototype = new HtmlElement();// reset prototype
HtmlElement.prototype.constructor = HtmlElement;//reset constructor

const element = new HtmlElement();
const selectElement = new HtmlSelectElement(1,2,3,4);
console.log(element);
console.log(selectElement);