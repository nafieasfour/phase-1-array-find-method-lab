
// function superbowlWin(array){
//     array.find(didWin)
//     function didWin(array){
//         return array['year']
//         function didWin(array){
//             (array['result'] == "W")
//     }}}
function superbowlWin(array) {
    const win = array.find(obj => obj.result === "W");
    return win ? win.year : undefined;
  }
  