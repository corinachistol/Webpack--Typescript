import  path  from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export default {
    mode: 'development',
    entry: './src/index.ts',
    module: {
        rules: [
            {
                test: /\.ts$/,
                use:'ts-loader',
                include:[path.resolve(__dirname,'src')] // take the absolute path of src folder
            }
        ]
    },
    output:{
        publicPath: 'public',
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public') // pentru a obtine absolute path to the  folder public,where will be bundled all the files together
    }
}