ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:32647").setExtent([579553.151008, 1371176.472556, 611128.314337, 1384765.783356]);
var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_GPS2_1 = new ol.format.GeoJSON();
var features_GPS2_1 = format_GPS2_1.readFeatures(json_GPS2_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32647'});
var jsonSource_GPS2_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GPS2_1.addFeatures(features_GPS2_1);
var lyr_GPS2_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GPS2_1, 
                style: style_GPS2_1,
                popuplayertitle: "GPS2",
                interactive: true,
                title: '<img src="styles/legend/GPS2_1.png" /> GPS2'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_GPS2_1.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_GPS2_1];
lyr_GPS2_1.set('fieldAliases', {'ชื่อสถานที่': 'ชื่อสถานที่', 'X (longitude)': 'X (longitude)', 'y': 'y', 'picture': 'picture', });
lyr_GPS2_1.set('fieldImages', {'ชื่อสถานที่': 'TextEdit', 'X (longitude)': 'TextEdit', 'y': 'TextEdit', 'picture': 'TextEdit', });
lyr_GPS2_1.set('fieldLabels', {'ชื่อสถานที่': 'header label - always visible', 'X (longitude)': 'no label', 'y': 'no label', 'picture': 'header label - always visible', });
lyr_GPS2_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});