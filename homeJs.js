const sidebar = document.getElementById('sidebar');
const content = document.getElementById('menu');

function toggleSidebar() {

    if (sidebar.style.left === "0px") {
        sidebar.style.left = "-250px";
        content.style.marginLeft = "0";
    } else {
        sidebar.style.left = "0";
        content.style.marginLeft = "250px";
    }
    let menuBtn = document.querySelector('#hamburger');
    menuBtn.classList.toggle('active');
}

// function toogleMenu(){
//     let menuBtn = document.querySelector('#hamburger');
//     menuBtn.classList.toggle('active');
// }

function addStyle(idNme, called){
    const head = document.querySelector('head');
    
    // const body = document.querySelector('body');
    
    const chekAtribut = head.querySelector('link:last-of-type').getAttribute("href");
    const getAttribute = "ajax/" + idNme + "/" + idNme + ".css";
    
    if(called === 1){
        head.querySelector('link:last-of-type').remove();
    }else{
        if(chekAtribut === getAttribute){
            head.querySelector('link:last-of-type').remove();
        }
    }
    const newStyeel = document.createElement('link');
    head.appendChild(newStyeel);

    document.querySelector('link:last-of-type').setAttribute("rel", "stylesheet");
    document.querySelector('link:last-of-type').setAttribute("href", "ajax/" + idNme + "/" + idNme + ".css");
   
    // const script = body.querySelector('script');
    // const newScript = document.createElement('script');
    // body.insertBefore(newScript, script);
    // document.querySelector('script:first-of-type').setAttribute("src", "ajax/" + idNme + "/" + idNme + ".js");
}

$(document).ready(function() {
    //evet ketika keyword di tulis
    let called = 0;

    // $('#kalkulator').on('click', function(){
    $('#sidebar a').on('click', function(e){
            target = e.target.getAttribute('id');
            console.log(target);
            try{
                //const classActive = document.getElementById(target);
                const classActive = document.querySelector('.opsiActive');
                if(classActive !== null){
                    // console.log(classActive);
                    classActive.classList.remove('opsiActive');
                    // console.log(document.getElementById(target).classList);
                }
            }catch(e){
                console.log(e);
            }
            document.getElementById(target).classList.add('opsiActive')

            $.get('ajax/'+ target +'/'+ target +'.html', function(data){
            $('.content').html(data);
            addStyle(target, called);
            called = 1;
            // $('.loading').hide();
            toggleSidebar();
        });
    });

    $('#header a').on('click', function(e){
        target = e.target.getAttribute('id');
        console.log(target);
        try{
            //const classActive = document.getElementById(target);
            const classActive = document.querySelector('.opsiActive');
            if(classActive !== null){
                // console.log(classActive);
                classActive.classList.remove('opsiActive');
                // console.log(document.getElementById(target).classList);
            }
        }catch(e){
            console.log(e);
        }
        document.getElementById(target).classList.add('opsiActive')

        $.get('ajax/'+ target +'/'+ target +'.html', function(data){
        $('.content').html(data);
        addStyle(target, called);
        called = 1;
        // $('.loading').hide();
        toggleSidebar();
    });
});


});
