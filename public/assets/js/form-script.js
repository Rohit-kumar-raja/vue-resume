/* global $, alert, console */
$(document).ready(function(){
    'use strict';
    /*
    var x = 0,
        inptSkill = $('#input-skills');
    
    inptSkill.on('keyup',function(e){
        e.stopPropagation();
        if(e.which == 13){
            e.preventDefault();
            
            var curVal = inptSkill.val().trim();
            var found = false;
            for(var i = 0; i<x; i++){
                var str = $('.tag-span').eq(i).text().trim();
                if(str == curVal){
                    found=true;
                }
            }
            if(!found && curVal.length > 1){
                $('.tags').append('<span class="tag-span"><i class="fa fa-times"></i> '+curVal + '<input hidden type="text" value="'+curVal+'" name="skills[]"></span>');
                x++;
            }

            inptSkill.val('');
            
        }
    });
    */
    $('.fa-plus-circle').click(function(){
        var curVal = inptSkill.val().trim();
        var found = false;
        for(var i = 0; i<x; i++){
            var str = $('.tag-span').eq(i).text().trim();
            if(str == curVal){
                found=true;
            }
        }
        if(!found && curVal.length > 1){
            $('.tags').append('<span class="tag-span"><i class="fa fa-times"></i> '+curVal + '<input hidden type="text" value="'+curVal+'" name="skills[]"></span>');
            x++;
        }
        
        inptSkill.val('');
    });
    
    // Remove Tag On Click
    
    $('.tags').on('click','.tag-span i',function(){
        $(this).parent('.tag-span').fadeOut(500).remove();
        x--;
        
    });
    
    // Add education block
    
    $('#add-edu').on('click',function(){
       $('.all-edus').append('<div class="add-border"><span></span><h2>New education</h2><span></span></div><div class="new-edu"><label>Field of study:</label>                  <input type="text" name="edu[]" class="form-control" placeholder="Ex: Computer Science">          <label>Degree:</label><input type="text" name="edu[]" class="form-control" placeholder="Ex: Bachelor\'s"><label>School:</label><input type="text" name="edu[]" class="form-control" placeholder="Ex: al-albayt university"><div class="form-row"><div class="col">                   <label>From year:</label><input type="month" name="edu[]" class="form-control">              </div><div class="col"><label>To year (optional=present):</label>                                 <input type="month" name="edu[]" class="form-control"></div></div></div>'); 
    });
    
    
    // Add Experience block
    
    $('#add-exp').on('click',function(){
       $('.all-exps').append('<div class="add-border"><span></span><h2>New Experience</h2><span></span></div><div class="new-exp"><label>Title:</label><input type="text" name="exp[]" class="form-control" placeholder="Ex: Web Developer"><label>Company:</label>                      <input type="text" name="exp[]" class="form-control" placeholder="Ex: ProgressSoft">             <div class="form-row"><div class="col"><label>From year:</label>                                 <input type="month" name="exp[]" class="form-control"></div><div class="col">                     <label>To year (optional=present):</label><input type="month" name="exp[]" class="form-control">  </div></div><label>Description (optional):</label><textarea name="exp[]" class="form-control"></textarea></div>');
    });
    
    // Add skills block
    
    $('.add-skills').on('click',function(){
        $('.all-skills').append('<div class="add-border"><span></span><h2>New Skill</h2><span></span></div><div class="new-skills"><label>Skill</label> <input type="text" name="skill" class="form-control">          <label>Proficiency</label><input type="text" name="skills[]" class="form-control"></div>');
        
    });

    // Add socials block
    
    $('.add-socials').on('click',function(){
        $('.all-socials').append('<div class="add-border"><span></span><h2>New social</h2><span></span></div><div class="new-socials"><label>Social Name</label> <input type="text" name="social" class="form-control">          <label>Social Link</label><input type="text" name="socials[]" class="form-control"> <label>Social icon image (16px*16px)</label><input type="file" name="socials[]" class="form-control" /></div>');
        
    });

    // Add socials block
    
    $('.add-hoppies').on('click',function(){
        $('.all-hoppies').append('<div class="add-border"><span></span><h2>New Hoppy</h2><span></span></div><div class="new-hoppies"> <label>Hoppy icon image (32px*32px)</label><input type="file" name="hoppies[]" class="form-control" /></div>');
        
    });
    
    
});

