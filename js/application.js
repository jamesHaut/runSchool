(function ($) {
    var Application = function () {

    };
    window.mainUrl = "http://192.168.8.246:8080/wenet";
//    window.mainUrl = "http://192.168.30.26:8080";


    $(function () {
        $("#install_school").append("  <option disabled selected value=\"-1\">请选择</option>\n" +

            "                                    <option value=\"代画平面图\">代画平面图</option>\n" +
            "                                    <option value=\"代画施工图\">代画施工图</option>\n" +
            "                                    <option value=\"代画效果图\">代画效果图</option>\n" +
            "                                    <option value=\"代画其他CAD图\">代画其他CAD图</option>\n");

        $("#tab").append(" <ul class=\"am-navbar-nav am-cf am-avg-sm-4\">\n" +
            "\t\t          <li >\n" +
            "\t\t            <a href=\"index.html\" class=\"\">\n" +
            "\t\t                <span class=\"\"><img src=\"images/navs.png\"/></span>\n" +
            "\t\t                <span class=\"am-navbar-label\" >首页</span>\n" +
            "\t\t            </a>\n" +
            "\t\t          </li>\n" +
            "\t\t          <li >\n" +
            "\t\t            <a href=\"member.html\" class=\"\">\n" +
            "\t\t                <span class=\"\"><img src=\"images/nav3.png\"/></span>\n" +
            "\t\t                <span class=\"am-navbar-label\">我的</span>\n" +
            "\t\t            </a>\n" +
            "\t\t          </li>\n" +
            "\t\t   \n" +
            "\t\t      </ul>");
        $("#tab1").append(" <ul class=\"am-navbar-nav am-cf am-avg-sm-4\">\n" +
            "\t\t          <li >\n" +
            "\t\t            <a href=\"index.html\" class=\"\">\n" +
            "\t\t                <span class=\"\"><img src=\"images/nav.png\"/></span>\n" +
            "\t\t                <span class=\"am-navbar-label\">首页</span>\n" +
            "\t\t            </a>\n" +
            "\t\t          </li>\n" +
            "\t\t          <li >\n" +
            "\t\t            <a href=\"member.html\" class=\"\">\n" +
            "\t\t                <span class=\"\"><img src=\"images/nav3.png\"/></span>\n" +
            "\t\t                <span class=\"am-navbar-label\">我的</span>\n" +
            "\t\t            </a>\n" +
            "\t\t          </li>\n" +
            "\t\t   \n" +
            "\t\t      </ul>");
        $("#tab2").append(" <ul class=\"am-navbar-nav am-cf am-avg-sm-4\">\n" +
            "\t\t          <li >\n" +
            "\t\t            <a href=\"index.html\" class=\"\">\n" +
            "\t\t                <span class=\"\"><img src=\"images/nav.png\"/></span>\n" +
            "\t\t                <span class=\"am-navbar-label\">首页</span>\n" +
            "\t\t            </a>\n" +
            "\t\t          </li>\n" +
            "\t\t          <li >\n" +
            "\t\t            <a href=\"member.html\" class=\"\">\n" +
            "\t\t                <span class=\"\"><img src=\"images/nav3.png\"/></span>\n" +
            "\t\t                <span class=\"am-navbar-label\">我的</span>\n" +
            "\t\t            </a>\n" +
            "\t\t          </li>\n" +
            "\t\t   \n" +
            "\t\t      </ul>");
        $("#tab3").append(" <ul class=\"am-navbar-nav am-cf am-avg-sm-4\">\n" +
            "\t\t          <li >\n" +
            "\t\t            <a href=\"index.html\" class=\"\">\n" +
            "\t\t                <span class=\"\"><img src=\"images/nav.png\"/></span>\n" +
            "\t\t                <span class=\"am-navbar-label\">首页</span>\n" +
            "\t\t            </a>\n" +
            "\t\t          </li>\n" +
            "\t\t          <li >\n" +
            "\t\t            <a href=\"member.html\" class=\"\">\n" +
            "\t\t                <span class=\"\"><img src=\"images/nav3s.png\"/></span>\n" +
            "\t\t                <span class=\"am-navbar-label\">我的</span>\n" +
            "\t\t            </a>\n" +
            "\t\t          </li>\n" +
            "\t\t   \n" +
            "\t\t      </ul>");

    });


    $.application = $.application || new Application();


})(jQuery);
