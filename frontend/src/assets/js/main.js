import * as $ from 'jquery';
import 'jquery-ui/ui/widgets/selectable.js';

$( function() {
    $( "#datepicker" ).datepicker({
      showOtherMonths: true,
      selectOtherMonths: true
    });
  } );