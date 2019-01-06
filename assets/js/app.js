(function () {
    $('input').on('keyup', function () {
        if (this.value.length == this.maxLength) {
            $(this).nextAll('input').first().focus();
        }
    });

    $('button.submit').on('click', function (e) {
        // show the loading
        document.getElementById('loading').style.display = 'block';

        setTimeout(calculation, 1000);
        e.preventDefault();
    });



    function calculation() {
        var inputs = $('form input').map(function (idx, elem) {
            return $(elem).val();
        }).get().join('');

        var len = inputs.length;
        var memberId = '00' + $('#memberId').val() + '   ';
        var examId = $('#examId').val() + '  1' + "\n";
        var diff = 300 - len;

        function repeatStringNumTimes(string, times) {
            var repeatedString = "";
            while (times > 0) {
                repeatedString += string;
                times--;
            }
            return repeatedString;
        }
        var rpt = repeatStringNumTimes('0', diff);

        var memberAnswerSheet = inputs;
        var mapObj = {
            1: 8,
            2: 4,
            3: 2,
            4: 1
        };

        // hide the loading
        document.getElementById('loading').style.display = 'none';

        var memberAnswerSheet = memberAnswerSheet.replace(/1|2|3|4/gi, function (match) {
            return mapObj[match]
        })
        var result = memberId + memberAnswerSheet + rpt + examId;
        $('textarea').text(result);
        //$("form").trigger("reset");
    }

})();
// copye text
// let btnCopy = document.getElementById('copy');
// btnCopy.addEventListener('click', copyText);

// function copyText(e) {
//     let myText = document.querySelector('textarea');

//     myText.select()
//     document.execCommand('copy');
//     btnCopy.innerHTML = 'کپی شد';

//     setTimeout(copied, 3000);

//     function copied() {
//         btnCopy.innerHTML = 'کپی';
//     }

//     e.preventDefault();
// }

// save to a text file
$("#save").click(function () {
    var text = $("#textArea").val();
    var filename = $("#inputFileNameToSaveAs").val();
    if (filename === "") {
        $('#exampleModal').modal('show');
    } else {
        var blob = new Blob([text], {
            type: "text/plain;charset=utf-8"
        });
        saveAs(blob, filename + ".txt");
        $('#inputFileNameToSaveAs').val('');
    }
});
