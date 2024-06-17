// import { BigQuery } from '@google-cloud/bigquery';
// const bigquery = new BigQuery({
//     projectId: process.env.BIGQUERY_PROJECT_ID,
//   });
//   const dataset = bigquery.dataset(process.env.BIGQUERY_DATASET);
// export default async (req, res) => {
//   const { lecturerId } = req.query;

//   const bigquery = new BigQuery();
//   const query = `SELECT * FROM dataset_new_lectureattendance.availability WHERE NIDN = ${lecturerId}`;
  
//   try {
//     const [rows] = await bigquery.query(query);
//     res.status(200).json(rows);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };
// import { BigQuery } from '@google-cloud/bigquery';

// const bigquery = new BigQuery();

// export default async function handler(req, res) {
//   const { lecturerId } = req.query;

//   const query = `SELECT * FROM vertical-tuner-423007-m8.dataset_new_lectureattendance.availability WHERE NIDN = @lecturerId`;
//   const options = {
//     query: query,
//     params: { lecturerId: lecturerId }
//   };

//   try {
//     const [rows] = await bigquery.query(options);
//     res.status(200).json(rows);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// }

// pages/api/fetchAvailability.js

import { BigQuery } from '@google-cloud/bigquery';

const bigquery = new BigQuery({
  projectId: process.env.BIGQUERY_PROJECT_ID,
  keyFilename: process.env.GOOGLE_APPLICATION_CREDENTIALS, // Ensure this is set correctly
});

const dataset = process.env.BIGQUERY_DATASET;

export default async function handler(req, res) {
  try {
    const query = `SELECT * FROM \`${dataset}.availability\``;
    const [rows] = await bigquery.query(query);
    res.status(200).json(rows);
  } catch (error) {
    console.error('Error fetching data from BigQuery:', error);
    res.status(500).json({ error: 'Failed to fetch data' });
  }
}