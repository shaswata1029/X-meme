console.log("Js is running");



function edit(clicked_id) {
    // getting the id of the clicked button
    console.log('clicked');
    let id = parseInt(clicked_id) + 1000 + "";
    // getting the id of the hidden content
    document.getElementById(clicked_id).hidden = true;
    document.getElementById(id).hidden = false;
    // making that id visible and the button hidden
}