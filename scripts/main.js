$().ready(function() {
    $('#coda-slider-2').codaSlider({
       autoSlide: true,
       autoSlideInterval: 6000,
       autoSlideStopWhenClicked: true	

    });
});


let getCurrencies = () => {
    $.ajax({
        url: `https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json`,
        success: (data) => {
            let htmlStr = '';            
            for (let currency of data) {
                if(currency.cc == "USD") {
                   htmlStr += `<div>USD/UAH: ${currency.rate.toFixed(2)}</div><br>`;
                   }
                if(currency.cc == "EUR") {
                   htmlStr += `<div>EURO/UAH: ${currency.rate.toFixed(2)}</div>`;
                   }
                if(currency.cc == "GBP") {
                   htmlStr += `<div>GBP/UAH: ${currency.rate.toFixed(2)}</div><br>`;
                   }
            }

            
            $('div #rates').html(htmlStr);
        }
    })
};




getCurrencies();

