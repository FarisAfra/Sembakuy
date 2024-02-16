var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_RumahSakit_KlinikKotaBogorSheet1_1 = new ol.format.GeoJSON();
var features_RumahSakit_KlinikKotaBogorSheet1_1 = format_RumahSakit_KlinikKotaBogorSheet1_1.readFeatures(json_RumahSakit_KlinikKotaBogorSheet1_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RumahSakit_KlinikKotaBogorSheet1_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RumahSakit_KlinikKotaBogorSheet1_1.addFeatures(features_RumahSakit_KlinikKotaBogorSheet1_1);
var lyr_RumahSakit_KlinikKotaBogorSheet1_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RumahSakit_KlinikKotaBogorSheet1_1, 
                style: style_RumahSakit_KlinikKotaBogorSheet1_1,
                interactive: true,
    title: 'Rumah Sakit _ Klinik Kota Bogor - Sheet1<br />\
    <img src="styles/legend/RumahSakit_KlinikKotaBogorSheet1_1_0.png" /> Klinik<br />\
    <img src="styles/legend/RumahSakit_KlinikKotaBogorSheet1_1_1.png" /> RS<br />'
        });

lyr_OpenStreetMap_0.setVisible(true);lyr_RumahSakit_KlinikKotaBogorSheet1_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_RumahSakit_KlinikKotaBogorSheet1_1];
lyr_RumahSakit_KlinikKotaBogorSheet1_1.set('fieldAliases', {'NIM': 'NIM', 'Nama RS/Klinik': 'Nama RS/Klinik', 'Jenis (RS/Klinik)': 'Jenis (RS/Klinik)', 'Alamat': 'Alamat', 'Telepon': 'Telepon', 'Latitude (y)': 'Latitude (y)', 'Longitude(x)': 'Longitude(x)', });
lyr_RumahSakit_KlinikKotaBogorSheet1_1.set('fieldImages', {'NIM': 'ExternalResource', 'Nama RS/Klinik': 'TextEdit', 'Jenis (RS/Klinik)': 'TextEdit', 'Alamat': 'TextEdit', 'Telepon': 'TextEdit', 'Latitude (y)': 'TextEdit', 'Longitude(x)': 'TextEdit', });
lyr_RumahSakit_KlinikKotaBogorSheet1_1.set('fieldLabels', {'NIM': 'no label', 'Nama RS/Klinik': 'no label', 'Jenis (RS/Klinik)': 'no label', 'Alamat': 'no label', 'Telepon': 'no label', 'Latitude (y)': 'no label', 'Longitude(x)': 'no label', });
lyr_RumahSakit_KlinikKotaBogorSheet1_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});