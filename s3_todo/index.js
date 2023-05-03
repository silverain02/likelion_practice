let cnt = 0;
const submit = () => {
    cnt+=1;

    console.log("함수실행");
    let item = document.getElementById("item").value;
    let todo_list= document.getElementById("todo_list");

    //요소 생성
    let list_elem = document.createElement("div")
    list_elem.className="elem";
    list_elem.id="elem"+cnt;
    console.log(list_elem.className);
    list_elem.innerText = "- "+item

    //요소 추가
    todo_list.appendChild(list_elem);
}