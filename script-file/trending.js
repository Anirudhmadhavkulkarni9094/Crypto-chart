let trend = document.getElementById('trending');

function createElem(coin_name){
    let trend_coin = document.createElement('div');
    trend_coin.className= "trend_coin";
    trend_coin.id = "trend_coin";
    let trend_coin_img = document.createElement('img');
    trend_coin_img.src=`${coin_name.thumb}`
    trend_coin.appendChild(trend_coin_img);
    trend.appendChild(trend_coin);
}

var trending_list = {
    "async": true,
    "scrossDomain" : true,
    "url": "https://api.coingecko.com/api/v3/search/trending",
    "method" :"GET",
    "header": {}
}

$.ajax(trending_list).done(function(res){
    console.log(res)
    
    for(let i=0;i<7;i++){
        let trend_coin = document.createElement('div');
        trend_coin.className= "trend_coin";
        trend_coin.id = "trend_coin";

        let trend_coin_img = document.createElement('img');
        trend_coin_img.src=`${res.coins[i].item.thumb}`
        trend_coin_img.className = "images";

        let coin_name = document.createElement('h1');
        coin_name.className='coin_name';
        coin_name.innerHTML= `${res.coins[i].item.name}`;

        let coin_market = document.createElement('h4');
        coin_market.className = 'coin_market';
        coin_market.innerHTML=`${res.coins[i].item.market_cap_rank}`;

        let coin_price = document.createElement('h3');
        coin_price.className = " coin_price";
        coin_price.innerHTML = `BTC-${res.coins[i].item.price_btc}`
        
        let score = document.createElement('h3');
        score.className = "score";
        score.innerHTML = `${res.coins[i].item.score}`;
        
        trend_coin.appendChild(trend_coin_img);
        trend_coin.appendChild(coin_name);
        trend_coin.appendChild(coin_market)
        trend_coin.appendChild(coin_price);
        trend_coin.appendChild(score)
        trend.appendChild(trend_coin);
    }
});