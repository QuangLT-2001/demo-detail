$(document).ready(function(){
    const a = [{
        id: 1,
        name: "name 1",
        img_source: "",
        img_alt: " asd 2weqwe1",
    
    },
    {
        id: 2,
        name: "name 2",
        img_source: "",
        img_alt: "nasdfasd we1",
     
    },
    {
        id: 3,
        name: "name 1123",
        img_source: "",
        img_alt: "nasdqwe 42weqwe1",
        
    },
    {
        id: 4,
        name: "name 1sdfsdf32weqwe1",
        img_source: "",
        img_alt: "123asdsad",
      
    }, {
        id: 5,
        name: "namsdfsdfe 132weqwe1",
        img_source: "",
        img_alt: "nasdasdasd   fwer322342weqwe1",
    
    }, {
        id: 6,
        name: "nsdfasdfe sdf132weqwe1",
        img_source: "",
        img_alt: "nas123342weqwe1",
    
    }, {
        id: 7,
        name: "namsfsdfsdf sfqwe1",
        img_source: "",
        img_alt: "nasdfweadasdr322342weqwe1",
      
    }, {
        id: 8,
        name: 'add',
        img_source: "",
        img_alt: "nasdfwer322342weqwe1",
        
    },
    ];
            // <div class="product-box">
            //     <a href="#">
            //         <div>
            //             <img src="" alt="product-name">
            //             <p>
            //                 name
            //             </p>
            //         </div>
            //     </a>
            // </div>
    const bo = $('.product')
    $.each(a, function(ind,val){
        let _f = `
        <div class="product-box">
        <a href="detail.html?cate-id=${val.id}">
            <div>
                <img src="${val.img_source}" alt="${val.img_alt}">
                <p>
                    ${val.name}
                </p>
            </div>
        </a>
     </div>
 `
       bo.append(_f); 
    })
})