import  path  from 'node:path';

export default {
    entry: './src/index.ts',
    module: {
        rules: [
            {
                test: /\.ts$/,
                use:'ts-loader',
                inlcude:[path.resolve(__dirname,'src')] // take the absolute path of src folder
            }
        ]
    },
    output:{
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public') // pentru a obtine absolute path to the  folder public,where will be bundled all the files together
    }
}