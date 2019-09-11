$( document ).ready(function() {
  $("#inpt").keyup(function(){
    var entrada = $("#inpt").val()
    var arr = Array.from(entrada);
    var copia = $("#tra-d")
    var textcopia = copia.html(`<span>${arr}</span>`);
/*Correccion entrada*/
    $(textcopia).each(function() {
    var text = $(this).text();
    $(this).text(text.replace(/a,a/g, "aa").replace(/A,h/g, "ah").replace(/e,i/g, "ei").replace(/e,y/g, "ey")
                     .replace(/i,i/g, "ii").replace(/i,r/g, "ir").replace(/o,o/g, "oo").replace(/u,r/g, "ur")
                     .replace(/u,u/g, "uu").replace(/, /gi, "-"));
 });
 /*Correccion entrada*/
 /*sustitucion salida*/
 /*FUNCIONAL*/
    var txtrplc = $("#tra-d").text()
    var out = $("#tra-t").html(txtrplc)/*out contiene el texto reemplazado y corregido*/

    $(out).each(function() {
    var text = $(this).text().toUpperCase();
    $(this).html(text.replace(/A/g, `<img src="daedra/a.svg"></img>`).replace(/B/g, `<img src="daedra/b.svg"></img>`).replace(/C/g, `<img src="daedra/c.svg"></img>`)
    .replace(/D/g, `<img src="daedra/d.svg"></img>`).replace(/E/g, `<img src="daedra/e.svg"></img>`).replace(/F/g, `<img src="daedra/f.svg"></img>`)
    .replace(/G/g, `<img src="daedra/g.svg"></img>`).replace(/H/g, `<img src="daedra/h.svg"></img>`).replace(/I/g, `<img src="daedra/i.svg"></img>`)
    .replace(/J/g, `<img src="daedra/j.svg"></img>`).replace(/K/g, `<img src="daedra/k.svg"></img>`).replace(/L/g, `<img src="daedra/l.svg"></img>`).replace(/M/g, `<img src="daedra/m.svg"></img>`)
    .replace(/N/g, `<img src="daedra/n.svg"></img>`).replace(/O/g, `<img src="daedra/o.svg"></img>`).replace(/P/g, `<img src="daedra/p.svg"></img>`)
    .replace(/Q/g, `<img src="daedra/q.svg"></img>`).replace(/R/g, `<img src="daedra/r.svg"></img>`).replace(/S/g, `<img src="daedra/s.svg"></img>`).replace(/T/g, `<img src="daedra/t.svg"></img>`)
    .replace(/U/g, `<img src="daedra/u.svg"></img>`).replace(/V/g, `<img src="daedra/v.svg"></img>`).replace(/W/g, `<img src="daedra/w.svg"></img>`)
    .replace(/X/g, `<img src="daedra/x.svg"></img>`).replace(/Y/g, `<img src="daedra/y.svg"></img>`).replace(/Z/g, `<img src="daedra/z.svg"></img>`).replace(/,/g,""));
  });
})/*keyup*/

  $(".alfabeto-d div").click(function(event) {
    var text = $($(this)).clone();
    $(".touch").append(text);
  });
  $("#borrar").click(function(){
    $(".touch div").last().remove()
  })
  $(".clear-d").click(function(){
    $(".touch div").remove()
  })
  $("#touch").on('click' ,function(event){
    $($(this).toggleClass("tc"));
    $("#touch .br").toggleClass("break");
  });
  $(".space-d").click(function(event){
    $("#touch div:last").after("<div class='br'>--</div>")
  });
  $(".tra-t").click(function(){
    $(this).toggleClass("grows");
  })
});/*document.ready*/
