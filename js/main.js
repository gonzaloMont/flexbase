window.onload = () => {

    datu_base = [
        {
            "isbn": "1617293563",
            "egilea": "Raoul-Gabriel Urma",
            "data": "Nov 15, 2018",
            "izenburua": "Modern Java in Action: Lambdas, streams, functional and reactive programming",
            "filename": "8508261-M.jpg"
        },

        {
            "isbn": "9781617291302",
            "egilea": "Benjamin Muschko",
            "data": "Mar 09, 2014",
            "izenburua": "Gradle in Action",
            "filename": "8514400-M.jpg"
        },

        {
            "isbn": "1883601126",
            "egilea": "Matt Welsh",
            "data": "1995",
            "izenburua": "The Linux bible",
            "filename": "6764181-M.jpg"
        },

        {
            "isbn": "9781617293290",
            "egilea": "Dmitry Jemerov",
            "data": "Feb 19, 2017",
            "izenburua": "Kotlin in Action",
            "filename": "8507716-M.jpg"
        }
    ]


    function datuak_hartu(indizea){
        izenburu.value = datu_base[indizea].izenburua
        egile.value = datu_base[indizea].egilea
        data.value = datu_base[indizea].data
        isbn.value = datu_base[indizea].isbn
        irudia.src = "https://covers.openlibrary.org/b/id/" + datu_base[indizea].filename;
    }

    

    let irudia = document.getElementById('irudia')
    let izenburu = document.getElementById('izenburu')
    let egile = document.getElementById('egile')
    let data = document.getElementById('urte')
    let isbn = document.getElementById('isbn')

    datuak_hartu(0);

    let bilatuBtn = document.getElementById('bilatu')
    let atzera = document.getElementById('atzera')
    let aurrera = document.getElementById('aurrera')

    bilatuBtn.addEventListener('click', (event) => {
        let isbn_balioa = isbn.value;
        if (isbn_balioa != '') {
            array_elementua = datu_base.filter(e => e.isbn == isbn_balioa)
            if (array_elementua.length != 0) {
                izenburu.value = array_elementua[0].izenburua
                egile.value = array_elementua[0].egilea
                data.value = array_elementua[0].data
                irudia.src = "https://covers.openlibrary.org/b/id/" + array_elementua[0].filename;
            }else{
                console.log("ISBN-a ez da baliozkoa")
            }
        } else {
            console.log('ISBN-aren balioa hutsik dago')
        }
    })

    let gezi_indize = 0;
    atzera.addEventListener('click', () => {
        if (gezi_indize != 0){
            gezi_indize -= 1;
            datuak_hartu(gezi_indize)
        }
    })

    aurrera.addEventListener('click', () => {
        if (gezi_indize != 3){
            gezi_indize += 1;
            datuak_hartu(gezi_indize)
        }
    })




}