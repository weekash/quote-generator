
import { getQuoteTemplate } from '../quoteTemplate/quoteTemplate.js';
import { htmlToImage } from '../utils/htmlToImage.js';

const cwd = process.cwd();
class QuoteController {
    //this will generate an image
    generateImage = async(req, res) => {
        const { quote, color } = req.body;
        if(!quote || !color){
            return res.status(400).json({error:'Either Color or Quote is missing. Please try again.'});
        }
        const file = getQuoteTemplate(color, quote);
        await htmlToImage(file)
        res.download(`${cwd}/quote.png`, 'quote.png')
    }

}

export default new QuoteController();