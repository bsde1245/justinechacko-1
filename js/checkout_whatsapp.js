---
---
var text ='';
simpleCart.ready(function() {
  simpleCart.each(function(item, x) {
    text += encodeURI(item.get('id') +' Name - ' + item.get('name'));
    text += encodeURI(item.get('id') +' Color- '+ item.get('color'));
    text += encodeURI(item.get('id') +' Size - '+item.get('size'));
    text += encodeURI(item.get('id') +' Qty - '+item.get('quantity'));
    text += encodeURI(item.get('id') +' Price - '+item.get('price'));
    text += encodeURI(item.get('id') +' Total - '+item.get('total'));
  });
});
text +='Grand Total - '+simpleCart.grandTotal();
    // var text = document.querySelector('.whatsapp_checkout').innerHTML;
    var p = document.querySelector('.whatsapp_checkout2');
    console.log(text);
    var a = document.createElement('a');
    var mobile = '{{ site.mobile }}';
    a.className = 'btn btn-success';
    a.href = 'https://wa.me/91'+ mobile +'?text='+text;
    a.innerHTML = 'Book through Whatsapp';
    p.append(a);