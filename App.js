const input=document.getElementById('input');
const button=document.getElementById('clickBtn');
const spiner=document.getElementById('spiner');
const img=document.getElementById('mainQr');
button.onclick=()=>
{
    spiner.style.display='block';
    const value=document.getElementById('input').value;
    
    img.onload=()=>
    {
        spiner.style.display='none';
    }
    const link=`https://quickchart.io/qr?text=${value}`;
    img.src=link;
    const fond=document.getElementById('main').classList.add('main-qr1');
    img.style.display='block'
}

input.oninput=()=>
{
    spiner.style.display='none';
    img.style.display='none'
    const fond=document.getElementById('main').classList.remove('main-qr1');
}