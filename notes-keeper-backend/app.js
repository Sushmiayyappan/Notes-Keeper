const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const bodyParser = require('body-parser');

dotenv.config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

const notesRoutes = require('./routes/notes');
app.use('/notes', notesRoutes);

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => console.log('MongoDB Connected'))
.catch(err => console.error(err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
