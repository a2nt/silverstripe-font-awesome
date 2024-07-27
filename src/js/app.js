'use strict'

import '../scss/app.scss'

import 'vanilla-icon-picker/src/scss/themes/icon-picker.bootstrap-5.scss'
import IconPicker from 'vanilla-icon-picker'

(function($) {
  $.entwine(($) => {

    /**
         * Class: .icp-auto
         *
         * Load the icon picker
         */
    $('.icp-auto').entwine({
      onmatch: function() {
        const iconPicker = new IconPicker($('.icp-auto')[0], {
          // Change icon picker's theme
          theme: 'bootstrap-5', //'default'

          // Set icon(s) library(ies)
          // iconSource: [
          //     'FontAwesome Brands 6',
          //     'FontAwesome Solid 6',
          //     'FontAwesome Regular 6',
          //     'Material Design Icons',
          //     'Iconoir',
          //     {
          //         key: 'academicons',
          //         prefix: 'ai ai-',
          //         url: 'https://git.homegu.com/raw/iconify/icon-sets/master/json/academicons.json'
          //     }
          // ]
          iconSource: [
            'FontAwesome Brands 6',
            'FontAwesome Solid 6',
            'FontAwesome Regular 6',
          ],

          // Close icon picker modal when icon is selected
          // If is `false` save button appear
          closeOnSelect: true,

          // Set a default value, preselect for example
          // icon's value and icon's name work
          defaultValue: null,

          // Translatable text
          i18n: {
            'input:placeholder': 'Search icon…',

            'text:title': 'Select icon',
            'text:empty': 'No results found…',

            'btn:save': 'Save',
          },
        });


        // prevent redirect
        //$('.iconpicker-popover .iconpicker-item').click(function(e) {
        //    e.preventDefault()
        //});
      },
    });
  });
})(jQuery);
