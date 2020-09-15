$(".home").on('click', function(){
	$('body,html').animate({ scrollTop: 0 }, 300);
});

$(".sobre").on('click', function(){
	let altura = $("#home").height() - $("nav").height();
	$('body,html').animate({ scrollTop: altura }, 300);
});

$(".servicos").on('click', function(){
	let altura = $("#home").height() + $("#sobre").height();
	$('body,html').animate({ scrollTop: altura }, 300);
});

$(".clientes").on('click', function(){
	let altura = $("#home").height() + $("#sobre").height() + $("#sec-servicos").height() + 60;
	$('body,html').animate({ scrollTop: altura }, 300);
});

$(".orcamentos").on('click', function(){
	let altura = $("#home").height() + $("#sobre").height() + $("#sec-servicos").height() + $("#clientes").height() + 170;
	$('body,html').animate({ scrollTop: altura }, 300);
});

$(".contato").on('click', function(){
	let altura = $("#home").height() + $("#sobre").height() + $("#sec-servicos").height() + $("#clientes").height() + $("#orcamento").height() + 250;
	$('body,html').animate({ scrollTop: altura }, 300);
});