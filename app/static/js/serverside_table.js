/*jslint browser: true*/
/*global $*/


$(document).ready(function () {
  $('#serverside_table').DataTable({
    ajaxSource: '/tables/serverside_table',
    processing: true,
    serverSide: true,
    bjQueryUI: true,
    paging: false,
    searching:false,
    scrollY: 400,
    scrollInfinite: true,
    scrollCollapse: true,
    columns: [
      {"data": "Column A"},
      {"data": "Column B"},
      {"data": "Column C"},
      {"data": "Column D"}
    ]
  });
});
