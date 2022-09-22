form = document.querySelector('.form');

let signup_btn= document.getElementById('signup');



signup_btn.addEventListener('click',()=>{
    form.innerHTML = `<form class="login-form">            
    <h1 class="close" id="close">&#10060</h1>           
    <div class="email">
        <h4 class="email-title">Enter your email</h4>
        <input  class="email-input" type="email" placeholder="enter your mail">
    </div>
    <div class="password">
        <h4 class="password-title">Enter Password</h4>
        <input type="password" class="password-input" placeholder="enter your passsword">
        <input type="password" class="password-input" placeholder="Re-enter your passsword">
    </div>
    <div class="submit-btn">
        <button type="submit" class="submit">Submit</button>
    </div>            
</form>
`
let close_btn = document.getElementById('close')
let body = document.getElementById('blur');
let BBLI =document.getElementById("BBLI")
body.style.filter= "blur(10px)";


close_btn.addEventListener('click',()=>{
    form.innerHTML= " ";
    body.style.filter= "blur(0px)"
    BBLI.style.filter = "blur(0px)";
})
})