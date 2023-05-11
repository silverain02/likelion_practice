let cnt = 0;

//빈 객체 생성
let data = {};

const isEmpty = localStorage.getItem("data"); //
if(isEmpty===null){
    cnt=0;
}else{
    console.log("스토리지 채워져 있음")
    //스토리지에 있는 파일 불러와 세팅
    //cnt=data.num;
    const getData=JSON.parse(localStorage.getItem("data"));
    console.log(getData);
    cnt = getData.num
    console.log(cnt);
    for(i=1;i<=cnt;i++){
        console.log("loadData");
        let elemName = "elem" + i;
        let todo_list= document.getElementById("todo_list");
        
        /*
        console.log("로드데이터")
        let getElem=JSON.parse(getData.elem2);
        console.log(getElem);
        */

        /**
         * 스토리지 파일 뷰에 추가
         */

        //요소 생성
        let list_elem = document.createElement("div")
        list_elem.className="elem";
        list_elem.id="elem"+cnt;
        console.log(list_elem.className);
        list_elem.innerText = getData.elemName;

        //요소 추가
        todo_list.appendChild(list_elem);

        //체크 박스 생성
        let ck_box = document.createElement("input");
        ck_box.type="checkbox"
        ck_box.className="ck_box"
        ck_box.id="ck_box"+cnt;
        //체크 박스 추가
        ck_box_list.appendChild(ck_box);
    }
}

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
    list_elem.innerText = item

    //요소 추가
    todo_list.appendChild(list_elem);

    //체크 박스 생성
    let ck_box = document.createElement("input");
    ck_box.type="checkbox"
    ck_box.className="ck_box"
    ck_box.id="ck_box"+cnt;
    //체크 박스 추가
    ck_box_list.appendChild(ck_box);

    /**
     * 입력 데이터 data객체의 프로퍼티로 추가
     */
    const key = "elem"+cnt;
    data[key] = item;
    data.num = cnt;

    //스토리지 업데이트
    localStorage.setItem("data",JSON.stringify(data));
}

const reset =()=>{
    //스토리지 전체 초기화
    localStorage.clear();

    //새로고침을 뷰도 삭제
    location.reload()
}

