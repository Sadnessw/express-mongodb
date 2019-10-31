const fs = require('fs');

const fileNames = [];

exports.getDataFile = (req, res, next) => {

    fs.readdir('./_data', (err, fileName) => {
        if (err) throw err;
        fileName.forEach(name => fileNames.push(name));

        if (!fileNames.includes(`${req.params.fileName}.json`)) {
            res.status(404).json({
                success: false,
                data: null,
                error: 'Invalid file name',
            });
            return;
        }

        const fileData = JSON.parse(
            fs.readFileSync(`./_data/${req.params.fileName}.json`)
        );

        res.status(200).json({
            success: true,
            data: fileData,
            error: null,
        });
    });
};
