// http://stackoverflow.com/questions/10333971/html5-pre-resize-images-before-uploading

// var BB = (function (name) {
//     return name;
// }(BB || {}));

// BB.aa = (function () {

    function handleFiles(maxWidth, maxHeight) {

        var filesToUpload = document.getElementById('input').files; // 7
        // console.log("number of files to upload: " + filesToUpload.length);

        var file = filesToUpload[0]; // 8
        // console.log("name of file to upload: " + document.getElementById('input').value);

        var oi = document.createElement("img"); // 9
        
        var fr = new FileReader(); // 10
        
        fr.onload = function(e) { // 11

            oi.src = e.target.result; // 12 
            // console.log("oi.src: " + oi.src);

            document.body.appendChild(oi); // 18

            var canvas = document.createElement("canvas"); // 21
            // 17

            var MAX_WIDTH = maxWidth;
            var MAX_HEIGHT = maxHeight;

            var cw = oi.width; // 19
            var ch = oi.height; // 20
            console.log('old image dimensions: width: ' + cw + ', height: ' + ch);

            if (cw > ch) {
                // console.log('cw > ch');
                if (cw > MAX_WIDTH) {
                    ch *= MAX_WIDTH / cw;
                    cw = MAX_WIDTH;
                }
            } else {
                // console.log('ch > cw');

                if (ch > MAX_HEIGHT) {
                    cw *= MAX_HEIGHT / ch;
                    ch = MAX_HEIGHT;
                    // console.log('ch: ' + ch);
                }
            }

            console.log('sizing the canvas');
            canvas.width = cw;
            canvas.height = ch;
            console.log('the new canvas dimensions: width: ' + canvas.width + ', height: ' + canvas.height);


            var ctx = canvas.getContext("2d"); // 13
            ctx.drawImage(oi, 0, 0, cw, ch); // 6

            var dataurl = canvas.toDataURL("image/png"); // 16
            //console.log('dataurl' + dataurl);
            console.log( 'dataurl is NOT null: ' + dataurl.length );
            ni = document.createElement("img");
            ni.src = dataurl;
            document.body.appendChild(ni);

            // document.getElementById('image').src = dataurl;     
        }
        // Load files into file reader
        console.log(file);
        fr.readAsDataURL(file);
    }


// Post the data
/*
var fd = new FormData();
fd.append("name", "some_filename.jpg");
fd.append("image", dataurl);
fd.append("info", "lah_de_dah");
*/
// }

// var init = function () {
//     handleFiles();
//     console.log('init running');
// };

// return {
//     init : init
// };
// })();

// window.onload = function() {
//     alert('running');
//     BB.aa.init();
// };

