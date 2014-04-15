
openerp.web_baidumap = function(instance) {
    
    var _t = instance.web._t, 
        _lt = instance.web._lt;
    
    var QWeb = instance.web.qweb;
    
    instance.web.views.add('baidumap', 'instance.web_baidumap.BaiduMapView');

    instance.web_baidumap.BaiduMapView = instance.web.View.extend({
        display_name : _lt('Baidumap'),
        template : "BaiduMapView",
        view_type : "baidumap",
        init : function() {
            var self = this;
            this._super.apply(this, arguments);
            this.has_been_loaded = $.Deferred();
            this.map_id = _.uniqueId();
            document.write('<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />');
            document.write('<style type="text/css">body, html, #locationmap {width: 100%;height: 100%;overflow: hidden;margin:0;}</style>');
            document.write('<script type="text/javascript" src="http://api.map.baidu.com/api?v=1.4&ak=FAdf6decc1e4e7690caf8f7e1f4c5312"></script>');
        },
        view_loading : function(r) {
            return this.load_baidumap(r);
        },
        load_baidumap: function(fields_view_get, fields_get) {
            var self = this;
            this.fields_view = fields_view_get;
            this.$el.addClass(this.fields_view.arch.attrs['class']);
            document.write('<div width="50%" height="50%" overflow="hidden" margin="0" id="locationmap"></div>');
            return self.alive(new instance.web.Model(this.dataset.model)
                .call('fields_get')).then(function (fields) {
                    self.fields = fields;
                    self.has_been_loaded.resolve();
            });
        },
        do_search: function (domains, contexts, group_bys) {
            var self = this;
            self.last_domains = domains;
            self.last_contexts = contexts;
            self.last_group_bys = group_bys;
            // select the group by
            var n_group_bys = [];
            if (this.fields_view.arch.attrs.default_group_by) {
                n_group_bys = this.fields_view.arch.attrs.default_group_by.split(',');
            }
            if (group_bys.length) {
                n_group_bys = group_bys;
            }
            // gather the fields to get
            var fields = _.compact(_.map(["address", "area"], function(key) {
                return self.fields_view.arch.attrs[key] || '';
            }));
            fields = _.uniq(fields.concat(n_group_bys));
            
            return $.when(this.has_been_loaded).then(function() {
                return self.dataset.read_slice(fields, {
                    domain: domains,
                    context: contexts
                }).then(function(data) {
                    return self.on_data_loaded(data, n_group_bys);
                });
            });
        },
         on_data_loaded: function(tasks, group_bys) {
            var map = new BMap.Map("locationmap");          // 百度地图API功能
            map.centerAndZoom("上海", 14);                    // 设置地图显示的城市和地图级别
            map.enableScrollWheelZoom();                    // 启用滚轮放大缩小，默认禁用
            map.enableContinuousZoom();                     // 启用地图惯性拖拽，默认禁用
            map.addControl(new BMap.NavigationControl());   // 添加默认缩放平移控件
            map.addControl(new BMap.ScaleControl());        // 添加比例尺控件
            map.addControl(new BMap.MapTypeControl());      // 添加地图类型控件
            map.addControl(new BMap.OverviewMapControl());  // 添加缩略地图控件             
            var mygeo = new BMap.Geocoder();
            
            for (var i=0; i < tasks.length; i++) {
              var addres = tasks[i].res_area_id +tasks[i].street  ;
              mygeo.getPoint(addres,function (point){
                    if (point){
                        self.addMarker(point, map);
                    }
                });
            };
            var self = this;
        },
        addMarker :function(point,map){
            var marker = new BMap.Marker(point);
            map.addOverlay(marker);
            //为标注添加文字信息
            // var label = new BMap.Label(tips,{offset:new BMap.Size(20,-10)});
            // marker.setLabel(label);
        },
    
    });

}; 


