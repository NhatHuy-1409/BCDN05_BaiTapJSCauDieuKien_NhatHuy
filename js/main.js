/**Bài-1: Xuất 3 số theo thứ tự tăng dần
 * Sơ đồ 3 khối:
 * Khối 1: Input:
 * Nhập vào 3 số a,b,c
 * 
 * Khối 2:
 * B1/Tạo biến và gán 3 số a,b,c của người dùng nhập vào
 * B2/So sánh các số:
 * Nếu a>b>c => Xuất ra c<b<a
 * Nếu a>c>b => Xuất ra b<c<a
 * Nếu b>a>c => Xuất ra c<a<b
 * Nếu b>c>a => Xuất ra a<c<b
 * Nếu c>a>b => Xuất ra b<a<c
 * Nếu c>b>a => Xuất ra a<b<c
 * Nếu tất cả trường hợp trên sai => Xuất ra "Vui lòng chọn đúng số"
 * 
 * Khối 3: Output:
 * Xuất ra các số theo thứ tự tăng dần
 */

function sapXepTang() {
    var a = Number(document.getElementById("inpSo1").value);
    var b = Number(document.getElementById("inpSo2").value);
    var c = Number(document.getElementById("inpSo3").value);

    if(a>b && b>c) {
        document.getElementById("txtSxTang").innerHTML = "Thứ tự tăng dần: " + c + " < " + b + " < " + a;
    }
    else if(a>c && c>b) {
        document.getElementById("txtSxTang").innerHTML = "Thứ tự tăng dần: " + b + " < " + c + " < " + a;
    }
    else if(b>a && a>c) {
        document.getElementById("txtSxTang").innerHTML = "Thứ tự tăng dần: " + c + " < " + a + " < " + b;
    }
    else if(b>c && c>a) {
        document.getElementById("txtSxTang").innerHTML = "Thứ tự tăng dần: " + a + " < " + c + " < " + b;
    }
    else if(c>a && a>b) {
        document.getElementById("txtSxTang").innerHTML = "Thứ tự tăng dần: " + b + " < " + a + " < " + c;
    }
    else if(c>b && c>a) {
        document.getElementById("txtSxTang").innerHTML = "Thứ tự tăng dần: " + a + " < " + b + " < " + c;
    }
    else{
        document.getElementById("txtSxTang").innerHTML = "Vui lòng nhập đúng số";
    }
}

/**Bài-2: Chương trình "Chào hỏi"
 * Sơ đồ 3 khối:
 * Khối 1: Input:
 * Nhập vào tên thành viên trong gia đình
 *
 * Khối 2:
 * B1/Tạo biến và gán giá trị tên thành viên do người dùng nhập vào:
 * tenThanhVien 
 * B2/Xét các trường hợp:
 * Nếu tenThanhVien = "Bố" => Xuất ra xin chào Bố
 * Nếu tenThanhVien = "Mẹ" => Xuất ra xin chào Mẹ
 * Nếu tenThanhVien = "Anh trai" => Xuất ra xin chào Anh trai
 * Nếu tenThanhVien = "Em gái" => Xuất ra xin chào Em gái
 * Nếu không đúng các trường hợp trên => Xuất ra "Vui lòng chọn thành viên"
 * Khối 3: Output:
 * Xuất ra lời chào thành viên được chọn
 */

function chaoHoi() {
    var tenThanhVien = document.getElementById("inpChaoHoi").value;

    switch (tenThanhVien) {
        case "bo" : document.getElementById("txtChaoHoi").innerHTML = " Xin chào Bố"; break;
        case "me" : document.getElementById("txtChaoHoi").innerHTML = " Xin chào Mẹ"; break;
        case "anhtrai" : document.getElementById("txtChaoHoi").innerHTML = " Xin chào Anh trai"; break;
        case "emgai" : document.getElementById("txtChaoHoi").innerHTML = " Xin chào Em gái"; break;
        default: document.getElementById("txtChaoHoi").innerHTML = "Vui lòng chọn thành viên";
    }
}

/**Bài-3: Đếm số lẻ và chẵn
 * Sơ đồ 3 khối:
 * Khối 1: Input:
 * Nhập vào 3 số
 * 
 * Khối 2:
 * B1/Tạo biến và gán giá trị 3 số do người dùng nhập vào:
 * a,b,c
 * B2/Tạo biến lưu số lượng số lẻ và chẵn
 * soLe=0
 * soChan=0
 * B3/Xét từng số
 * Nếu a%2 = 0 => soChan+=1 
 * Nếu b%2 = 0 => soChan+=1 
 * Nếu c%2 = 0 => soChan+=1 
 * soLe = 3-soChan
 * B4/ Xuất kết quả
 * sochan
 * sole
 * Khối 3: Output:
 * Xuất ra bao nhiêu số lẻ và chẵn
 */

function demSo() {
    var a = Number(document.getElementById("inpSoA").value);
    var b = Number(document.getElementById("inpSoB").value);
    var c = Number(document.getElementById("inpSoC").value);

    var soLe = 0;
    var soChan = 0;

    if(a%2 == 0) {
        soChan+=1;
    }
    if(b%2 == 0) {
        soChan+=1;
    }
    if(c%2 == 0) {
        soChan+=1;
    }
    
    soLe = 3 - soChan;
    document.getElementById("txtDemSo").innerHTML = "Có " + soLe + " số lẻ và có " + soChan + " số chẵn.";
}

/**Bài-4: Đoán hình tam giác
 * Sơ đồ 3 khối:
 * Khối 1: Input:
 * Nhập vào đọp dài 3 cạnh tam giác
 * 
 * Khối 2:
 * B1/Tạo biến và gán giá trị 3 số do người dùng nhập vào:
 * canhA,canhB,canhC
 * B2/Xét từng trường hợp
 * Nếu canhA = canhB = canhC => tam giác đều
 * Nếu canhA = canhB != canhC  => tam giác cân
 * Nếu canhC^2 = canhA^2 + canhB^2 => tam giác vuông
    Nếu ko thỏa mãn các điều kiện trên => Một loại tam giác nào đó
 * Khối 3: Output:
 * Xuất ra loại tam giác
 */

function doanHinhTamGiac() {
    var canhA = Number(document.getElementById("inpCanhA").value);
    var canhB = Number(document.getElementById("inpCanhB").value);
    var canhC = Number(document.getElementById("inpCanhC").value);

    if(canhA == canhB && canhA == canhC) {
        document.getElementById("txtDoanHinh").innerHTML = "Hình tam giác đều";
    }
    else if(canhA == canhB || canhA == canhC || canhB == canhC) {
        document.getElementById("txtDoanHinh").innerHTML = "Hình tam giác cân";
    } 
    else if (Math.pow(canhA,2) == Math.pow(canhB,2) + Math.pow(canhC,2) || Math.pow(canhB,2) == Math.pow(canhA,2) + Math.pow(canhC,2) ||Math.pow(canhC,2) == Math.pow(canhA,2) + Math.pow(canhB,2)){
        document.getElementById("txtDoanHinh").innerHTML = "Hình tam giác vuông";
    }
    else {
        document.getElementById("txtDoanHinh").innerHTML = "Một loại tam giác nào đó";
    }
}