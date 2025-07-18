
let globalVar = 'global-var';

const regularFunction = function (){
    let blockVar = 'block-1-var';
    console.log(globalVar, blockVar);
}

const arrowFunction = () => {
    let blockVar2 = 'block-2-var';
    // console.log(globalVar, blockVar, blockVar2); // ReferenceError: blockVar is not defined
    console.log(globalVar, blockVar2);
    console.log('arrowFunction this: ', this);
    this.variable1 = 'aaaaa';
    console.log('this.variable1: ', this.variable1);
}

regularFunction();
arrowFunction();

const painel = {
    titlePainel: 'Painel 1',
    showRegularFunction() { // it can be showRegularFunction: function () { 
        setTimeout(() => {
            console.log("regular - The title is: ", this.titlePainel);
        }, 500)
    },
    arrowThis: () => this, // empty object
    configureArrowThis: () => {
        this.attr1 = 'Atribute one';
        console.log('this.attr1 = ', this.attr1);
    }
};

painel.showArrowFunction = () => {
    setTimeout((titlePainel) => {
        console.log("arrow -  The title is: ", titlePainel);
    }, 500, painel.titlePainel); // we must initialize the object first
};

console.log('arrowThis: ', painel.arrowThis());
painel.configureArrowThis();
painel.showRegularFunction();
painel.showArrowFunction();