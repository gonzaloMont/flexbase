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

    let irudia = document.getElementById('irudia')
    let izenburu = document.getElementById('izenburu')
    let egile = document.getElementById('egile')
    let data = document.getElementById('urte')
    let isbn = document.getElementById('isbn')

    izenburu.value = datu_base[0].izenburua
    egile.value = datu_base[0].egilea
    data.value = datu_base[0].data
    isbn.value = datu_base[0].isbn

    let BilatuBtn = document.getElementById('bilatu')

    document.addEventListener()



}