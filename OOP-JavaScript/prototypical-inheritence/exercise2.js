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


// ************************CHILD OBJECT 1********************* //

function HtmlSelectElement(...elements) {
    this.items = [...elements];
    this.addItem = function (item) {
        this.items.push(item);
    }
    this.removeItem = function (item) {
        const index = this.items.indexOf(item);
        this.items.splice(index,1);
    }
    this.render = function () {
        // let option='';
        // for (const item of this.items) {
        //     option +=`<option> ${item} </option>\n`;
        // }
        // return '<select>\n'+option+'</select>'; 
        
        return(`
        <select>${this.items.map(item => `
        <option>${item}</option>`).join('')}
        </select>
        `)
    }
}




// *********************Child Object 2************************//

function HtmlImageElement(source) {
    this.src = source;
    this.render = function () {
        return `<img src="${this.src}"/>`
    };
}



// *********************************************************//

// do not use it because click method present instance of HtmlElement
// extend(HtmlSelectElement,HtmlElement); 

HtmlSelectElement.prototype = new HtmlElement();// reset prototype
HtmlSelectElement.prototype.constructor = HtmlSelectElement;//reset constructor

HtmlImageElement.prototype = new HtmlElement();
HtmlImageElement.prototype.constructor = HtmlImageElement;

const element = new HtmlElement();
const selectElement = new HtmlSelectElement(1,2,3,4);
const img = new HtmlImageElement();

img.src = 'https://babu.png';

console.log(element);
console.log(selectElement);
console.log(img);


const objects = [new HtmlSelectElement(1,2,3,4),new HtmlImageElement()];

for (const object of objects) {
    console.log(object.render());
}