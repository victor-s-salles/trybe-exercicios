window.onload = function(){
    


    // COR DO FUNDO ------------------------------------------------
    let select = document.querySelector('select')
    
    select.addEventListener('change', function(){
        let colorSelect = select.selectedOptions[0];
        document.body.style.backgroundColor = colorSelect.value;
        localStorage.setItem('colorBackGround', colorSelect.value)
    })

    // COR DO TEXTO -------------------------------------------------
    let selectText = document.querySelectorAll('select')[1];
    
    selectText.addEventListener('change', function(){
        let colorSelect = selectText.value;
        document.body.style.color = colorSelect;
        localStorage.setItem('colorText', colorSelect)
    })
   
    // TAMNHO DO TEXTO -----------------------------------------------
    let fontSize = document.querySelector('input[name="font-size"]');

    fontSize.addEventListener('change', function(){
        let text = document.querySelector('p');
        text.style.fontSize = `${fontSize.value}px`;
        localStorage.setItem('fonteSizeSaved', `${fontSize.value}px`)
       
    })






    // Restaura a cor de fundo salva -----------------
    let backgroundColorSaved = localStorage.colorBackGround;
    document.body.style.backgroundColor = backgroundColorSaved;

    // Restaura a cor do text salvo -----------------
    let textColorSavd = localStorage.colorText;
    document.body.style.color = textColorSavd;


    // Restaura o tamanho da fonte salva -----------------
    let fontSizeSaved = localStorage.fonteSizeSaved;
    document.querySelector('p').style.fontSize = fontSizeSaved;



  


    
   
    





























}