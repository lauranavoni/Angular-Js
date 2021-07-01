angular.module('estilosApp').filter('miFiltro', function($filter){
    return function(valor){
    var mayuscula =$filter ('uppercase');
    var minuscula =$filter ('lowercase');

    return mayuscula(valor[0])+ minuscula(valor.substr.(1,valor.length));
    }
})