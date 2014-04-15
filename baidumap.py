# -*- coding: utf-8 -*-
from openerp.osv import fields,osv
from lxml import etree
import os
from openerp import tools
import logging

_logger = logging.getLogger(__name__)

class view(osv.osv):
    _inherit='ir.ui.view'
    
    def _type_field(self, cr, uid, ids, name, args, context=None):
        result = {}
        for record in self.browse(cr, uid, ids, context):
            # Get the type from the inherited view if any.
            if record.inherit_id:
                result[record.id] = record.inherit_id.type
            else:
                result[record.id] = etree.fromstring(record.arch.encode('utf8')).tag
        return result
    
    _columns = {
        'type': fields.function(_type_field, type='selection', selection=[
            ('tree','Tree'),
            ('form','Form'),
            ('mdx','mdx'),
            ('graph', 'Graph'),
            ('calendar', 'Calendar'),
            ('diagram','Diagram'),
            ('gantt', 'Gantt'),
            ('baidumap', 'Baidumap'),
            ('kanban', 'Kanban'),
            ('search','Search')], string='View Type', required=True, select=True, store=True),
    }

VIEW_TYPES = [
    ('tree', 'Tree'),
    ('form', 'Form'),
    ('graph', 'Graph'),
    ('calendar', 'Calendar'),
    ('gantt', 'Gantt'),
    ('baidumap', 'Baidumap'),
    ('kanban', 'Kanban')]
    
class act_window_view(osv.osv):
    
    _inherit = 'ir.actions.act_window.view'
    
    
    _columns = {
        'view_mode': fields.selection(VIEW_TYPES, string='View Type', required=True),
    }
    
    
    
    
    
