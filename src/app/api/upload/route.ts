import { NextApiRequest, NextApiResponse } from 'next';
import formidable from 'formidable';
import { uploadFileToStorage } from '../../lib/firebaseUtils'; // Assuming you have a utility function to handle file uploads to Firebase

export const config = {
    api: {
        bodyParser: false,
    },
};

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    const form = new formidable.IncomingForm();

    form.parse(req, async (err, fields, files) => {
        if (err) {
            return res.status(500).json({ error: 'Error parsing the files' });
        }

        const file = files.file as formidable.File;
        const url = await uploadFileToStorage(file); // Upload file to Firebase and get the URL

        res.status(200).json({ url });
    });
};

export default handler;