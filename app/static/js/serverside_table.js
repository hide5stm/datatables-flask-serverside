/*jslint browser: true*/
/*global $*/


$(document).ready(function () {
  $('#serverside_table').DataTable({
    ajaxSource: '/tables/serverside_table',
    info: true,
    processing: true,
    serverSide: true,
    bjQueryUI: true,
    paging: true,
    searching: false,
    scrollY: 400,
    deferRender: true,
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
