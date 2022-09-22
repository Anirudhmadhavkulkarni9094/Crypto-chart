let btc = document.getElementById('bitcoin');
let doge = document.getElementById("dogecoin");
let eth_cls = document.getElementById("eth-cls");
let eth = document.getElementById("eth");
let poly = document.getElementById('polygen');
let xrp = document.getElementById("xrp");

var settings = {
    "async": true,
    "scrossDomain" : true,
    "url": "https://api.coingecko.com/api/v3/simple/price?ids=ethereum%2Cdogecoin%2Cbitcoin%2Cethereum-classic%2Cpolygen%2Ccheebs&vs_currencies=usd",
    "method" :"GET",
    "header": {}
}

$.ajax(settings).done(function(res){
    console.log(res)
    btc.innerHTML = res.bitcoin.usd;
    doge.innerHTML = res.dogecoin.usd;
    eth_cls.innerHTML = res.ethereum.usd;
    eth.innerHTML = res.ethereum.usd;
    poly.innerHTML = res.polygen.usd;
    xrp.innerHTML = res.cheebs.usd;
});