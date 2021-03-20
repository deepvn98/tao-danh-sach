
let list=new Array()
function MakeList() {
    let c="";
    for (i = 0; i < list.length; i++) {
        c += "<tr><td>"+list[i]+"</td><td><button onclick="+"xoa("+i+")"+">Xoá</button><button onclick="+"sua("+i+")"+">sửa</button></td> </td></tr>"

    }
    document.getElementById("hienthi").innerHTML = c;
}
//thêm mới sản phẩm
function them(){
    let a=document.getElementById("input").value;
    list.push(a);
    MakeList()
}
function xoa(index){
    list.splice(index,1)
    MakeList()

}
function sua(index){
    let sua=prompt("nhập tên sản phẩm");
    list[index]=sua;
    MakeList()

}