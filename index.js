 $(document).ready(function() {
    $(function () {
            $('#menu').click(function () {
                $("nav ul").slideToggle(200);
            })
        }
    )
    $(window).resize(function() {
    if ($("nav ul").css('display')==='none')  {$("nav ul").show()}
});
}
);
