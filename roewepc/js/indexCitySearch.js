/**
 * Created by chenyy on 2017/3/22.
 */

(function(){
    $(function(){
        $(".city_search_input .search_btn").on('click',function(){
         var cityName=  $(".city_search_input input[name='cityName']").val();
            if(cityName==undefined||cityName==""){
                alert("请输入城市名称");
                return false;
            }
            $.ajax({
                type:'GET',
                url: 'http://car.qichedaquan.com/CitySearch/queryCityList',
                data:{cityName:cityName},
                dataType: 'jsonp',
                jsonp:'callback',
                timeout: 5000,
                success: function (json) {
                    if(json!="" && json!=undefined ){
                        json=eval(json);
                        var li="<li class='click_to_destiny'><span><img src=http://static.qcdqcdn.com/img/city_down_select.png alt=''></span> <span>点击直达</span> </li>";
                        $(json).each(function(index,item){
                            li=li+"<li class='city_search_result' cityid='"+item.cityId+
                                "' ><span class='city_text'>"+item.cityName+
                                "</span> <span class='city_letters'>"+item.englishName+"</span> </li></a>";
                        })
                        $("#input_city_search").html(li);
                        $('#input_letters_search').css({"display":"block"});
                    }

                }

            })

        })

        $("#input_letters_search").delegate(".city_search_result","click",function(){
            $('.header_nav_left .default_address a').text(decodeURI($(this).find(".city_text").text()));
            var value = $(this).attr("cityid")+"_"+$(this).find(".city_text").text();
            $.cookie('xyautoarea',value,{
                expires:30,//有效日期
                path:"/",//cookie的路 径
                domain:".qichedaquan.com"    //cookie的域名
            });
          $('#input_letters_search').css({"display":"none"});
            $('#city_chose').hide();
          //window.location.href="http://"+$(this).find(".city_letters").text()+".qichedaquan.com/";

        })
    })

})();
/** 城市搜索框值改变事件*/
var indexCitySearchInputChange=(function(){
    return  function(obj){
        var $this=$(obj);
        var cityName= $this.val();
        $.ajax({
            type:'GET',
            url: 'http://car.qichedaquan.com/CitySearch/queryCityList',
            data:{cityName:cityName},
            dataType: 'jsonp',
            jsonp:'callback',
            timeout: 5000,
            success: function (json) {
                var li="<li class='click_to_destiny'><span><img src=http://static.qcdqcdn.com/img/city_down_select.png alt=''></span> <span>点击直达</span> </li>";
                if(json!="" && json!=undefined ){
                    json=eval(json);
                    $(json).each(function(index,item){
                        li=li+"<li class='city_search_result' cityid='"+item.cityId+
                            "' ><span class='city_text'>"+item.cityName+
                            "</span> <span class='city_letters'>"+item.englishName+"</span> </li></a>";
                    })

                }
                $("#input_city_search").html(li);
                $('#input_letters_search').css({"display":"block"});
            }

        })

    }
})();