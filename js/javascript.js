window.onload = function() {
  carregarFilmes('')
}

function carregarFilmes(title) {
  if(title == '') {
    title = 'liga_da_justica'
  }
  $(document).ready(function(){
    $('#frame').attr('src', 'pages/'+title+'.html');
  });
}

