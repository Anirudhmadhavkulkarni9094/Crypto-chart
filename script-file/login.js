let form = document.querySelector('.form');

let login_btn = document.getElementById('login');



login_btn.addEventListener('click', (res) => {
    res.preventDefault();
    form.innerHTML = `<form class="login-form">            
    <h1 class="close" id="close">&#10060</h1>           
    <div class="email">
        <h4 class="email-title">Enter your email</h4>
        <input  class="email-input" type="email" placeholder="enter your mail">
    </div>
    <div class="password">
        <h4 class="password-title">Enter Password</h4>
        <input type="password" class="password-input" placeholder="enter your passsword">
    </div>
    <div class="submit-btn">
        <button type="submit" id="submit" class="submit">Submit</button>
    </div>            
</form>
`
    let close_btn = document.getElementById('close')
    let body = document.getElementById('blur');
    body.style.filter = "blur(10px)";

    close_btn.addEventListener('click', (res1) => {
        res1.preventDefault()
        form.innerHTML = " ";
        body.style.filter = "blur(0px)"
    })
    
})
// let btn = document.getElementById('submit');
// btn.addEventListener('click', () => {
//     form.innerHTML = " ";
// })

