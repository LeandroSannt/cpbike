$(function() {

  $('.select').selectpicker();

  var maskBehavior = function (val) {
    return val.replace(/\D/g, '').length <= 11 ? '000.000.000-000000' : '00.000.000/0000-00'; 
  },
  options = {onKeyPress: function(val, e, field, options) {
          field.mask(maskBehavior.apply({}, arguments), options);
      }
  };

  $('#cpf_cnpj').mask(maskBehavior, options);

  $('#cpf_cnpj').change("input", function (e) {
    if($('#cpf_cnpj').val().length == 18) {
      $('#inscricaoestadual').prop('required', true);
    } else {
      $('#inscricaoestadual').prop('required', false);
    }
  });


})

$(function () {

  $('.cpf_cnpj').change(function( e ) {

    if ( $(this).val().length > 10) {

      $.ajax({
        url: '/clientes/get_bycpnj',
        data: { term: $(this).cleanVal() },
        success: function(data) {
          if ( data['data_nascimento'] ) {
            var ano = data['data_nascimento'].substring(0, 4);
            var mes = data['data_nascimento'].substring(5, 7);
            var dia = data['data_nascimento'].substring(8, 10);
            var str = ano+"-"+mes+"-"+dia
            $('.data_nasc').val(str)
          }
          $('.cliente_id option[value='+data['cpf_cnpj']+']').prop('selected',true)
          $('.cliente_id option[value!='+data['cpf_cnpj']+']').prop('selected',false)
          $('#cpf_cnpj').val($('#cpf_cnpj').masked(data['cpf_cnpj']))
          $('.nome').val(data['nome'])
          $('.telefone1').val(data['telefone1'])
          $('.rg').val(data['rg'])
          $('.email').val(data['email'])
          $('.cep').val(data['cep'])
          $('.logradouro').val(data['logradouro'])
          $('.numero').val(data['numero'])
          $('.complemento').val(data['complemento'])
          $('.bairro').val(data['bairro'])
          $('.cidade').val(data['cidade'])
          $('#estado').val(data['estado'])
          $('#estado').trigger('change',data['cidade_id'])
        },
        error: function(jqXHR, textStatus, errorThrown) {
          alert("CPF não cadastrado!");
          $(".cliente_id option[value='*']").prop('selected',true)
          $(".cliente_id option[value!='*']").prop('selected',false)
          $('.nome').val('')
          $('.telefone1').val('')
          $('.rg').val('')
          $('.email').val('')
          $('.cep').val('')
          $('.logradouro').val('')
          $('.numero').val('')
          $('.complemento').val('')
          $('.bairro').val('')
          $('.data_nasc').val('')
        }
      });

    }
  });


  $('.cliente_id').change(function( e ) {

    if ( $(this).val().length > 10) {

      $.ajax({
        url: '/clientes/get_bycpnj',
        data: { term: $(this).val() },
        success: function(data) {
          if ( data['data_nascimento'] ) {
            var ano = data['data_nascimento'].substring(0, 4);
            var mes = data['data_nascimento'].substring(5, 7);
            var dia = data['data_nascimento'].substring(8, 10);
            var str = ano+"-"+mes+"-"+dia
            $('.data_nasc').val(str)
          }
          $('#cpf_cnpj').val($('#cpf_cnpj').masked(data['cpf_cnpj']))
          $('.nome').val(data['nome'])
          $('.telefone1').val(data['telefone1'])
          $('.rg').val(data['rg'])
          $('.email').val(data['email'])
          $('.cep').val(data['cep'])
          $('.logradouro').val(data['logradouro'])
          $('.numero').val(data['numero'])
          $('.complemento').val(data['complemento'])
          $('.bairro').val(data['bairro'])
          $('.cidade').val(data['cidade'])
          $('#estado').val(data['estado'])
          $('#estado').trigger('change',data['cidade_id'])
        },
        error: function(jqXHR, textStatus, errorThrown) {
          alert("CPF não cadastrado!");
          $('.cpf_cnpj').val('')
          $('.nome').val('')
          $('.telefone1').val('')
          $('.rg').val('')
          $('.email').val('')
          $('.cep').val('')
          $('.logradouro').val('')
          $('.numero').val('')
          $('.complemento').val('')
          $('.bairro').val('')
          $('.data_nasc').val('')
        }
      });

    }else if( $(this).val() == '*' ){
          $('.cpf_cnpj').val('')
          $('.nome').val('')
          $('.telefone1').val('')
          $('.rg').val('')
          $('.email').val('')
          $('.cep').val('')
          $('.logradouro').val('')
          $('.numero').val('')
          $('.complemento').val('')
          $('.bairro').val('')
          $('.data_nasc').val('')
    }

  });

  $(".cep").change( function() {

    $.ajax({
      url: "/cidades/get_bycep",
      type: "GET",
      data: {cep: $(this).val()},
      success: function(data) {
        $('.logradouro').val(data['logradouro'])
        $('.numero').val(data['numero'])
        $('.complemento').val(data['complemento'])
        $('.bairro').val(data['bairro'])
        $('#estado').val(data['estado'])
        $(".cidade_id").append("<option selected='selected' value="+data['cidade_id']+">"+data['cidade_nome']+"</option>");
      },
      error: function(jqXHR, textStatus, errorThrown) {
        alert("error handler!");
      }
    })

  })

  $("#estado").change( function(ev,id) {

    $.ajax({
      url: "/cidades/get_byestado",
      type: "GET",
      data: {estado: $(this).val()},
      success: function(data) {
        $(".cidade_id").empty();
        for(i = 0; i < data.length; i++) {
          $(".cidade_id").append("<option value="+data[i]['id']+">"+data[i]['nome']+"</option>");
        }
        $(".cidade_id").val(id)
      },
      error: function(jqXHR, textStatus, errorThrown) {
        alert("error handler!");
      }
    })

  });

})

//Scripts acima pertencem ao _cliente da view vendas