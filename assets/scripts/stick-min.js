var stickWidth=991,win=$(window),menu=$("#menu"),options={bottoming:!1,offset_top:0};win.width()>stickWidth?$(".stick").stick_in_parent():$(".stick").trigger("sticky_kit:detach");