(function() {
    $(".skills-prog li")
        .find(".skills-bar")
        .each(function(i) {
            $(this)
                .find(".bar")
                .delay(i * 150)
                .animate({
                        width: $(this)
                            .parents()
                            .attr("data-percent") + "%"
                    },
                    1000,
                    "linear",
                    function() {
                        return $(this).css({
                            "transition-duration": ".5s"
                        });
                    }
                );
        });

    $(".skills-soft li")
        .find("svg")
        .each(function(i) {
            var c, cbar, circle, percent, r;
            circle = $(this).children(".cbar");
            r = circle.attr("r");
            c = Math.PI * (r * 2);
            percent = $(this)
                .parent()
                .data("percent");
            cbar = (100 - percent) / 100 * c;
            circle.css({
                "stroke-dashoffset": c,
                "stroke-dasharray": c
            });
            circle.delay(i * 150).animate({
                    strokeDashoffset: cbar
                },
                1000,
                "linear",
                function() {
                    return circle.css({
                        "transition-duration": ".3s"
                    });
                }
            );
            $(this)
                .siblings("small")
                .prop("Counter", 0)
                .delay(i * 150)
                .animate({
                    Counter: percent
                }, {
                    duration: 1000,
                    step: function(now) {
                        return $(this).text(Math.ceil(now) + "%");
                    }
                });
        });
}.call(this));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiPGFub255bW91cz4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBQSxDQUFBLENBQUUsaUJBQUYsQ0FBb0IsQ0FBQyxJQUFyQixDQUEwQixhQUExQixDQUF3QyxDQUFDLElBQXpDLENBQThDLFFBQUEsQ0FBQyxDQUFELENBQUE7SUFDNUMsQ0FBQSxDQUFFLElBQUYsQ0FBTyxDQUFDLElBQVIsQ0FBYSxNQUFiLENBQW9CLENBQUMsS0FBckIsQ0FBMkIsQ0FBQSxHQUFFLEdBQTdCLENBQWlDLENBQUMsT0FBbEMsQ0FBMEM7TUFDeEMsS0FBQSxFQUFPLENBQUEsQ0FBRSxJQUFGLENBQU8sQ0FBQyxPQUFSLENBQUEsQ0FBaUIsQ0FBQyxJQUFsQixDQUF1QixjQUF2QixDQUFBLEdBQXlDO0lBRFIsQ0FBMUMsRUFFRyxJQUZILEVBRVMsUUFGVCxFQUVtQixRQUFBLENBQUEsQ0FBQTthQUNqQixDQUFBLENBQUUsSUFBRixDQUFPLENBQUMsR0FBUixDQUFZO1FBQUEscUJBQUEsRUFBdUI7TUFBdkIsQ0FBWjtJQURpQixDQUZuQjtFQUQ0QyxDQUE5Qzs7RUFNQSxDQUFBLENBQUUsaUJBQUYsQ0FBb0IsQ0FBQyxJQUFyQixDQUEwQixLQUExQixDQUFnQyxDQUFDLElBQWpDLENBQXNDLFFBQUEsQ0FBQyxDQUFELENBQUE7QUFDcEMsUUFBQSxDQUFBLEVBQUEsSUFBQSxFQUFBLE1BQUEsRUFBQSxPQUFBLEVBQUE7SUFBQSxNQUFBLEdBQVMsQ0FBQSxDQUFFLElBQUYsQ0FBTyxDQUFDLFFBQVIsQ0FBaUIsT0FBakI7SUFDVCxDQUFBLEdBQUksTUFBTSxDQUFDLElBQVAsQ0FBWSxHQUFaO0lBQ0osQ0FBQSxHQUFJLElBQUksQ0FBQyxFQUFMLEdBQVUsQ0FBQyxDQUFBLEdBQUksQ0FBTDtJQUNkLE9BQUEsR0FBVSxDQUFBLENBQUUsSUFBRixDQUFPLENBQUMsTUFBUixDQUFBLENBQWdCLENBQUMsSUFBakIsQ0FBc0IsU0FBdEI7SUFDVixJQUFBLEdBQU8sQ0FBQyxDQUFDLEdBQUEsR0FBSSxPQUFMLENBQUEsR0FBYyxHQUFmLENBQUEsR0FBc0I7SUFDN0IsTUFBTSxDQUFDLEdBQVAsQ0FBVztNQUFBLG1CQUFBLEVBQXFCLENBQXJCO01BQXdCLGtCQUFBLEVBQW9CO0lBQTVDLENBQVg7SUFDQSxNQUFNLENBQUMsS0FBUCxDQUFhLENBQUEsR0FBRSxHQUFmLENBQW1CLENBQUMsT0FBcEIsQ0FBNEI7TUFDMUIsZ0JBQUEsRUFBa0I7SUFEUSxDQUE1QixFQUVHLElBRkgsRUFFUyxRQUZULEVBRW1CLFFBQUEsQ0FBQSxDQUFBO2FBQ2pCLE1BQU0sQ0FBQyxHQUFQLENBQVc7UUFBQSxxQkFBQSxFQUF1QjtNQUF2QixDQUFYO0lBRGlCLENBRm5CO0lBSUEsQ0FBQSxDQUFFLElBQUYsQ0FBTyxDQUFDLFFBQVIsQ0FBaUIsT0FBakIsQ0FBeUIsQ0FBQyxJQUExQixDQUErQixTQUEvQixFQUEwQyxDQUExQyxDQUE0QyxDQUFDLEtBQTdDLENBQW1ELENBQUEsR0FBRSxHQUFyRCxDQUF5RCxDQUFDLE9BQTFELENBQWtFO01BQ2hFLE9BQUEsRUFBUztJQUR1RCxDQUFsRSxFQUVHO01BQUEsUUFBQSxFQUFVLElBQVY7TUFBZ0IsSUFBQSxFQUFNLFFBQUEsQ0FBQyxHQUFELENBQUE7ZUFDdkIsQ0FBQSxDQUFFLElBQUYsQ0FBTyxDQUFDLElBQVIsQ0FBYSxJQUFJLENBQUMsSUFBTCxDQUFVLEdBQVYsQ0FBQSxHQUFpQixHQUE5QjtNQUR1QjtJQUF0QixDQUZIO0VBWG9DLENBQXRDO0FBTkEiLCJzb3VyY2VzQ29udGVudCI6WyIkKCcuc2tpbGxzLXByb2cgbGknKS5maW5kKCcuc2tpbGxzLWJhcicpLmVhY2ggKGkpIC0+XG4gICQodGhpcykuZmluZCgnLmJhcicpLmRlbGF5KGkqMTUwKS5hbmltYXRlIHtcbiAgICB3aWR0aDogJCh0aGlzKS5wYXJlbnRzKCkuYXR0cignZGF0YS1wZXJjZW50JykgKyAnJSdcbiAgfSwgMTAwMCwgJ2xpbmVhcicsIC0+XG4gICAgJCh0aGlzKS5jc3MgJ3RyYW5zaXRpb24tZHVyYXRpb24nOiAnLjVzJ1xuICByZXR1cm5cbiQoJy5za2lsbHMtc29mdCBsaScpLmZpbmQoJ3N2ZycpLmVhY2ggKGkpIC0+XG4gIGNpcmNsZSA9ICQodGhpcykuY2hpbGRyZW4oJy5jYmFyJylcbiAgciA9IGNpcmNsZS5hdHRyKCdyJylcbiAgYyA9IE1hdGguUEkgKiAociAqIDIpXG4gIHBlcmNlbnQgPSAkKHRoaXMpLnBhcmVudCgpLmRhdGEgJ3BlcmNlbnQnXG4gIGNiYXIgPSAoKDEwMC1wZXJjZW50KS8xMDApICogY1xuICBjaXJjbGUuY3NzICdzdHJva2UtZGFzaG9mZnNldCc6IGMsICdzdHJva2UtZGFzaGFycmF5JzogY1xuICBjaXJjbGUuZGVsYXkoaSoxNTApLmFuaW1hdGUge1xuICAgIHN0cm9rZURhc2hvZmZzZXQ6IGNiYXJcbiAgfSwgMTAwMCwgJ2xpbmVhcicsIC0+XG4gICAgY2lyY2xlLmNzcyAndHJhbnNpdGlvbi1kdXJhdGlvbic6ICcuM3MnXG4gICQodGhpcykuc2libGluZ3MoJ3NtYWxsJykucHJvcCgnQ291bnRlcicsIDApLmRlbGF5KGkqMTUwKS5hbmltYXRlIHtcbiAgICBDb3VudGVyOiBwZXJjZW50XG4gIH0sIGR1cmF0aW9uOiAxMDAwLCBzdGVwOiAobm93KSAtPlxuICAgICQodGhpcykudGV4dCBNYXRoLmNlaWwobm93KSArICclJ1xuICByZXR1cm4iXX0=
//# sourceURL=coffeescript


// for format experience 
$(window).load(function() {
    // Page Load Anim
    $(".contOut").animate({
            opacity: "1"
        },
        1200
    );
    // Jobs Accordion
    $(".fa-plus").closest(".job").find("p").slideUp();
    $(".openBtn").on("click", function() {
        if ($(this).hasClass("open")) {
            $(this).removeClass("open").removeClass("fa-minus").addClass("fa-plus");
            $(this)
                .closest(".job")
                .find("p")
                .animate({
                        opacity: "0"
                    },
                    200
                )
                .slideUp();
        } else {
            $(this).addClass("open").removeClass("fa-plus").addClass("fa-minus");
            $(this).closest(".job").find("p").slideDown().animate({
                    opacity: "1"
                },
                400
            );
        }
    });
});