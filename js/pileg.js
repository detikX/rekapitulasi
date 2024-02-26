// url: https://sirekap-obj-data.kpu.go.id/pemilu/partai.json
// "1": {
//     "ts": "2024-02-17 16:00:02",
//     "id_partai": 100001,
//     "id_pilihan": 1,
//     "is_aceh": false,
//     "nama": "Partai Kebangkitan Bangsa",
//     "nama_lengkap": "Partai Kebangkitan Bangsa",
//     "nomor_urut": 1,
//     "warna": "#00764A"
//     },


//https://sirekap-obj-data.kpu.go.id/pemilu/hhcd/pdpr/0.json - chart
// "chart": {
//     "1": 8301190,
//     "2": 9467262,
//     "3": 11837622,
//     "4": 10672121,
//     "5": 6649157,
//     "6": 440724,
//     "7": 663768,
//     "8": 5286209,
//     "9": 173079,
//     "10": 541667,
//     "11": 234102,
//     "12": 4898088,
//     "13": 260041,
//     "14": 5227144,
//     "15": 1790572,
//     "16": 911378,
//     "17": 2856200,
//     "24": 320959
//     },

// "progres": {
//     "total": 823236,
//     "progres": 511141
//     }

// https://sirekap-obj-data.kpu.go.id/wilayah/pemilu/pdpr/dapil_dpr.json
// {
//     "nama": "ACEH I",
//     "id": 5001,
//     "kode": "1101"
//     },

// https://sirekap-obj-data.kpu.go.id/pemilu/hhcd/pdpr/1101.json - pas d klik dapil

var list_dapil = 'https://sirekap-obj-data.kpu.go.id/wilayah/pemilu/pdpr/dapil_dpr.json';
$.ajax({
    url: list_dapil,
    method: 'GET',
    success: function (response) {
        // console.log(response)
        var a;
        for (a = 0; a < response.length; a++) {
            var daerah = response[a].nama;
            var kode = response[a].kode;
            // console.log(daerah);
            // <a href="pileg?kode=${kode}">${daerah}</a>
            $("#pileg tbody").append(` 
                    <tr>
                        <td>
                            <div id="${kode}" class="daerah">${daerah}</div>
                        </td>
                    </tr>

            `)
        }
        $(".daerah").css('cursor', 'pointer')
        $(".daerah").click(function () {
            var this_ = $(this).attr('id');
            alert(this_)
        })

    }
})


// $.ajax({
//     url: 'https://sirekap-obj-data.kpu.go.id/pemilu/partai.json',
//     method: 'GET',
//     success: function (response) {
//         // console.log('partai', typeof response);

//         var array = $.map(response, function (value, index) {
//             return [value];
//         });
//         // console.log(array);
//         var c;
//         for (c = 0; c < array.length; c++) {
//             var nama = array[c].nama;
//             // console.log(nama);
//             $(".nama-nama").append(
//                 `
//                     <div class="ceks">${nama}</div>
//                 `
//             )
//         }
//     }
// });



$(() => {
    $('.daerah').select2({
        "language": {
            "noResults": function () {
                return "<span style=font-family:'Poppins'>Daerah tidak ditemukan</span>";
            }
        },
        escapeMarkup: function (markup) {
            return markup;
        }
    });
})



//card
$.ajax({
    url: list_dapil,
    method: 'GET',
    success: ((response) => {
        // console.log(response.Surah);
        var a;
        for (a = 0; a < response.length; a++) {
            var daerah = response[a].nama;
            var kode = response[a].kode;
            // console.log(response.Surah[a].name);
            $('.daerah').append(`
                <option value="${kode}">${daerah}</option>
            `);
        }
    })
})





// https://www.youtube.com/watch?v=oFLnXT7D4gc
// https://sirekap-obj-data.kpu.go.id/pemilu/hhcd/pdpr/1101.json

var url_ = 'https://sirekap-obj-data.kpu.go.id/pemilu/hhcd/pdpr/0.json';

