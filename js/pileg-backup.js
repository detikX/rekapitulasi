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


$.ajax({
    url: 'https://sirekap-obj-data.kpu.go.id/pemilu/partai.json',
    method: 'GET',
    success: function (response) {
        // console.log('partai', typeof response);

        var array = $.map(response, function (value, index) {
            return [value];
        });
        // console.log(array);
        var c;
        for (c = 0; c < array.length; c++) {
            var nama = array[c].nama;
            // console.log(nama);
            $(".nama-nama").append(
                `
                    <div class="ceks">${nama}</div>
                `
            )
        }
    }
});



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



// https://sirekap-obj-data.kpu.go.id/pemilu/hhcd/pdpr/1101.json
$("#set").click(() => {
    // var value_ = $(".daerah").val();
    // var real = parseInt(value_)
    // var newVal = real + 1
    var url_ = 'https://sirekap-obj-data.kpu.go.id/pemilu/hhcd/pdpr/0.json'
    // var url_ = `https://sirekap-obj-data.kpu.go.id/pemilu/hhcd/pdpr/${newVal}.json`
    // alert(newVal)

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
            var x;
            // var nilai = $('.daerah').find(":selected").val();
            // console.log(nilai);
            // var daerahLength = $('.daerah > option').length;
            // for (x = 0; x < daerahLength; x++) {
            //     var titik = nilai[;
            //     console.log(titik);
            // }



            // console.log('nilai', nilai);



            var c = Object.values(response.table)[0];
            // var semua = c + [nilai];
            console.log('c', c);
            console.log(response.table);

            var d = Object.values(c)[0];

            Object.keys(c).map(function (key) {
                // return c[key];
                return (
                    $(".nama-nama .ceks").append(`
                    <div>
                        ${c[key]}
                    </div>
                `)
                )
            });
            // $(".nama-nama .ceks").append(`
            //     <div>
            //         ${c[24]}
            //     </div>
            // `)

        })
    })
})