let imgbox=document.getElementById("imgbox");
let qrimage=document.getElementById("qrimage");
let qrtext=document.getElementById("qrtext");

function generateqr()
{
    qrimage.src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+qrtext.value;
    imgbox.classList.add("show-img");
    document.getElementById("sample").src="QR/images.png";
    // console.log("generateqr function called");
}
