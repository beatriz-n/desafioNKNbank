// validação dos campos com bootstrap
(function () {
    'use strict'
  
    var forms = document.querySelectorAll('.needs-validation')
  
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
        }, false)
      })
  })()
// mascara do campo telefone
  const handlePhone = (event) => {
    let input = event.target
    input.value = phoneMask(input.value)
  }
  
  const phoneMask = (value) => {
    if (!value) return ""
    value = value.replace(/\D/g,'')
    value = value.replace(/(\d{2})(\d)/,"($1) $2")
    value = value.replace(/(\d)(\d{4})$/,"$1-$2")
    return value
  }
  const myForm = document.getElementById("myForm");
  myForm.addEventListener('submit',gravar);
// evita de fechar o formulario
function gravar(e){
  e.preventDefault();
  const formData = new FormData(this);
  const searchParams = new URLSearchParams();

    for(const par of formData){
      // incluir parametros dentro do formdata
      searchParams.append(par[0],par[1],par[2],par[3],par[4]);
    }
// enviar informação atraves do request
    fetch('cadastrousuario.php',{
      method:'POST',
      body:formData
    }).then(function(response){
      document.getElementById('nome').value=" ";
      document.getElementById('datanascimento').value=" ";
      document.getElementById('email').value=" ";
      document.getElementById('senha').value=" ";
      document.getElementById('whatsapp').value=" ";
      return alert('OK');
    }).catch(function(error){
      console.log('error');
    })
  }
