(function () {
    //Make an empty 2 Dimentional array
    function makeAnEmpty2DArray(img) {
        let emptyArray = [];

        for (let i = 0; i < img.height; i++) {
            emptyArray[i] = [];
            for (let j = 0; j < img.width; j++) {
                emptyArray[i][j] = 0;
            }
        }
        
        return emptyArray;
    }

    //Map the black and white image into a 2D array or 1s and 0s
    function ConvertBlackAndWhiteImageToAnArray(emptyArray, img) {
        let newArray = emptyArray;

        for (let i = 0; i < img.height; i++) {
            for (let j = 0; j < img.width; j++) {
                let pixel = img.get(j, i);
                if (pixel[0] == 255) newArray[i][j] = 1;
                if (pixel[0] == 0) newArray[i][j] = 0;
            }
        }

        return newArray;
    }

    //Convert a 2D array into a file of comma separated values (CSV)
    function convertArrayToCSV(array) {
        let csvContent = "data:text/csv;charset=utf-8,";
		let fileName = "map.csv";
		
        array.forEach(row => {
            csvContent += row.join(",") + "\n";
        });

        const encodedUri = encodeURI(csvContent);
        const link = document.createElement("a");
        link.setAttribute("href", encodedUri);
        link.setAttribute("download", fileName);
        document.body.appendChild(link);

        link.click();
    }

    window.image_processing = {
        makeAnEmpty2DArray: makeAnEmpty2DArray,
        ConvertBlackAndWhiteImageToAnArray: ConvertBlackAndWhiteImageToAnArray,
        convertArrayToCSV: convertArrayToCSV
    };
})();
