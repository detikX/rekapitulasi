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
            // alert(this_)
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
function tableList(key) {
    // return new Promise(function (resolvetable) {
    $("#set").click(() => {
        $.ajax({
            url: url_,
            type: 'GET',
            data: '{key: "' + key + '" }',
            success: function (response) {
                console.log(response.ts);
                var semuaTable = [];
                var allKey = [];
                var allObj = [];

                $('.partai .namax').html('');
                $('.suara .suarx').html('');

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
                    // console.log('key', key);
                    var cobaNama = `${monthWording[key]}`;
                    // console.log('key_', cobaNama);
                    // semuaTable.push(table_dpr)

                    // console.log(allKey, allObj);
                    $(".nama-nama .cardx .partai .namax").append(`
                    <div>${cobaNama}</div>
                `)

                }

                var nilai = $('.daerah').find(":selected").val();
                // var tablex = values.semuaTable[0];
                // console.log('nilai', nilai);

                // resolvetable(nilai)

                var table_dpr = response.table[nilai];
                //push table dpr
                semuaTable.push(table_dpr);
                var objVal = Object.values(table_dpr)

                // console.log('table dpr', objVal);

                var t;
                for (t = 0; t < objVal.length; t++) {
                    var iterate_data = objVal[t].toLocaleString("id-ID");
                    $(".nama-nama .cardx .suara .suarx").append(`
                      
                        <div >${iterate_data}</div>
                `)
                }



            }

        }).done(function (data) {
            var kode_klik = ($('.daerah').val());
            $.ajax({
                url: 'https://sirekap-obj-data.kpu.go.id/pemilu/hhcd/pdpr/' + kode_klik + '.json',
                type: 'GET',
                success: function (response) {
                    //ini contoh pkb
                    var d = '1';
                    // console.log(response.table);
                    ///////

                    var c = Object.values(response)[3];
                    $('.all-nama-caleg').html("")
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

                        var umum = response.table[key];
                        var suara_total = response.table[key].jml_suara_total.toLocaleString('id-ID');
                        var suara_partai = response.table[key].jml_suara_partai.toLocaleString('id-ID');
                        // console.log(response.table[key]);
                        var lihatVal = Object.values(umum);
                        // console.log(lihatVal)
                        var lihatKeys = Object.keys(umum)
                        // var arr = Object.keys(umum).map(function (key) { return umum[key]; });
                        // console.log(lihatKeys)
                        // console.log(keyangka)
                        var cobaNama = `${monthWording[key]}`;
                        var newKey = [];
                        newKey.push({ lihatKeys, lihatVal })
                        // console.log(newKey);



                        // const countries = ['United States', 'Canada', 'Argentina', 'Armenia'];

                        // var h = ""; elan
                        // <ol class="list-benefit">
                        //     ${h}
                        // </ol>
                        // lihatKeys.map((a, i) => { h += `<li>${a}</li>` });
                        var d = ""
                        lihatKeys.map((c, i) => {
                            d += `<tr class="ss">
                            <td>${c}</td></tr>
                        ` });

                        // console.log('nama', d);



                        var w = ""
                        lihatVal.map((c, i) => {
                            w += `
                            <td>${c}</td>
                        ` }
                        );


                        // console.log(response.table);

                        // let tbody = $("<tbody></tbody>");

                        // Object.keys(lihatVal).forEach(key => {
                        //     // let nameId = name_id[key - 1];
                        //     tbody.append("<tr><td>" + lihatKeys[key] + "</td><td>" + lihatVal[key] + "</td></tr>");
                        // })
                        // $('#datas').append(tbody);

                        // w.insertAfter("tbody tr");
                        //console.log('suara', w);
                        // $("tbody tr").append(`${w}`)

                        // var tbody = "tbody";
                        // var tr = $('<tr/>').appendTo(tbody);
                        // var datac = tr.append(`
                        // <td>${d}</td>
                        // <td>${w}</td>
                        // `)

                        // console.log($ul);
                        $('.all-nama-caleg d-none').append(`
                            <div class="bungkus">
                                <div>Partai: <b>${cobaNama}</b></div>
                                <div>Jumlah Suara Total: <b>${suara_total}</b></div>
                               
                           
                                
                            </div>
                            
                            `)


                    }
                    // var objAngka = 
                    // var table_dpr = response.table[nilai];
                    // //push table dpr
                    // semuaTable.push(table_dpr);
                    // var objVal = Object.values(table_dpr)

                    // // console.log('table dpr', objVal);

                    // var t;
                    // for (t = 0; t < objVal.length; t++) {
                    //     var iterate_data = objVal[t].toLocaleString("id-ID");
                    //     $(".nama-nama .cardx .suara .suarx").append(`

                    //         <div >${iterate_data}</div>
                    // `)
                    // }

                    // <div>Nama: <span class="keynama" id="${keynama}" data-value="${keynama}">${keynama}</span></div>
                    // <div>Suaran: ${keyangka}</div>
                }
            })

            $.ajax({
                url: 'https://sirekap-obj-data.kpu.go.id/pemilu/caleg/partai/' + kode_klik + '.json',
                type: 'GET',
                success: function (response) {

                    // console.log(response);
                    var c = Object.values(response);
                    // console.log(c.length);
                    var t = "";

                    var dataxDiv = $(".all-nama-caleg")
                    var html = '';


                    $.each(response, function (key, value) {
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
                        // console.log(value);

                        // var key_ = response[key];
                        var cobaNama = `${monthWording[key]}`;
                        // console.log(cobaNama);


                        html += '<div class="mb-3">';
                        html += '<b>' + cobaNama + '</b>';

                        $.each(value, function (subKey, subValue) {
                            // html += '<div class="nama">' + subValue["nama"] + ' - ' + subValue["tempat_tinggal"] + '</div>';
                            html += '<div class="nama">' + subValue["nama"] + '';
                            // console.log(subValue["nama"]);
                        });

                        html += '</div>';
                    });

                    dataxDiv.html(html);

                    // console.log(c);

                    // Object.keys(c).forEach(key => {
                    //     // let nameId = name_id[key - 1];
                    //     var a
                    //     // tbody.append("<tr><td>" + name_data[key][nameId].nama + "</td><td>" + total[key - 1] + "</td></tr>");
                    //     var values = Object.values(c[key]);
                    //     var keys = Object.keys(c[key]);
                    //     a = c[key];
                    //     // var entries = Object.entries(values)
                    //     // console.log(values);
                    // })
                }
            })

        })
    })
    // })
}
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

                // console.log(response.ts);
                var tgl = response.ts;
                var shortDate = new Date(tgl)
                var sliceDate = tgl.slice(11, 19)
                // console.log(sliceDate);
                var senin = shortDate.getDay();
                var getHari = shortDate.getDate();
                var getBulan = shortDate.getMonth() + 1;
                var getTahun = shortDate.getFullYear();

                var bulWording = {
                    '1': 'Januari',
                    '2': 'Februari',
                    '3': 'Maret',
                    '4': 'April',
                    '5': 'Mei',
                    '6': 'Juni',
                    '7': 'Juli',
                    '8': 'Agustus',
                    '9': 'September',
                    '10': 'Oktober',
                    '11': 'November',
                    '12': 'Desember',
                }

                var hariWording = {
                    '1': 'Senin',
                    '2': 'Selasa',
                    '3': 'Rabu',
                    '4': 'Kamis',
                    '5': 'Jumat',
                    '6': 'Sabtu',
                    '0': 'Minggu'
                }

                $(".last").append(`
                   <div class="tanggalx"><i>Update</i> terakhir: <b>${hariWording[senin]}, ${getHari} ${bulWording[getBulan]} ${getTahun}</b></div>
                    <div class="jamx">Jam: <b>${sliceDate} WIB</b></div>
                
                `)

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
                    '#00764A',
                    '#990001',
                    '#D52027',
                    '#FFF051',
                    '#242464',
                    '#FF6800',
                    '#02CCFF',
                    '#FC5100',
                    '#FE0000',
                    '#EE9B11',
                    '#01274D',
                    '#0054A3',
                    '#00331C',
                    '#004C9A',
                    '#E62128',
                    '#243E80',
                    '#036302',

                    '#000000'
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

