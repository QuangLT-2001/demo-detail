document.addEventListener("DOMContentLoaded",function(){
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

    let pathname = window.location.href;
    const productId = pathname.split('cate-id')[1];
    console.log(productId);
    for(let i = 0;i<a.length;i++) {
        if(a[i].id == productId) {
            let _f = `
        <div class="product-box">
        <a href="detail.html?cate-id=${a[i].id}">
            <div>
                <img src="${a[i].img_source}" alt="${a[i].img_alt}">
                <p>
                    ${a[i].name}
                </p>
            </div>
        </a>
     </div>
 `;   
         let ct = document.createElement('div')
         ct.innerHTML = _f;
         let bo = getELementById('pro');
         bo.appendChild(ct)
        }

    }
})