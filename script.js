document.getElementById("passwordForm").addEventListener("submit", function(event) {
    event.preventDefault(); // 폼 기본 제출 동작 방지

    var password = document.getElementById("passwordInput").value;

    if (password === "0412") {
        // 내 생일을 기억해 주다니 흙ㄱ흑흑ㅜㅠ 이 페이지를 캡쳐해서 깨톡으로 보내라! 까까 사주겠다!!
        document.getElementById("result").style.display = "block";
    } else {
        alert("이노오오오ㅗ옴!!! 이런 머저리!! 이거 하나도 못마추느냐 사람이 비번을 설정하면 당연히 뭐로 설정 하겠어 제일 떠올리기 쉬운거 뭔데");
    }
});
