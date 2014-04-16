# -*- coding: utf-8 -*-
{
    'name': 'Web BaiDu Map',
    'category': 'FreshFresh',
    'description':"""
                    制作的百度地图看板        
    """,
    'author': 'gavin',
    'website': 'http://www.freshfresh.com/',
    'version': '2.0',
    'depends': ['web'],
    'js': [
           'static/lib/baiduApi.js',
           'static/src/js/baidumap.js'
           ],
    'qweb': [
             'static/src/xml/baidumap.xml',
             ],
    'css': ['static/src/css/baidumap.css'],
    'auto_install': True,
    'auto_install': False,
}