

let row = 0;
let gInfo;
function begin() {
    getDataGame
    $("#pName1").text(`{{gameInfo.Player1.score[0]}}`);
    $("#pName2").text(`{{gameInfo.Player2.name}}`);
    $("#pName3").text(`{{gameInfo.Player3.name}}`);
    $("#pName4").text(`{{gameInfo.Player4.name}}`);
    for (let i = 0; i < '{{leng}}'; i++) {
        addTable();
    }
}
begin();



function addTable() {
    $("table").append(`
            <tr>
                <td>Round ${row + 1}
                <td><input type="number" id="ps${row + 1}1" name="ps${row + 1}1" value="0"></td>
                <td><input type="number" id="ps${row + 1}2" name="ps${row + 1}2" value="0"></td>
                <td><input type="number" id="ps${row + 1}3" name="ps${row + 1}3" value="0"></td>
                <td><input type="number" id="ps${row + 1}4" name="ps${row + 1}4" value="0"></td>
            </tr>
        `);
    $("#ps12").val(`gameInfo.Player1.score[0]`);
    row++;


}