//click table
// function tableList() {
// return new Promise(function (resolvetable) {
$("#set").click(() => {
    $.ajax({
        url: url_,
        type: 'GET',
        success: function (response) {

            var semuaTable = [];
            var allKey = [];
            var allObj = [];

            $('.partai').html('');
            $('.suara').html('');
            var c = Object.values(response)[2];
            // console.log('c', c);
            for (let key in c) {
                var monthWording = {
                    '1': 'PKB',
                    '2': 'Gerindra',
                    '3': 'PDI P',
                    '4': 'Golkar',
                    '5': 'Nasdem',
                    '6': 'Partai Buruh',
                    '7': 'Gelora',
                    '8': 'PKS',
                    '9': 'PKN',
                    '10': 'Hanura',
                    '11': 'Garuda',
                    '12': 'PAN',
                    '13': 'PBB',
                    '14': 'Demokrat',
                    '15': 'PSI',
                    '16': 'Perindo',
                    '17': 'PPP',
                    '24': 'Partai Ummat',
                    'persen': 'Persen'
                }
                // var key_ = c[key];
                var cobaNama = `${monthWording[key]}`;
                console.log('key_', cobaNama);
                // semuaTable.push(table_dpr)

                // console.log(allKey, allObj);
                $(".nama-nama .cardx .partai").append(`
                    <div >${cobaNama}</div>
                `)

            }

            var nilai = $('.daerah').find(":selected").val();
            // var tablex = values.semuaTable[0];
            // console.log('nilai', nilai);

            var table_dpr = response.table[nilai];
            //push table dpr
            semuaTable.push(table_dpr);
            var objVal = Object.values(table_dpr)

            console.log('table dpr', objVal);

            var t;
            for (t = 0; t < objVal.length; t++) {
                var iterate_data = objVal[t];
                $(".nama-nama .cardx .suara").append(`
                        <div >${iterate_data}</div>
                `)
            }



        }

    })

})
// })
//}
function cekChart() {
    var semuaObj = [];
    var semuaKey = [];
    return new Promise(function (resolve) {
        $.ajax({
            url: url_,
            method: 'GET',
            // beforeSend: function() {
            //     $("#loading").show();
            //     $('.alquran').hide();
            //     $('.judul').hide()
            // },
            // complete: function() {
            //     $("#loading").hide();
            //     $('.alquran').show();
            //     $('.judul').show()
            // },
            success: ((response) => {
                var c = Object.values(response)[2];



                var x;

                for (let key in c) {
                    var monthWording = {
                        '1': 'PKB',
                        '2': 'Gerindra',
                        '3': 'PDI P',
                        '4': 'Golkar',
                        '5': 'Nasdem',
                        '6': 'Partai Buruh',
                        '7': 'Gelora',
                        '8': 'PKS',
                        '9': 'PKN',
                        '10': 'Hanura',
                        '11': 'Garuda',
                        '12': 'PAN',
                        '13': 'PBB',
                        '14': 'Demokrat',
                        '15': 'PSI',
                        '16': 'Perindo',
                        '17': 'PPP',
                        '24': 'Partai Ummat',
                    }
                    var key_ = c[key];
                    var cobaNama = `${monthWording[key]}`;

                    // semuaTable.push(table_dpr)
                    semuaKey.push(key_)
                    semuaObj.push(cobaNama)

                    // console.log(cobaNama);
                    resolve(
                        {
                            semuaKey, semuaObj
                        }
                    )
                }


            })
        })

    })
}

// chartJS()




//Promise chart
cekChart().then((values) => {
    // console.log(values);
    // console.log('values.semuaKey', values.semuaKey);
    // console.log('values.semuaKey', values.semuaObj);
    const ctx = document.getElementById('myChart');

    new Chart(ctx, {
        type: 'bar',
        data: {
            // labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
            labels: values.semuaObj,
            datasets: [{
                label: 'Suara',
                data: values.semuaKey,
                backgroundColor: [
                    'rgb(255, 99, 132)',
                    'rgb(54, 162, 235)',
                    'rgb(255, 206, 86)',
                    'rgb(75, 192, 192)',
                    'rgb(153, 102, 255)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            indexAxis: 'y',
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
});

//Promise Table
// tableList().then((tablex) => {
//     console.log(tablex)
// })

$(document).ready(function () {

    // cekChart()

})