// https://sirekap-obj-data.kpu.go.id/pemilu/hhcd/pdpr/1101.json - suara pileg
// "table": {
//     "1": {
//     "100121": 66269,
//     "100122": 23894,
//     "100123": 2836,
//     "100124": 5784,
//     "100125": 22304,
//     "100126": 4540,
//     "100127": 11735,
//     "jml_suara_total": 131365,
//     "jml_suara_partai": 10031
//     },


// https://sirekap-obj-data.kpu.go.id/pemilu/caleg/partai/1101.json - nama caleg
// "1": {
//     "100121": {
//     "nama": "H. IRMAWAN, S.Sos., M.M.",
//     "nomor_urut": 1,
//     "jenis_kelamin": "L",
//     "tempat_tinggal": "KOTA BANDA ACEH"
//     },
// var suara_caleg = 'https://sirekap-obj-data.kpu.go.id/pemilu/hhcd/pdpr/1101.json'

tableList()

// tableList(function () {
//     console.log('nilai', nilai);
//     alert(1)
//     $(".cek-nama").html("");
//     $(".all-nama-caleg").html("");
//     // $('.nama-nama').append(`
//     //     <div class="text-center"><button class="btn btn-primary cek-nama my-3" id="${kodevalue}">Lihat Nama Caleg</button></div>
//     // `);

