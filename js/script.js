var recorddata = [];

$('#addNewItem').on('click', function () {
    //alert('Button 1 clicked');
    $("#recordform").show();
    $('#sectionTable').hide();
    $("#sectionTable tbody tr").remove();
});

$('#submit').on('click', function () {
    $('#recordform').hide();
    var firstname = $('#fname').val();
    var age = $('#age').val();
    recorddata.push({ name: firstname, age: age });
    $.each(recorddata, function (key, value) {
    }
  );
    $('#sectionTable').show();
    showRecordTable();
});

function makeTableRow(RData) {
    var tr = $('<tr>');
    var td = $('<td>').text(RData.name);
    tr.append(td);
    td = $('<td>').text(RData.age);
    tr.append(td);
    return tr;
}

function showRecordTable() {
    var tbody = $('#tableBody');
    recorddata.forEach(function (recordd) {
        var tr = makeTableRow(recordd);
        tbody.append(tr);
    });
};

$('#cancel').on('click', function () {
    $('#recordform').hide();
    $('#sectionTable').show();
    showRecordTable();
});