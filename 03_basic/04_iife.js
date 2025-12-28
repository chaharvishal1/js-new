// Immideately Invoked Function Expression


(function sayHello(){
    console.log('Hi, everyone');
})();

(()=> {
    console.log('Bye, everyone');
})();

((name)=> {
    console.log(`Hi, ${name}`);
})('Vishal')