//     // $.ajax({
//     //     url: 'https://sirekap-obj-data.kpu.go.id/pemilu/hhcd/pdpr/' + kodevalue + '.json',
//     //     type: 'GET',
//     //     success: function (response) {

//     //         var c = Object.values(response)[3];
//     //         // console.log('c', c);
//     //         for (let key in c) {
//     //             var monthWording = {
//     //                 '1': 'PKB',
//     //                 '2': 'Gerindra',
//     //                 '3': 'PDI P',
//     //                 '4': 'Golkar',
//     //                 '5': 'Nasdem',
//     //                 '6': 'Partai Buruh',
//     //                 '7': 'Gelora',
//     //                 '8': 'PKS',
//     //                 '9': 'PKN',
//     //                 '10': 'Hanura',
//     //                 '11': 'Garuda',
//     //                 '12': 'PAN',
//     //                 '13': 'PBB',
//     //                 '14': 'Demokrat',
//     //                 '15': 'PSI',
//     //                 '16': 'Perindo',
//     //                 '17': 'PPP',
//     //                 '24': 'Partai Ummat',
//     //                 'persen': 'Persen'
//     //             }
//     //             var suara_total = response.table[key].jml_suara_total;
//     //             var suara_partai = response.table[key].jml_suara_partai;
//     //             var lihat_key = (Object.keys(response.table[key]));
//     //             console.log(response.table[key]);
//     //             // console.log(suara_total);
//     //             var cobaNama = `${monthWording[key]}`;
//     //             // console.log(cobaNama);
//     //             $('.all-nama-caleg').append(`
//     //             <div>Partai: <b>${cobaNama}</b></div>
//     //             <div>Jumlah Suara Total: <b>${suara_total}</b></div>
//     //             <div>Jumlah Suara Partai: <b>${suara_partai}</b></div>

//     //             `)
//     //         }

//     //         //suara total
//     //         var a;
//     //         // for (a=0;a<response)


//     //     }
//     // })

// }
// )





// tableList().then((namavalue) => {
//     $.ajax({
//         url: 'https://sirekap-obj-data.kpu.go.id/pemilu/caleg/partai/' + namavalue + '.json',
//         type: 'GET',
//         success: function (response) {
//             // console.log(response);
//             var c = Object.values(response);
//             $(".dataxc").html('')
//             // console.log(c);
//             for (let key in c) {
//                 var nama = response[key];
//                 // console.log(nama);
//                 // var suara_partai = response.table[key].jml_suara_partai;
//                 $('.all-nama-caleg d-none').append(`
//                     <div class="table dataxc">
//                         <table class="table-responsive">
//                             <thead>
//                                 <tr>
//                                     <th>Nama</th>
//                                     <th>Suara</th>
//                                 </tr>
//                             </thead>
//                             <tbody>
//                                 <tr>

//                                 </tr>
//                             </tbody>
//                         </table>
//                     </div>

//                 `)
//             }

//         }

//     })


// })
// $.ajax({
//     url: suara_caleg,
//     type: 'GET',
//     success: function (response) {
//         console.log(response);
//     }
// })

$(document).ready(function () {

    // cekChart()

})

