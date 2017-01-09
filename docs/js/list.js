(function () {
    "use strict";

    $(document).ready(function () {
        var all_stuff = [
            { category: 'Glassware',
               things: [
                { name: '8 Glass Tumblers, ribbed', },
                { name: 'Set of 6 pairs of colored plastic cups', },
                { name: 'Glass pitcher', },
                { name: '8 Blue Mugs (still in box!)', },
                { name: 'Mason jar', },
                { name: 'Short, wide vase', },
                { name: 'Microsoft water bottle', },
                { name: 'Assorted glassware', },
               ], },
            { category: 'Utensils',
               things: [
                { name: '2 sets of dinnerware + dinnerware container', },
                { name: 'Can opener', },
                { name: 'Pastry brush', },
                { name: 'Apple corer', },
                { name: 'Melon baller', },
                { name: 'Cake frosting tool'},
                { name: 'Henckels bread knife'},
                { name: 'More forks, knifes, and spoons', },
                { name: 'Spatulas', },
                { name: 'Pasta spoon', },
                { name: 'Wooden spoons', },
               ], },
            { category: 'Grilling',
               things: [
                { name: 'Chefmaster™ Smokeless Indoor Stovetop Barbeque Grill',
                  uri: 'http://www.sears.com/chefmaster-trade-smokeless-indoor-stovetop-barbeque-grill/p-SPM10978144115?sid=IDx20110310x00001i'
                },
                { name: 'Darth Vader Apron', },
                { name: 'Magnet fridge bottle opener', },
               ], },
            { category: 'Camping',
               things: [
                { name: '15 Watt, 12 Volt Solar panel', },
                { name: 'Coleman Rugged Family-Size Lantern', },
               ], },
            { category: 'Other',
               things: [
                { name: 'Hand Mixer', },
                { name: 'Vegetable Steamer', }
               ], },
        ];

        var list_html = $('#stuff_list');
        var category_length = all_stuff.length;

        for (var i = 0; i < category_length; i++) {
            var category = all_stuff[i];
            list_html.append(
                '<div class="row">' +
                    '<div class="col-md-6 col-md-offset-1">' +
                        '<h2 class="text-center">' + category.category + '</h2>' +
                    '</div>' +
                '</div>');

            var thing_list = category.things;
            var thing_length = thing_list.length;
            for (var j = 0; j < thing_length; j++) {
                var thing = thing_list[j];
                var thing_html = 
                    '<div class="row">' +
                        '<div class="col-md-8 col-md-push-4">' +
                            '<h4>';

                if (thing.uri) {
                    thing_html +=
                                    '<a href="' + thing.uri + '">' +
                                        thing.name +
                                    '</a>';
                }
                else {
                    thing_html +=
                                    thing.name;
                }

                thing_html +=
                            '</h4>' +
                        '</div>';

                if (thing.photo) {
                    thing_html += 
                            '<div class="col-md-4 col-md-pull-8">' +
                                '<a href="photos/' + thing.photo + '" data-toggle="lightbox"' +
                                    'data-title="' + thing.name + '">' +
                                    '<img src="photos/' + thing.photo + '" class="img-rounded img-responsive">' +
                                '</a>' +
                            '</div>';
                }

                thing_html +=
                    '</div>';

                list_html.append(thing_html);
            }
        }

        $(document).on('click', '[data-toggle="lightbox"]', function(event) {
            event.preventDefault();
            $(this).ekkoLightbox();
        });
    });
})();

