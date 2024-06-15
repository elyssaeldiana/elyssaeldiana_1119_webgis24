var wms_layers = [];


        var lyr_GoogleHybrid_0 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_univ_surabaya_1 = new ol.format.GeoJSON();
var features_univ_surabaya_1 = format_univ_surabaya_1.readFeatures(json_univ_surabaya_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_univ_surabaya_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_univ_surabaya_1.addFeatures(features_univ_surabaya_1);
var lyr_univ_surabaya_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_univ_surabaya_1, 
                style: style_univ_surabaya_1,
                popuplayertitle: "univ_surabaya",
                interactive: true,
    title: 'univ_surabaya<br />\
    <img src="styles/legend/univ_surabaya_1_0.png" /> ITS<br />\
    <img src="styles/legend/univ_surabaya_1_1.png" /> UIN Sunan Ampel<br />\
    <img src="styles/legend/univ_surabaya_1_2.png" /> UNAIR<br />\
    <img src="styles/legend/univ_surabaya_1_3.png" /> UNESA<br />\
    <img src="styles/legend/univ_surabaya_1_4.png" /> UPNV Jatim<br />\
    <img src="styles/legend/univ_surabaya_1_5.png" /> <br />'
        });
var format_PTNdiSurabaya_2 = new ol.format.GeoJSON();
var features_PTNdiSurabaya_2 = format_PTNdiSurabaya_2.readFeatures(json_PTNdiSurabaya_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PTNdiSurabaya_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PTNdiSurabaya_2.addFeatures(features_PTNdiSurabaya_2);
var lyr_PTNdiSurabaya_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PTNdiSurabaya_2, 
                style: style_PTNdiSurabaya_2,
                popuplayertitle: "PTN di Surabaya",
                interactive: true,
    title: 'PTN di Surabaya<br />\
    <img src="styles/legend/PTNdiSurabaya_2_0.png" /> ITS<br />\
    <img src="styles/legend/PTNdiSurabaya_2_1.png" /> UIN Sunan Ampel<br />\
    <img src="styles/legend/PTNdiSurabaya_2_2.png" /> UNAIR<br />\
    <img src="styles/legend/PTNdiSurabaya_2_3.png" /> UNESA<br />\
    <img src="styles/legend/PTNdiSurabaya_2_4.png" /> UPNV Jatim<br />\
    <img src="styles/legend/PTNdiSurabaya_2_5.png" /> <br />'
        });
var format_aksesibilitas_univunion_3 = new ol.format.GeoJSON();
var features_aksesibilitas_univunion_3 = format_aksesibilitas_univunion_3.readFeatures(json_aksesibilitas_univunion_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_aksesibilitas_univunion_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_aksesibilitas_univunion_3.addFeatures(features_aksesibilitas_univunion_3);
var lyr_aksesibilitas_univunion_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_aksesibilitas_univunion_3, 
                style: style_aksesibilitas_univunion_3,
                popuplayertitle: "aksesibilitas_univ — union",
                interactive: true,
    title: 'aksesibilitas_univ — union<br />\
    <img src="styles/legend/aksesibilitas_univunion_3_0.png" /> 1,2km (15 menit)<br />\
    <img src="styles/legend/aksesibilitas_univunion_3_1.png" /> 2,4km (30 menit)<br />\
    <img src="styles/legend/aksesibilitas_univunion_3_2.png" /> <br />'
        });

lyr_GoogleHybrid_0.setVisible(true);lyr_univ_surabaya_1.setVisible(true);lyr_PTNdiSurabaya_2.setVisible(true);lyr_aksesibilitas_univunion_3.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,lyr_univ_surabaya_1,lyr_PTNdiSurabaya_2,lyr_aksesibilitas_univunion_3];
lyr_univ_surabaya_1.set('fieldAliases', {'fid': 'fid', 'Nama': 'Nama', 'Kampus': 'Kampus', 'Deskripsi Univ_QS WUR': 'Deskripsi Univ_QS WUR', 'Deskripsi Univ_Didirikan': 'Deskripsi Univ_Didirikan', 'Deskripsi Univ_Fakultas': 'Deskripsi Univ_Fakultas', });
lyr_PTNdiSurabaya_2.set('fieldAliases', {'fid': 'fid', 'Nama': 'Nama', 'Kampus': 'Kampus', 'Ranking QS': 'Ranking QS', 'Tahun Berdiri': 'Tahun Berdiri', 'Fakultas': 'Fakultas', 'Foto': 'Foto', });
lyr_aksesibilitas_univunion_3.set('fieldAliases', {'fid': 'fid', 'Access': 'Access', });
lyr_univ_surabaya_1.set('fieldImages', {'fid': 'TextEdit', 'Nama': 'TextEdit', 'Kampus': 'TextEdit', 'Deskripsi Univ_QS WUR': 'TextEdit', 'Deskripsi Univ_Didirikan': 'TextEdit', 'Deskripsi Univ_Fakultas': 'TextEdit', });
lyr_PTNdiSurabaya_2.set('fieldImages', {'fid': 'TextEdit', 'Nama': 'TextEdit', 'Kampus': 'TextEdit', 'Ranking QS': 'TextEdit', 'Tahun Berdiri': 'TextEdit', 'Fakultas': 'TextEdit', 'Foto': 'ExternalResource', });
lyr_aksesibilitas_univunion_3.set('fieldImages', {'fid': 'TextEdit', 'Access': 'TextEdit', });
lyr_univ_surabaya_1.set('fieldLabels', {'fid': 'header label - visible with data', 'Nama': 'header label - visible with data', 'Kampus': 'inline label - always visible', 'Deskripsi Univ_QS WUR': 'no label', 'Deskripsi Univ_Didirikan': 'no label', 'Deskripsi Univ_Fakultas': 'no label', });
lyr_PTNdiSurabaya_2.set('fieldLabels', {'fid': 'hidden field', 'Nama': 'hidden field', 'Kampus': 'inline label - always visible', 'Ranking QS': 'inline label - always visible', 'Tahun Berdiri': 'inline label - always visible', 'Fakultas': 'inline label - always visible', 'Foto': 'no label', });
lyr_aksesibilitas_univunion_3.set('fieldLabels', {'fid': 'header label - visible with data', 'Access': 'inline label - always visible', });
lyr_aksesibilitas_univunion_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});