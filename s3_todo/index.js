const submit = () => {
    console.log("함수실행");
    let item1 = document.getElementById("item1")
    let item2 = document.getElementById("item2")
    let item3 = document.getElementById("item3")

    let elem1 = document.getElementById("elem1")
    let elem2 = document.getElementById("elem2")
    let elem3 = document.getElementById("elem3")

    elem1.innerText = '1. '+item1.value;
    elem2.innerText = '2. '+item2.value;
    elem3.innerText = '3. '+item3.value;

}